export type Solution = {
  id: string;
  title: string;
  summary: string;
  image: string;
  items: string[];
};

export const solutions: Solution[] = [
  {
    id: "office-furniture",
    title: "Office Furniture Solutions",
    summary:
      "Functional furniture for productive workspaces, executive offices, meeting rooms, and storage areas.",
    image: "/assets/images/solution-furniture.jpg",
    items: [
      "Ergonomic office chairs",
      "Executive and standard desks",
      "Workstations and conference tables",
      "Cabinets, shelving, and filing units",
      "Reception and office support furniture",
    ],
  },
  {
    id: "tyres-batteries",
    title: "Vehicle Tyres & Batteries",
    summary:
      "Reliable tyre and battery supply for company vehicles, fleet operations, and heavy-duty movement.",
    image: "/assets/images/solution-tyres-batteries.jpg",
    items: [
      "Car tyres",
      "Truck tyres",
      "Heavy-duty and industrial tyres",
      "Car batteries",
      "Truck and fleet batteries",
    ],
  },
  {
    id: "spare-parts",
    title: "Vehicle & Equipment Spare Parts",
    summary:
      "Essential parts that help teams reduce downtime and keep vehicles, machinery, and equipment working.",
    image: "/assets/images/solution-spare-parts.jpg",
    items: [
      "Car spare parts",
      "Truck spare parts",
      "Heavy equipment parts",
      "Filters, belts, and bearings",
      "Electrical and maintenance parts",
    ],
  },
  {
    id: "storage-pallets",
    title: "Storage Devices & Pallets",
    summary:
      "Storage, handling, and warehouse organization solutions for safe movement and efficient operations.",
    image: "/assets/images/solution-storage-pallets.jpg",
    items: [
      "Wooden pallets",
      "Plastic pallets",
      "Storage crates",
      "Warehouse racks",
      "Shelving systems and handling tools",
    ],
  },
  {
    id: "maintenance",
    title: "Anti-Corrosion & Maintenance Solutions",
    summary:
      "Protective and maintenance support for equipment, infrastructure, and industrial assets.",
    image: "/assets/images/solution-maintenance.jpg",
    items: [
      "Anti-rust treatment",
      "Protective coatings",
      "Surface preparation",
      "Maintenance tools and supplies",
      "Industrial protection supplies",
    ],
  },
  {
    id: "general-supplies",
    title: "General Industrial & Office Supplies",
    summary:
      "Flexible procurement support for day-to-day office, industrial, safety, and operational needs.",
    image: "/assets/images/solution-general-supplies.jpg",
    items: [
      "Office consumables",
      "Industrial tools",
      "Safety supplies",
      "Cleaning and maintenance supplies",
      "Operational support items",
    ],
  },
];
