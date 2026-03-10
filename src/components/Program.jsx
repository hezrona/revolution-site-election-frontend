export default function Program({ content }) {
  const title = content?.title || "Discover my program";
  const description =
    content?.description ||
    "A city that feels safe, clean, and free. A plan designed for action, not speeches.";
  const buttonLabel = content?.buttonLabel || "See the program";

  return (
    <section className="program" id="program">
      <div className="container program-inner" />
    </section>
  );
}