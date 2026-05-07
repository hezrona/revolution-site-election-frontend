import { useState, useMemo } from "react";
import "./SimulateurBourses.css";

/* =========================================================================
   SIMULATEUR D'ÉLIGIBILITÉ AUX BOURSES SCOLAIRES AEFE
   Pour les Français de Madagascar — Composant React intégrable UFM/UFDM
   Converti depuis la maquette HTML standalone
   ========================================================================= */

const CONFIG_DEFAUT = {
  Q_MIN_100: 3000,
  Q_MAX: 23000,
  CPS_POINTS: 9,
  IPPA: 75,
  SEUIL_PATRIMOINE_IMMO: 200000,
  SEUIL_PATRIMOINE_MOBILIER: 50000,
  ABATTEMENT_RP: 0.20,
  ABATTEMENT_MOB_ILLIQUIDE: 0.10,
  TAUX_EUR_MGA: 4900,
  ETABLISSEMENTS: [
    { id: "lft_tana_mat",  nom: "Lycée Français de Tananarive — Maternelle",   frais_annuels: 1850, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "lft_tana_elem", nom: "Lycée Français de Tananarive — Élémentaire",  frais_annuels: 2100, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "lft_tana_col",  nom: "Lycée Français de Tananarive — Collège",      frais_annuels: 2400, frais_inscription: 250, frais_premiere_inscription: 400 },
    { id: "lft_tana_lyc",  nom: "Lycée Français de Tananarive — Lycée",        frais_annuels: 2800, frais_inscription: 250, frais_premiere_inscription: 400 },
    { id: "efa",           nom: "École Française A — Antananarivo",             frais_annuels: 2000, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "efb",           nom: "École Française B — Antananarivo",             frais_annuels: 2000, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "peterpan",      nom: "École Peter Pan — Antananarivo",               frais_annuels: 2000, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "cdfm",          nom: "Collège de France et du Monde — Antananarivo", frais_annuels: 2200, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "lf_tamatave",   nom: "Lycée Français de Tamatave (Toamasina)",       frais_annuels: 2000, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "ef_antsirabe",  nom: "École Française d'Antsirabe",                  frais_annuels: 1900, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "lf_diego",      nom: "Lycée Français Sadi Carnot — Diego-Suarez",    frais_annuels: 2000, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "ef_tulear",     nom: "École Française de Tuléar",                    frais_annuels: 1800, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "ef_majunga",    nom: "École Française de Majunga",                   frais_annuels: 1900, frais_inscription: 200, frais_premiere_inscription: 350 },
    { id: "ef_fianar",     nom: "École Française de Fianarantsoa",              frais_annuels: 1800, frais_inscription: 200, frais_premiere_inscription: 350 },
  ],
  CAMPAGNE_LIBELLE:  "Campagne 2026-2027 — 1ʳᵉ session (CCB1)",
  CAMPAGNE_OUVERTURE: "8 décembre 2025",
  CAMPAGNE_CLOTURE:  "16 février 2026",
  CCB_DATE: "Avril-Mai 2026",
  CNB_DATE: "Juin 2026",
};

const DATA_INITIALE = {
  enfantFrancais: null, residenceMada: null, inscritNumic: null,
  etablissement: "", cafFrance: null, ageEnfant: "",
  situation: "", nbEnfantsCharge: 1, nbEnfantsHandicap: 0,
  deviseEntree: "EUR",
  salaireParent1: 0, salaireParent2: 0, pensions: 0,
  revenusLocatifs: 0, revenusMobiliers: 0, aideFamiliale: 0,
  avantagesNature: 0, autresRevenus: 0,
  cotisationsSociales: 0, impotRevenu: 0, pensionsAlimentairesVersees: 0,
  valeurResidencePrincipale: 0, capitalRestantDuRP: 0,
  valeurAutresImmobiliers: 0, capitalRestantDuAutres: 0,
  mobilierLiquide: 0, mobilierNonLiquide: 0,
  fraisAnnuels: 0, fraisInscription: 0, fraisPremiereInscription: 0,
  estPremiereInscription: false,
};

/* ─── Helpers UI ─────────────────────────────────────────────── */

function Bouton({ actif, onClick, children, fullWidth }) {
  return (
    <button
      onClick={onClick}
      className={`sim-btn ${actif ? "sim-btn--actif" : ""} ${fullWidth ? "sim-btn--full" : ""}`}
    >
      {children}
    </button>
  );
}

function BoutonsBinaires({ valeur, onChange, ouiTexte = "Oui", nonTexte = "Non" }) {
  return (
    <div className="sim-btns-row">
      <Bouton actif={valeur === true}  onClick={() => onChange(true)}>{ouiTexte}</Bouton>
      <Bouton actif={valeur === false} onClick={() => onChange(false)}>{nonTexte}</Bouton>
    </div>
  );
}

function Champ({ label, aide, children }) {
  return (
    <div className="sim-champ">
      <label className="sim-champ-label">{label}</label>
      {aide && <p className="sim-champ-aide">{aide}</p>}
      {children}
    </div>
  );
}

