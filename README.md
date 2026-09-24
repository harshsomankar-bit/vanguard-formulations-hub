# Redition Clinical Hub

# MASTER PROMPT: INSTITUTIONAL MEDICAL & PHARMACEUTICAL PRODUCT WEBSITE

You are a Senior Web Engineer, UI/UX Designer, and Technical Healthcare SEO Architect.

Build a modern, high-precision institutional medical and pharmaceutical product website for:
- Company Name: **Redition Pharma Ltd.**
- Brand Identifier: **Redition Pharma / Redition Pharma**
- Primary Domain: **https://reditionpharma.com**
- Business Focus: **WHO-GMP Schedule M Certified Formulations, Institutional Hospital Supply & PCD Distribution**
- Manufacturing / Corporate Office: **Plot 42, GIDC Industrial Estate, Vadodara, Gujarat 390010, India**
- Institutional Hotline / Trade Desk: **+91 98250 12345**
- Official Regulatory / Sales Email: **trade@reditionpharma.com**

---

### 🎨 1. CLINICAL DESIGN SYSTEM ("Nordic Clinical Precision"):
Avoid generic gradients, rainbow colors, and informal design elements. Use an authoritative, clean clinical palette:
- **Primary Navy**: `#0a192f` (Deep Institutional Navy - 900)
- **Clinical Blue**: `#0369a1` (Precision Surgical Blue - 700)
- **Teal / Cyan Accent**: `#0d9488` (Laboratory Sterile Teal - 600)
- **Background Base**: `#f8fafc` (Ultra-Clean Clinical Off-White) & `#ffffff` (Pure Sterile White)
- **Border & Grid Lines**: `#e2e8f0` (Subtle 1px Technical Grid System)
- **Typography**: Clean, high-legibility sans-serif via Google Fonts (`'IBM Plex Sans'` for data tables and clinical text, `'Manrope'` for corporate headings).

---

### 📦 2. PRODUCT DATA CATALOG (`src/data/products.ts`):
Create `src/data/products.ts` containing the following 5 authenticated clinical formulations with exact pharmacopoeial data:

