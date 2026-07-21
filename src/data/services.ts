export type Service = {
  id: string;
  title: string;
  summary: string;
  image: string;
  items: string[];
  whyChoose: string;
};

export const services: Service[] = [
  {
    id: "anti-corrosion",
    title: "Anti-Corrosion & Protective Coating Services",
    summary:
      "Surface preparation and protective treatments that help extend the working life of industrial equipment, structures, and assets.",
    image: "/assets/images/solution-maintenance.jpg",
    items: [
      "Sandblasting and surface preparation",
      "Anti-rust treatment",
      "Industrial painting",
      "Protective coatings",
      "Corrosion-prevention maintenance",
    ],
    whyChoose:
      "We combine careful surface preparation with fit-for-purpose protective treatments to help reduce premature deterioration and extend asset life.",
  },
  {
    id: "mining-input-supplies",
    title: "Mining Input Supplies",
    summary:
      "Reliable procurement and delivery of essential inputs and consumables for mining operations across Ghana.",
    image: "/assets/images/service-mining-inputs.jpg",
    items: [
      "Grinding media and milling consumables",
      "Process chemicals and grouting materials",
      "PPE and general mine consumables",
      "Pipes, conveyor rollers, cables, and sample bags",
      "Lubricants, fuels, and oils",
      "Blasting accessories, subject to regulatory requirements",
    ],
    whyChoose:
      "We coordinate sourcing and delivery around your specifications, quantities, and operating schedule so essential inputs reach site when they are needed.",
  },
  {
    id: "mining-support",
    title: "Mining Support Services",
    summary:
      "Practical site, logistics, and procurement support designed to keep mining operations supplied, coordinated, and productive.",
    image: "/assets/images/service-mining-support.jpg",
    items: [
      "Mine-site logistics and haulage support",
      "On-site technical support and supervision",
      "Procurement and vendor coordination",
      "Materials handling",
      "After-sales support and spare-parts management",
    ],
    whyChoose:
      "Our support is organized around site schedules, clear coordination, and operational continuity, helping teams respond efficiently to changing requirements.",
  },
  {
    id: "engineering-mechanical",
    title: "Industrial Engineering & Mechanical Services",
    summary:
      "Engineering, fabrication, installation, and maintenance support for industrial machinery, systems, and facility upgrades.",
    image: "/assets/images/service-engineering-mechanical.jpg",
    items: [
      "Design, fabrication, welding, and metal works",
      "Preventive and corrective machinery maintenance",
      "Pump, conveyor, and valve servicing",
      "Equipment overhaul and refurbishment",
      "Industrial equipment installation and commissioning",
      "Piping, process optimization, and project support",
    ],
    whyChoose:
      "We bring fabrication, installation, and maintenance support together, giving clients a practical path from equipment needs through commissioning and ongoing care.",
  },
  {
    id: "hvac-refrigeration",
    title: "HVAC, Refrigeration & Cold-Room Services",
    summary:
      "Supply, installation, diagnostics, and maintenance for commercial and industrial cooling, refrigeration, and ventilation systems.",
    image: "/assets/images/service-hvac-refrigeration.jpg",
    items: [
      "AC and VRV system supply, installation, and maintenance",
      "Cold-room and freezer installation",
      "Refrigerant charging and leak detection",
      "Ducting, ventilation, and exhaust systems",
      "Air-quality systems for plants and commercial kitchens",
    ],
    whyChoose:
      "We support cooling and ventilation systems from supply and installation through diagnostics and maintenance, with solutions shaped around each facility's operating needs.",
  },
  {
    id: "facility-management",
    title: "Facility Management & General Maintenance",
    summary:
      "Coordinated cleaning, building maintenance, and minor works that support safe, functional, and well-maintained facilities.",
    image: "/assets/images/service-facility-management.jpg",
    items: [
      "Janitorial and cleaning services",
      "Routine non-hazardous waste handling",
      "Plumbing and electrical maintenance",
      "General building maintenance",
      "Painting, tiling, and minor civil works",
    ],
    whyChoose:
      "A coordinated service approach helps clients manage routine cleaning, repairs, and minor works through one dependable operational partner.",
  },
  {
    id: "waste-recycling",
    title: "Industrial Waste Management & Recycling",
    summary:
      "Responsible waste handling, material recovery, and environmental support for mining and industrial facilities.",
    image: "/assets/images/service-waste-recycling.jpg",
    items: [
      "Industrial and hazardous-waste management",
      "Scrap-metal recovery and recycling",
      "Used-oil and lubricant management",
      "Plastics, pallets, and packaging recycling",
      "Environmental documentation",
      "Site clean-up and remediation support",
    ],
    whyChoose:
      "Our approach prioritizes organized segregation, controlled handling, clear documentation, and material recovery wherever practical.",
  },
];
