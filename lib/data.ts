export interface ServiceItem {
  key: string;
  title: string;
  image: string;
  category: string;
  intro: string;
  features: string[];
  materials: string;
  guarantee: string;
}

export const serviceData: Record<string, ServiceItem> = {
  bungalow: {
    key: 'bungalow',
    title: 'Residential Bungalow Waterproofing',
    image: '/images/service-bungalow-illus.png',
    category: 'Residential Services',
    intro: 'Comprehensive waterproofing systems engineered specifically for luxury bungalows, villas, and independent homes to guarantee 100% leak-proof interiors, terraces, and facades.',
    features: [
      'Flat & sloped terrace roof waterproofing with UV-resistant polyurethane / acrylic elastomeric coatings.',
      'Terrace garden and planter box root-barrier waterproofing.',
      'Under-tile waterproofing for bathrooms, kitchens, and wet utility areas.',
      'External parapet walls, chajjas, and facade elastomeric crack-bridging coatings.',
      'Sump tank and overhead drinking water tank food-grade epoxy waterproofing.',
    ],
    materials: 'High-grade Dr. Fixit, Fosroc Nitoproof, Sika Topseal, and customized elastomeric polyurethane membranes.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply',
  },
  commercial: {
    key: 'commercial',
    title: 'High Rise & Commercial Building Waterproofing',
    image: '/images/service-commercial-illus.png',
    category: 'Commercial Infrastructure',
    intro: 'Heavy-duty waterproofing solutions designed for corporate towers, shopping malls, hospitals, tech parks, and multi-tenant residential complexes subject to heavy thermal movement and foot traffic.',
    features: [
      'Podium slab and basement retaining wall dual-layer waterproofing against hydrostatic water pressure.',
      'Curtain wall structural silicone perimeter sealing and exterior facade weatherproofing.',
      'Expansion joint treatment with elastomeric waterstops, polysulfide sealants, and metal cover plates.',
      'Multi-level covered and exposed car parking deck polyurethane traffic-bearing coatings.',
      'Elevator pit and subterranean basement PU injection grouting.',
    ],
    materials: 'EPDM membranes, APP modified torch-on bitumen membranes, polyurethane traffic coats, and polysulfide joint sealants.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply',
  },
  repairs: {
    key: 'repairs',
    title: 'Repairs & Rehabilitation Waterproofing',
    image: '/images/service-repairs-illus.png',
    category: 'Restoration & Rehabilitation',
    intro: 'Specialized diagnostic structural restoration and leak rectification for existing buildings suffering from active leaks, internal dampness, efflorescence, and spalling concrete.',
    features: [
      'High-pressure polyurethane (PU) and epoxy injection grouting for active water leakage through structural cracks.',
      'Anti-corrosion rebar treatment and polymer-modified structural repair mortar rebuilding.',
      'Internal wall dampness arrest, salt efflorescence treatment, and breathable waterproofing barrier.',
      'Non-destructive electronic moisture mapping and root-cause leak source detection.',
      'Refurbishment of old deteriorated terrace waterproofing without complete slab demolition.',
    ],
    materials: 'PU injection resins, micro-fine cementitious grouts, polymer bonding agents, and rust inhibitors.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply',
  },
  precast: {
    key: 'precast',
    title: 'Precast Building Joint Waterproofing',
    image: '/images/service-precast-illus.png',
    category: 'Precast & Modular Engineering',
    intro: 'State-of-the-art waterproofing systems tailored for modern precast concrete structures, precast facade panels, modular housing, and industrial precast joints.',
    features: [
      'High-performance PU and MS polymer joint sealant application in precast panel gaps.',
      'Closed-cell polyethylene backer rod insertion to ensure proper joint geometry and depth control.',
      'Elastomeric bridging tape systems for high-movement vertical and horizontal joints.',
      'Shear key joint waterproofing and hollow-core slab joint sealing.',
      'Air and water-tight thermal barrier protection ensuring all-weather climate resistance.',
    ],
    materials: 'Fosroc Nitoseal, SikaHyflex, Bostik sealants, and elastomeric preformed joint tapes.',
    guarantee: '10 Years Waterproofing Warranty | Qualified Engineer Site Execution | Waterproofing Material Supply',
  },
};

export interface ProjectItem {
  id: string;
  image: string;
  title: string;
  location: string;
  category: string;
}

export const projectData: ProjectItem[] = [
  {
    id: '1',
    image: '/images/project-residential-rooftop.jpg',
    title: 'Waterproofed Residential Rooftops',
    location: 'Villa Rooftop, Hyderabad, Telangana',
    category: 'Residential',
  },
  {
    id: '2',
    image: '/images/project-commercial-building.jpg',
    title: 'Commercial Building Waterproofing',
    location: 'Corporate Tower Plaza, Hyderabad, Telangana',
    category: 'Commercial',
  },
  {
    id: '3',
    image: '/images/project-industrial-flooring.jpg',
    title: 'Industrial Flooring Waterproofing',
    location: 'Manufacturing Plant, Hyderabad, Telangana',
    category: 'Industrial',
  },
  {
    id: '4',
    image: '/images/project-terrace-waterproofing.jpg',
    title: 'Terrace Waterproofing',
    location: 'Luxury Apartments, Hyderabad, Telangana',
    category: 'Terrace Garden',
  },
];

