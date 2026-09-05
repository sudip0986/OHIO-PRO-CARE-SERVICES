export const PLUMBING_SERVICES = [
  {
    id: 'leak-pipe-repair',
    name: 'Emergency Pipe Repair & Leak Detection',
    description: 'Pinpoint acoustic and thermal slab leak detection, burst copper and PEX pipe repairs, frozen line thawing, and whole-home repiping solutions.',
    typicalIssues: [
      'Unexplained spike in water utility bill',
      'Damp spots or warm patches on floors/ceilings',
      'Hissing sounds behind drywall when water is off',
      'Low water pressure across all fixtures',
      'Frozen or cracked exterior pipes'
    ],
    diagnosticFee: '$85.50',
    isPopular: true
  },
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning & Hydro Jetting',
    description: 'High-velocity water jetting, motorized drain augering, and blockage clearing for kitchen sinks, main sewer drains, and shower traps.',
    typicalIssues: [
      'Slow draining kitchen sink or bathtub',
      'Gurgling sounds from toilet when washing dishes',
      'Foul sewage odor rising from basement floor drains',
      'Water backing up into shower when washing machine drains'
    ],
    diagnosticFee: '$85.50',
    isPopular: true
  },
  {
    id: 'water-heater',
    name: 'Water Heater Repair & Installation',
    description: 'Complete diagnostic and replacement services for tankless and conventional gas & electric water heaters, anode rod inspection, and thermostat repair.',
    typicalIssues: [
      'No hot water or water runs cold quickly',
      'Rusty or discolored hot water from taps',
      'Popping, rumbling noises inside water tank',
      'Water pooling around the base of the heater'
    ],
    diagnosticFee: '$85.50',
    isPopular: true
  },
  {
    id: 'faucet-sink-repair',
    name: 'Faucet, Sink & Shower Fixture Care',
    description: 'Cartridge replacement, ceramic disc rebuilds, high-arc kitchen pull-out faucet installs, garbage disposal plumbing hookups, and shower valve balancing.',
    typicalIssues: [
      'Constant dripping faucet driving up water bills',
      'Low flow or spray head sputtering',
      'Water pooling inside under-sink cabinetry',
      'Shower temperature fluctuates abruptly'
    ],
    diagnosticFee: '$85.50',
    isPopular: true
  },
  {
    id: 'toilet-repair',
    name: 'Toilet Repair & Replacement',
    description: 'Rebuilding fill valves and flappers, wax ring resealing, clearing persistent toilet blockages, and installing ultra-efficient dual-flush commodes.',
    typicalIssues: [
      'Toilet runs continuously or cycles randomly',
      'Weak or incomplete flush requiring double flushing',
      'Leaking water at base of toilet damaging subfloor',
      'Rocking or unstable toilet bowl'
    ],
    diagnosticFee: '$85.50'
  },
  {
    id: 'garbage-disposal',
    name: 'Garbage Disposal Plumbing',
    description: 'Unjamming disposal impellers, replacing degraded sink flanges, rewiring motors, and installing heavy-duty continuous feed disposal systems.',
    typicalIssues: [
      'Disposal hums loudly but blades won\'t spin',
      'Water dripping from disposal housing under sink',
      'Kitchen sink backed up with food waste',
      'Persistent rotting odor despite running water'
    ],
    diagnosticFee: '$85.50'
  },
  {
    id: 'sewer-line-camera',
    name: 'Sewer Line Camera Inspection',
    description: 'High-definition color fiber-optic camera scoping through cleanouts to identify tree root intrusion, broken clay tile pipes, and belly dips.',
    typicalIssues: [
      'Multiple drains backing up simultaneously in basement',
      'Soggy or sunken patches in front lawn',
      'Frequent main line clogs every few months',
      'Old cast iron or clay sewer line verification'
    ],
    diagnosticFee: '$85.50 (Included with service)',
    isPopular: true
  },
  {
    id: 'sump-pump',
    name: 'Sump Pump & Flood Defense',
    description: 'Submersible sump pump replacement, dual-float switch testing, battery backup auxiliary pumps, and check valve installations for dry basements.',
    typicalIssues: [
      'Pump runs continuously without shutting off',
      'Sump pit overflowing during heavy Ohio rainstorms',
      'Loud grinding or vibration noise when activated',
      'Lack of emergency battery backup power protection'
    ],
    diagnosticFee: '$85.50'
  }
];