```typescript
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

export const products: Product[] = [
  {
    id: "hema-chelate-syrup",
    name: "HemaChelate Oral Liquid",
    alternateNames: ["HemaChelate Syrup", "Iron Bisglycinate Chelate Syrup", "HemaChelate 200ml"],
    strength: "200 ml",
    type: "Sugar-Free Oral Solution",
    category: "Hematology & Iron Deficiency",
    composition: "Ferrous Bisglycinate (Equivalent to 30mg Elemental Iron) with L-Methylfolate 0.5mg & Methylcobalamin 500mcg per 5ml",
    activeIngredient: "Ferrous Bisglycinate Chelate, L-Methylfolate, Methylcobalamin",
    dosageForm: "Liquid Oral Solution",
    pharmacopoeia: "In-House / USP Monograph Compliant",
    therapeuticClass: "Hematinic & Cellular Oxygenation Agent",
    legalStatus: "OTC Healthcare Formulation",
    price: 345.00,
    ratingValue: "4.9",
    reviewCount: "86",
    shortDescription: "Third-generation amino-acid chelated hematinic formulation offering 90.9% fractional absorption with neutral gastric transit and zero constipation.",
    description: "HemaChelate Oral Liquid delivers bisglycinate-chelated elemental iron shielded against ionization in gastric acid. It passes intact to the jejunal mucosa, avoiding free hydroxyl radical generation, upper GI burning, nausea, and intestinal dysbiosis.",
    keywords: "hemachelate syrup, ferrous bisglycinate syrup, sugar free iron syrup, hematinic solution anemia, Redition Pharma iron",
    bulletPoints: [
      "90.9% superior elemental iron bioavailability compared to ferrous sulfate and ascorbate salts.",
      "Electrically neutral chelate structure prevents free-radical mucosal injury and gastric distress.",
      "Bio-active L-Methylfolate and Methylcobalamin accelerate erythropoiesis and RBC maturation.",
      "Sugar-free formulation suitable for gestational diabetics and pediatric protocols.",
      "Eliminates metallic aftertaste, nausea, vomiting, and dark constipated stools."
    ],
    indications: [
      "Iron Deficiency Anemia (Microcytic Hypochromic IDA)",
      "Gestational & Post-Partum Maternal Anemia",
      "Nutritional Anemia in Chronic Kidney Disease (Non-Dialysis)",
      "Pediatric Cognitive & Growth Deficiencies",
      "Post-Operative Hemoglobin Recovery"
    ],
    packaging: "200 ml Amber PET Bottle with calibrated measuring cup in UV-protective carton (Shipper: 60 Units)",
    storage: "Store below 25°C in a dry environment. Protect from light. Do not freeze.",
    shelfLife: "24 Months from manufacturing date",
    mechanism: "Ferrous bisglycinate utilizes the divalent metal transporter 1 (DMT1) and peptide transport pathways in the small intestine, facilitating direct enterocyte uptake without competitive inhibition from dietary phytates or calcium.",
    dosageGuide: "Adults: 5 ml to 10 ml twice daily after meals. Pediatrics: 2.5 ml to 5 ml daily or as directed by the prescribing physician.",
    faqs: [
      {
        q: "How does HemaChelate prevent gastrointestinal side effects?",
        a: "Because elemental iron is covalently bound to two glycine amino acid molecules, the molecule does not dissociate in stomach acid. It reaches the jejunum intact, eliminating gastric irritation, nausea, and constipation."
      },
      {
        q: "Is HemaChelate batch-tested for heavy metal impurities?",
        a: "Yes. Every batch undergoes ICP-MS heavy metal screening and stability testing in accordance with WHO-GMP and Schedule M guidelines, accompanied by a full Certificate of Analysis (COA)."
      }
    ],
    image: "/images/product_01.png",
    images: ["/images/product_01.png", "/images/product_01_back.png"]
  },
  {
    id: "neuro-carn-syrup",
    name: "NeuroCarn Pediatric Syrup",
    alternateNames: ["NeuroCarn Syrup", "L-Carnosine 200mg Syrup", "NeuroCarn Cognitive Solution"],
    strength: "200 ml",
    type: "Oral Suspension",
    category: "Pediatric Neurology & Neurodevelopment",
    composition: "L-Carnosine 200mg with Elemental Zinc 5mg per 5ml",
    activeIngredient: "L-Carnosine (Beta-Alanyl-L-Histidine) 200mg/5ml",
    dosageForm: "Liquid Oral Suspension",
    pharmacopoeia: "Ph. Eur. / USP Standards",
    therapeuticClass: "Central Nervous System Antioxidant & Neurotrophic Agent",
    legalStatus: "OTC Healthcare Formulation",
    price: 990.00,
    ratingValue: "4.9",
    reviewCount: "112",
    shortDescription: "Bioavailable L-Carnosine dipeptide oral suspension engineered to cross the blood-brain barrier for pediatric speech, cognition, and synaptic stabilization.",
    description: "NeuroCarn Pediatric Syrup provides therapeutic concentrations of endogenous dipeptide L-Carnosine. Formulated for pediatric neurodevelopmental protocols, it supports receptive and expressive language processing, frontal lobe synaptic transmission, and cerebral antioxidant defense.",
    keywords: "neurocarn syrup, l-carnosine 200mg syrup, speech delay treatment syrup, pediatric neurodevelopment syrup, Redition Pharma carnosine",
    bulletPoints: [
      "Crosses the Blood-Brain Barrier (BBB) to modulate GABAergic neurotransmission and reduce excitotoxicity.",
      "Clinically documented in peer-reviewed literature for receptive language and social interaction support in ASD.",
      "Scavenges reactive oxygen species (ROS) and chelates neurotoxic trace heavy metals in cerebral tissue.",
      "Sugar-free formulation prevents glycemic fluctuations and hyperactivity in pediatric patients.",
      "Manufactured with pharmaceutical-grade dipeptides under strict cleanroom conditions."
    ],
    indications: [
      "Speech & Expressive Language Delays",
      "Autism Spectrum Disorder (Adjunctive Nutritional Protocol)",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Hypoxic-Ischemic Encephalopathy Rehabilitation",
      "Post-Seizure Neurological Recovery"
    ],
    packaging: "200 ml Amber Glass Bottle with tamper-evident seal (Shipper: 48 Units)",
    storage: "Store below 25°C. Keep tightly closed. Protect from excessive heat and direct light.",
    shelfLife: "18 Months from manufacturing date",
    mechanism: "L-Carnosine modulates both GABA and NMDA receptor systems in the cerebral cortex and hippocampus, mitigating excitotoxic glutamate release while maintaining mitochondrial bioenergetics.",
    dosageGuide: "Pediatric (Children 2+ years): 5 ml (200mg) to 10 ml (400mg) daily in divided morning and afternoon doses, or as directed by a pediatric neurologist.",
    faqs: [
      {
        q: "What is the clinical evidence supporting L-Carnosine in pediatric speech delay?",
        a: "Double-blind, placebo-controlled clinical trials have demonstrated statistically significant improvements in expressive vocabulary, focus, and social engagement within 6 to 8 weeks of daily 400mg L-Carnosine supplementation."
      }
    ],
    image: "/images/product_02.png",
    images: ["/images/product_02.png", "/images/product_02_back.png"]
  },
  {
    id: "gastro-spore-sachet",
    name: "GastroSpore Probiotic Sachet",
    alternateNames: ["GastroSpore Sachet", "Microencapsulated Probiotic Sachet", "GastroSpore 1g"],
    strength: "10 Sachets x 1g",
    type: "Lyophilized Oral Powder",
    category: "Gastroenterology & Intestinal Permeability",
    composition: "Multi-Strain Spore Probiotics (5 Billion CFU) with L-Glutamine 250mg & Zinc Butyrate 10mg",
    activeIngredient: "Bacillus coagulans, Bacillus subtilis, Lactobacillus rhamnosus, L-Glutamine",
    dosageForm: "Soluble Oral Powder Sachet",
    pharmacopoeia: "IP / In-House Validated Formulation",
    therapeuticClass: "Epithelial Barrier Restorative & Microbiome Modulator",
    legalStatus: "OTC Healthcare Formulation",
    price: 78.00,
    ratingValue: "4.8",
    reviewCount: "74",
    shortDescription: "Thermostable spore-forming probiotic formulation with mucosal substrate L-Glutamine for rapid resolution of dysbiosis and intestinal tight-junction repair.",
    description: "GastroSpore Sachet delivers acid-resistant bacterial endospores that survive 100% of gastric transit. Synergized with enterocyte-fuel L-Glutamine, it accelerates the reconstitution of protective commensal microflora and restores gut-barrier integrity.",
    keywords: "gastrospore sachet, spore probiotic sachet, l-glutamine gut sachet, antibiotic associated diarrhea sachet, Redition Pharma probiotic",
    bulletPoints: [
      "Microencapsulated bacterial endospores exhibit 100% survival through gastric acid and bile salts.",
      "250mg L-Glutamine actively synthesizes mucosal tight junction proteins (Claudin-1 & Occludin).",
      "Suppresses enteropathogenic colonization via short-chain fatty acid (SCFA) biosynthesis.",
      "Rapidly halts antibiotic-associated diarrhea (AAD) and acute gastroenteritis.",
      "Thermostable formula requires zero cold-chain storage or refrigeration."
    ],
    indications: [
      "Antibiotic-Associated Enteric Dysbiosis",
      "Irritable Bowel Syndrome (IBS-D & IBS-M)",
      "Intestinal Hyperpermeability (Leaky Gut Syndrome)",
      "Acute Infectious Gastroenteritis",
      "Enteric Mucosal Inflammation"
    ],
    packaging: "10 x 1g Triple-Laminate Moisture-Barrier Aluminum Foil Sachets in Mono-Carton (Shipper: 100 Boxes)",
    storage: "Store below 25°C in a dry place. Protect from moisture and heat.",
    shelfLife: "24 Months from manufacturing date",
    mechanism: "Spore strains germinate upon reaching the alkaline duodenum, releasing lactic acid and bacteriocins that lower luminal pH and eradicate pathogens. Concurrently, L-Glutamine provides the essential primary metabolic fuel for enterocytes.",
    dosageGuide: "1 sachet dissolved in 50ml lukewarm water, milk, or beverage once or twice daily 30 minutes prior to meals.",
    faqs: [
      {
        q: "Does GastroSpore Sachet require cold-chain transport?",
        a: "No. Advanced lyophilization and spore technology guarantee full 5 Billion CFU viability at ambient room temperatures below 25°C."
      }
    ],
    image: "/images/product_03.png",
    images: ["/images/product_03.png", "/images/product_03_back.png"]
  },
  {
    id: "vertistop-md-tablet",
    name: "VertiStop MD Sublingual Tablet",
    alternateNames: ["VertiStop MD 5mg", "Prochlorperazine Maleate MD Tablets IP", "VertiStop 5mg"],
    strength: "10 x 10 Tablets",
    type: "Mouth Dissolving Tablet",
    category: "Vestibular Disorders & Antiemetic Therapy",
    composition: "Prochlorperazine Maleate Mouth Dissolving Tablets IP 5mg",
    activeIngredient: "Prochlorperazine Maleate IP 5mg",
    dosageForm: "Mouth Dissolving Sublingual Tablet",
    pharmacopoeia: "Indian Pharmacopoeia (IP)",
    therapeuticClass: "D2-Dopaminergic Antagonist & Vestibular Suppressant",
    legalStatus: "Schedule H Prescription",
    price: 105.00,
    ratingValue: "4.9",
    reviewCount: "98",
    shortDescription: "Fast-disintegrating sublingual tablet engineered for rapid abortive therapy in acute vertigo attacks, vestibular labyrinthitis, and severe nausea.",
    description: "VertiStop MD features a superdisintegrant matrix that dissolves on the tongue in under 15 seconds without water. Sublingual vascular absorption bypasses hepatic first-pass metabolism to deliver rapid suppression of the Chemoreceptor Trigger Zone (CTZ).",
    keywords: "vertistop md tablet, prochlorperazine 5mg mouth dissolving, acute vertigo tablet, meniere disease treatment, Redition Pharma vertigo",
    bulletPoints: [
      "Sublingual disintegration under 15 seconds allows rapid administration during acute emetic episodes.",
      "Bypasses first-pass hepatic clearance, delivering therapeutic plasma levels within 10 minutes.",
      "Potent dopamine D2 antagonist at the medullary CTZ to immediately suppress nausea and retching.",
      "Depresses vestibular neuronal firing in the labyrinthine apparatus to halt head-spinning sensations.",
      "Supplied in moisture-proof Alu-Alu blister packaging for hospital and retail stability."
    ],
    indications: [
      "Acute Peripheral & Central Vertigo",
      "Labyrinthitis & Vestibular Neuronitis",
      "Ménière's Disease Acute Exacerbations",
      "Severe Motion & Travel Sickness",
      "Migraine-Associated Nausea and Vomiting"
    ],
    packaging: "10 Strips x 10 Tablets (100 Tablets) in Alu-Alu Blister Carton (Shipper: 50 Boxes)",
    storage: "Store below 30°C protected from light, direct heat, and moisture.",
    shelfLife: "36 Months from manufacturing date",
    mechanism: "Prochlorperazine competitively antagonizes dopamine D2 receptors in the area postrema of the fourth ventricle. It additionally exerts anticholinergic effects that suppress vestibular neuronal hyper-excitability in the inner ear.",
    dosageGuide: "Place 1 tablet sublingually or in the buccal cavity; allow to dissolve completely. Dosage: 1-2 tablets twice daily as prescribed by a medical specialist.",
    faqs: [
      {
        q: "Why is the Mouth Dissolving (MD) form preferred in acute vertigo?",
        a: "Patients experiencing severe vertigo typically suffer from concurrent nausea and vomiting, making swallowing conventional tablets difficult. MD tablets dissolve instantly in saliva, delivering medication directly through oral mucosa."
      }
    ],
    image: "/images/product_04.png",
    images: ["/images/product_04.png", "/images/product_04_back.png"]
  },
  {
    id: "somnopure-cr-tablet",
    name: "SomnoPure Dual-Phase Tablet",
    alternateNames: ["SomnoPure CR Tablet", "Lactium Melatonin Biphasic Tablet", "SomnoPure Sleep"],
    strength: "10 x 10 Tablets",
    type: "Controlled-Release Bilayer Tablet",
    category: "Sleep Architecture & Neurological Stress Regulation",
    composition: "Bioactive Milk Peptide (Alpha-Casozepine 150mg) with Melatonin 3mg (Dual-Release: 1mg Immediate + 2mg Sustained)",
    activeIngredient: "Alpha-Casozepine (Bioactive Lactium Peptides) 150mg, Melatonin 3mg",
    dosageForm: "Bilayer Controlled-Release Oral Tablet",
    pharmacopoeia: "In-House Validated Formulation",
    therapeuticClass: "GABA-A Allosteric Modulator & Chronobiotic Regulator",
    legalStatus: "OTC Healthcare Formulation",
    price: 275.00,
    ratingValue: "4.8",
    reviewCount: "63",
    shortDescription: "Non-sedative dual-phase sleep architecture formulation combining GABA-modulating alpha-casozepine peptides with biphasic melatonin for restorative sleep.",
    description: "SomnoPure Dual-Phase Tablet synchronizes circadian timing with central nervous system desensitization. The immediate phase initiates rapid sleep onset within 30 minutes, while the sustained-release matrix maintains nocturnal sleep continuity without morning hangover or dependence.",
    keywords: "somnopure tablet, lactium melatonin controlled release, natural non habit forming sleep aid, circadian rhythm tablet, Redition Pharma somnopure",
    bulletPoints: [
      "Patented Alpha-Casozepine peptide binds GABA-A benzodiazepine sites without causing receptor downregulation or tolerance.",
      "Dual-phase release architecture resolves both sleep latency (falling asleep) and sleep maintenance (midnight awakening).",
      "Significantly attenuates nighttime sympathetic tone and salivary cortisol levels.",
      "100% non-habit forming with zero motor impairment, rebound insomnia, or next-day cognitive fog.",
      "Validated for shift workers, jet-lag recovery, and stress-induced insomnia protocols."
    ],
    indications: [
      "Primary Psychophysiological Insomnia",
      "Circadian Rhythm Sleep-Wake Phase Disorders",
      "Chronic Work-Related Stress & Nighttime Hyperarousal",
      "Frequent Nocturnal Awakenings",
      "Jet Lag Desynchronization"
    ],
    packaging: "10 Strips x 10 Tablets (100 Tablets) in Tropical Alu-Alu Blister Pack (Shipper: 50 Boxes)",
    storage: "Store in a cool, dry place below 25°C. Protect from moisture and direct sunlight.",
    shelfLife: "24 Months from manufacturing date",
    mechanism: "Alpha-casozepine acts as a selective allosteric agonist at the GABA-A receptor alpha-1 subunit, inducing anxiolysis without myorelaxant or hypnotic side effects. Melatonin binds to suprachiasmatic MT1/MT2 receptors to reset the circadian pacemaker.",
    dosageGuide: "1 tablet ingested with water 30 to 45 minutes before intended bedtime, or as directed by a healthcare practitioner.",
    faqs: [
      {
        q: "Does SomnoPure cause physiological dependence or tolerance?",
        a: "No. Unlike synthetic Z-drugs or benzodiazepines, Alpha-Casozepine and Melatonin modulate endogenous receptor pathways without causing receptor habituation, dependency, or withdrawal symptoms upon cessation."
      }
    ],
    image: "/images/product_05.png",
    images: ["/images/product_05.png", "/images/product_05_back.png"]
  }
];
```

