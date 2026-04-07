import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const routes = [
  "/", "/program", "/team", "/milite", "/donate",
  "/take-action", "/health", "/sign-petition", "/entrepreneur",
  "/daily-life", "/physical-security", "/heritage-security",
  "/family-education", "/consular-procedures", "/our-value",
  "/forum", "/about-article", "/partner-article", "/terms"
];

const BASE_URL = "http://localhost:4173";
const DIST = "./dist";

const browser = await puppeteer.launch({ 
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

for (const route of routes) {
  try {
    const page = await browser.newPage();
    
    // Bloquer les vidéos et images pour accélérer
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const type = req.resourceType();
      if (["media", "font"].includes(type)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`${BASE_URL}${route}`, { 
      waitUntil: "domcontentloaded",
      timeout: 60000
    });

    // Attendre que React ait rendu le contenu
    await new Promise(r => setTimeout(r, 2000));

    const html = await page.content();
    const dir = path.join(DIST, route === "/" ? "" : route);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
    console.log(`✓ prerendered ${route}`);
    await page.close();
  } catch (err) {
    console.error(`✗ erreur sur ${route}:`, err.message);
  }
}

await browser.close();
console.log("✅ Prerender terminé !");