import { ServiceItem, BrandInfo, ServiceArea } from '../types';

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'refrigerator',
    name: 'Refrigerator & Freezer Repairs',
    description: 'Sealed system diagnostics, defrost thermostat and heater replacement, evaporator fan motors, condenser coil cleaning, and ice maker rebuilds.',
    typicalIssues: ['Fresh food section warm / freezer cold', 'Ice maker stopped making ice', 'Water pooling under crisper drawers', 'Clicking noise from back compressor'],
    diagnosticFee: '$79.95',
    isPopular: true
  },
  {
    id: 'washer-dryer',
    name: 'Washer + Dryer Repairs',
    description: 'Front-load and top-load washing machine bearing kits, drive belts, drain pumps, thermal fuses, gas valve coils, and heating elements.',
    typicalIssues: ['Washer won\'t drain or spin', 'Dryer spins but blows cold air', 'Loud banging during spin cycle', 'Excessive cycle time to dry clothes'],
    diagnosticFee: '$79.95',
    isPopular: true
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repairs',
    description: 'Drain pump blockages, wash motor clogs, water inlet valve leaks, spray arm blockages, and electronic control board malfunctions.',
    typicalIssues: ['Standing water in bottom', 'Dishes coming out dirty', 'Leaking from bottom door', 'Won\'t start cycle or beeping'],
    diagnosticFee: '$79.95',
    isPopular: true
  },
  {
    id: 'oven-range',
    name: 'Oven/Stove/Range Repairs',
    description: 'Gas and electric range heating issues, igniter failures, temperature sensor calibration, broken glass tops, and baking element replacements.',
    typicalIssues: ['Oven not heating up', 'Gas burner clicking continuously', 'Inaccurate temperature', 'Bake element burned out', 'Broiler not turning on'],
    diagnosticFee: '$79.95'
  },
  {
    id: 'cooktop',
    name: 'Cooktop Repairs',
    description: 'Induction cooktop surface sensor errors, radiant surface elements, dual-zone burner switches, and spark ignition modules.',
    typicalIssues: ['Burner won\'t turn on', 'Indicator light stays on', 'Glass cooktop cracked/not heating', 'Sparks continuously'],
    diagnosticFee: '$79.95'
  },
  {
    id: 'microwave',
    name: 'Microwave Repairs',
    description: 'Over-the-range and built-in microwave magnetrons, high-voltage diode replacement, door microswitches, turntable motors, and exhaust fan repairs.',
    typicalIssues: ['Turntable turns but doesn\'t heat', 'Sparks inside cavity', 'Door latch switch error', 'Loud humming noise'],
    diagnosticFee: '$79.95'
  },
  {
    id: 'dryer-vent',
    name: 'Dryer Vent Cleaning',
    description: 'Professional high-velocity rotary brush cleaning of exterior lint ductwork to prevent fires, reduce drying times, and extend appliance lifespan.',
    typicalIssues: ['Clothes take 2+ cycles to dry', 'Dryer unit gets excessively hot to touch', 'Burning lint odor in laundry room', 'Flapper vent outside not opening fully'],
    diagnosticFee: '$79.95 (Included with service)',
    isPopular: true
  },
  {
    id: 'plumbing-care',
    name: 'Garbage Disposal & Water Lines',
    description: 'Disposal motor jams, leaky flange seals, under-sink dishwasher connections, refrigerator braided water line installs, and fixture care.',
    typicalIssues: ['Garbage disposal humming and jammed', 'Water dripping under kitchen sink', 'Ice maker water line slow or leaking', 'Air gap overflowing'],
    diagnosticFee: '$79.95',
    isPopular: true
  },
  {
    id: 'appliance-install',
    name: 'Appliance Installation',
    description: 'Precision leveling, electrical and water line connections, cabinet panel mounting, custom trim integration, and manufacturer warranty validation.',
    typicalIssues: ['New dishwasher hookup & anti-tip mounting', 'Over-the-range microwave ventilation ducting', 'Ice-maker water line installation'],
    diagnosticFee: 'Flat-rate estimate'
  }
];