export const PLUMBING_BRANDS = [
  {
    id: 'moen',
    name: 'Moen',
    tier: 'Top Residential & Commercial',
    description: 'Industry-leading faucets, Duralast cartridges, and Flo Smart shutoff valves. Fully stocked replacement parts on our vans.',
    popularFixtures: ['MotionSense Kitchen Faucets', 'Posi-Temp Shower Valves', 'Garbage Disposals'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'kohler',
    name: 'Kohler',
    tier: 'Premium / Designer',
    description: 'High-performance toilets, touchless kitchen fixtures, and cast iron sinks. Authorized service protocols.',
    popularFixtures: ['Cimarron & Highline Toilets', 'Simplice Pull-Down Faucets', 'Rite-Temp Valves'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'delta',
    name: 'Delta Faucet',
    tier: 'Top Residential',
    description: 'Diamond Seal technology, Touch2O electronic faucets, and universal MultiChoice rough-in shower valves.',
    popularFixtures: ['Touch2O Kitchen Faucets', 'In2ition Shower Heads', 'Monitor Pressure Balance'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'rheem',
    name: 'Rheem',
    tier: 'Water Heating Industry Leader',
    description: 'America\'s preferred water heaters. High-efficiency gas, electric, and hybrid heat pump units with fast warranty fulfillment.',
    popularFixtures: ['Performance Platinum Gas Heaters', 'Gladiator Smart Electric', 'Tankless Gas Units'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'bradford-white',
    name: 'Bradford White',
    tier: 'Professional Grade',
    description: 'Built exclusively for professional licensed plumbers. Heavy-duty Hydrojet sediment reduction systems and Defender safety dampers.',
    popularFixtures: ['Defender Safety System', 'Atmospheric Vent Gas Heaters', 'AeroTherm Hybrid Heat Pumps'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'insinkerator',
    name: 'InSinkErator',
    tier: 'Food Waste Specialists',
    description: 'Quiet-series multi-grind garbage disposals and instant hot water dispensers. Standard equipment in modern Ohio City homes.',
    popularFixtures: ['Evolution Excel Disposals', 'Badger 5 Heavy Duty', 'Instant Hot Water Tanks'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'american-standard',
    name: 'American Standard',
    tier: 'Proven Residential',
    description: 'Champion 4 clog-free flush systems, cadet pro toilets, and antimicrobial EverClean glaze surfaces.',
    popularFixtures: ['Champion 4 Toilets', 'Colony Fixtures', 'Flash Shower Rough-Ins'],
    truckStockedParts: true,
    warrantyFriendly: true
  },
  {
    id: 'toto',
    name: 'TOTO',
    tier: 'Ultra Luxury & High Efficiency',
    description: 'World-renowned Tornado Flush technology, Washlet bidet systems, and CeFiONtect ceramic glazes.',
    popularFixtures: ['Drake Toilets', 'Washlet Bidet Seats', 'Ultramax High Efficiency'],
    truckStockedParts: false,
    warrantyFriendly: true
  }
];

export const SERVICE_AREAS = [
  { name: 'All Places Across Full Ohio City', zipCode: '44113', county: 'Cuyahoga (HQ Hub)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (Market District & W 25th)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (Franklin Blvd Historic)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (Bridge Ave & West 38th)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (SoLo / Lorain Ave)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (Fulton Rd & Monroe St)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (Detroit Ave Corridor)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Ohio City (Columbus Rd & Flats)', zipCode: '44113', county: 'Cuyahoga (Core)', turnaroundDays: 'Immediate / Same-Day' },
  { name: 'Tremont & Duck Island Border', zipCode: '44113', county: 'Cuyahoga County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Detroit Shoreway & Gordon Square', zipCode: '44102', county: 'Cuyahoga County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Downtown Cleveland & Flats', zipCode: '44114', county: 'Cuyahoga County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Lakewood & Edgewater', zipCode: '44107', county: 'Cuyahoga County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Brooklyn Centre & Clark-Fulton', zipCode: '44109', county: 'Cuyahoga County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Columbus Metro & Suburbs', zipCode: '43215', county: 'Franklin County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Cincinnati Metro Region', zipCode: '45202', county: 'Hamilton County', turnaroundDays: 'Daily Dispatch' },
  { name: 'Akron / Canton Hub', zipCode: '44308', county: 'Summit / Stark', turnaroundDays: 'Daily Dispatch' }
];

export const DIY_PLUMBING_GUIDE = [
  {
    type: 'Water Heater',
    lifespanYears: 12,
    avgRepairCost: 280,
    avgNewCost: 1650,
    diyFriendlyIssues: ['Relighting standing pilot light', 'Adjusting temperature dial', 'Flushing minor tank sediment'],
    professionalOnlyIssues: ['Gas control valve troubleshooting', 'T&P relief valve discharge replacement', 'Leaking internal tank body (requires replacement)', 'Electrical heating element wiring']
  },
  {
    type: 'Kitchen Drain / Sink Line',
    lifespanYears: 30,
    avgRepairCost: 180,
    avgNewCost: 850,
    diyFriendlyIssues: ['Clearing surface hair/debris', 'Plunging sink drain', 'Cleaning removable P-trap under sink'],
    professionalOnlyIssues: ['Main waste stack grease blockage', 'Hydro jetting heavy root intrusion', 'Cracked under-floor drainage pipe', 'Replacing degraded cast-iron branches']
  },
  {
    type: 'Toilet & Flush System',
    lifespanYears: 20,
    avgRepairCost: 160,
    avgNewCost: 550,
    diyFriendlyIssues: ['Replacing rubber tank flapper', 'Adjusting float arm water level', 'Replacing toilet seat and bolts'],
    professionalOnlyIssues: ['Replacing crushed wax ring seal', 'Repairing broken closet flange in subfloor', 'Clearing foreign objects lodged past toilet trapway', 'Rough-in line relocation']
  },
  {
    type: 'Faucets & Shower Valves',
    lifespanYears: 15,
    avgRepairCost: 190,
    avgNewCost: 650,
    diyFriendlyIssues: ['Unscrewing & soaking aerator in vinegar', 'Tightening loose faucet handle screw'],
    professionalOnlyIssues: ['Behind-the-wall pressure balanced shower cartridge', 'Sweating/soldering copper valve joints', 'Fixing stripped valve stems with concealed leaks']
  },
  {
    type: 'Garbage Disposal Unit',
    lifespanYears: 10,
    avgRepairCost: 150,
    avgNewCost: 380,
    diyFriendlyIssues: ['Pressing red reset button on base', 'Manually turning bottom allen wrench socket to free minor jam'],
    professionalOnlyIssues: ['Internal motor seal leak corroding housing', 'Wiring dedicated GFCI electrical circuit', 'Sink flange resealing to prevent cabinet rot']
  }
];
