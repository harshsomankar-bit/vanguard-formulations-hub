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

export const SITE_URL = "https://reditionpharma.com";

export const company = {
  name: "Redition Pharma Ltd.",
  brand: "Redition Pharma",
  address: "Plot 42, GIDC Industrial Estate, Vadodara, Gujarat 390010, India",
  phone: "+91 98250 12345",
  email: "trade@reditionpharma.com",
};

export const products: Product[] = [
  {
    id: "adnosine-108-tablets",
    name: "ADNOSINE-108 Tablets",
    alternateNames: [
      "ADNOSINE 108",
      "Adenosine 5-Monophosphate AMP Tablets",
      "L-Arginine Decarboxylated & L-Carnosine Tablets",
      "Adnosine Tablets Redition Pharma",
    ],
    strength: "10 x 1 x 10 Tablets",
    type: "Film-Coated Nutraceutical Formulation",
    category: "Neurovascular & Mitochondrial Bioenergetics",
    composition:
      "Adenosine 5-Monophosphate (AMP) 2.5mg, L-Arginine Decarboxylated 2.5mg & L-Carnosine 25.0mg",
    activeIngredient:
      "Adenosine 5-Monophosphate (AMP), Decarboxylated L-Arginine (Agmatine), L-Carnosine",
    dosageForm: "Film-Coated Tablet",
    pharmacopoeia: "In-House Validated Nutraceutical Monograph",
    therapeuticClass: "Neuro-Mitochondrial Cytoprotective & Cellular Bioenergetics Agent",
    legalStatus: "OTC Healthcare Formulation",
    price: 1450.0,
    ratingValue: "4.95",
    reviewCount: "142",
    shortDescription:
      "Targeted tri-action neuro-mitochondrial bioenergetic formulation combining Adenosine 5-Monophosphate (AMP), Decarboxylated L-Arginine, and L-Carnosine to restore cellular ATP, accelerate nerve conduction, and shield axons against glycation and oxidative damage.",
    description:
      "ADNOSINE-108 Tablets represent an advanced therapeutic breakthrough in neurovascular microcirculation and cellular bioenergetics. Formulated by Redition Pharma under strict cleanroom GMP protocols, ADNOSINE-108 integrates pharmaceutical-grade Adenosine 5-Monophosphate (AMP), Decarboxylated L-Arginine, and L-Carnosine. AMP functions as an immediate precursor to ATP and purinergic cyclic-AMP (cAMP), restoring trans-membrane ionic gradients in ischemic and fatigued neural tissue. Decarboxylated L-Arginine selectively downregulates excitotoxic NMDA channels and enhances endothelial nitric oxide synthase (eNOS) for microvascular vasodilation. Concurrently, L-Carnosine acts as a brain-penetrating anti-glycation dipeptide that quenches toxic reactive oxygen species (ROS) and halts advanced glycation end-product (AGE) accumulation along axonal myelin sheaths.",
    keywords:
      "adnosine 108 tablets, adenosine 5-monophosphate tablets, amp l-arginine decarboxylated, l-carnosine tablets, diabetic peripheral neuropathy, mitochondrial bioenergetics, nerve conduction velocity, redition pharma, institutional hospital medicine, nutraceutical tablets",
    bulletPoints: [
      "Targeted Tri-Pathway Synergism: Re-energizes cellular ATP reserves, promotes microvascular perfusion, and arrests axonal lipid peroxidation.",
      "Adenosine 5-Monophosphate (AMP 2.5mg): Rapidly restores high-energy purinergic phosphorylation and neuromuscular signal transduction.",
      "Decarboxylated L-Arginine (2.5mg): Dual NMDA receptor antagonism and selective endothelial microcirculation enhancement for rapid neuropathic relief.",
      "L-Carnosine (25.0mg): High-potency anti-glycation dipeptide protecting peripheral nerve fibers against advanced glycation end-products (AGEs).",
      "Pharmaceutical Blister Strip Packaging: 10 x 1 x 10 film-coated tablets in individual moisture-barrier foils ensuring complete shelf-stability.",
    ],
    indications: [
      "Diabetic Peripheral Neuropathy & Axonal Hypoperfusion",
      "Cellular Mitochondrial Dysfunction & ATP Exhaustion",
      "Peripheral Microvascular Insufficiency & Paresthesia (Numbness/Tingling)",
      "Cerebrovascular & Neuro-Oxidative Stress Protection",
      "Post-Ischemic Neuronal Recovery & Nerve Conduction Regeneration",
    ],
    packaging:
      "10 Strips x 1 x 10 Film-Coated Tablets per outer mono-carton (100 Tablets Box / Master Shipper: 40 Boxes)",
    storage:
      "Store in a cool, dry place. Protect from direct sunlight and moisture. Keep out of reach of children.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Adenosine 5-Monophosphate (AMP) acts at P2 purinergic receptors and serves as a direct nucleotide precursor in intracellular ATP resynthesis, correcting the energetic deficit in ischemic and hypoxic neural tissue. Decarboxylated L-Arginine binds with high affinity to alpha-2 adrenergic and imidazoline receptors while attenuating neuronal nitric oxide synthase (nNOS), resulting in reduced neuroinflammation and improved endothelial capillary microcirculation. L-Carnosine scavenges cytotoxic alpha-beta unsaturated aldehydes and hydroperoxides while preventing cross-linking of neural structural proteins.",
    dosageGuide:
      "Adults: One tablet once or twice daily after meals with water, or as directed by the prescribing physician/healthcare practitioner.",
    faqs: [
      {
        q: "What is ADNOSINE-108 Tablets prescribed or recommended for?",
        a: "ADNOSINE-108 Tablets is an advanced nutraceutical neurovascular formulation designed to support peripheral nerve regeneration, enhance mitochondrial ATP synthesis, and improve microvascular blood flow in conditions like diabetic neuropathy, paresthesia, and cellular metabolic exhaustion.",
      },
      {
        q: "What is the active composition of each ADNOSINE-108 tablet?",
        a: "Each film-coated tablet contains Adenosine 5-Monophosphate (AMP) 2.5 mg, Decarboxylated L-Arginine 2.5 mg, and L-Carnosine 25.0 mg, formulated with pharmaceutical-grade excipients and appropriate overages to ensure 100% active retention throughout its 24-month shelf life.",
      },
      {
        q: "How does Adenosine 5-Monophosphate (AMP) benefit nerve health?",
        a: "AMP directly participates in cellular bioenergetics by serving as a building block for ATP and cyclic AMP (cAMP). This fuels the Na+/K+-ATPase pumps essential for electrical signal conduction across nerve axons.",
      },
      {
        q: "Is batch-specific Certificate of Analysis (COA) provided for institutional orders?",
        a: "Yes. Every commercial batch of ADNOSINE-108 dispatched by Redition Pharma includes a validated Certificate of Analysis verifying assay potency, dissolution profile, and heavy metal/microbial compliance.",
      },
    ],
    image: "/images/products/adnosine-108-1.png",
    images: [
      "/images/products/adnosine-108-1.png",
      "/images/products/adnosine-108-2.png",
      "/images/products/adnosine-108-3.png",
      "/images/products/adnosine-108-4.png",
    ],
  },
  {
    id: "macsine-109-tablets",
    name: "MACSINE-109 Tablets",
    alternateNames: [
      "MACSINE 109",
      "Methylcobalamin Alpha Lipoic Acid Benfotiamine Tablets",
      "Macsine Neuro Tablets",
      "Macsine Redition Pharma",
    ],
    strength: "10 x 1 x 10 Tablets",
    type: "Film-Coated Multivitamin & Neuro-Regenerative Tablets",
    category: "Diabetic Neuropathy & Axonal Myelin Remodeling",
    composition:
      "Alpha Lipoic Acid 100mg, Benfotiamine 100mg, Calcium Carbonate 500mg, Chromium Picolinate 200mcg, Folic Acid 1.5mg, Inositol 100mg, Methylcobalamin 1500mcg, Pyridoxine HCl 3mg & Vitamin D3 1000 IU",
    activeIngredient:
      "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine, Calcium Carbonate, Chromium Picolinate, Folic Acid, Inositol, Pyridoxine HCl, Vitamin D3",
    dosageForm: "Film-Coated Tablet",
    pharmacopoeia: "In-House Validated Monograph",
    therapeuticClass: "Neurotrophic & Diabetic Microvascular Complex",
    legalStatus: "OTC Healthcare Formulation",
    price: 1380.0,
    ratingValue: "4.92",
    reviewCount: "116",
    shortDescription:
      "Synergistic 9-compound neurotrophic formulation combining Methylcobalamin, Alpha Lipoic Acid, Benfotiamine, Chromium Picolinate, Inositol, and essential cofactors to regenerate damaged myelin sheaths, accelerate nerve conduction velocity, and control neuropathic paresthesia.",
    description:
      "MACSINE-109 Tablets deliver targeted, high-potency nutritional pharmacotherapy for peripheral neuropathy and metabolic nerve damage. Featuring 1500mcg active Methylcobalamin alongside 100mg Benfotiamine (fat-soluble vitamin B1) and 100mg Alpha Lipoic Acid, MACSINE-109 promotes rapid remyelination, blocks advanced glycation end-products, and restores intracellular glutathione levels in stressed nerve bundles.",
    keywords:
      "macsine 109 tablets, methylcobalamin alpha lipoic acid benfotiamine, diabetic neuropathy tablets, nerve regeneration, redition pharma macsine, chromium picolinate inositol, institutional pharmacy supply",
    bulletPoints: [
      "Comprehensive 9-in-1 Neuro-Regenerative Matrix targeting multi-factorial neuropathy pathways.",
      "Methylcobalamin (1500 mcg): Active coenzyme form of B12 that stimulates myelin basic protein synthesis.",
      "Benfotiamine (100 mg): Fat-soluble thiamine with 5x higher tissue bioavailability, inhibiting harmful hexosamine and PKC pathways.",
      "Alpha Lipoic Acid (100 mg): Universal lipid- and water-soluble antioxidant restoring endoneurial microvascular blood flow.",
      "Blister Foil Protection: 10 x 1 x 10 film-coated tablets blister packaging preventing light and moisture degradation.",
    ],
    indications: [
      "Diabetic Peripheral Neuropathy (Pain, Tingling, Burning, Numbness)",
      "Alcoholic & Drug-Induced Polyneuropathy",
      "Sciatica, Cervical Radiculopathy & Lumbago",
      "Post-Herpetic Neuralgia",
      "Axonal Demyelination & Microvascular Hypoperfusion",
    ],
    packaging:
      "10 Strips x 1 x 10 Film-Coated Tablets per outer carton (100 Tablets Box / Shipper: 40 Boxes)",
    storage:
      "Store below 25°C in a dry environment. Protect from moisture and direct light.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Methylcobalamin promotes transmethylation and synthesis of lecithin, an essential component of the myelin sheath. Benfotiamine activates transketolase, blocking toxic glycolytic metabolites. Alpha Lipoic Acid reduces lipid peroxidation and enhances neurovascular blood perfusion, while Chromium and Inositol modulate cellular insulin sensitivity.",
    dosageGuide:
      "1 tablet daily after main meal with water, or as prescribed by a medical practitioner.",
    faqs: [
      {
        q: "What conditions are treated with MACSINE-109 Tablets?",
        a: "MACSINE-109 is formulated to treat and alleviate diabetic peripheral neuropathy, nerve burning sensations, numbness, tingling in hands and feet, sciatica, and radicular back pain.",
      },
      {
        q: "What makes Benfotiamine in MACSINE-109 superior to regular Vitamin B1?",
        a: "Benfotiamine is lipid-soluble, allowing it to penetrate cell membranes effortlessly and achieve 5 times higher blood concentrations and up to 25 times higher tissue concentrations than standard water-soluble thiamine.",
      },
    ],
    image: "/images/products/macsine-109-1.png",
    images: [
      "/images/products/macsine-109-1.png",
      "/images/products/macsine-109-2.png",
      "/images/products/macsine-109-3.png",
      "/images/products/macsine-109-4.png",
    ],
  },
  {
    id: "qlong-gold-tablets",
    name: "QLONG-GOLD Tablets",
    alternateNames: [
      "QLONG GOLD",
      "L-Arginine L-Citrulline Pine Bark Fenugreek Tablets",
      "Qlong Gold Redition Pharma",
    ],
    strength: "10 x 10 Tablets (100 Tablets)",
    type: "Botanical & Amino Acid Vitality Complex",
    category: "Endothelial Nitric Oxide & Adult Vitality",
    composition:
      "L-Arginine, L-Citrulline, Fenugreek Extract, Biopeprine, Tribulus Terrestris Extract, Hypericum Perforatum Extract, Pine Bark Extract, Mucuna Pruriens, Zinc and Vitamin D2 Tablets",
    activeIngredient:
      "L-Arginine, L-Citrulline, Pine Bark Extract, Fenugreek, Tribulus Terrestris, Mucuna Pruriens, Biopeprine, Zinc, Vitamin D2",
    dosageForm: "Tablet",
    pharmacopoeia: "Standardized Botanical & Mineral Complex",
    therapeuticClass: "Nitric Oxide Precursor & Adaptogenic Endothelial Health",
    legalStatus: "OTC Healthcare Formulation",
    price: 1650.0,
    ratingValue: "4.9",
    reviewCount: "98",
    shortDescription:
      "Dual nitric oxide booster and adaptogenic vitality complex combining L-Arginine, L-Citrulline, Pine Bark Extract, Fenugreek, and Biopeprine to optimize endothelial microvascular circulation and cellular stamina.",
    description:
      "QLONG-GOLD is a multi-action adult formulation engineered to stimulate endogenous nitric oxide (NO) generation and vascular endothelial tone. The dual L-Arginine and L-Citrulline matrix provides sustained blood flow optimization, while standardized botanical extracts of Pine Bark, Fenugreek, Tribulus, and Mucuna Pruriens work synergistically with Biopeprine for enhanced absorption, vitality, and cellular endurance.",
    keywords:
      "qlong gold tablets, l-arginine l-citrulline tablets, pine bark extract fenugreek, nitric oxide supplement, endothelial blood flow, adult vitality tablets, redition pharma qlong",
    bulletPoints: [
      "Dual Nitric Oxide Precursors: L-Arginine and L-Citrulline promote continuous endothelial vasodilation.",
      "Bio-Enhanced with Biopeprine (Piperine): Maximizes nutrient intestinal permeability and active absorption.",
      "Pine Bark Extract: Potent source of oligomeric proanthocyanidins (OPCs) supporting vascular elasticity.",
      "Standardized Adaptogenic Phytotherapy: Includes Tribulus Terrestris, Mucuna Pruriens, and Fenugreek for cellular stamina.",
      "Target Consumer: Adults seeking cardiovascular microperfusion, physical vitality, and cellular recovery.",
    ],
    indications: [
      "Endothelial Microvascular Insufficiency",
      "Physical Fatigue & Decreased Stamina in Adults",
      "Cardiovascular Arterial Elasticity & Peripheral Perfusion Support",
      "Nitric Oxide Depletion & Exercise Recovery",
      "Adaptogenic Stress & Vitality Modulation",
    ],
    packaging:
      "10 Strips x 10 Tablets (100 Tablets Box / Master Shipper: 40 Boxes)",
    storage:
      "Store in a cool, dry place. Protect from heat, light, and moisture.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "L-Arginine is the direct substrate for nitric oxide synthase (NOS), yielding nitric oxide (NO) which activates soluble guanylyl cyclase (sGC) to induce cyclic GMP (cGMP) synthesis and smooth muscle relaxation. L-Citrulline bypasses first-pass hepatic metabolism and is recycled into L-Arginine in the kidneys for prolonged NO production. Pine Bark proanthocyanidins scavenge free radicals that degrade NO, while Biopeprine enhances gastrointestinal absorption.",
    dosageGuide:
      "Adults: 1 tablet twice daily after meals with water, or as recommended by a healthcare professional.",
    faqs: [
      {
        q: "Who should take QLONG-GOLD Tablets?",
        a: "QLONG-GOLD is targeted for adults seeking to support microvascular circulation, physical vitality, endurance, and cellular energy.",
      },
    ],
    image: "/images/qlong-gold-pack.png",
    images: ["/images/qlong-gold-pack.png"],
  },
  {
    id: "predy-nt-tablets",
    name: "PREDY-NT 37.5/10 Tablets",
    alternateNames: [
      "PREDY NT",
      "Pregabalin Sustained Release with Nortriptyline Hydrochloride Tablets",
      "Predy NT 37.5 10",
      "Predy NT Redition Pharma",
    ],
    strength: "10 x 10 Tablets",
    type: "Sustained-Release Film-Coated Tablets",
    category: "Neuropathic Analgesia & CNS Neuromodulation",
    composition:
      "Pregabalin (Sustained Release) 37.5mg with Nortriptyline Hydrochloride 10mg Tablets",
    activeIngredient:
      "Pregabalin (Sustained Release), Nortriptyline Hydrochloride",
    dosageForm: "Sustained-Release Film-Coated Tablet",
    pharmacopoeia: "IP / In-House Validated Monograph",
    therapeuticClass: "Dual Alpha-2-Delta Ligand & Tricyclic Neuropathic Analgesic",
    legalStatus: "Schedule H Prescription",
    price: 150.0,
    ratingValue: "4.94",
    reviewCount: "136",
    shortDescription:
      "Synergistic dual-action neuropathic pain formulation combining Sustained-Release Pregabalin (37.5mg) with Nortriptyline Hydrochloride (10mg) for 24-hour relief of diabetic neuropathy, post-herpetic neuralgia, and chronic radiculopathy with reduced sedation.",
    description:
      "PREDY-NT 37.5/10 Tablets provide balanced, round-the-clock neuropathic pain relief. Manufactured under strict Schedule M GMP standards by Redition Pharma, this formulation features sustained-release Pregabalin to modulate hyper-excited voltage-gated calcium channels in the spinal cord alongside Nortriptyline Hydrochloride to enhance descending noradrenergic inhibitory pain pathways. The sustained-release matrix ensures stable plasma levels, preventing peak-related dizziness while offering superior nocturnal analgesic coverage and restorative sleep.",
    keywords:
      "predy nt tablets, pregabalin sustained release nortriptyline, predy nt 37.5 10, diabetic neuropathy pain relief, redition pharma predy nt, neuropathic analgesia schedule h, hospital tender supply",
    bulletPoints: [
      "Sustained-Release Pregabalin (37.5mg): Steady-state 24-hour plasma concentrations eliminating peak-related dizziness and daytime sedation.",
      "Nortriptyline Hydrochloride (10mg): Amplifies descending noradrenergic inhibitory pain modulation and improves restorative sleep.",
      "Synergistic 37.5/10 Low-Dose Ratio: Delivers potent clinical analgesia at lower individual doses with high patient tolerability.",
      "Authentic Batch Verification: Batch No. BCT26743 with complete regulatory Certificate of Analysis (COA) compliance.",
      "10 x 10 Tablets Packaging: Protected in moisture-barrier blister foils inside UV-resistant clinical mono-carton.",
    ],
    indications: [
      "Diabetic Peripheral Neuropathic Pain (DPNP)",
      "Post-Herpetic Neuralgia (PHN)",
      "Cervical & Lumbar Radiculopathy / Sciatica",
      "Spinal Cord Injury Neuropathic Pain",
      "Fibromyalgia & Chronic Central Pain Syndromes",
    ],
    packaging:
      "10 Strips x 10 Sustained-Release Tablets per carton (100 Tablets Box / Master Shipper: 60 Boxes)",
    storage:
      "Store between 10°C to 20°C in a dry place. Protect from direct sunlight and moisture. Tablet should be swallowed whole.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Pregabalin binds selectively to the alpha-2-delta auxiliary subunit of voltage-gated calcium channels in presynaptic neurons, decreasing calcium influx and suppressing the release of pro-nociceptive neurotransmitters (glutamate, substance P, and calcitonin gene-related peptide). Nortriptyline simultaneously blocks the reuptake of norepinephrine and serotonin at central synapses, reinforcing descending inhibitory control over dorsal horn nociceptive transmission.",
    dosageGuide:
      "As directed by the physician (Schedule H Prescription). Typically 1 tablet once daily at bedtime, swallowed whole with water without crushing or chewing.",
    faqs: [
      {
        q: "What is PREDY-NT 37.5/10 Tablets indicated for?",
        a: "PREDY-NT 37.5/10 is indicated for the management of chronic neuropathic pain conditions, including diabetic peripheral neuropathy, nerve injury pain, sciatica, and post-herpetic neuralgia.",
      },
      {
        q: "Why is the tablet formulated with Sustained Release (SR)?",
        a: "The sustained-release formulation provides consistent therapeutic plasma concentrations over 24 hours, preventing the steep plasma spikes and troughs associated with immediate-release pregabalin that often cause dizziness and sedation.",
      },
      {
        q: "Can PREDY-NT tablets be crushed or broken in half?",
        a: "No. PREDY-NT must be swallowed whole with water to preserve the integrity of the sustained-release matrix. Crushing or chewing the tablet may cause rapid dumping of the active medication.",
      },
    ],
    image: "/images/products/predy-nt-1.png",
    images: [
      "/images/products/predy-nt-1.png",
      "/images/products/predy-nt-2.png",
      "/images/products/predy-nt-3d.png",
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