export const BRANDS_LIST: BrandInfo[] = [
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    tier: 'Top Residential',
    description: 'America\'s most popular household brand. We carry extensive OEM parts directly on our service trucks for same-day repairs across Ohio.',
    popularAppliances: ['Refrigerators', 'Front & Top Load Washers', 'Electric & Gas Dryers', 'Dishwashers'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'maytag',
    name: 'Maytag',
    tier: 'Top Residential',
    description: 'Commercial-grade home appliances known for rugged reliability. Expert service on heavy-duty drive systems and heating elements.',
    popularAppliances: ['Commercial Grade Washers', 'Dryers', 'Ranges', 'French Door Refrigerators'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'ge',
    name: 'GE (General Electric)',
    tier: 'Top Residential',
    description: 'Full coverage for GE, GE Profile, GE Cafe, and Monogram appliances. Specialized in electronic board diagnostics and cooling circuits.',
    popularAppliances: ['French Door Refrigerators', 'Cafe Gas Ranges', 'Profile Dishwashers', 'Wall Ovens'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'lg',
    name: 'LG',
    tier: 'Top Residential',
    description: 'Linear inverter compressors, direct drive washing machines, and smart Wi-Fi diagnostics. Certified troubleshooting protocols.',
    popularAppliances: ['InstaView Refrigerators', 'Direct Drive Front Load Washers', 'TrueSteam Dryers'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'samsung',
    name: 'Samsung',
    tier: 'Top Residential',
    description: 'Smart appliances, twin cooling evaporators, ice master troubleshooting, and digital inverter motor diagnostics.',
    popularAppliances: ['Bespoke Refrigerators', 'FlexWash Washers', 'Electric Ranges'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'kitchenaid',
    name: 'KitchenAid',
    tier: 'Top Residential',
    description: 'Culinary grade dishwashers, pro-style ranges, and built-in refrigeration. Fast motor and pump turnaround.',
    popularAppliances: ['Pro-Scrub Dishwashers', 'Dual Fuel Ranges', 'Built-in French Door Coolers'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'bosch',
    name: 'Bosch',
    tier: 'Premium / Luxury',
    description: 'Precision German engineered quiet dishwashers and 800-series induction cooktops.',
    popularAppliances: ['300/500/800 Series Dishwashers', 'Induction Cooktops', 'Compact Laundry'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'sub-zero',
    name: 'Sub-Zero / Wolf',
    tier: 'Premium / Luxury',
    description: 'Iconic luxury food preservation and commercial-grade home cooking suites.',
    popularAppliances: ['Dual Compressor Refrigerators', 'Pro Gas Ranges', 'Wine Storage Units'],
    truckStockedParts: false,
    warrantyFriendly: true
  },
  {
    id: 'frigidaire',
    name: 'Frigidaire / Electrolux',
    tier: 'Top Residential',
    description: 'Gallery and Professional series cooktops, side-by-side coolers, and stacked laundry systems.',
    popularAppliances: ['Gallery Induction Ranges', 'Air Fry Ovens', 'Top-Freezer Fridges'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'hotpoint',
    name: 'Hotpoint',
    tier: 'Top Residential',
    description: 'Reliable value appliances widely used in Ohio residences and rental units. Fast turnaround on common components.',
    popularAppliances: ['Top Freezer Refrigerators', 'Electric Ranges', 'Top Load Washers'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'amana',
    name: 'Amana',
    tier: 'Top Residential',
    description: 'Dependable essentials. We carry belts, igniters, thermal fuses, and water valves in stock.',
    popularAppliances: ['Dryers', 'Ranges', 'Freezers', 'Microwaves'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'jennair',
    name: 'JennAir',
    tier: 'Premium / Luxury',
    description: 'High-end luxury cooking and refrigeration suites. Precision downdraft systems, convection ovens, and column refrigeration service.',
    popularAppliances: ['Downdraft Cooktops', 'Convection Wall Ovens', 'Built-in Refrigerators'],
    truckStockedParts: true,
    warrantyFriendly: true
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Columbus', zipCode: '43215', county: 'Franklin County (HQ)', turnaroundDays: 'Same-Day / Next-Day' },
  { name: 'Dublin', zipCode: '43016', county: 'Franklin / Delaware', turnaroundDays: 'Daily Coverage' },
  { name: 'Westerville', zipCode: '43081', county: 'Franklin / Delaware', turnaroundDays: 'Daily Coverage' },
  { name: 'Upper Arlington', zipCode: '43221', county: 'Franklin County', turnaroundDays: 'Daily Coverage' },
  { name: 'Powell', zipCode: '43065', county: 'Delaware County', turnaroundDays: 'Daily Coverage' },
  { name: 'New Albany', zipCode: '43054', county: 'Franklin County', turnaroundDays: 'Daily Coverage' },
  { name: 'Grove City', zipCode: '43123', county: 'Franklin County', turnaroundDays: 'Daily Coverage' },
  { name: 'Hilliard', zipCode: '43026', county: 'Franklin County', turnaroundDays: 'Daily Coverage' },
  { name: 'Delaware', zipCode: '43015', county: 'Delaware County', turnaroundDays: 'Daily Coverage' },
  { name: 'Cleveland Metro', zipCode: '44114', county: 'Cuyahoga County', turnaroundDays: 'Daily Coverage' },
  { name: 'Akron / Canton', zipCode: '44308', county: 'Summit / Stark', turnaroundDays: 'Daily Coverage' },
  { name: 'Cincinnati Metro', zipCode: '45202', county: 'Hamilton County', turnaroundDays: 'Daily Coverage' },
  { name: 'Dayton Metro', zipCode: '45402', county: 'Montgomery County', turnaroundDays: 'Daily Coverage' }
];

export const DIY_GUIDE_APPLIANCES = [
  {
    type: 'Refrigerator',
    lifespanYears: 13,
    avgRepairCost: 240,
    avgNewCost: 1400,
    diyFriendlyIssues: ['Cleaning dust off coils', 'Replacing door gasket', 'Replacing water filter'],
    professionalOnlyIssues: ['Sealed coolant leak', 'Compressor failure', 'Inverter control board repair']
  },
  {
    type: 'Washing Machine',
    lifespanYears: 11,
    avgRepairCost: 210,
    avgNewCost: 950,
    diyFriendlyIssues: ['Clearing lint/coin trap pump filter', 'Checking inlet hose filters', 'Leveling feet'],
    professionalOnlyIssues: ['Tub bearing replacement', 'Main motor stator failure', 'Transmission lockup']
  },
  {
    type: 'Clothes Dryer',
    lifespanYears: 13,
    avgRepairCost: 180,
    avgNewCost: 850,
    diyFriendlyIssues: ['Cleaning lint trap screen', 'Checking electrical breaker'],
    professionalOnlyIssues: ['Thermal cutoff switch', 'Heating element burn-out', 'Motor roller rebuild', 'Dryer duct cleaning']
  },
  {
    type: 'Dishwasher',
    lifespanYears: 10,
    avgRepairCost: 195,
    avgNewCost: 800,
    diyFriendlyIssues: ['Cleaning sump filter screen', 'Checking spray arm jets for scale'],
    professionalOnlyIssues: ['Circulation wash pump motor', 'Control board solder fault', 'Door hinge tension springs']
  },
  {
    type: 'Oven / Range',
    lifespanYears: 15,
    avgRepairCost: 220,
    avgNewCost: 1200,
    diyFriendlyIssues: ['Cleaning burner caps and igniter tips', 'Replacing oven light bulb'],
    professionalOnlyIssues: ['Gas valve safety checks', 'Bake igniter replacement', 'Electronic clock relay board']
  }
];