---

### ⚙️ 3. PRE-RENDERING ENGINE (`scripts/prerender.js`):
Create `scripts/prerender.js` with clean institutional styling and 4-tier structured data:

```javascript
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("Template index.html not found in dist directory. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");
const { products } = await import("../src/data/products.ts");

function generateInstitutionalBody(product) {
  return `
  


    
    


      


        Redition Pharma
        WHO-GMP Schedule M Certified Formulations
      


      
        Corporate Overview
        Formulations Portfolio
        Quality Compliance (COA)
        Institutional Supply
      
    



    
    
      Home /
      Formulations /
      ${product.name}
    

    
      
      


        


          
        


        


          


            ${product.legalStatus}
            ${product.category}
          


          

${product.name}


          

${product.composition}


          
          


            


              Reference MRP
              ₹${product.price.toFixed(2)}
            


            


              Standard Packaging
              ${product.strength}
            


          



          

${product.description}



          


            Direct Institutional Supply Desk
            Request Batch COA & Quotation
          


        


      



      
      


        

Pharmacological Advantages & Clinical Evidence


        


          ${product.bulletPoints.map(b => `

${b}

`).join('')}
        


      



      
      


        


          

Therapeutic Indications


          


            ${product.indications.map(i => `

${i}

`).join('')}
          


        



        


          

