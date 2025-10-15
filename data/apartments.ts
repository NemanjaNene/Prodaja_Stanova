export interface Apartment {
  id: number;
  name: string;
  floor: number;
  size: number;
  rooms: number;
  bathrooms: number;
  price: number;
  pricePerM2: number;
  available: boolean;
  orientation: string;
  balcony: boolean;
  parking: boolean;
  storage: boolean;
  description: string;
  features: string[];
  images: string[];
  floorPlan: string;
  panorama360?: string;
  videoTour?: string;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    name: "Penthouse Lux",
    floor: 8,
    size: 145,
    rooms: 4,
    bathrooms: 2,
    price: 385000,
    pricePerM2: 2655,
    available: true,
    orientation: "Jug-Zapad",
    balcony: true,
    parking: true,
    storage: true,
    description: "Spektakularni penthouse na vrhu zgrade sa panoramskim pogledom na grad. Prostrana terasa od 45m², vrhunski materijali i dizajnerski enterijeri. Idealno za one koji traže ultimativni luksuz.",
    features: [
      "Panoramska terasa 45m²",
      "Podno grejanje",
      "Smart home sistem",
      "Premium parketi",
      "Mermerna kupatila",
      "Visoki plafoni (3.2m)",
      "Video interfon",
      "Dve parking mesta",
      "Ostava 8m²",
      "Klima u svakoj prostoriji"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200"
    ],
    floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800"
  },
  {
    id: 2,
    name: "Sky Residence 7A",
    floor: 7,
    size: 98,
    rooms: 3,
    bathrooms: 2,
    price: 245000,
    pricePerM2: 2500,
    available: true,
    orientation: "Jug",
    balcony: true,
    parking: true,
    storage: true,
    description: "Svetao trosoban stan sa otvorenim konceptom dnevnog boravka i kuhinje. Veliki francuski balkon sa pogledom na park. Savršen za moderne porodice.",
    features: [
      "Francuski balkon 12m²",
      "Podno grejanje",
      "Video interfon",
      "Parking mesto",
      "Ostava 4m²",
      "Premium kuhinja",
      "Klima uređaji",
      "Protivprovalna vrata",
      "Triple-glazed prozori"
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ],
    floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800"
  },
  {
    id: 3,
    name: "Elegant Suite 6B",
    floor: 6,
    size: 72,
    rooms: 2,
    bathrooms: 1,
    price: 175000,
    pricePerM2: 2430,
    available: true,
    orientation: "Istok",
    balcony: true,
    parking: true,
    storage: false,
    description: "Kompaktan i elegantno dizajniran dvosoban stan. Idealan za mlade parove ili investiciju. Moderni enterijeri sa pažljivo odabranim detaljima.",
    features: [
      "Open-plan dnevni prostor",
      "Balkon 8m²",
      "Podno grejanje",
      "Video interfon",
      "Parking mesto",
      "Klima uređaj",
      "Protivprovalna vrata",
      "Zvučna izolacija"
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
    ],
    floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800"
  },
  {
    id: 4,
    name: "Premium 5C",
    floor: 5,
    size: 115,
    rooms: 3,
    bathrooms: 2,
    price: 295000,
    pricePerM2: 2565,
    available: true,
    orientation: "Zapad",
    balcony: true,
    parking: true,
    storage: true,
    description: "Prostrani trosoban stan sa posebnom garderobnom sobom. Visoki standardi izgradnje i premium završne obrade. Garaža u suterenu.",
    features: [
      "Walk-in garderoba",
      "Dva balkona (18m²)",
      "Podno grejanje",
      "Smart home",
      "Premium parketi",
      "Garažno mesto",
      "Ostava 6m²",
      "Luksuzna kupatila",
      "3 klima uređaja"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ],
    floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800"
  },
  {
    id: 5,
    name: "Garden View 1A",
    floor: 1,
    size: 88,
    rooms: 3,
    bathrooms: 1,
    price: 215000,
    pricePerM2: 2443,
    available: false,
    orientation: "Jug",
    balcony: true,
    parking: true,
    storage: true,
    description: "Stan na prvom spratu sa direktnim izlazom u zelenu unutrašnju baštu. Idealan za porodice sa decom ili ljubimcima. Miran i siguran.",
    features: [
      "Privatna bašta 25m²",
      "Podno grejanje",
      "Video interfon",
      "Parking mesto",
      "Ostava 5m²",
      "Klima uređaji",
      "Protivprovalna vrata",
      "Dupli prozori"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200",
      "https://images.unsplash.com/photo-1600566752229-250ed79a3c9a?w=1200",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200"
    ],
    floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800"
  },
  {
    id: 6,
    name: "Urban Loft 4D",
    floor: 4,
    size: 125,
    rooms: 4,
    bathrooms: 2,
    price: 315000,
    pricePerM2: 2520,
    available: true,
    orientation: "Sever-Istok",
    balcony: true,
    parking: true,
    storage: true,
    description: "Moderan četvorosoban stan sa industrijskim akcentima. Visoki plafoni, velike površine stakla i otvoreni plan prostora kreiraju osećaj prostranosti.",
    features: [
      "Otvoreni koncept",
      "Visoki plafoni (3m)",
      "Velike panoramske površine",
      "Podno grejanje",
      "Smart home sistem",
      "Dva parking mesta",
      "Ostava 7m²",
      "Premium kuhinja",
      "Spa kupatilo"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200"
    ],
    floorPlan: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800"
  }
];

export const buildingFeatures = [
  {
    title: "Vrhunska Lokacija",
    description: "U srcu grada, blizina svih sadržaja",
    icon: "📍"
  },
  {
    title: "Premium Materijali",
    description: "Najbolji svetski brendovi i izvođači",
    icon: "💎"
  },
  {
    title: "Smart Building",
    description: "Najsavremenija tehnologija u svakom stanu",
    icon: "🏠"
  },
  {
    title: "Zeleni Prostori",
    description: "Uređena unutrašnja bašta i terasa",
    icon: "🌳"
  },
  {
    title: "Bezbednost 24/7",
    description: "Video nadzor, recepcija, kontrola pristupa",
    icon: "🛡️"
  },
  {
    title: "Garažni Parking",
    description: "Podzemna garaža sa punjačima za EV",
    icon: "🚗"
  }
];