function ChampMontant({ label, aide, champ, data, update, forcerEUR }) {
  const devise = forcerEUR ? "EUR" : data.deviseEntree;
  return (
    <Champ label={label} aide={aide}>
      <div className="sim-montant-row">
        <input
          type="number"
          min="0"
          value={data[champ] || ""}
          onChange={(e) => update(champ, e.target.value)}
          className="sim-input"
          placeholder="0"
        />
        <span className="sim-montant-devise">{devise === "EUR" ? "€" : "MGA"}</span>
      </div>
    </Champ>
  );
}

function Section({ titre, intro, children }) {
  return (
    <div className="sim-section">
      <h2 className="sim-section-titre">{titre}</h2>
      {intro && <p className="sim-section-intro">{intro}</p>}
      <div className="sim-section-body">{children}</div>
    </div>
  );
}

function Formule({ children }) {
  return <div className="sim-formule">{children}</div>;
}

function CarteResultat({ type, titre, sousTitre, children }) {
  return (
    <div className={`sim-carte-resultat sim-carte-resultat--${type}`}>
      <div className="sim-carte-resultat-icone">
        {type === "succes" ? "✓" : type === "alerte" ? "!" : "×"}
      </div>
      <div className="sim-carte-resultat-content">
        <h2 className={`sim-carte-resultat-titre sim-carte-resultat-titre--${type}`}>{titre}</h2>
        <p className="sim-carte-resultat-sous">{sousTitre}</p>
        {children}
      </div>
    </div>
  );
}

function EtapeCalcul({ num, titre, statut, children }) {
  return (
    <div className={`sim-etape-calc sim-etape-calc--${statut || "neutre"}`}>
      <div className="sim-etape-calc-head">
        <span className={`sim-etape-num sim-etape-num--${statut || "neutre"}`}>{num}</span>
        <h3 className="sim-etape-calc-titre">{titre}</h3>
      </div>
      <div className="sim-etape-calc-body">{children}</div>
    </div>
  );
}

/* ─── Stepper ────────────────────────────────────────────────── */

