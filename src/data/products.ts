export type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  image: string;
  items: string[];
  showcaseItems: {
    title: string;
    image: string;
  }[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "office-furniture",
    title: "Office Furniture",
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
    showcaseItems: [
      {
        title: "Ergonomic Office Chairs",
        image: "/assets/images/furniture-ergonomic-chairs.jpg",
      },
      {
        title: "Executive & Standard Desks",
        image: "/assets/images/furniture-desks.jpg",
      },
      {
        title: "Workstations & Conference Tables",
        image: "/assets/images/furniture-workstations-conference.jpg",
      },
      {
        title: "Cabinets, Shelving & Filing Units",
        image: "/assets/images/furniture-cabinets-shelving.jpg",
      },
      {
        title: "Reception & Office Support Furniture",
        image: "/assets/images/furniture-reception-support.jpg",
      },
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
    showcaseItems: [
      {
        title: "Car Tyres",
        image: "/assets/images/tyres-car-tyres.jpg",
      },
      {
        title: "Truck Tyres",
        image: "/assets/images/tyres-truck-tyres.jpg",
      },
      {
        title: "Heavy-Duty & Industrial Tyres",
        image: "/assets/images/tyres-heavy-duty-tyres.jpg",
      },
      {
        title: "Car Batteries",
        image: "/assets/images/tyres-car-batteries.jpg",
      },
      {
        title: "Truck & Fleet Batteries",
        image: "/assets/images/tyres-fleet-batteries.jpg",
      },
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
    showcaseItems: [
      {
        title: "Car Spare Parts",
        image: "/assets/images/spares-car-parts.jpg",
      },
      {
        title: "Truck Spare Parts",
        image: "/assets/images/spares-truck-parts.jpg",
      },
      {
        title: "Heavy Equipment Parts",
        image: "/assets/images/spares-heavy-equipment.jpg",
      },
      {
        title: "Filters, Belts & Bearings",
        image: "/assets/images/spares-filters-belts-bearings.jpg",
      },
      {
        title: "Electrical & Maintenance Parts",
        image: "/assets/images/spares-electrical-maintenance.jpg",
      },
    ],
  },
  {
    id: "storage-pallets",
    title: "Storage Devices & Pallets",
    summary:
      "Storage, handling, and warehouse organization products for safe movement and efficient operations.",
    image: "/assets/images/solution-storage-pallets.jpg",
    items: [
      "Wooden pallets",
      "Plastic pallets",
      "Storage crates",
      "Warehouse racks",
      "Shelving systems and handling tools",
    ],
    showcaseItems: [
      {
        title: "Wooden Pallets",
        image: "/assets/images/storage-wooden-pallets.jpg",
      },
      {
        title: "Plastic Pallets",
        image: "/assets/images/storage-plastic-pallets.jpg",
      },
      {
        title: "Storage Crates",
        image: "/assets/images/storage-crates.jpg",
      },
      {
        title: "Warehouse Racks",
        image: "/assets/images/storage-warehouse-racks.jpg",
      },
      {
        title: "Shelving Systems & Handling Tools",
        image: "/assets/images/storage-shelving-handling.jpg",
      },
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
    showcaseItems: [
      {
        title: "Office Consumables",
        image: "/assets/images/general-office-consumables.jpg",
      },
      {
        title: "Industrial Tools",
        image: "/assets/images/general-industrial-tools.jpg",
      },
      {
        title: "Safety Supplies",
        image: "/assets/images/general-safety-supplies.jpg",
      },
      {
        title: "Cleaning & Maintenance Supplies",
        image: "/assets/images/general-cleaning-maintenance.jpg",
      },
      {
        title: "Operational Support Items",
        image: "/assets/images/general-operational-support.jpg",
      },
    ],
  },
];