Dosage & Packaging Specifications


          

Administration: ${product.dosageGuide}


          

Packaging Format: ${product.packaging}


          

Storage & Stability: ${product.storage} | Shelf Life: ${product.shelfLife}


        


      



      
      


        

Mechanism of Action


        

${product.mechanism}


      



      
      


        

Institutional FAQs


        ${product.faqs.map(f => `
          


            ${f.q}
            

${f.a}


          


        `).join('')}
      


    

    
    


      © 2026 Redition Pharma Ltd. All Rights Reserved. WHO-GMP Schedule M Certified Manufacturing Facility.
    

`;
}

products.forEach(product => {
  const productDir = path.join(distDir, "product", product.id);
  fs.mkdirSync(productDir, { recursive: true });

  const productUrl = `https://reditionpharma.com/product/${product.id}`;
  const imageUrl = `https://reditionpharma.com${product.image}`;
  const title = `${product.name} | ${product.composition} | Redition Pharma`;
  const metaDesc = `Technical dossier for ${product.name} (${product.strength}) by Redition Pharma. ${product.shortDescription}`;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        "name": product.name,
        "alternateName": product.alternateNames,
        "image": product.images.map(img => `https://reditionpharma.com${img}`),
        "description": product.shortDescription,
        "sku": `VT-${product.id.toUpperCase()}`,
        "mpn": `VT-${product.id.replace(/-/g, '').toUpperCase()}`,
        "brand": { "@type": "Brand", "name": "Redition Pharma" },
        "manufacturer": {
          "@type": "Organization",
          "name": "Redition Pharma Ltd.",
          "url": "https://reditionpharma.com",
          "logo": "https://reditionpharma.com/logo.png"
        },
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "url": productUrl,
          "priceCurrency": "INR",
          "price": product.price.toFixed(2),
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.ratingValue,
          "reviewCount": product.reviewCount,
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${productUrl}#medicalPage`,
        "url": productUrl,
        "name": title,
        "description": metaDesc,
        "about": {
          "@type": "Drug",
          "name": product.name,
          "activeIngredient": product.activeIngredient,
          "dosageForm": product.dosageForm,
          "administrationRoute": "Oral"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${productUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reditionpharma.com/" },
          { "@type": "ListItem", "position": 2, "name": "Formulations", "item": "https://reditionpharma.com/#products" },
          { "@type": "ListItem", "position": 3, "name": product.name, "item": productUrl }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${productUrl}#faq`,
        "mainEntity": product.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }
    ]
  };

  let html = template;
  html = html.replace(/`);
  html = html.replace(//gi, ``);
  html = html.replace(//gi, ``);
  html = html.replace(//gi, ``);
  html = html.replace(//gi, ``);
  html = html.replace(//gi, ``);
  html = html.replace(//gi, ``);
  html = html.replace(//gi, ``);

  const schemaTag = `\n    \n    \n  `;
  html = html.replace("", schemaTag);

  const semanticBody = generateInstitutionalBody(product);
  html = html.replace('', `

${semanticBody}

`);

  fs.writeFileSync(path.join(productDir, "index.html"), html, "utf8");
  console.log(`✓ Generated pre-rendered clinical HTML for: ${product.id}`);
});
```

---

### 🌐 4. SITEMAP & SERVER CONFIGURATION:

#### `public/sitemap.xml`:
```xml

    https://reditionpharma.com/
    2026-09-21
    daily
    1.0
    https://reditionpharma.com/product/hema-chelate-syrup
    2026-09-21
    daily
    1.0
    https://reditionpharma.com/product/neuro-carn-syrup
    2026-09-21
    daily
    1.0
    https://reditionpharma.com/product/gastro-spore-sachet
    2026-09-21
    daily
    1.0
    https://reditionpharma.com/product/vertistop-md-tablet
    2026-09-21
    daily
    1.0
    https://reditionpharma.com/product/somnopure-cr-tablet
    2026-09-21
    daily
    1.0
```

#### `public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://reditionpharma.com/sitemap.xml
```

#### `public/.htaccess`:
```apache

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

```

---

### 📦 5. BUILD INSTRUCTIONS:
1. Configure `package.json` with `"build": "vite build && node scripts/prerender.js"`.
2. Run `npm run build` to compile the TypeScript bundle and generate all static HTML product pages.
3. Compress the `/dist` directory into `production_dist.zip`.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1d0bf4ca-8446-4450-91da-1e2c4f73efb6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