function Stepper({ etape }) {
  const labels = ["Éligibilité", "Famille", "Revenus", "Charges", "Patrimoine", "Scolarité"];
  return (
    <div className="sim-stepper">
      {labels.map((label, i) => {
        const num = i + 1;
        const actif = etape === num;
        const fait  = etape > num;
        return (
          <div key={i} className="sim-step">
            <div className={`sim-step-num ${fait ? "sim-step-num--fait" : actif ? "sim-step-num--actif" : ""}`}>
              {fait ? "✓" : num}
            </div>
            <div className={`sim-step-label ${actif ? "sim-step-label--actif" : ""}`}>{label}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Écran d'accueil ────────────────────────────────────────── */

function Accueil({ onStart, config }) {
  return (
    <div>
      <div className="sim-card sim-card--accueil">
        <h2 className="sim-card-titre">Avant de commencer</h2>
        <p className="sim-card-text">
          Ce simulateur reproduit le barème AEFE pour vous donner une <strong>estimation pédagogique</strong> de votre
          éligibilité à une bourse scolaire. Le calcul vous sera détaillé étape par étape, en toute transparence.
        </p>
        <ul className="sim-checklist">
          <li><span className="sim-check-puce">›</span> Préparez votre <strong>avis d'imposition 2024</strong> et vos justificatifs de revenus.</li>
          <li><span className="sim-check-puce">›</span> Munissez-vous des <strong>frais de scolarité</strong> appelés par votre établissement.</li>
          <li><span className="sim-check-puce">›</span> Estimez la <strong>valeur de votre patrimoine</strong> immobilier et mobilier.</li>
          <li><span className="sim-check-puce">›</span> Comptez environ <strong>5 à 10 minutes</strong> pour compléter le formulaire.</li>
        </ul>
      </div>
      <div className="sim-alerte-campagne">
        <strong>⚠ Important :</strong> {config.CAMPAGNE_LIBELLE} — ouverture le {config.CAMPAGNE_OUVERTURE},{" "}
        clôture le <strong>{config.CAMPAGNE_CLOTURE}</strong>. Les dossiers déposés hors délai sont rejetés.
      </div>
      <button onClick={onStart} className="sim-btn-demarrer">
        Démarrer la simulation →
      </button>
    </div>
  );
}

/* ─── Étape 1 : Éligibilité administrative ───────────────────── */

function Etape1({ data, update, config }) {
  return (
    <Section
      titre="Éligibilité administrative"
      intro="Conditions de base imposées par l'AEFE pour l'attribution d'une bourse."
    >
      <Champ label="L'enfant est-il de nationalité française ?">
        <BoutonsBinaires valeur={data.enfantFrancais} onChange={(v) => update("enfantFrancais", v)} />
      </Champ>

      <Champ label="L'enfant a-t-il au moins 3 ans à la rentrée scolaire ?">
        <input
          type="number" min="0" max="25" value={data.ageEnfant}
          onChange={(e) => update("ageEnfant", e.target.value)}
          placeholder="Âge en années"
          className="sim-input sim-input--court"
        />
      </Champ>

      <Champ label="L'enfant réside-t-il à Madagascar avec ses parents ou tuteur légal ?">
        <BoutonsBinaires valeur={data.residenceMada} onChange={(v) => update("residenceMada", v)} />
      </Champ>

      <Champ
        label="La famille est-elle inscrite au Registre des Français hors de France (NUMIC) ?"
        aide="Inscription consulaire en cours de validité."
      >
        <BoutonsBinaires valeur={data.inscritNumic} onChange={(v) => update("inscritNumic", v)} />
      </Champ>

      <Champ label="Établissement scolaire" aide="Seuls les établissements homologués AEFE ouvrent droit à bourse.">
        <select
          value={data.etablissement}
          onChange={(e) => {
            update("etablissement", e.target.value);
            const etab = config.ETABLISSEMENTS.find((x) => x.id === e.target.value);
            if (etab) {
              update("fraisAnnuels", etab.frais_annuels);
              update("fraisInscription", etab.frais_inscription);
              update("fraisPremiereInscription", etab.frais_premiere_inscription);
            }
          }}
          className="sim-select"
        >
          <option value="">— Sélectionner —</option>
          {config.ETABLISSEMENTS.map((e) => (
            <option key={e.id} value={e.id}>{e.nom}</option>
          ))}
        </select>
      </Champ>

      <Champ
        label="La famille perçoit-elle des prestations de la CAF en France ?"
        aide="Les bourses AEFE ne sont pas cumulables. Une attestation de radiation est obligatoire."
      >
        <BoutonsBinaires
          valeur={data.cafFrance}
          onChange={(v) => update("cafFrance", v)}
          ouiTexte="Oui"
          nonTexte="Non / radié"
        />
      </Champ>
    </Section>
  );
}

/* ─── Étape 2 : Composition familiale ───────────────────────── */

function Etape2({ data, update }) {
  return (
    <Section
      titre="Composition familiale"
      intro="Le nombre de parts est utilisé pour calculer le quotient familial."
    >
      <Champ label="Situation familiale">
        <div className="sim-btns-row sim-btns-row--col">
          <Bouton actif={data.situation === "couple"}      onClick={() => update("situation", "couple")}>En couple (marié, PACS, concubinage)</Bouton>
          <Bouton actif={data.situation === "monoparental"} onClick={() => update("situation", "monoparental")}>Famille monoparentale</Bouton>
        </div>
      </Champ>
      <Champ label="Nombre d'enfants à charge (y compris l'enfant boursier)">
        <input type="number" min="0" max="15" value={data.nbEnfantsCharge}
          onChange={(e) => update("nbEnfantsCharge", e.target.value)}
          className="sim-input sim-input--court" />
      </Champ>
      <Champ label="Dont enfants en situation de handicap" aide="Une demi-part supplémentaire est accordée par enfant handicapé.">
        <input type="number" min="0" max="15" value={data.nbEnfantsHandicap}
          onChange={(e) => update("nbEnfantsHandicap", e.target.value)}
          className="sim-input sim-input--court" />
      </Champ>
    </Section>
  );
}

/* ─── Étape 3 : Revenus ──────────────────────────────────────── */

function Etape3({ data, update, config }) {
  return (
    <Section
      titre="Revenus 2024"
      intro="Déclarez l'ensemble des ressources brutes de la famille pour l'année 2024 (avant déduction des charges)."
    >
      <Champ label="Devise de saisie" aide={`Taux de chancellerie indicatif : 1 EUR ≈ ${config.TAUX_EUR_MGA.toLocaleString("fr-FR")} MGA`}>
        <div className="sim-btns-row">
          <Bouton actif={data.deviseEntree === "EUR"} onClick={() => update("deviseEntree", "EUR")}>Euros (€)</Bouton>
          <Bouton actif={data.deviseEntree === "MGA"} onClick={() => update("deviseEntree", "MGA")}>Ariary (MGA)</Bouton>
        </div>
      </Champ>
      <ChampMontant label="Salaires nets annuels — parent demandeur"                             champ="salaireParent1"   data={data} update={update} />
      {data.situation === "couple" && (
        <ChampMontant label="Salaires nets annuels — conjoint"                                   champ="salaireParent2"   data={data} update={update} />
      )}
      <ChampMontant label="Pensions, retraites"                                                  champ="pensions"         data={data} update={update} />
      <ChampMontant label="Revenus locatifs (loyers perçus)"                                     champ="revenusLocatifs"  data={data} update={update} />
      <ChampMontant label="Revenus mobiliers (intérêts, dividendes, assurance-vie)"              champ="revenusMobiliers" data={data} update={update} />
      <ChampMontant label="Aide familiale reçue" aide="Versements réguliers d'un proche, à déclarer." champ="aideFamiliale"    data={data} update={update} />
      <ChampMontant label="Avantages en nature"  aide="Logement de fonction, voiture de fonction, etc. (estimation annuelle)" champ="avantagesNature"  data={data} update={update} />
      <ChampMontant label="Autres revenus"                                                        champ="autresRevenus"   data={data} update={update} />
    </Section>
  );
}

/* ─── Étape 4 : Charges ──────────────────────────────────────── */

function Etape4({ data, update }) {
  return (
    <Section
      titre="Charges déductibles"
      intro="Seules ces trois catégories de charges sont déduites du revenu de référence par l'AEFE."
    >
      <ChampMontant label="Cotisations sociales obligatoires" aide="CNAPS, OSTIE, CFE, etc. — uniquement les cotisations obligatoires." champ="cotisationsSociales"          data={data} update={update} />
      <ChampMontant label="Impôt sur le revenu payé"          aide="Impôt malgache et/ou français acquitté en 2024."                   champ="impotRevenu"                  data={data} update={update} />
      <ChampMontant label="Pensions alimentaires versées"     aide="Sur décision de justice uniquement."                               champ="pensionsAlimentairesVersees"  data={data} update={update} />
    </Section>
  );
}

/* ─── Étape 5 : Patrimoine ───────────────────────────────────── */

function Etape5({ data, update, config }) {
  return (
    <Section
      titre="Patrimoine"
      intro={`Le patrimoine détenu où qu'il se trouve est pris en compte. Au-delà des seuils (immobilier ${config.SEUIL_PATRIMOINE_IMMO.toLocaleString("fr-FR")} € / mobilier ${config.SEUIL_PATRIMOINE_MOBILIER.toLocaleString("fr-FR")} €), la famille est placée hors barème.`}
    >
      <h3 className="sim-sous-titre">Patrimoine immobilier</h3>
      <ChampMontant label="Valeur de la résidence principale"                    aide={`Un abattement de ${(config.ABATTEMENT_RP * 100).toFixed(0)} % est appliqué sur la résidence principale.`} champ="valeurResidencePrincipale" data={data} update={update} />
      <ChampMontant label="Capital restant dû sur le prêt de la résidence principale"                                                                                                             champ="capitalRestantDuRP"        data={data} update={update} />
      <ChampMontant label="Valeur des autres biens immobiliers"                  aide="Investissements locatifs, résidence secondaire, terrain, biens en France ou à l'étranger."                champ="valeurAutresImmobiliers"   data={data} update={update} />
      <ChampMontant label="Capital restant dû sur les prêts des autres biens"                                                                                                                     champ="capitalRestantDuAutres"    data={data} update={update} />
      <h3 className="sim-sous-titre" style={{ marginTop: "1.5rem" }}>Patrimoine mobilier</h3>
      <ChampMontant label="Patrimoine mobilier liquide"     aide="Comptes courants, livrets, épargne disponible."                                                                                 champ="mobilierLiquide"           data={data} update={update} />
      <ChampMontant label="Patrimoine mobilier non liquide" aide={`Assurance-vie, PER, actions, obligations, etc. Un abattement de ${(config.ABATTEMENT_MOB_ILLIQUIDE * 100).toFixed(0)} % est appliqué.`} champ="mobilierNonLiquide" data={data} update={update} />
    </Section>
  );
}

/* ─── Étape 6 : Frais de scolarité ──────────────────────────── */

function Etape6({ data, update, config }) {
  const etab = config.ETABLISSEMENTS.find((e) => e.id === data.etablissement);
  return (
    <Section
      titre="Frais de scolarité"
      intro="Les frais éligibles aux bourses sont uniquement les frais annuels, les frais d'inscription annuelle et — la 1ʳᵉ année — les frais de première inscription. Les frais parascolaires ne sont pas pris en charge à Madagascar (sauf exception)."
    >
      {etab && (
        <div className="sim-etab-info">
          <strong>{etab.nom}</strong> — Frais pré-remplis selon barème indicatif. Vous pouvez les ajuster si nécessaire.
        </div>
      )}
      <ChampMontant label="Frais de scolarité annuels"    champ="fraisAnnuels"    data={data} update={update} forcerEUR />
      <ChampMontant label="Frais d'inscription annuelle"  champ="fraisInscription" data={data} update={update} forcerEUR />
      <Champ label="Est-ce une 1ʳᵉ inscription dans l'établissement ?">
        <BoutonsBinaires valeur={data.estPremiereInscription} onChange={(v) => update("estPremiereInscription", v)} />
      </Champ>
      {data.estPremiereInscription && (
        <ChampMontant label="Frais de première inscription" champ="fraisPremiereInscription" data={data} update={update} forcerEUR />
      )}
    </Section>
  );
}

/* ─── Résultats ──────────────────────────────────────────────── */

function Procedure({ config }) {
  return (
    <div className="sim-procedure">
      <h2 className="sim-procedure-titre">Comment déposer votre dossier</h2>
      <div className="sim-procedure-grid">
        <div>
          <h3 className="sim-procedure-sous-titre">Calendrier</h3>
          <ul className="sim-procedure-liste">
            <li>📅 <strong>{config.CAMPAGNE_LIBELLE}</strong></li>
            <li>📅 Ouverture : {config.CAMPAGNE_OUVERTURE}</li>
            <li>📅 <strong>Clôture : {config.CAMPAGNE_CLOTURE}</strong></li>
            <li>📅 Examen au CCB1 : {config.CCB_DATE}</li>
            <li>📅 Décision CNB : {config.CNB_DATE}</li>
          </ul>
        </div>
        <div>
          <h3 className="sim-procedure-sous-titre">Où déposer</h3>
          <ul className="sim-procedure-liste">
            <li>🏛 <strong>Tananarive</strong> : Consulat général de France, bureau des bourses scolaires</li>
            <li>📍 <strong>Province</strong> : Agence consulaire locale ou établissement scolaire</li>
            <li>💻 <strong>Plateforme :</strong>{" "}
              <a href="https://scolaide.aefe.gouv.fr" target="_blank" rel="noopener noreferrer" className="sim-link">
                scolaide.aefe.gouv.fr
              </a>
            </li>
            <li>☎ +261 (0)20.22.398.50 (14h–16h, lun–jeu)</li>
            <li>✉ bourses.tananarive-fslt@diplomatie.gouv.fr</li>
          </ul>
        </div>
      </div>
      <div className="sim-procedure-docs">
        <h3 className="sim-procedure-sous-titre">Pièces principales à fournir</h3>
        <div className="sim-procedure-docs-grid">
          {[
            "Formulaire AEFE complété et signé",
            "Courrier motivé au Consul général",
            "Livret de famille / actes de naissance",
            "Carte consulaire (NUMIC) en cours de validité",
            "Certificats de scolarité 2024-2025 et 2025-2026",
            "Attestation de radiation CAF (si France)",
            "Passeports / titres de séjour Madagascar",
            "3 dernières factures d'électricité, plan d'accès",
            "12 bulletins de salaire 2024 + attestation employeur",
            "Avis d'imposition 2023 / déclaration 2024",
            "Relevés bancaires 2024 (perso + pro)",
            "Justificatifs patrimoine immobilier et mobilier",
            "Cartes grises des véhicules",
            "Justificatifs cotisations sociales et CFE",
          ].map((doc, i) => <div key={i}>• {doc}</div>)}
        </div>
      </div>
      <div className="sim-procedure-conseil">
        <strong>💡 Conseil UFM :</strong> ne pas attendre le dernier moment. Tout dossier incomplet est rejeté.
        La constitution du dossier prend généralement 2 à 3 semaines.
      </div>
    </div>
  );
}

function Resultat({ calcul, data, config, fmtEur }) {
  const {
    eligibleAdmin, filtres, parts, detailParts, R, revenusBruts, chargesDeductibles,
    Q, Qp, quotiteTheorique, messageBareme, quotiteDefinitive, quotiteFinale,
    patrimoineImmoTotal, patrimoineMobTotal, horsBaremeImmo, horsBaremeMob, horsBaremePatrimoine,
    valeurRP_nette, valeurRP_apresAbat, valeurAutresImmo_nette, mobLiquide, mobIlliquide_apresAbat,
    fraisEligibles, montantBourse,
  } = calcul;

  if (!eligibleAdmin) {
    return (
      <div>
        <CarteResultat type="erreur" titre="Demande non éligible" sousTitre="Une ou plusieurs conditions administratives ne sont pas remplies.">
          <ul className="sim-filtres-liste">
            {filtres.map((f, i) => (
              <li key={i}><span className="sim-filtre-croix">✗</span>{f}</li>
            ))}
          </ul>
        </CarteResultat>
        <Procedure config={config} />
      </div>
    );
  }

  let typeResultat = "succes";
  let titreResultat = "";
  let sousTitreResultat = "";

  if (horsBaremePatrimoine) {
    typeResultat = "alerte";
    titreResultat = "Hors barème — patrimoine";
    sousTitreResultat = "Vos seuils de patrimoine dépassent les limites fixées pour Madagascar.";
  } else if (Qp >= config.Q_MAX) {
    typeResultat = "alerte";
    titreResultat = "Hors barème — revenus";
    sousTitreResultat = `Le quotient familial pondéré dépasse ${fmtEur(config.Q_MAX)}.`;
  } else if (quotiteFinale === 100) {
    titreResultat = "Bourse à 100 % estimée";
    sousTitreResultat = "Selon nos calculs, votre famille pourrait bénéficier d'une bourse couvrant l'intégralité des frais de scolarité éligibles.";
  } else if (quotiteFinale > 0) {
    titreResultat = `Bourse partielle estimée à ${quotiteFinale.toFixed(2)} %`;
    sousTitreResultat = "Selon nos calculs, votre famille pourrait bénéficier d'une bourse partielle.";
  } else {
    typeResultat = "alerte";
    titreResultat = "Pas de bourse estimée";
    sousTitreResultat = "Selon nos calculs, votre situation ne permet pas l'attribution d'une bourse.";
  }

  return (
    <div>
      <CarteResultat type={typeResultat} titre={titreResultat} sousTitre={sousTitreResultat}>
        {!horsBaremePatrimoine && quotiteFinale > 0 && (
          <div className="sim-montant-estim">
            <div className="sim-montant-estim-label">Estimation du montant annuel de la bourse</div>
            <div className="sim-montant-estim-valeur">{fmtEur(montantBourse)}</div>
            <div className="sim-montant-estim-detail">
              soit {quotiteFinale.toFixed(2)} % des {fmtEur(fraisEligibles)} de frais éligibles
            </div>
          </div>
        )}
      </CarteResultat>

      <div className="sim-detail">
        <h2 className="sim-detail-titre">Détail du calcul, étape par étape</h2>

        <EtapeCalcul num="A" titre="Éligibilité administrative" statut="ok">
          <p>Toutes les conditions administratives (nationalité, résidence, NUMIC, établissement homologué, non-cumul CAF) sont validées.</p>
        </EtapeCalcul>

        <EtapeCalcul num="B" titre="Nombre de parts (P)">
          <ul className="sim-detail-liste">
            {detailParts.map((d, i) => <li key={i}>• {d}</li>)}
          </ul>
          <Formule>P = <strong>{parts.toFixed(1)} parts</strong></Formule>
        </EtapeCalcul>

        <EtapeCalcul num="C" titre="Revenu de référence (R)">
          <ul className="sim-detail-liste">
            <li>• Total des revenus bruts : <strong>{fmtEur(revenusBruts)}</strong></li>
            <li>• – Charges déductibles (cotisations + IR + pensions versées) : <strong>{fmtEur(chargesDeductibles)}</strong></li>
          </ul>
          <Formule>R = {fmtEur(revenusBruts)} – {fmtEur(chargesDeductibles)} = <strong>{fmtEur(R)}</strong></Formule>
        </EtapeCalcul>

        <EtapeCalcul num="D" titre="Quotient familial (Q) et quotient pondéré (Qp)">
          <p className="sim-detail-texte">
            Le quotient familial Q est le revenu par part. Il est ensuite pondéré par l'<strong>Indice de Parité de Pouvoir d'Achat (IPPA)</strong> de Madagascar pour comparer avec les barèmes mondiaux.
          </p>
          <Formule>
            Q = R / P = {fmtEur(R)} / {parts.toFixed(1)} = <strong>{fmtEur(Q)}</strong><br />
            Qp = Q × 100 / IPPA = {fmtEur(Q)} × 100 / {config.IPPA} = <strong>{fmtEur(Qp)}</strong>
          </Formule>
        </EtapeCalcul>

        <EtapeCalcul num="E" titre="Quotité théorique de bourse">
          <p className="sim-detail-texte">{messageBareme}</p>
          {Qp > config.Q_MIN_100 && Qp < config.Q_MAX && (
            <Formule>
              Quotité théorique = (1 – (Qp – {config.Q_MIN_100}) / ({config.Q_MAX} – {config.Q_MIN_100})) × 100<br />
              = (1 – ({Qp.toFixed(0)} – {config.Q_MIN_100}) / {config.Q_MAX - config.Q_MIN_100}) × 100<br />
              = <strong>{quotiteTheorique.toFixed(2)} %</strong>
            </Formule>
          )}
          {(Qp <= config.Q_MIN_100 || Qp >= config.Q_MAX) && (
            <Formule>Quotité théorique = <strong>{quotiteTheorique.toFixed(2)} %</strong></Formule>
          )}
        </EtapeCalcul>

        <EtapeCalcul num="F" titre="Contribution Progressive de Solidarité (CPS)">
          {quotiteTheorique === 100 ? (
            <p className="sim-detail-texte">La CPS ne s'applique pas aux familles bénéficiant d'une quotité de 100 %.</p>
          ) : quotiteTheorique === 0 ? (
            <p className="sim-detail-texte">Sans objet (pas de quotité partielle).</p>
          ) : (
            <>
              <p className="sim-detail-texte">
                La CPS (fixée par l'AEFE chaque année à <strong>{config.CPS_POINTS} points</strong> pour cette campagne)
                est retranchée de la quotité théorique pour contenir les besoins dans l'enveloppe budgétaire.
              </p>
              <Formule>Quotité après CPS = {quotiteTheorique.toFixed(2)} % – {config.CPS_POINTS} points = <strong>{quotiteDefinitive.toFixed(2)} %</strong></Formule>
            </>
          )}
        </EtapeCalcul>

        <EtapeCalcul num="G" titre="Vérification du patrimoine" statut={horsBaremePatrimoine ? "alerte" : "ok"}>
          <div className="sim-detail-texte">
            <p><strong>Immobilier</strong> :</p>
            <ul className="sim-detail-liste">
              <li>• Résidence principale nette : {fmtEur(valeurRP_nette)} → après abattement {(config.ABATTEMENT_RP * 100).toFixed(0)} % : {fmtEur(valeurRP_apresAbat)}</li>
              <li>• Autres biens nets : {fmtEur(valeurAutresImmo_nette)}</li>
              <li>• <strong>Total immobilier retenu : {fmtEur(patrimoineImmoTotal)}</strong> {horsBaremeImmo ? `> ${fmtEur(config.SEUIL_PATRIMOINE_IMMO)} → DÉPASSÉ` : `≤ ${fmtEur(config.SEUIL_PATRIMOINE_IMMO)} ✓`}</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}><strong>Mobilier</strong> :</p>
            <ul className="sim-detail-liste">
              <li>• Liquide : {fmtEur(mobLiquide)}</li>
              <li>• Non liquide après abattement {(config.ABATTEMENT_MOB_ILLIQUIDE * 100).toFixed(0)} % : {fmtEur(mobIlliquide_apresAbat)}</li>
              <li>• <strong>Total mobilier retenu : {fmtEur(patrimoineMobTotal)}</strong> {horsBaremeMob ? `> ${fmtEur(config.SEUIL_PATRIMOINE_MOBILIER)} → DÉPASSÉ` : `≤ ${fmtEur(config.SEUIL_PATRIMOINE_MOBILIER)} ✓`}</li>
            </ul>
          </div>
        </EtapeCalcul>

        <EtapeCalcul num="H" titre="Quotité finale et montant" statut={quotiteFinale > 0 ? "ok" : "alerte"}>
          {horsBaremePatrimoine ? (
            <p className="sim-detail-texte sim-detail-texte--erreur">Le dépassement des seuils de patrimoine place la famille hors barème → quotité ramenée à 0 %.</p>
          ) : (
            <Formule>
              Quotité finale = <strong>{quotiteFinale.toFixed(2)} %</strong><br />
              Frais éligibles = {fmtEur(fraisEligibles)}<br />
              Montant estimé = {fmtEur(fraisEligibles)} × {quotiteFinale.toFixed(2)} % = <strong>{fmtEur(montantBourse)}</strong>
            </Formule>
          )}
        </EtapeCalcul>
      </div>

      <Procedure config={config} />

      <div className="sim-avertissement">
        <strong>⚠ Avertissement :</strong> Ce résultat est purement <strong>indicatif</strong>. Le Conseil Consulaire
        des Bourses (CCB) de Tananarive et la Commission Nationale des Bourses (CNB) de l'AEFE conservent un{" "}
        <strong>pouvoir d'appréciation</strong> (vérification du niveau de vie, enquête sociale à domicile,
        pondérations dérogatoires). Les bourses ne sont pas un droit et sont attribuées dans la limite des crédits
        disponibles. Toute déclaration inexacte entraîne l'exclusion du dispositif (article D531-49 du Code de
        l'éducation).
      </div>
    </div>
  );
}

/* ─── Composant principal ────────────────────────────────────── */

export default function SimulateurBourses() {
  const [config] = useState(CONFIG_DEFAUT);
  const [etape, setEtape] = useState(0);
  const [data, setData] = useState(DATA_INITIALE);

  const update = (champ, valeur) => setData((prev) => ({ ...prev, [champ]: valeur }));
  const toEur  = (montant) => data.deviseEntree === "MGA" ? montant / config.TAUX_EUR_MGA : montant;
  const fmtEur = (n) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n || 0);

  const calcul = useMemo(() => {
    const conv = (m) => toEur(parseFloat(m) || 0);
    const filtres = [];
    if (data.enfantFrancais === false) filtres.push("L'enfant doit être de nationalité française.");
    if (data.residenceMada === false)  filtres.push("L'enfant doit résider à Madagascar avec ses parents ou son tuteur légal.");
    if (data.inscritNumic === false)   filtres.push("La famille doit être inscrite au Registre des Français établis hors de France (NUMIC).");
    if (!data.etablissement)           filtres.push("L'établissement scolaire doit être homologué par l'AEFE.");
    if (data.cafFrance === true)       filtres.push("Les bourses AEFE ne sont pas cumulables avec les prestations CAF en France. Une attestation de radiation de la CAF française est obligatoire.");
    const age = parseInt(data.ageEnfant) || 0;
    if (age > 0 && age < 3)            filtres.push("L'enfant doit avoir au moins 3 ans à la rentrée scolaire.");
    const eligibleAdmin = filtres.length === 0;

    let parts = 0;
    let detailParts = [];
    if (data.situation === "couple") {
      parts += 2; detailParts.push("Demandeur : 1 part"); detailParts.push("Conjoint : 1 part");
    } else if (data.situation === "monoparental") {
      parts += 2; detailParts.push("Parent isolé : 2 parts");
    }
    const enf = parseInt(data.nbEnfantsCharge) || 0;
    if (enf > 0) { parts += enf * 0.5; detailParts.push(`${enf} enfant${enf > 1 ? "s" : ""} à charge × 0,5 part = ${(enf * 0.5).toFixed(1)} part${enf * 0.5 > 1 ? "s" : ""}`); }
    const enfH = parseInt(data.nbEnfantsHandicap) || 0;
    if (enfH > 0) { parts += enfH * 0.5; detailParts.push(`${enfH} enfant${enfH > 1 ? "s" : ""} en situation de handicap × 0,5 part supplémentaire = ${(enfH * 0.5).toFixed(1)} part${enfH * 0.5 > 1 ? "s" : ""}`); }

    const revenusBruts =
      conv(data.salaireParent1) + conv(data.salaireParent2) + conv(data.pensions) +
      conv(data.revenusLocatifs) + conv(data.revenusMobiliers) + conv(data.aideFamiliale) +
      conv(data.avantagesNature) + conv(data.autresRevenus);
    const chargesDeductibles =
      conv(data.cotisationsSociales) + conv(data.impotRevenu) + conv(data.pensionsAlimentairesVersees);
    const R = Math.max(0, revenusBruts - chargesDeductibles);
    const Q = parts > 0 ? R / parts : 0;
    const Qp = config.IPPA > 0 ? Q * 100 / config.IPPA : 0;

    let quotiteTheorique = 0;
    let messageBareme = "";
    if (Qp <= config.Q_MIN_100) {
      quotiteTheorique = 100;
      messageBareme = `Le quotient pondéré est inférieur ou égal à ${fmtEur(config.Q_MIN_100)} → bourse théorique à 100 %.`;
    } else if (Qp >= config.Q_MAX) {
      quotiteTheorique = 0;
      messageBareme = `Le quotient pondéré est supérieur ou égal à ${fmtEur(config.Q_MAX)} → hors barème revenus, aucune bourse.`;
    } else {
      quotiteTheorique = (1 - (Qp - config.Q_MIN_100) / (config.Q_MAX - config.Q_MIN_100)) * 100;
      messageBareme = `Quotient pondéré entre ${fmtEur(config.Q_MIN_100)} et ${fmtEur(config.Q_MAX)} → quotité partielle calculée.`;
    }

    let quotiteDefinitive = quotiteTheorique;
    if (quotiteTheorique > 0 && quotiteTheorique < 100) {
      quotiteDefinitive = Math.max(0, quotiteTheorique - config.CPS_POINTS);
    }

    const valeurRP_nette       = Math.max(0, conv(data.valeurResidencePrincipale) - conv(data.capitalRestantDuRP));
    const valeurRP_apresAbat   = valeurRP_nette * (1 - config.ABATTEMENT_RP);
    const valeurAutresImmo_nette = Math.max(0, conv(data.valeurAutresImmobiliers) - conv(data.capitalRestantDuAutres));
    const patrimoineImmoTotal  = valeurRP_apresAbat + valeurAutresImmo_nette;

    const mobLiquide           = conv(data.mobilierLiquide);
    const mobIlliquide_apresAbat = conv(data.mobilierNonLiquide) * (1 - config.ABATTEMENT_MOB_ILLIQUIDE);
    const patrimoineMobTotal   = mobLiquide + mobIlliquide_apresAbat;

    const horsBaremeImmo       = patrimoineImmoTotal > config.SEUIL_PATRIMOINE_IMMO;
    const horsBaremeMob        = patrimoineMobTotal  > config.SEUIL_PATRIMOINE_MOBILIER;
    const horsBaremePatrimoine = horsBaremeImmo || horsBaremeMob;

    let quotiteFinale = quotiteDefinitive;
    if (horsBaremePatrimoine && quotiteDefinitive > 0) quotiteFinale = 0;

    const fraisEligibles =
      conv(data.fraisAnnuels) + conv(data.fraisInscription) +
      (data.estPremiereInscription ? conv(data.fraisPremiereInscription) : 0);
    const montantBourse = fraisEligibles * (quotiteFinale / 100);

    return {
      eligibleAdmin, filtres, parts, detailParts,
      revenusBruts, chargesDeductibles, R, Q, Qp,
      quotiteTheorique, messageBareme, quotiteDefinitive, quotiteFinale,
      patrimoineImmoTotal, patrimoineMobTotal,
      horsBaremeImmo, horsBaremeMob, horsBaremePatrimoine,
      valeurRP_nette, valeurRP_apresAbat, valeurAutresImmo_nette,
      mobLiquide, mobIlliquide_apresAbat, fraisEligibles, montantBourse,
    };
  }, [data, config]);

  const peutAvancer = () => {
    switch (etape) {
      case 1: return data.enfantFrancais !== null && data.residenceMada !== null && data.inscritNumic !== null && data.etablissement && data.cafFrance !== null && data.ageEnfant !== "";
      case 2: return data.situation !== "" && data.nbEnfantsCharge !== "";
      default: return true;
    }
  };

  return (
    <div className="sim-page">
      <div className="sim-inner">
        {/* En-tête */}
        <header className="sim-header">
          <div className="sim-header-top">
            <div className="sim-header-badge">Union des Français de Madagascar</div>
            <button onClick={() => setEtape(0)} className="sim-restart-btn">↻ Recommencer</button>
          </div>
          <h1 className="sim-header-titre">
            Simulateur d'éligibilité aux <em>bourses scolaires</em>
          </h1>
          <p className="sim-header-sous">
            Estimez votre droit à une bourse AEFE pour la scolarisation de votre enfant à Madagascar dans un établissement homologué.
          </p>
        </header>

        {/* Stepper */}
        {etape > 0 && etape < 7 && <Stepper etape={etape} />}

        {/* Contenu par étape */}
        <main className="sim-main">
          {etape === 0 && <Accueil onStart={() => setEtape(1)} config={config} />}
          {etape === 1 && <Etape1 data={data} update={update} config={config} />}
          {etape === 2 && <Etape2 data={data} update={update} />}
          {etape === 3 && <Etape3 data={data} update={update} config={config} />}
          {etape === 4 && <Etape4 data={data} update={update} />}
          {etape === 5 && <Etape5 data={data} update={update} config={config} />}
          {etape === 6 && <Etape6 data={data} update={update} config={config} />}
          {etape === 7 && <Resultat calcul={calcul} data={data} config={config} fmtEur={fmtEur} />}
        </main>

        {/* Navigation étapes */}
        {etape > 0 && etape < 7 && (
          <div className="sim-nav">
            <button onClick={() => setEtape(etape - 1)} className="sim-nav-prev">← Précédent</button>
            <div className="sim-nav-count">Étape {etape} / 6</div>
            <button
              onClick={() => setEtape(etape + 1)}
              disabled={!peutAvancer()}
              className={`sim-nav-next ${peutAvancer() ? "" : "sim-nav-next--disabled"}`}
            >
              {etape === 6 ? "Calculer →" : "Suivant →"}
            </button>
          </div>
        )}

        {/* Navigation résultats */}
        {etape === 7 && (
          <div className="sim-nav">
            <button onClick={() => setEtape(6)} className="sim-nav-prev">← Modifier mes réponses</button>
            <button onClick={() => window.print()} className="sim-nav-next">🖨 Imprimer</button>
          </div>
        )}

        {/* Pied de page */}
        <footer className="sim-footer">
          <p>
            Ce simulateur est <strong>indicatif</strong>. Seul l'AEFE, sur avis du Conseil Consulaire des Bourses (CCB)
            de Tananarive et de la Commission Nationale des Bourses (CNB), décide définitivement de l'attribution.
            Les bourses ne constituent pas un droit et sont attribuées dans la limite des crédits annuels alloués.
          </p>
          <p>© Union des Français de Madagascar — Outil bénévole d'information aux familles.</p>
        </footer>
      </div>
    </div>
  );
}