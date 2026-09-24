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
  founder: "Nilesh Kumar",
  address: "101, 1st Floor, Bhumi Park Society, Punagam Chorasi Bombay Market, Surat, Gujarat 395010, India",
  phone: "+91 79877 79819",
  phone2: "+91 98935 97108",
  email: "reditionpharma@gmail.com",
  fssai: "12116801000249",
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
    image: "/images/products/adnosine-108-1.jpg",
    images: [
      "/images/products/adnosine-108-1.jpg",
      "/images/products/adnosine-108-2.jpg",
      "/images/products/adnosine-108-3.jpg",
      "/images/products/adnosine-108-4.jpg",
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
    image: "/images/products/macsine-109-1.jpg",
    images: [
      "/images/products/macsine-109-1.jpg",
      "/images/products/macsine-109-2.jpg",
      "/images/products/macsine-109-3.jpg",
      "/images/products/macsine-109-4.jpg",
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
    image: "/images/qlong-gold-pack.jpg",
    images: ["/images/qlong-gold-pack.jpg"],
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
    image: "/images/products/predy-nt-1.jpg",
    images: [
      "/images/products/predy-nt-1.jpg",
      "/images/products/predy-nt-2.jpg",
    ],
  },
  {
    id: "predy-nt-75-tablets",
    name: "PREDY-NT 75/10 Tablets",
    alternateNames: [
      "PREDY NT 75",
      "Pregabalin Nortriptyline Hydrochloride Tablets",
      "Predy NT 75 10",
      "Predy NT 75 Redition Pharma",
    ],
    strength: "10 x 10 Tablets",
    type: "Film-Coated Tablets",
    category: "Neuropathic Analgesia & CNS Neuromodulation",
    composition:
      "Pregabalin 75mg with Nortriptyline Hydrochloride 10mg Tablets",
    activeIngredient:
      "Pregabalin, Nortriptyline Hydrochloride",
    dosageForm: "Film-Coated Tablet",
    pharmacopoeia: "IP / In-House Validated Monograph",
    therapeuticClass: "Dual Alpha-2-Delta Ligand & Tricyclic Neuropathic Analgesic",
    legalStatus: "Schedule H Prescription",
    price: 199.0,
    ratingValue: "4.91",
    reviewCount: "98",
    shortDescription:
      "Higher-potency dual-action neuropathic pain formulation combining Pregabalin (75mg) with Nortriptyline Hydrochloride (10mg) for robust management of moderate-to-severe diabetic neuropathy, post-herpetic neuralgia, and refractory radiculopathy.",
    description:
      "PREDY-NT 75/10 Tablets deliver an intensified neuropathic pain management protocol for patients requiring higher pregabalin dosing. Manufactured under strict WHO-GMP Schedule M standards by Redition Pharma, this formulation pairs full-dose Pregabalin (75mg) with Nortriptyline Hydrochloride (10mg) for synergistic voltage-gated calcium channel modulation and descending noradrenergic inhibitory pathway enhancement. Ideal for step-up therapy from PREDY-NT 37.5/10 or as first-line treatment in moderate-to-severe neuropathic pain.",
    keywords:
      "predy nt 75 tablets, pregabalin 75mg nortriptyline, predy nt 75 10, neuropathic pain tablets, redition pharma predy nt 75, schedule h neuropathic analgesic, hospital tender supply",
    bulletPoints: [
      "Full-Dose Pregabalin (75mg): Robust alpha-2-delta calcium channel modulation for moderate-to-severe neuropathic pain control.",
      "Nortriptyline Hydrochloride (10mg): Reinforces descending noradrenergic inhibitory pain pathways and improves sleep architecture.",
      "Step-Up Therapy Option: Ideal escalation from PREDY-NT 37.5/10 for patients with inadequate pain control at lower doses.",
      "Authentic Batch Verification: Batch No. BC71477 with complete regulatory Certificate of Analysis (COA) compliance.",
      "10 x 10 Tablets Packaging: Protected in moisture-barrier Alu-Alu blister foils inside UV-resistant clinical mono-carton.",
    ],
    indications: [
      "Moderate-to-Severe Diabetic Peripheral Neuropathic Pain (DPNP)",
      "Post-Herpetic Neuralgia (PHN)",
      "Cervical & Lumbar Radiculopathy / Sciatica",
      "Spinal Cord Injury Neuropathic Pain",
      "Fibromyalgia & Chronic Central Pain Syndromes",
      "Refractory Neuropathic Pain (Step-Up from Lower Dose)",
    ],
    packaging:
      "10 Strips x 10 Film-Coated Tablets per carton (100 Tablets Box / Master Shipper: 60 Boxes)",
    storage:
      "Store below 25°C in a dry place. Protect from direct sunlight and moisture. Keep out of reach of children.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Pregabalin 75mg provides potent binding to the alpha-2-delta auxiliary subunit of voltage-gated calcium channels in presynaptic neurons, substantially decreasing calcium influx and suppressing excitatory neurotransmitter release (glutamate, substance P, and CGRP). Nortriptyline simultaneously blocks norepinephrine and serotonin reuptake, reinforcing descending inhibitory control over dorsal horn nociceptive transmission for comprehensive pain modulation.",
    dosageGuide:
      "As directed by the physician (Schedule H Prescription). Typically 1 tablet once or twice daily, swallowed whole with water. Do not crush or chew.",
    faqs: [
      {
        q: "How does PREDY-NT 75/10 differ from PREDY-NT 37.5/10?",
        a: "PREDY-NT 75/10 contains double the Pregabalin dose (75mg vs 37.5mg) for patients requiring stronger neuropathic pain control. The Nortriptyline component remains 10mg in both strengths. It is prescribed as a step-up when the lower strength provides insufficient relief.",
      },
      {
        q: "What is the MRP of PREDY-NT 75/10?",
        a: "The MRP is ₹199.00 per strip of 10 tablets (inclusive of all taxes). Institutional and tender pricing is available on request.",
      },
      {
        q: "Can PREDY-NT 75/10 be prescribed as first-line therapy?",
        a: "Yes. In patients with moderate-to-severe neuropathic pain, physicians may initiate PREDY-NT 75/10 directly based on clinical severity, prior treatment history, and tolerability assessment.",
      },
    ],
    image: "/images/products/predy-nt-75-1.jpg",
    images: [
      "/images/products/predy-nt-75-1.jpg",
    ],
  },
  {
    id: "adnocar-ds-syrup",
    name: "ADNOCAR-DS™ Syrup",
    alternateNames: [
      "ADNOCAR DS Syrup",
      "ADNOCAR-DS",
      "L-Carnosine DHA EPA Syrup",
      "Adnocar Syrup Redition Pharma",
    ],
    strength: "200 ml",
    type: "Health Supplement / Dietary Oral Liquid Formulation",
    category: "Pediatric Neurodevelopment & Cognitive Vitality",
    composition:
      "Each 5ml contains: L-Carnosine 200mg, DHA (Docosahexaenoic Acid) 550mg, EPA (Eicosapentaenoic Acid) 200mg, Vitamin B6 150mg, Vitamin D3 1500 IU & Co-Enzyme Q10 100mg in flavoured base (Mango Flavour)",
    activeIngredient:
      "L-Carnosine, Docosahexaenoic Acid (DHA), Eicosapentaenoic Acid (EPA), Pyridoxine (Vitamin B6), Cholecalciferol (Vitamin D3), Ubidecarenone (Co-Enzyme Q10)",
    dosageForm: "Oral Liquid / Syrup (Mango Flavour)",
    pharmacopoeia: "FSSAI Dietary Supplement / In-House Validated Monograph",
    therapeuticClass: "Neurotrophic, Cognitive Development & Mitochondrial Antioxidant Supplement",
    legalStatus: "OTC Healthcare Formulation",
    price: 890.0,
    ratingValue: "4.96",
    reviewCount: "118",
    shortDescription:
      "Advanced 6-in-1 neurodevelopmental oral syrup with L-Carnosine 200mg, high-potency DHA 550mg, EPA 200mg, Co-Q10 100mg, Vitamin B6 & Vitamin D3 in delicious mango flavour for cognitive growth and neuronal health.",
    description:
      "ADNOCAR-DS™ Syrup is an advanced clinical health supplement engineered to support pediatric and adolescent neurocognitive development, attention span, speech enhancement, and cellular energy synthesis. Powered by high-concentration Docosahexaenoic Acid (DHA 550mg) and Eicosapentaenoic Acid (EPA 200mg) for synaptogenesis and cell membrane fluidity, synergized with L-Carnosine (200mg) to shield neural tissues from oxidative carbonyl stress. Co-Enzyme Q10 (100mg) fuels mitochondrial ATP synthesis across cerebral cortex networks, while Pyridoxine (Vitamin B6) and Vitamin D3 (1500 IU) support neurotransmitter metabolism and neuroimmune balance in a delicious, patient-friendly mango-flavoured base.",
    keywords:
      "adnocar ds syrup, l-carnosine dha epa syrup, speech delay syrup, pediatric cognitive syrup, coq10 brain health syrup redition pharma, adnocar-ds mango flavour",
    bulletPoints: [
      "High-potency Omega-3 PUFAs: 550mg DHA + 200mg EPA per 5ml for synaptic growth and brain lipid architecture.",
      "L-Carnosine 200mg defends against glycation, lipid peroxidation, and neuroinflammation in developing brains.",
      "Co-Enzyme Q10 (100mg) fuels neuronal mitochondrial bioenergetics and cellular energy generation.",
      "Fortified with Vitamin B6 (150mg) and Vitamin D3 (1500 IU) for monoamine neurotransmitter synthesis.",
      "Patient-compliant delicious mango flavour, manufactured in WHO-GMP / ISO / IAF certified facilities.",
      "FSSAI License No. 12116801000249 registered dietary supplement.",
    ],
    indications: [
      "Pediatric speech, vocabulary, and communication delays",
      "Attention deficit, hyperactivity, and focus enhancement",
      "Cognitive development, learning aptitude, and memory consolidation",
      "Neuroprotection against oxidative stress and neuronal mitochondrial exhaustion",
      "Nutritional optimization during peak neurodevelopmental milestones",
    ],
    packaging: "200 ml Amber PET bottle in tamper-evident protective outer carton",
    storage: "Store in a cool, dry & dark place. Protect from direct light and moisture. Shake well before use.",
    shelfLife: "24 Months from date of manufacture",
    mechanism:
      "DHA (Docosahexaenoic Acid) integrates into neuronal phospholipid bilayers, modulating membrane elasticity, synaptic vesicle docking, and rhodopsin activation. EPA downregulates eicosanoid inflammatory cascades. L-Carnosine acts as a targeted dipeptide antioxidant protecting microglial and neuronal mitochondrial membranes from malondialdehyde and advanced lipoxidation end-products (ALEs). Co-Enzyme Q10 acts as the fundamental mobile electron shuttle in mitochondrial respiratory Complexes I/II to III, maximizing cortical ATP supply.",
    dosageGuide:
      "Children (2–12 years): 2.5 ml to 5 ml once or twice daily, or as directed by the Dietician/Pediatrician. Shake bottle thoroughly before each administration.",
    faqs: [
      {
        q: "What makes ADNOCAR-DS™ Syrup uniquely potent for pediatric speech and cognitive milestones?",
        a: "Unlike conventional multivitamins, ADNOCAR-DS™ delivers an evidence-based clinical synergy of 200mg L-Carnosine with 550mg DHA and 200mg EPA, co-formulated with 100mg Co-Q10, directly supporting neurosynaptic remodeling and speech development.",
      },
      {
        q: "What flavour is ADNOCAR-DS™ Syrup and how palatable is it for young children?",
        a: "It features a premium natural mango flavour carefully formulated to mask fish oil/marine notes, ensuring high compliance among children and adolescents.",
      },
      {
        q: "Is ADNOCAR-DS™ safe for long-term daily dietary supplementation?",
        a: "Yes. It is formulated in accordance with ICMR 2020 guidelines and manufactured under WHO-GMP, ISO, and IAF quality standards with FSSAI Lic No. 12116801000249.",
      },
    ],
    image: "/images/products/adnocar-ds-1.jpg",
    images: [
      "/images/products/adnocar-ds-1.jpg",
      "/images/products/adnocar-ds-2.jpg",
      "/images/products/adnocar-ds-3.jpg",
    ],
  },
  {
    id: "etosec-mr-tablets",
    name: "ETOSEC-MR Tablets",
    alternateNames: [
      "Etosec MR",
      "Etoricoxib Thiocolchicoside Tablets",
      "Etosec MR Redition Pharma",
      "Etoricoxib 60mg Thiocolchicoside 4mg",
    ],
    strength: "10 x 27 Tablets",
    type: "Film-Coated Tablets",
    category: "Musculoskeletal Pain & Inflammation",
    composition:
      "Etoricoxib 60mg with Thiocolchicoside 4mg Tablets",
    activeIngredient:
      "Etoricoxib, Thiocolchicoside",
    dosageForm: "Film-Coated Tablet",
    pharmacopoeia: "IP / In-House Validated Monograph",
    therapeuticClass: "Selective COX-2 Inhibitor & GABA-ergic Muscle Relaxant",
    legalStatus: "Schedule H Prescription",
    price: 280.0,
    ratingValue: "4.88",
    reviewCount: "74",
    shortDescription:
      "Dual-action musculoskeletal pain formulation combining selective COX-2 inhibitor Etoricoxib (60mg) with centrally-acting muscle relaxant Thiocolchicoside (4mg) for rapid relief of acute low back pain, cervical spondylosis, and inflammatory joint disorders.",
    description:
      "ETOSEC-MR Tablets deliver targeted anti-inflammatory and muscle relaxant therapy in a single formulation. Manufactured under WHO-GMP Schedule M standards by Redition Pharma, this combination pairs Etoricoxib — a highly selective cyclooxygenase-2 (COX-2) inhibitor with superior GI tolerability — with Thiocolchicoside, a centrally-acting GABA-ergic and glycinergic muscle relaxant that reduces pathological muscle spasm without sedation. Ideal for acute musculoskeletal conditions where both inflammation and muscle spasm contribute to pain.",
    keywords:
      "etosec mr tablets, etoricoxib thiocolchicoside, etosec mr redition pharma, muscle relaxant anti inflammatory, back pain tablets, cervical spondylosis treatment, schedule h prescription",
    bulletPoints: [
      "Selective COX-2 Inhibition (Etoricoxib 60mg): Potent anti-inflammatory and analgesic action with minimal gastric mucosal irritation compared to non-selective NSAIDs.",
      "Centrally-Acting Muscle Relaxant (Thiocolchicoside 4mg): GABA-A and glycine receptor agonist providing rapid skeletal muscle relaxation without CNS sedation.",
      "Dual-Target Mechanism: Simultaneously addresses inflammatory pain cascades and reflex muscle spasm for comprehensive musculoskeletal relief.",
      "Convenient Once/Twice Daily Dosing: Etoricoxib's long 22-hour half-life enables sustained therapeutic coverage with fewer daily doses.",
      "Authentic Batch Verification: Batch No. RTG225139, Mfg. Lic. No. 1538-B & 1538-OSP with complete regulatory Certificate of Analysis (COA) compliance.",
      "10 x 27 Tablets Packaging: Alu-Alu moisture-barrier blister foils inside UV-resistant clinical mono-carton for institutional supply.",
    ],
    indications: [
      "Acute & Chronic Low Back Pain with Muscle Spasm",
      "Cervical Spondylosis & Cervicobrachial Syndrome",
      "Osteoarthritis (OA) with Associated Muscle Rigidity",
      "Rheumatoid Arthritis Flares with Periarticular Spasm",
      "Post-Operative Orthopedic Pain & Rehabilitation",
      "Ankylosing Spondylitis with Paraspinal Muscle Spasm",
    ],
    packaging:
      "10 Strips x 27 Film-Coated Tablets per carton (270 Tablets Box)",
    storage:
      "Store below 25°C in a dry place. Protect from direct sunlight and moisture. Keep out of reach of children.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Etoricoxib selectively inhibits cyclooxygenase-2 (COX-2) at the site of inflammation, blocking prostaglandin E2 synthesis and reducing pain, swelling, and inflammatory hyperalgesia without significantly inhibiting COX-1-mediated gastric mucosal protection. Thiocolchicoside acts centrally as an agonist at GABA-A and glycine receptors in the spinal cord and supraspinal centers, reducing pathological muscle tone and spasm through inhibition of polysynaptic reflex arcs.",
    dosageGuide:
      "As directed by the physician (Schedule H Prescription). Typically 1 tablet once or twice daily after food with water. Maximum duration as per physician guidance.",
    faqs: [
      {
        q: "What is ETOSEC-MR Tablets used for?",
        a: "ETOSEC-MR is prescribed for musculoskeletal conditions involving both inflammation and muscle spasm, such as acute low back pain, cervical spondylosis, osteoarthritis with muscle rigidity, and post-operative orthopedic pain.",
      },
      {
        q: "Is ETOSEC-MR safer on the stomach than traditional NSAIDs?",
        a: "Yes. Etoricoxib is a selective COX-2 inhibitor, meaning it provides anti-inflammatory action while sparing COX-1, the enzyme responsible for protective gastric mucus production. This results in significantly lower GI side effects compared to non-selective NSAIDs like diclofenac or ibuprofen.",
      },
      {
        q: "Does Thiocolchicoside cause drowsiness?",
        a: "Unlike many muscle relaxants, Thiocolchicoside acts through GABA-ergic and glycinergic pathways without significant CNS sedation, making ETOSEC-MR suitable for patients who need to remain alert during daily activities.",
      },
    ],
    image: "/images/products/etosec-mr-1.jpg",
    images: [
      "/images/products/etosec-mr-1.jpg",
      "/images/products/etosec-mr-2.jpg",
    ],
  },
  {
    id: "qvery-tablets",
    name: "QVERY Tablets",
    alternateNames: [
      "Qvery",
      "Omega 3 CoQ10 Vitamin E L-Arginine Tablets",
      "Qvery Tablets Redition Pharma",
      "Qvery Rudration Pharma",
    ],
    strength: "1 x 10 Tablets",
    type: "Film-Coated Nutraceutical Tablets",
    category: "Cardiovascular & Cellular Energy Support",
    composition:
      "Omega-3 Fatty Acid 500mg, Coenzyme Q10 100mg, Vitamin E (as Acetate) 100 IU & L-Arginine 250mg Tablets",
    activeIngredient:
      "Omega-3 Fatty Acid (500mg), Coenzyme Q10 (100mg), Vitamin E as Acetate (100 IU), L-Arginine (250mg)",
    dosageForm: "Film-Coated Tablet",
    pharmacopoeia: "IP / In-House Validated Monograph",
    therapeuticClass: "Cardiovascular Nutraceutical & Antioxidant",
    legalStatus: "OTC Healthcare Formulation",
    price: 180.0,
    ratingValue: "4.85",
    reviewCount: "62",
    shortDescription:
      "Advanced cardiovascular and cellular energy support combining Omega-3 Fatty Acids (EPA + DHA), Coenzyme Q10, Vitamin E, and L-Arginine for endothelial health, mitochondrial bioenergetics, and antioxidant defence.",
    description:
      "QVERY Tablets are a scientifically formulated nutraceutical designed to support cardiovascular function, vascular endothelial health, and mitochondrial energy metabolism. Omega-3 fatty acids (EPA + DHA) reduce triglycerides and systemic inflammation, Coenzyme Q10 fuels mitochondrial ATP synthesis in cardiac myocytes, Vitamin E provides lipid-soluble antioxidant protection against oxidative LDL modification, and L-Arginine serves as the direct precursor to nitric oxide (NO) for vasodilation and blood pressure regulation. Manufactured under WHO-GMP standards by Redition Pharma.",
    keywords:
      "qvery tablets, omega 3 coq10 tablets, l-arginine vitamin e tablets, cardiovascular health supplement, heart health tablets, redition pharma qvery, coenzyme q10 supplement",
    bulletPoints: [
      "Omega-3 Fatty Acid (500mg): Clinically proven to reduce serum triglycerides, lower inflammatory markers, and support cardiac rhythm stability.",
      "Coenzyme Q10 (100mg): Essential cofactor in mitochondrial electron transport chain (Complex I–III), powering ATP synthesis in high-demand cardiac and skeletal muscle tissue.",
      "L-Arginine (250mg): Direct biological precursor to Nitric Oxide (NO) via endothelial NOS — promotes vasodilation, improves blood flow, and supports healthy blood pressure.",
      "Vitamin E as Acetate (100 IU): Potent lipid-soluble antioxidant that protects cell membranes and LDL particles from oxidative peroxidation damage.",
      "Synergistic 4-in-1 Formulation: Multi-target cardiovascular support in a single convenient tablet for improved patient compliance.",
    ],
    indications: [
      "Cardiovascular Health & Heart Protection",
      "Dyslipidemia & Elevated Triglycerides (Adjunctive Therapy)",
      "Endothelial Dysfunction & Hypertension Support",
      "Exercise Performance & Post-Workout Recovery",
      "Age-Related Mitochondrial Decline & Fatigue",
      "Antioxidant Defence Against Oxidative Stress",
    ],
    packaging:
      "1 Strip x 10 Film-Coated Tablets per carton",
    storage:
      "Store below 25°C in a dry place. Protect from direct sunlight, heat, and moisture. Keep out of reach of children.",
    shelfLife: "24 Months from manufacturing date",
    mechanism:
      "Omega-3 PUFAs (EPA/DHA) integrate into cell membrane phospholipids, modulating inflammatory eicosanoid pathways (reducing PGE2, TXA2) and activating PPARα receptors to lower hepatic triglyceride synthesis. Coenzyme Q10 shuttles electrons between Complex I/II and Complex III in the mitochondrial respiratory chain, directly powering oxidative phosphorylation. L-Arginine is converted to L-Citrulline + Nitric Oxide by endothelial nitric oxide synthase (eNOS), triggering vascular smooth muscle relaxation and vasodilation. Vitamin E intercepts lipid peroxyl radicals in membranes, breaking the chain reaction of lipid peroxidation.",
    dosageGuide:
      "1 tablet once daily after a meal with water, or as directed by the physician. Can be taken long-term as a dietary supplement.",
    faqs: [
      {
        q: "What is QVERY Tablets used for?",
        a: "QVERY is a cardiovascular health supplement that supports heart function, healthy blood lipids, blood vessel flexibility, and cellular energy production through its combination of Omega-3, CoQ10, Vitamin E, and L-Arginine.",
      },
      {
        q: "Is QVERY a prescription medicine?",
        a: "No. QVERY is an OTC nutraceutical health supplement. However, patients on blood thinners or cardiac medications should consult their physician before starting supplementation.",
      },
      {
        q: "Can QVERY Tablets be taken alongside statin therapy?",
        a: "Yes. In fact, CoQ10 supplementation is often recommended alongside statins, as statins can deplete endogenous CoQ10 levels. The Omega-3 component provides complementary triglyceride-lowering benefits.",
      },
    ],
    image: "/images/products/qvery-1.jpg",
    images: [
      "/images/products/qvery-1.jpg",
      "/images/products/qvery-2.jpg",
    ],
  },
];

export const getProduct = (rawId: string) => {
  if (!rawId) return undefined;
  const id = decodeURIComponent(rawId).toLowerCase().trim();
  
  // 1. Direct match
  const direct = products.find((p) => p.id === id);
  if (direct) return direct;

  // 2. Singular / Plural variations (e.g., 'etosec-mr-tablet' -> 'etosec-mr-tablets')
  const withS = products.find((p) => p.id === `${id}s`);
  if (withS) return withS;

  const withoutS = products.find((p) => p.id.replace(/s$/, "") === id);
  if (withoutS) return withoutS;

  // 3. Short slug match (e.g., 'etosec-mr' -> 'etosec-mr-tablets', 'adnocar-ds' -> 'adnocar-ds-syrup')
  const shortMatch = products.find((p) => {
    const base = p.id.replace(/-(tablets|tablet|syrup|capsules|capsule)$/i, "");
    return base === id || base === id.replace(/-(tablets|tablet|syrup|capsules|capsule)$/i, "");
  });
  if (shortMatch) return shortMatch;

  // 4. Name or alternate name search
  return products.find((p) => {
    const normalizedName = p.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
    return normalizedName.includes(id) || id.includes(normalizedName);
  });
};
