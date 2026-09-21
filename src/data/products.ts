export interface ProductFaq {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  name: string;
  alternateNames: string[];
  strength: string;
  type: string;
  category: string;
  composition: string;
  activeIngredient: string;
  dosageForm: string;
  pharmacopoeia: string;
  therapeuticClass: string;
  legalStatus: "Schedule H Prescription" | "OTC Healthcare Formulation";
  price: number;
  ratingValue: string;
  reviewCount: string;
  shortDescription: string;
  description: string;
  keywords: string;
  bulletPoints: string[];
  indications: string[];
  packaging: string;
  storage: string;
  shelfLife: string;
  mechanism: string;
  dosageGuide: string;
  faqs: ProductFaq[];
  image: string;
  images: string[];
}

export const SITE_URL = "https://vanguardtherapeutics.com";

export const company = {
  name: "Vanguard Therapeutics Ltd.",
  brand: "Vanguard Medical / Vanguard Pharma",
  address: "Plot 42, GIDC Industrial Estate, Vadodara, Gujarat 390010, India",
  phone: "+91 98250 12345",
  email: "trade@vanguardtherapeutics.com",
};

export const products: Product[] = [
  {
    id: "hema-chelate-syrup",
    name: "HemaChelate Oral Liquid",
    alternateNames: [
      "HemaChelate Syrup",
      "Iron Bisglycinate Chelate Syrup",
      "HemaChelate 200ml",
    ],
    strength: "200 ml",
    type: "Sugar-Free Oral Solution",
    category: "Hematology & Iron Deficiency",
    composition:
      "Ferrous Bisglycinate (Equivalent to 30mg Elemental Iron) with L-Methylfolate 0.5mg & Methylcobalamin 500mcg per 5ml",
    activeIngredient:
      "Ferrous Bisglycinate Chelate, L-Methylfolate, Methylcobalamin",
    dosageForm: "Liquid Oral Solution",
    pharmacopoeia: "In-House / USP Monograph Compliant",
    therapeuticClass: "Hematinic & Cellular Oxygenation Agent",
    legalStatus: "OTC Healthcare Formulation",
    price: 345.0,
    ratingValue: "4.9",
    reviewCount: "86",
    shortDescription:
      "Third-generation amino-acid chelated hematinic formulation offering 90.9% fractional absorption with neutral gastric transit and zero constipation.",
    description:
      "HemaChelate Oral Liquid delivers bisglycinate-chelated elemental iron shielded against ionization in gastric acid. It passes intact to the jejunal mucosa, avoiding free hydroxyl radical generation, upper GI burning, nausea, and intestinal dysbiosis.",
    keywords:
      "hemachelate syrup, ferrous bisglycinate syrup, sugar free iron syrup, hematinic solution anemia, vanguard therapeutics iron",
    bulletPoints: [
      "90.9% superior elemental iron bioavailability compared to ferrous sulfate and ascorbate salts.",
      "Electrically neutral chelate structure prevents free-radical mucosal injury and gastric distress.",
      "Bio-active L-Methylfolate and Methylcobalamin accelerate erythropoiesis and RBC maturation.",
      "Sugar-free formulation suitable for gestational diabetics and pediatric protocols.",
      "Eliminates metallic aftertaste, nausea, vomiting, and dark constipated stools.",
    ],
    indications: [
      "Iron Deficiency Anemia (Microcytic Hypochromic IDA)",
      "Gestational & Post-Partum Maternal Anemia",
      "Nutritional Anemia in Chronic Kidney Disease (Non-Dialysis)",
      "Pediatric Cognitive & Growth Deficiencies",
      "Post-Operative Hemoglobin Recovery",
    ],
    packaging:
      "200 ml Amber PET Bottle with calibrated measuring cup in UV-protective carton (Shipper: 60 Units)",
    storage:
      "Store below 25°C in a dry environment. Protect from light. Do not freeze.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Ferrous bisglycinate utilizes the divalent metal transporter 1 (DMT1) and peptide transport pathways in the small intestine, facilitating direct enterocyte uptake without competitive inhibition from dietary phytates or calcium.",
    dosageGuide:
      "Adults: 5 ml to 10 ml twice daily after meals. Pediatrics: 2.5 ml to 5 ml daily or as directed by the prescribing physician.",
    faqs: [
      {
        q: "How does HemaChelate prevent gastrointestinal side effects?",
        a: "Because elemental iron is covalently bound to two glycine amino acid molecules, the molecule does not dissociate in stomach acid. It reaches the jejunum intact, eliminating gastric irritation, nausea, and constipation.",
      },
      {
        q: "Is HemaChelate batch-tested for heavy metal impurities?",
        a: "Yes. Every batch undergoes ICP-MS heavy metal screening and stability testing in accordance with WHO-GMP and Schedule M guidelines, accompanied by a full Certificate of Analysis (COA).",
      },
    ],
    image: "/images/product_01.png",
    images: ["/images/product_01.png"],
  },
  {
    id: "neuro-carn-syrup",
    name: "NeuroCarn Pediatric Syrup",
    alternateNames: [
      "NeuroCarn Syrup",
      "L-Carnosine 200mg Syrup",
      "NeuroCarn Cognitive Solution",
    ],
    strength: "200 ml",
    type: "Oral Suspension",
    category: "Pediatric Neurology & Neurodevelopment",
    composition: "L-Carnosine 200mg with Elemental Zinc 5mg per 5ml",
    activeIngredient: "L-Carnosine (Beta-Alanyl-L-Histidine) 200mg/5ml",
    dosageForm: "Liquid Oral Suspension",
    pharmacopoeia: "Ph. Eur. / USP Standards",
    therapeuticClass: "Central Nervous System Antioxidant & Neurotrophic Agent",
    legalStatus: "OTC Healthcare Formulation",
    price: 990.0,
    ratingValue: "4.9",
    reviewCount: "112",
    shortDescription:
      "Bioavailable L-Carnosine dipeptide oral suspension engineered to cross the blood-brain barrier for pediatric speech, cognition, and synaptic stabilization.",
    description:
      "NeuroCarn Pediatric Syrup provides therapeutic concentrations of endogenous dipeptide L-Carnosine. Formulated for pediatric neurodevelopmental protocols, it supports receptive and expressive language processing, frontal lobe synaptic transmission, and cerebral antioxidant defense.",
    keywords:
      "neurocarn syrup, l-carnosine 200mg syrup, speech delay treatment syrup, pediatric neurodevelopment syrup, vanguard therapeutics carnosine",
    bulletPoints: [
      "Crosses the Blood-Brain Barrier (BBB) to modulate GABAergic neurotransmission and reduce excitotoxicity.",
      "Clinically documented in peer-reviewed literature for receptive language and social interaction support in ASD.",
      "Scavenges reactive oxygen species (ROS) and chelates neurotoxic trace heavy metals in cerebral tissue.",
      "Sugar-free formulation prevents glycemic fluctuations and hyperactivity in pediatric patients.",
      "Manufactured with pharmaceutical-grade dipeptides under strict cleanroom conditions.",
    ],
    indications: [
      "Speech & Expressive Language Delays",
      "Autism Spectrum Disorder (Adjunctive Nutritional Protocol)",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Hypoxic-Ischemic Encephalopathy Rehabilitation",
      "Post-Seizure Neurological Recovery",
    ],
    packaging:
      "200 ml Amber Glass Bottle with tamper-evident seal (Shipper: 48 Units)",
    storage:
      "Store below 25°C. Keep tightly closed. Protect from excessive heat and direct light.",
    shelfLife: "18 Months from manufacturing date",
    mechanism:
      "L-Carnosine modulates both GABA and NMDA receptor systems in the cerebral cortex and hippocampus, mitigating excitotoxic glutamate release while maintaining mitochondrial bioenergetics.",
    dosageGuide:
      "Pediatric (Children 2+ years): 5 ml (200mg) to 10 ml (400mg) daily in divided morning and afternoon doses, or as directed by a pediatric neurologist.",
    faqs: [
      {
        q: "What is the clinical evidence supporting L-Carnosine in pediatric speech delay?",
        a: "Double-blind, placebo-controlled clinical trials have demonstrated statistically significant improvements in expressive vocabulary, focus, and social engagement within 6 to 8 weeks of daily 400mg L-Carnosine supplementation.",
      },
    ],
    image: "/images/product_02.png",
    images: ["/images/product_02.png"],
  },
  {
    id: "gastro-spore-sachet",
    name: "GastroSpore Probiotic Sachet",
    alternateNames: [
      "GastroSpore Sachet",
      "Microencapsulated Probiotic Sachet",
      "GastroSpore 1g",
    ],
    strength: "10 Sachets x 1g",
    type: "Lyophilized Oral Powder",
    category: "Gastroenterology & Intestinal Permeability",
    composition:
      "Multi-Strain Spore Probiotics (5 Billion CFU) with L-Glutamine 250mg & Zinc Butyrate 10mg",
    activeIngredient:
      "Bacillus coagulans, Bacillus subtilis, Lactobacillus rhamnosus, L-Glutamine",
    dosageForm: "Soluble Oral Powder Sachet",
    pharmacopoeia: "IP / In-House Validated Formulation",
    therapeuticClass: "Epithelial Barrier Restorative & Microbiome Modulator",
    legalStatus: "OTC Healthcare Formulation",
    price: 78.0,
    ratingValue: "4.8",
    reviewCount: "74",
    shortDescription:
      "Thermostable spore-forming probiotic formulation with mucosal substrate L-Glutamine for rapid resolution of dysbiosis and intestinal tight-junction repair.",
    description:
      "GastroSpore Sachet delivers acid-resistant bacterial endospores that survive 100% of gastric transit. Synergized with enterocyte-fuel L-Glutamine, it accelerates the reconstitution of protective commensal microflora and restores gut-barrier integrity.",
    keywords:
      "gastrospore sachet, spore probiotic sachet, l-glutamine gut sachet, antibiotic associated diarrhea sachet, vanguard therapeutics probiotic",
    bulletPoints: [
      "Microencapsulated bacterial endospores exhibit 100% survival through gastric acid and bile salts.",
      "250mg L-Glutamine actively synthesizes mucosal tight junction proteins (Claudin-1 & Occludin).",
      "Suppresses enteropathogenic colonization via short-chain fatty acid (SCFA) biosynthesis.",
      "Rapidly halts antibiotic-associated diarrhea (AAD) and acute gastroenteritis.",
      "Thermostable formula requires zero cold-chain storage or refrigeration.",
    ],
    indications: [
      "Antibiotic-Associated Enteric Dysbiosis",
      "Irritable Bowel Syndrome (IBS-D & IBS-M)",
      "Intestinal Hyperpermeability (Leaky Gut Syndrome)",
      "Acute Infectious Gastroenteritis",
      "Enteric Mucosal Inflammation",
    ],
    packaging:
      "10 x 1g Triple-Laminate Moisture-Barrier Aluminum Foil Sachets in Mono-Carton (Shipper: 100 Boxes)",
    storage: "Store below 25°C in a dry place. Protect from moisture and heat.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Spore strains germinate upon reaching the alkaline duodenum, releasing lactic acid and bacteriocins that lower luminal pH and eradicate pathogens. Concurrently, L-Glutamine provides the essential primary metabolic fuel for enterocytes.",
    dosageGuide:
      "1 sachet dissolved in 50ml lukewarm water, milk, or beverage once or twice daily 30 minutes prior to meals.",
    faqs: [
      {
        q: "Does GastroSpore Sachet require cold-chain transport?",
        a: "No. Advanced lyophilization and spore technology guarantee full 5 Billion CFU viability at ambient room temperatures below 25°C.",
      },
    ],
    image: "/images/product_03.png",
    images: ["/images/product_03.png"],
  },
  {
    id: "vertistop-md-tablet",
    name: "VertiStop MD Sublingual Tablet",
    alternateNames: [
      "VertiStop MD 5mg",
      "Prochlorperazine Maleate MD Tablets IP",
      "VertiStop 5mg",
    ],
    strength: "10 x 10 Tablets",
    type: "Mouth Dissolving Tablet",
    category: "Vestibular Disorders & Antiemetic Therapy",
    composition: "Prochlorperazine Maleate Mouth Dissolving Tablets IP 5mg",
    activeIngredient: "Prochlorperazine Maleate IP 5mg",
    dosageForm: "Mouth Dissolving Sublingual Tablet",
    pharmacopoeia: "Indian Pharmacopoeia (IP)",
    therapeuticClass: "D2-Dopaminergic Antagonist & Vestibular Suppressant",
    legalStatus: "Schedule H Prescription",
    price: 105.0,
    ratingValue: "4.9",
    reviewCount: "98",
    shortDescription:
      "Fast-disintegrating sublingual tablet engineered for rapid abortive therapy in acute vertigo attacks, vestibular labyrinthitis, and severe nausea.",
    description:
      "VertiStop MD features a superdisintegrant matrix that dissolves on the tongue in under 15 seconds without water. Sublingual vascular absorption bypasses hepatic first-pass metabolism to deliver rapid suppression of the Chemoreceptor Trigger Zone (CTZ).",
    keywords:
      "vertistop md tablet, prochlorperazine 5mg mouth dissolving, acute vertigo tablet, meniere disease treatment, vanguard therapeutics vertigo",
    bulletPoints: [
      "Sublingual disintegration under 15 seconds allows rapid administration during acute emetic episodes.",
      "Bypasses first-pass hepatic clearance, delivering therapeutic plasma levels within 10 minutes.",
      "Potent dopamine D2 antagonist at the medullary CTZ to immediately suppress nausea and retching.",
      "Depresses vestibular neuronal firing in the labyrinthine apparatus to halt head-spinning sensations.",
      "Supplied in moisture-proof Alu-Alu blister packaging for hospital and retail stability.",
    ],
    indications: [
      "Acute Peripheral & Central Vertigo",
      "Labyrinthitis & Vestibular Neuronitis",
      "Ménière's Disease Acute Exacerbations",
      "Severe Motion & Travel Sickness",
      "Migraine-Associated Nausea and Vomiting",
    ],
    packaging:
      "10 Strips x 10 Tablets (100 Tablets) in Alu-Alu Blister Carton (Shipper: 50 Boxes)",
    storage: "Store below 30°C protected from light, direct heat, and moisture.",
    shelfLife: "36 Months from manufacturing date",
    mechanism:
      "Prochlorperazine competitively antagonizes dopamine D2 receptors in the area postrema of the fourth ventricle. It additionally exerts anticholinergic effects that suppress vestibular neuronal hyper-excitability in the inner ear.",
    dosageGuide:
      "Place 1 tablet sublingually or in the buccal cavity; allow to dissolve completely. Dosage: 1-2 tablets twice daily as prescribed by a medical specialist.",
    faqs: [
      {
        q: "Why is the Mouth Dissolving (MD) form preferred in acute vertigo?",
        a: "Patients experiencing severe vertigo typically suffer from concurrent nausea and vomiting, making swallowing conventional tablets difficult. MD tablets dissolve instantly in saliva, delivering medication directly through oral mucosa.",
      },
    ],
    image: "/images/product_04.png",
    images: ["/images/product_04.png"],
  },
  {
    id: "somnopure-cr-tablet",
    name: "SomnoPure Dual-Phase Tablet",
    alternateNames: [
      "SomnoPure CR Tablet",
      "Lactium Melatonin Biphasic Tablet",
      "SomnoPure Sleep",
    ],
    strength: "10 x 10 Tablets",
    type: "Controlled-Release Bilayer Tablet",
    category: "Sleep Architecture & Neurological Stress Regulation",
    composition:
      "Bioactive Milk Peptide (Alpha-Casozepine 150mg) with Melatonin 3mg (Dual-Release: 1mg Immediate + 2mg Sustained)",
    activeIngredient:
      "Alpha-Casozepine (Bioactive Lactium Peptides) 150mg, Melatonin 3mg",
    dosageForm: "Bilayer Controlled-Release Oral Tablet",
    pharmacopoeia: "In-House Validated Formulation",
    therapeuticClass: "GABA-A Allosteric Modulator & Chronobiotic Regulator",
    legalStatus: "OTC Healthcare Formulation",
    price: 275.0,
    ratingValue: "4.8",
    reviewCount: "63",
    shortDescription:
      "Non-sedative dual-phase sleep architecture formulation combining GABA-modulating alpha-casozepine peptides with biphasic melatonin for restorative sleep.",
    description:
      "SomnoPure Dual-Phase Tablet synchronizes circadian timing with central nervous system desensitization. The immediate phase initiates rapid sleep onset within 30 minutes, while the sustained-release matrix maintains nocturnal sleep continuity without morning hangover or dependence.",
    keywords:
      "somnopure tablet, lactium melatonin controlled release, natural non habit forming sleep aid, circadian rhythm tablet, vanguard therapeutics somnopure",
    bulletPoints: [
      "Patented Alpha-Casozepine peptide binds GABA-A benzodiazepine sites without causing receptor downregulation or tolerance.",
      "Dual-phase release architecture resolves both sleep latency (falling asleep) and sleep maintenance (midnight awakening).",
      "Significantly attenuates nighttime sympathetic tone and salivary cortisol levels.",
      "100% non-habit forming with zero motor impairment, rebound insomnia, or next-day cognitive fog.",
      "Validated for shift workers, jet-lag recovery, and stress-induced insomnia protocols.",
    ],
    indications: [
      "Primary Psychophysiological Insomnia",
      "Circadian Rhythm Sleep-Wake Phase Disorders",
      "Chronic Work-Related Stress & Nighttime Hyperarousal",
      "Frequent Nocturnal Awakenings",
      "Jet Lag Desynchronization",
    ],
    packaging:
      "10 Strips x 10 Tablets (100 Tablets) in Tropical Alu-Alu Blister Pack (Shipper: 50 Boxes)",
    storage:
      "Store in a cool, dry place below 25°C. Protect from moisture and direct sunlight.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Alpha-casozepine acts as a selective allosteric agonist at the GABA-A receptor alpha-1 subunit, inducing anxiolysis without myorelaxant or hypnotic side effects. Melatonin binds to suprachiasmatic MT1/MT2 receptors to reset the circadian pacemaker.",
    dosageGuide:
      "1 tablet ingested with water 30 to 45 minutes before intended bedtime, or as directed by a healthcare practitioner.",
    faqs: [
      {
        q: "Does SomnoPure cause physiological dependence or tolerance?",
        a: "No. Unlike synthetic Z-drugs or benzodiazepines, Alpha-Casozepine and Melatonin modulate endogenous receptor pathways without causing receptor habituation, dependency, or withdrawal symptoms upon cessation.",
      },
    ],
    image: "/images/product_05.png",
    images: ["/images/product_05.png"],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
