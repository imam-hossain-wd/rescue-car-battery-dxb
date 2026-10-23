import {
  RiFlashlightLine,
  RiCarLine,
  RiTestTubeLine,
  RiTruckLine,
  RiToolsLine,
  RiSettings4Line,
  RiSearchLine,
  RiPlugLine,
  RiBatteryChargeLine,
  RiCpuLine,
  RiBattery2Line,
  RiRecycleLine,
} from "@remixicon/react";


export const services = [
  {
    id: 1,
    slug: "mobile-car-battery-replacement",
    icon: RiFlashlightLine,
    title: "24/7 Emergency Mobile Car Battery Replacement",
    shortDescription: "Rapid dispatch and complete removal/installation of dead batteries anywhere in Dubai at any hour.",
    category: "emergency",
    popular: true,
    metaTitle: "24/7 Mobile Car Battery Replacement Dubai | 5-15 Min Response",
    metaDescription: "Stranded with a dead battery in Dubai? Get 24/7 mobile battery replacement delivered to your doorstep in 5–15 mins. Genuine batteries with up to 48 months warranty.",
    heroHeading: "24/7 Doorstep Mobile Car Battery Replacement Across Dubai",
    overview: "A sudden, unexpected dead car battery is one of the most frustrating breakdowns a driver can experience in the United Arab Emirates. Whether you are stuck in a tight basement parking garage in Business Bay, parked outside your villa in Jumeirah, stranded at a bustling shopping mall in Downtown Dubai, or stopped on the shoulder of Sheikh Zayed Road, our 24/7 emergency mobile car battery replacement fleet is engineered specifically for rapid intervention. Operating round-the-clock across all 21 districts of Dubai, our certified auto-electricians arrive in fully equipped mobile service vans stocked with factory-fresh, 100% genuine batteries from globally renowned manufacturers including Varta, Amaron, Solite, ACDelco, Bosch, and Optima. Extreme summer temperatures in Dubai regularly exceed 45°C, accelerating internal plate corrosion, electrolyte evaporation, and active material shedding inside battery casings. This harsh climate drastically shortens average battery lifespans down to 18 to 24 months. Instead of taking on the exorbitant costs and time delays associated with towing your vehicle to a traditional repair shop or dealership, our mobile unit brings dealer-level installation directly to your exact GPS location within 5 to 15 minutes. Every replacement includes a thorough preliminary digital battery health test, alternator charge output verification, terminal post burnishing, anti-corrosion barrier sealing, and an official physical warranty certificate ranging from 12 to 48 months for absolute peace of mind.",
    keyBenefits: [
      "Ultra-fast dispatch with guaranteed on-site arrival within 5 to 15 minutes across all Dubai zones",
      "100% factory-fresh, genuine OEM-spec batteries from Varta, Amaron, Solite, Bosch, and ACDelco",
      "Complimentary digital battery health, starter motor draw, and alternator charge testing included",
      "Comprehensive 12 to 48-month hassle-free doorstep replacement warranty program"
    ],
    processSteps: [
      { step: "01", title: "Emergency Dispatch", description: "Contact our 24/7 dispatch hotline via phone or WhatsApp to share your vehicle model and exact GPS pin." },
      { step: "02", title: "On-Site Digital Diagnosis", description: "Our certified technician conducts a conductance load test to verify if the battery is depleted or defective." },
      { step: "03", title: "Precision Swap & Fitting", description: "We safely remove the dead unit using memory-saver tools and fit a brand-new OEM-spec battery." },
      { step: "04", title: "Charging Circuit Test", description: "We run a dynamic load test on your alternator, stamp your warranty card, and process secure on-site payment." }
    ],
    faqs: [
      { question: "How fast can a technician reach my location in Dubai?", answer: "Our mobile rescue vans are strategically stationed across Dubai expressways and residential sectors, allowing us to arrive within 5 to 15 minutes." },
      { question: "Do you supply genuine batteries with official warranty?", answer: "Yes, every battery we install is 100% genuine, fresh stock, backed by official warranty certificates ranging from 12 to 48 months depending on the brand." }
    ],
    suitableFor: ["All Sedan & Hatchback Vehicles", "Luxury European Sports Cars", "Heavy-Duty 4x4 Off-Road SUVs", "Commercial Vans & Fleet Fleets"]
  },
  {
    id: 2,
    slug: "roadside-jumpstart-service",
    icon: RiCarLine,
    title: "Emergency Roadside Jumpstart & Boost",
    shortDescription: "Safe, high-power anti-surge boosting to jumpstart flat batteries without damaging sensitive car electronics.",
    category: "emergency",
    metaTitle: "Safe Emergency Car Jumpstart Service Dubai | Anti-Surge Boost",
    metaDescription: "Fast, safe 24/7 mobile car jumpstart service in Dubai. We use anti-surge booster packs to safely revive flat batteries without harming delicate ECU electronics.",
    heroHeading: "Safe, Professional On-Site Car Jumpstart & Battery Revival",
    overview: "Modern automobiles are essentially sophisticated rolling computers, outfitted with dozens of delicate Electronic Control Units (ECUs), delicate infotainment hardware, sensors, and complex bus communication systems. Attempting a traditional cable jumpstart using cheap jumper leads connected to another vehicle poses extreme dangers, often triggering massive reverse-polarity voltage spikes that can permanently fry expensive car computers and main engine control modules. Our emergency roadside jumpstart and battery boost service employs industrial-grade, anti-surge micro-processor-controlled booster units designed to supply clean, regulated cranking amps. If your car battery has been completely drained due to headlights left on overnight, an open door latch, a malfunctioning interior dome light, or prolonged inactivity while you were away on vacation, our mobile mechanics arrive at your vehicle within minutes to safely jumpstart your engine. Before connecting any external booster pack, our technicians visually inspect battery polarity, verify post integrity, and measure open-circuit voltage to prevent catastrophic short circuits. Once your engine turns over and revives smoothly, we immediately execute a comprehensive digital alternator output test to ensure your charging system is actively feeding power back into the battery, giving you an honest, transparent verdict on whether your battery can safely hold a charge or requires immediate replacement.",
    keyBenefits: [
      "Microprocessor-controlled anti-surge equipment protects sensitive ECU microchips from voltage spikes",
      "Dynamic multi-point post-jumpstart alternator output and charging voltage verification",
      "24/7 coverage across multi-story basement parkings, private driveways, and major highways",
      "Transparent diagnostic evaluation—if the battery is shorted, a fresh replacement is available on the spot"
    ],
    processSteps: [
      { step: "01", title: "Visual & Voltage Inspection", description: "Inspecting battery terminals for physical damage or corrosion and measuring open-circuit voltage." },
      { step: "02", title: "Anti-Surge Hookup", description: "Connecting regulated booster equipment featuring automated reverse-polarity and surge protection." },
      { step: "03", title: "Controlled Engine Boost", description: "Delivering clean, stable cranking amperage to safely turn over the engine on the first try." },
      { step: "04", title: "Alternator Output Scan", description: "Monitoring dynamic charging voltage to verify the alternator is outputting between 13.8V and 14.4V." }
    ],
    faqs: [
      { question: "Can a jumpstart damage my vehicle's onboard computer?", answer: "Conventional jumper cables can cause harmful voltage spikes. Our anti-surge booster packs completely eliminate this risk to protect your ECUs." },
      { question: "What happens if my engine fails to stay running after the jumpstart?", answer: "If your battery has suffered an internal cell short circuit, our mobile van carries fresh OEM replacement units on board for instant installation." }
    ],
    suitableFor: ["Vehicles with Headlights Left On Overnight", "Cars Parked Unused During Extended Travel", "Depleted 12V Auxiliary Systems in Hybrids"]
  },
  {
    id: 3,
    slug: "battery-health-load-testing",
    icon: RiTestTubeLine,
    title: "Doorstep Battery Health & Load Testing",
    shortDescription: "Professional digital CCA (Cold Cranking Amps) and voltage diagnostic checks performed before any replacement decision.",
    category: "diagnostics",
    metaTitle: "Digital Car Battery Health & Load Testing Dubai | Doorstep Diagnosis",
    metaDescription: "Unsure if your car battery needs replacement? Get comprehensive digital CCA load testing & health diagnostics at your doorstep in Dubai.",
    heroHeading: "Scientific Battery Health & Digital Conductance Load Testing",
    overview: "Replacing a car battery purely based on guesswork, visual appearance, or simple age is an unreliable approach that frequently leads to unnecessary expenses or unexpected breakdowns. Severe desert climate conditions in Dubai subject car batteries to relentless heat stress, which accelerates internal grid corrosion, breaks down plate active paste, and causes subtle electrolyte degradation long before complete failure occurs. Our doorstep battery health and conductance load testing service eliminates uncertainty by applying advanced, scientific digital diagnostic algorithms directly to your battery terminals. Using state-of-the-art digital conductance analyzers, our certified auto-electricians measure your battery's precise Cold Cranking Amps (CCA) output, internal plate resistance (measured in milliohms), state of charge (SOC), and overall state of health (SOH). We test the battery under simulated heavy starter motor cranking loads as well as resting states to determine its exact remaining operational life. This empirical diagnostic process prevents you from prematurely discarding a good battery that merely suffered from a temporary discharge or a minor parasitic draw, while pinpointing failing, sulfated, or shorted batteries before they leave you stranded on a hot Dubai highway.",
    keyBenefits: [
      "Empirical digital diagnostic report providing exact Cold Cranking Amps (CCA) vs rated factory specs",
      "Prevents premature replacement of healthy batteries that only require slow bench charging",
      "Detects hidden internal plate sulfation, micro-short circuits, and dead cells before total failure",
      "Provides a physical printout or digital report on the spot for complete transparency"
    ],
    processSteps: [
      { step: "01", title: "Resting Open-Circuit Check", description: "Measuring base static voltage to evaluate the battery's surface charge and chemical stability." },
      { step: "02", title: "Digital Conductance Scan", description: "Sending micro-signals through internal plates to calculate true remaining Cold Cranking Amps (CCA)." },
      { step: "03", title: "Internal Resistance Measurement", description: "Scanning internal plate resistance (mΩ) to detect physical paste shedding and cell sulfation." },
      { step: "04", title: "Empirical Verdict", description: "Delivering an honest, data-backed recommendation: Battery Good, Recharge Needed, or Immediate Replacement." }
    ],
    faqs: [
      { question: "How can I tell if my battery is truly dying or just discharged?", answer: "A conductance health test isolates internal plate resistance and CCA capacity. A discharged healthy battery can be recharged; a sulfated battery must be replaced." }
    ],
    suitableFor: ["Engines Experiencing Sluggish Ignition Cranking", "Vehicles displaying Low Voltage Dashboard Warnings", "Pre-Purchase Used Car Inspections"]
  },
  {
    id: 4,
    slug: "mobile-battery-delivery",
    icon: RiTruckLine,
    title: "Mobile Battery Delivery & Drop-off",
    shortDescription: "Express delivery of specialized or pre-charged battery units directly to your home or office.",
    category: "delivery",
    metaTitle: "Express Mobile Car Battery Delivery Dubai | Direct Drop-off",
    metaDescription: "Need a specific car battery delivered in Dubai? Fast delivery of pre-charged AGM, EFB, and SLI batteries directly to your home or mechanic shop.",
    heroHeading: "Fast, Direct Mobile Car Battery Express Delivery Service",
    overview: "Whether you are a skilled DIY car enthusiast who prefers handling your own vehicle maintenance, an independent automotive workshop needing a hard-to-find specialty battery size, or a commercial fleet manager requiring immediate spares, our mobile battery express delivery service provides rapid dispatch across Dubai. We maintain an extensive inventory of fully charged, bench-tested, factory-fresh batteries spanning all international box standards, including JIS (Japanese Industrial Standards), DIN (Deutsches Institut für Normung European standards), BCI (Battery Council International American sizes), and EN specifications. Our dedicated delivery network transports pre-activated AGM, EFB, GEL, and standard flooded lead-acid batteries straight to your residential address, office parking bay, or commercial garage within 30 minutes of order confirmation. Before any battery leaves our central distribution hub, our logistics team subjects the unit to a rigorous open-circuit voltage verification and digital load test to guarantee it arrives at your doorstep delivering 100% rated capacity. Every delivered battery comes complete with official manufacturer warranty documentation, serial number registrations, protective terminal caps, and optional free pickup of your old hazardous scrap core unit.",
    keyBenefits: [
      "Guaranteed express 30-minute doorstep or workshop delivery network covering all 21 Dubai areas",
      "Bench-tested voltage and CCA verification prior to dispatch ensuring 100% active fresh stock",
      "Comprehensive inventory spanning European DIN, Japanese JIS, and American BCI battery dimensions",
      "Includes stamped official manufacturer warranty documentation and free old core takeaway"
    ],
    processSteps: [
      { step: "01", title: "Technical Specification Matching", description: "Our technical support team matches your exact car make, model, year, and box dimensions." },
      { step: "02", title: "Bench Voltage Activation Scan", description: "We conduct an open-circuit voltage check on the bench to ensure full 12.6V+ charge prior to delivery." },
      { step: "03", title: "Express Dispatch", description: "Our mobile delivery unit navigates directly to your shared GPS location anywhere in Dubai." },
      { step: "04", title: "Handover & Warranty Stamp", description: "We deliver your unit alongside official stamped warranty certificates and optional core collection." }
    ],
    faqs: [
      { question: "Are delivered batteries ready for immediate engine installation?", answer: "Yes, every battery we deliver is fully activated, bench-tested, and fully charged, ready to be fitted straight out of the box." }
    ],
    suitableFor: ["DIY Automotive Enthusiasts", "Independent Repair Garages & Body Shops", "Commercial Fleet Operators & Delivery Companies"]
  },
  {
    id: 5,
    slug: "terminal-cleaning-anti-corrosion",
    icon: RiToolsLine,
    title: "Onsite Terminal Cleaning & Anti-Corrosion Treatment",
    shortDescription: "Clearing acid oxidation, burnishing post connectors, and applying protective seals to extend battery lifespan.",
    category: "maintenance",
    metaTitle: "Car Battery Terminal Cleaning & Corrosion Removal Dubai",
    metaDescription: "Eliminate white/blue battery post oxidation with professional terminal cleaning and anti-corrosion sealing at your location in Dubai.",
    heroHeading: "Professional Battery Post Restoration & Anti-Corrosion Sealing",
    overview: "The dense white, light blue, or greenish powdery crust frequently seen accumulating around car battery posts and terminal clamps is lead sulfate oxidation and copper carbonate buildup. This corrosion occurs when trace sulfuric acid fumes seep out around battery terminal posts under the extreme ambient heat conditions typical of Dubai summers. Left untreated, this crust acts as an electrical insulator, introducing massive electrical resistance into the starting circuit. This leads to hard starting, intermittent electrical power loss, dimming headlights, erratic sensor readings, and premature alternator failure due to voltage regulation overload. Our mobile terminal post cleaning and anti-corrosion restoration service provides complete chemical neutralization and mechanical burnishing at your location. Our technicians spray chemical neutralizing agents to dissolve corrosive salts without contaminating engine bay components. We disconnect the terminal clamps, use precision copper wire post brushes to burnish both the lead battery posts and internal clamp mating surfaces back to bare, highly conductive metal, re-torque the connectors to factory specifications, and coat the entire assembly with a high-temperature chemical anti-corrosion barrier grease.",
    keyBenefits: [
      "Restores 100% electrical conductivity and eliminates starting circuit resistance",
      "Prevents unexpected non-start emergencies caused by corroded, high-resistance terminal connections",
      "Extends the operational lifespan of both your car battery and charging alternator in hot climates",
      "Includes mechanical post burnishing, clamp re-torquing, and heavy-duty anti-corrosion sealing"
    ],
    processSteps: [
      { step: "01", title: "Chemical Neutralization", description: "Applying heavy-duty acid-neutralizing spray to dissolve hardened sulfate crust deposits safely." },
      { step: "02", title: "Mechanical Wire Burnishing", description: "Using specialized wire brushes to clean lead posts and internal clamp surfaces back to bare metal." },
      { step: "03", title: "Precision Torque Refastening", description: "Re-attaching terminal clamps and securing them precisely to factory torque standards." },
      { step: "04", title: "Protective Barrier Sealing", description: "Spraying chemical anti-corrosion sealant grease to block moisture and acid fume penetration." }
    ],
    faqs: [
      { question: "Why do car battery terminals corrode so rapidly in Dubai?", answer: "Extreme summer heat causes battery casing seals to expand slightly, allowing trace sulfuric acid vapors to vent and react with terminal metals." }
    ],
    suitableFor: ["Batteries Showing White or Blue Powdery Post Crust", "Vehicles Experiencing Intermittent Power Cuts", "Routine Preventative Maintenance"]
  },
  {
    id: 6,
    slug: "clamp-tray-cable-fastening",
    icon: RiSettings4Line,
    title: "Onsite Battery Clamp, Tray, & Cable Fastening",
    shortDescription: "Re-securing loose mount brackets, replacing degraded hold-down clamps, and preventing engine vibration damage.",
    category: "maintenance",
    metaTitle: "On-Site Car Battery Bracket, Tray & Cable Repair Dubai",
    metaDescription: "Prevent battery vibration damage. Professional replacement of loose battery hold-down clamps, custom trays, and loose terminal cables in Dubai.",
    heroHeading: "On-Site Battery Securement, Tray Replacement & Cable Fastening",
    overview: "A loose, unfastened car battery inside an engine bay is a major mechanical hazard. As your vehicle navigates speed bumps, construction zones, and rough road surfaces across Dubai, intense engine vibration causes the internal lead plates within a loose battery to flex, shed active lead paste, and develop short circuits across internal cell separators. Furthermore, if a battery shifts during sharp cornering, its positive terminal post can make direct physical contact with the metal hood or hold-down bracket, causing a massive short circuit, electrical fire, or blown main inline fuse. Our mobile battery securement service resolves loose mounting hardware directly at your home or office. Our technicians inspect the structural integrity of your lower battery tray, replace rusted or stripped J-bolts, fit heavy-duty OEM-spec top hold-down brackets, replace degraded rubber isolation pads, and align terminal cables to eliminate tension. We ensure your battery is securely locked in place, meeting all official vehicle inspection standards in the UAE.",
    keyBenefits: [
      "Protects internal battery lead plates from premature structural failure caused by road vibration",
      "Eliminates short circuits caused by shifting battery terminals contacting metal engine components",
      "Replaces rusted, broken, stripped, or missing hold-down brackets and J-bolts on the spot",
      "Ensures full compliance with RTA vehicle registration and safety inspection standards"
    ],
    processSteps: [
      { step: "01", title: "Tray & Structural Assessment", description: "Inspecting the lower battery tray for cracking, rust corrosion, or missing rubber isolation dampeners." },
      { step: "02", title: "Hardware Replacement", description: "Installing heavy-duty corrosion-resistant J-bolts or OEM-spec top hold-down brackets." },
      { step: "03", title: "Mechanical Stress Testing", description: "Manually applying force to verify zero physical movement of the battery within the tray." },
      { step: "04", title: "Terminal Cable Realignment", description: "Adjusting cable slack and tightening post clamps to prevent wire fatigue and loose connections." }
    ],
    faqs: [
      { question: "Is a loose car battery really a dangerous hazard?", answer: "Yes, excessive vibration causes internal lead plates to shatter, and shifting batteries can short out against the hood, posing a fire risk." }
    ],
    suitableFor: ["Off-Road 4x4 Dune Drivers", "Cars with Broken or Missing Factory Brackets", "Engine Bays Producing Rattling Noises"]
  },
  {
    id: 7,
    slug: "parasitic-drain-diagnostics",
    icon: RiSearchLine,
    title: "Deep Electrical System & Parasitic Drain Diagnostics",
    shortDescription: "Tracing hidden off-key electrical current draws that drain your battery overnight.",
    category: "diagnostics",
    metaTitle: "Car Parasitic Battery Drain Diagnostics Dubai | Overnight Drain Fix",
    metaDescription: "Is your car battery dying overnight? Mobile diagnostic specialists trace hidden electrical parasitic drains and faulty modules across Dubai.",
    heroHeading: "Mobile Electrical Parasitic Current Drain Tracing & Diagnosis",
    overview: "If your car battery keeps dying repeatedly after sitting parked overnight—even after you have recently installed a brand-new battery—your vehicle is likely suffering from a parasitic electrical drain. In modern feature-rich automobiles, dozens of electronic modules are designed to enter a low-power 'sleep mode' several minutes after the ignition is turned off and the doors are locked. However, a malfunctioning door lock microswitch, a sticking relay, a faulty glovebox light, an improperly wired aftermarket dashcam, an active GPS tracking unit, or a shorted control module can prevent the CAN-bus network from sleeping, continuously pulling current from the battery. Our mobile parasitic drain diagnostic service uses specialized electrical testing equipment to isolate the exact circuit responsible for draining your battery. Our technicians set up inline digital multimeters and non-intrusive DC milliamp clamp meters to measure the exact resting current draw. By systematically monitoring micro-voltage drops across all interior and engine-bay fuse boxes without waking up the vehicle's computer networks, we pinpoint the exact faulty module, aftermarket accessory, or shorted wire causing the issue.",
    keyBenefits: [
      "Pinpoints exact short circuits, faulty relays, and malfunctioning modules draining power",
      "Saves substantial money by preventing repeated, unnecessary battery replacements",
      "Comprehensively audits aftermarket accessories including dashcams, sound systems, and tracking units",
      "Provides actionable diagnostic reports detailing exact repairs needed to resolve the drain"
    ],
    processSteps: [
      { step: "01", title: "Sleep Mode Simulation", description: "Latching all door locks and letting the vehicle's onboard CAN-bus network enter full sleep mode." },
      { step: "02", title: "Milliamp Resting Draw Scan", description: "Connecting inline precision meters to measure total off-key current draw (Normal: < 50mA)." },
      { step: "03", title: "Micro-Voltage Drop Testing", description: "Measuring millivolts across individual fuse contacts to identify active circuits without waking the car." },
      { step: "04", title: "Fault Component Isolation", description: "Tracing the active fuse to its exact load component, relay, module, or aftermarket wiring." }
    ],
    faqs: [
      { question: "What is considered a normal parasitic draw in modern vehicles?", answer: "A healthy modern car should draw between 20mA and 50mA once fully asleep. Any draw exceeding 75mA will drain a battery within days." }
    ],
    suitableFor: ["Cars Draining Batteries When Parked Overnight", "Vehicles with Aftermarket Dashcams or Trackers", "Intermittent Unexplained Electrical Depletion"]
  },
  {
    id: 8,
    slug: "starter-alternator-diagnostics",
    icon: RiPlugLine,
    title: "Starter Motor & Alternator Charging Diagnostics",
    shortDescription: "Comprehensive testing of your alternator's charging output voltage and starter motor draw under load.",
    category: "diagnostics",
    metaTitle: "Alternator & Starter Motor Testing Dubai | Mobile Onsite Check",
    metaDescription: "Don't replace a good battery for a bad alternator! Mobile charging voltage and starter motor diagnostic testing at your location in Dubai.",
    heroHeading: "Comprehensive On-Site Alternator & Starter Motor Diagnostics",
    overview: "A dead battery is frequently just a symptom of a deeper problem within your vehicle's starting and charging system. If your alternator's internal diode bridge fails, its voltage regulator breaks down, or its drive belt slips, it will fail to supply adequate voltage to recharge the battery while driving. Conversely, if your starter motor develops worn internal carbon brushes or shorted armature windings, it will draw excessive electrical current during ignition, mimicking a dead battery even when connected to a fully charged unit. Our mobile starting and charging diagnostic service provides complete on-site analysis of your entire electrical system before you purchase an unneeded battery. Our auto-electricians test your alternator under zero-load idle conditions as well as heavy electrical load conditions (with air conditioning, high beams, and audio systems running simultaneously) to verify both DC output voltage and AC ripple voltage. We also measure the starter motor's initial current draw during engine turnover, ensuring every component in your ignition chain is functioning correctly.",
    keyBenefits: [
      "Differentiates between a flat battery, a failing alternator, and a high-draw starter motor",
      "Measures AC ripple voltage to detect blown internal alternator rectifier diodes early",
      "Measures exact starter motor current draw (Amperes) during engine ignition turnover",
      "Prevents getting stranded again shortly after buying a new battery due to charging failure"
    ],
    processSteps: [
      { step: "01", title: "Idle Charging Output Scan", description: "Checking baseline idle charging voltage across battery terminals (Target: 13.8V to 14.4V)." },
      { step: "02", title: "Heavy Electrical Load Test", description: "Measuring alternator output voltage stability with AC, lights, and demisters running." },
      { step: "03", title: "Starter Amperage Spike Test", description: "Using high-current inductive clamp meters to log exact starter motor draw during ignition." },
      { step: "04", title: "System Component Report", description: "Providing a clear breakdown showing whether the battery, alternator, or starter motor requires service." }
    ],
    faqs: [
      { question: "How can I tell if my issue is caused by a bad alternator or a dead battery?", answer: "If your battery warning light stays illuminated on your dashboard while driving or headlights dim, the alternator is typically at fault." }
    ],
    suitableFor: ["Dashboard Battery Warning Lights Illuminated", "Clicking Noises Heard When Turning Ignition Key", "Headlights Dimming Significantly While Driving"]
  },
  {
    id: 9,
    slug: "auxiliary-memory-saver-battery-replacement",
    icon: RiBatteryChargeLine,
    title: "Auxiliary Power / Memory Saver Battery Replacement",
    shortDescription: "Supplying continuous 12V backup power during battery swaps to preserve radio, seat, clock, and dashboard settings.",
    category: "replacement",
    premium: true,
    metaTitle: "Auxiliary Car Battery Replacement Dubai | OBD Memory Saver",
    metaDescription: "Zero vehicle memory loss battery replacement in Dubai. We connect OBD memory savers during swaps to protect radio settings, seats & ECU calibration.",
    heroHeading: "Auxiliary 12V Battery Replacement & OBD Computer Memory Saver",
    overview: "In modern luxury vehicles—especially models from Mercedes-Benz, BMW, Audi, Porsche, and Range Rover—unplugging the primary starter battery completely cuts power to numerous onboard memory microchips. Disconnecting power without a backup supply can erase anti-theft radio codes, reset power window auto-up limits, lock navigation screens, drop electric seat memory positions, and clear engine adaptive transmission shift patterns. Furthermore, many modern European vehicles feature a dedicated secondary 12V auxiliary battery or capacitor pack designed to power brake-by-wire safety systems, active steering actuators, and stop-start accessories. Our premium auxiliary power and memory-saver replacement service guarantees zero loss of vehicle calibration data during battery replacement. Our technicians connect digital power supply units to your vehicle's OBD-II port before removing the main battery cables, supplying continuous 12V backup power throughout the installation. Additionally, if your vehicle displays an 'Auxiliary Battery Malfunction' warning message, we supply and fit genuine auxiliary units on-site, restoring full functionality to your vehicle's safety features.",
    keyBenefits: [
      "Preserves custom driver seat positions, radio presets, clock times, and climate control configurations",
      "Prevents anti-theft audio lockouts and lost ECU throttle body calibration data during battery swaps",
      "Replaces secondary auxiliary 12V batteries and backup capacitor packs in modern European luxury cars",
      "Seamless replacement process eliminating the need for expensive secondary dealership visits"
    ],
    processSteps: [
      { step: "01", title: "OBD-II Power Pack Connection", description: "Connecting a regulated 12V backup power supply unit to the vehicle's OBD-II diagnostic port." },
      { step: "02", title: "Auxiliary Unit Location & Access", description: "Accessing secondary auxiliary batteries (commonly situated in trunk side-panels or under seats)." },
      { step: "03", title: "Live Backup Battery Swap", description: "Replacing the depleted auxiliary battery while backup power maintains live voltage across all circuits." },
      { step: "04", title: "Diagnostic Fault Verification", description: "Scanning instrument cluster to verify complete clearing of auxiliary malfunction warning messages." }
    ],
    faqs: [
      { question: "Why does my Mercedes-Benz or BMW have two separate batteries?", answer: "Modern luxury cars use a primary battery for engine starting and a secondary auxiliary battery to power safety systems, active steering, and electronics." }
    ],
    suitableFor: ["Mercedes-Benz Displaying 'Auxiliary Battery Malfunction'", "BMW Models with Comfort Access Systems", "Audi & Porsche Advanced Electronics"]
  },
  {
    id: 10,
    slug: "bms-ecu-battery-registration-coding",
    icon: RiCpuLine,
    title: "BMS ECU Battery Registration & Computer Coding",
    shortDescription: "Dealer-level scanner diagnostic coding to register new battery specs into the vehicle computer system.",
    category: "coding",
    premium: true,
    metaTitle: "BMS Battery Registration & ECU Coding Dubai | Dealer Diagnostics",
    metaDescription: "Professional BMS battery registration in Dubai for BMW, Mercedes, Audi & Porsche. Register new battery specs to prevent alternator overcharging.",
    heroHeading: "Dealer-Grade BMS ECU Battery Registration & Microchip Coding",
    overview: "Modern vehicles equipped with Intelligent Battery Sensors (IBS) and advanced Battery Management Systems (BMS) actively monitor the age, temperature, charge level, and degradation state of the battery over time. As a battery ages, the BMS gradually instructs the alternator to increase charging voltage and current to compensate for internal plate sulfation. If you install a brand-new battery without performing a formal computer registration in the engine ECU, the car's computer will treat the new unit as if it were still the old, degraded battery, supplying excessive charging voltage that overheats and destroys the new battery within months. Our dealer-grade BMS registration and computer coding service utilizes advanced diagnostic scanners to register new battery installations directly into your vehicle's engine control module. We update the ECU with the new battery's exact Ampere-hour (Ah) capacity, technology chemistry type (such as upgrading from EFB to AGM), brand specification, and serial number. This resets the internal charging algorithms, clears historical error logs, and ensures your alternator supplies the ideal charging profile to maximize your new battery's lifespan.",
    keyBenefits: [
      "Prevents premature battery destruction caused by high-voltage alternator overcharging",
      "Resets engine ECU charging algorithms and historical battery operational logs",
      "Mandatory for all modern BMW, Mini, Audi, Volkswagen, Porsche, Jaguar, and Land Rover vehicles",
      "Allows safe re-coding when upgrading battery chemistries (e.g., changing from EFB to AGM)"
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Port Connection", description: "Plugging dealer-level diagnostic scanning hardware into the vehicle's OBD-II port." },
      { step: "02", title: "BMS Module Communication", description: "Navigating to the Power Management / Intelligent Battery Sensor (IBS) control interface." },
      { step: "03", title: "New Specification Coding", description: "Programming the new battery's Ah rating, technology type (AGM/EFB), and serial data." },
      { step: "04", title: "Registration Confirmation", description: "Executing the registration command, resetting charge logs, and clearing transient fault codes." }
    ],
    faqs: [
      { question: "What happens if I skip registering a new battery in my BMW or Audi?", answer: "The alternator will overcharge your new battery based on old degradation profiles, reducing its lifespan by up to 60% and risking electrical damage." }
    ],
    suitableFor: ["BMW Models (All Series 2006+)", "Audi / Volkswagen / Skoda / Seat Platforms", "Mercedes-Benz / Porsche / Jaguar / Land Rover"]
  },
  {
    id: 11,
    slug: "sli-standard-flooded-battery-replacement",
    icon: RiBattery2Line,
    title: "Standard Flooded Lead-Acid (SLI) Battery Replacement",
    shortDescription: "High-cranking original replacement batteries for traditional, non-start-stop engines.",
    category: "replacement",
    metaTitle: "Standard SLI Car Battery Replacement Dubai | Japanese & American",
    metaDescription: "Reliable, high-CCA standard flooded lead-acid battery replacements in Dubai for Toyota, Nissan, Honda, Ford, and Hyundai models.",
    heroHeading: "Standard Flooded (SLI) Battery Replacements Built for GCC Heat",
    overview: "Standard Starting, Lighting, and Ignition (SLI) flooded lead-acid batteries remain the most widely used battery type for conventional, non-start-stop vehicles across the globe. Designed to deliver rapid bursts of high Cold Cranking Amps (CCA) to turn over internal combustion engines, standard SLI batteries feature liquid electrolyte surrounding lead alloy plates. However, standard batteries installed in vehicles driving in the United Arab Emirates face intense thermal challenges. Extreme engine bay heat accelerates grid corrosion, evaporates water content from liquid electrolyte solutions, and degrades internal paste. We supply and fit heavy-duty, low-maintenance SLI replacement batteries specifically engineered for GCC climate resilience. Our SLI inventory features reinforced calcium-lead grid alloys, thick envelope separators to prevent internal short circuits, and flame-arrestor vent caps. Ideal for popular Japanese, Korean, and American sedans, SUVs, and commercial vehicles, our mobile installation units deliver brand-new, factory-sealed SLI batteries directly to your driveway or office parking bay, complete with professional post burnishing, secure hold-down clamping, and official warranty coverage.",
    keyBenefits: [
      "High Cold Cranking Amps (CCA) output ensuring reliable engine ignition",
      "GCC-heat-fortified calcium-lead grids engineered specifically for Middle East thermal resistance",
      "Cost-effective replacement option for standard Japanese, Korean, and American non-start-stop vehicles",
      "Backed by an official 12 to 24-month instant doorstep replacement warranty"
    ],
    processSteps: [
      { step: "01", title: "Specification Matching", description: "Matching your vehicle's engine size to the correct JIS/DIN box dimensions and terminal layout." },
      { step: "02", title: "Old Battery Removal", description: "Safely disconnecting ground leads first, followed by positive cables, to prevent accidental sparks." },
      { step: "03", title: "Tray Prepping & Post Cleaning", description: "Cleaning the lower battery tray and wire-brushing cable clamp connectors to bare metal." },
      { step: "04", title: "Installation & Securement", description: "Clamping down the new SLI unit, applying anti-corrosion spray, and verifying charging output." }
    ],
    faqs: [
      { question: "Can I fit a standard SLI battery in a car equipped with a Start-Stop system?", answer: "No. Start-Stop vehicles require EFB or AGM batteries. A standard SLI battery installed in a Start-Stop vehicle will fail within weeks." }
    ],
    suitableFor: ["Toyota Camry, Corolla & RAV4", "Nissan Altima, Sunny & Patrol (Non-Start-Stop)", "Honda Civic, Accord & CR-V", "Hyundai Accent & Elantra"]
  },
  {
    id: 12,
    slug: "efb-enhanced-flooded-battery-replacement",
    icon: RiBattery2Line,
    title: "Enhanced Flooded Battery (EFB) Replacement",
    shortDescription: "Reinforced, high-durability battery installations engineered for entry-level start-stop vehicles.",
    category: "replacement",
    metaTitle: "EFB Start-Stop Car Battery Replacement Dubai | Enhanced Flooded",
    metaDescription: "Durable EFB battery replacements in Dubai for entry-level start-stop cars and high-demand vehicles. Fresh stock with full warranty.",
    heroHeading: "High-Durability Enhanced Flooded (EFB) Battery Installations",
    overview: "Enhanced Flooded Batteries (EFB) represent a major technological upgrade over conventional lead-acid batteries, specifically developed to handle the demanding requirements of entry-level engine Start-Stop systems and high-electrical-demand vehicles. In a Start-Stop vehicle driving through heavy Dubai traffic, the engine shuts off and restarts dozens of times per journey, placing massive cyclic stress on the battery to run air conditioning, lighting, and entertainment systems while the engine is off. Standard batteries quickly shed their active plate material under this constant deep cycling. EFB batteries feature a specialized polyester scrim layer added to the positive plate surface, holding active lead material firmly in place, along with thicker lead-calcium-tin alloy plates and improved liquid circulation channels. This construction delivers twice the cyclic endurance and significantly higher charge acceptance compared to standard batteries. Our mobile technicians carry fresh, factory-certified EFB batteries designed for Japanese, European, and Asian vehicles, offering professional doorstep replacement along with memory preservation and digital diagnostic testing.",
    keyBenefits: [
      "Delivers 2x the cyclic endurance and deep-discharge recovery of conventional batteries",
      "Engineered specifically for entry-level engine Start-Stop systems and heavy city traffic idling",
      "Superior charge acceptance capability allowing fast energy recovery during short driving trips",
      "Direct OEM replacement for popular Japanese, European, and Asian Start-Stop models"
    ],
    processSteps: [
      { step: "01", title: "Start-Stop System Verification", description: "Verifying whether your vehicle's engine management system specifies EFB or upgraded AGM technology." },
      { step: "02", title: "OBD Memory Saver Connection", description: "Connecting dynamic backup power to preserve steering angle calibration and computer settings." },
      { step: "03", title: "Precision EFB Installation", description: "Fitting the new EFB battery, securing hold-down brackets, and tightening terminal posts." },
      { step: "04", title: "Dynamic Charge & Cycle Test", description: "Testing battery charge acceptance and verifying Start-Stop functionality." }
    ],
    faqs: [
      { question: "Is it possible to upgrade from an EFB battery to an AGM battery?", answer: "Yes, upgrading from EFB to AGM provides superior lifespan and thermal durability, but you should never downgrade from AGM to EFB." }
    ],
    suitableFor: ["Mazda i-Stop Equipped Vehicles", "Nissan Qashqai & X-Trail Start-Stop", "Entry-Level European Hatchbacks & Compact SUVs"]
  },
  {
    id: 13,
    slug: "agm-absorbent-glass-mat-battery-replacement",
    icon: RiBatteryChargeLine,
    title: "Absorbent Glass Mat (AGM) Battery Replacement",
    shortDescription: "Premium valve-regulated AGM battery replacements required for luxury, European, and advanced start-stop engines.",
    category: "replacement",
    premium: true,
    metaTitle: "AGM Battery Replacement Dubai | Varta, Bosch & Banner Specialists",
    metaDescription: "Premium AGM car battery replacement in Dubai for BMW, Mercedes, Audi, Porsche & Land Rover. Dealer-level installation & BMS coding included.",
    heroHeading: "Premium Absorbent Glass Mat (AGM) Battery Replacements",
    overview: "Absorbent Glass Mat (AGM) batteries represent the pinnacle of lead-acid battery engineering, mandatory for modern luxury vehicles, high-performance sports cars, and advanced Start-Stop systems featuring regenerative braking. Unlike traditional wet batteries, an AGM battery contains ultra-thin micro-fiber glass mats saturated in sulfuric acid solution compressed tightly between lead plates. This valve-regulated, sealed design makes AGM batteries 100% leakproof, spillproof, highly resistant to extreme road vibration, and capable of delivering triple the cyclic longevity of standard batteries. Luxury European automobiles like BMW, Mercedes-Benz, Audi, Porsche, Bentley, and Range Rover feature extensive electrical architectures that demand stable, continuous power delivery. Installing a cheap standard battery in an AGM-specified luxury car will lead to immediate electronic fault codes, battery failure within weeks, and potential damage to onboard charging systems. Our mobile team specializes in premium AGM replacements across Dubai. We stock top-tier OEM AGM batteries from Varta (Silver Dynamic AGM), Bosch (S5 AGM), Banner, and ACDelco, performing professional installation, memory preservation, and dealer-level BMS ECU registration directly at your home or office location.",
    keyBenefits: [
      "3x the cyclic durability and deep-discharge tolerance of standard conventional batteries",
      "100% sealed, leakproof, maintenance-free valve-regulated construction safe for interior installation",
      "Extreme vibration resistance and exceptional Cold Cranking Amps (CCA) output in all weather",
      "Essential technology for luxury European cars equipped with regenerative braking systems"
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Pre-Scan", description: "Connecting diagnostic tools to log existing ECU error codes and connecting memory-saver power." },
      { step: "02", title: "AGM Replacement Execution", description: "Fitting the exact DIN-specification AGM unit (H6/LN3, H7/LN4, H8/LN5, H9/LN6 box sizes)." },
      { step: "03", title: "Dealer-Level BMS Registration", description: "Updating the engine ECU with the new AGM capacity, brand info, and resetting charge logs." },
      { step: "04", title: "Fault Code Clearing", description: "Scanning all vehicle control modules to clear low-voltage fault codes and testing charging output." }
    ],
    faqs: [
      { question: "Why are AGM batteries significantly more expensive than standard batteries?", answer: "AGM batteries utilize high-purity lead plates, absorbed glass-mat separators, and sealed valve construction, delivering triple the cycle life and superior durability." }
    ],
    suitableFor: ["BMW 3, 5, 7 Series & X-Series SUVs", "Mercedes-Benz C, E, S, G-Class & AMG Models", "Audi A6, A8, Q7, Q8 & RS Series", "Porsche Cayenne, Macan & Panamera"]
  },
  {
    id: 14,
    slug: "gel-deep-cycle-heavy-duty-battery-replacement",
    icon: RiBatteryChargeLine,
    title: "GEL & Deep-Cycle Heavy-Duty Battery Replacement",
    shortDescription: "Specialist high-capacity batteries installed for off-road SUVs, campervans, and commercial fleet vehicles.",
    category: "replacement",
    premium: true,
    metaTitle: "Deep Cycle & GEL Battery Replacement Dubai | Off-Road & Marine",
    metaDescription: "Heavy-duty GEL & deep cycle dual-battery replacements in Dubai for off-road 4x4s, winches, RVs, and commercial fleet trucks.",
    heroHeading: "Deep-Cycle GEL & Heavy-Duty Off-Road Battery Installations",
    overview: "Off-road desert enthusiasts, overland 4x4 builders, campervan owners, and commercial support fleets require battery technology engineered for extreme electrical stamina. Standard car batteries are designed solely to supply short, high-amp bursts for engine starting and will quickly suffer permanent plate damage if repeatedly discharged deeply. Deep-cycle and GEL batteries utilize specialized silica-gel additives that solidify the electrolyte solution, along with thick, high-density lead plates capable of enduring repeated deep discharges down to 80% depth of discharge (DOD) without losing structural capacity. Whether you operate a dual-battery system powering heavy electrical accessories—such as high-draw electric winches, desert LED light bars, onboard air compressors, 12V camping refrigerators, or power inverters—our mobile technicians provide specialized deep-cycle and GEL battery installations across Dubai. We supply top-rated heavy-duty batteries, including Optima YellowTop, Optima BlueTop, and specialized commercial AGM units, verifying dual-battery isolator relays, DC-DC chargers, and heavy gauge wiring during installation.",
    keyBenefits: [
      "Exceptional deep discharge recovery allowing repeated discharge cycles down to 80% DOD without damage",
      "Superior vibration and shock resistance specifically engineered for severe off-road dune bashing",
      "Sustained power reserves for high-draw expedition accessories (winches, fridges, light bars, inverters)",
      "Available in Optima spiral-cell technology and heavy-duty commercial casing configurations"
    ],
    processSteps: [
      { step: "01", title: "Electrical Load Calculation", description: "Calculating total continuous electrical draw from auxiliary accessories (fridges, winches, inverters)." },
      { step: "02", title: "Dual-Battery Relay Audit", description: "Testing split-charge isolator relays or DC-DC battery chargers for proper voltage switching." },
      { step: "03", title: "Heavy-Duty Fitment", description: "Securing the deep-cycle battery into reinforced engine bay trays or custom cabin enclosures." },
      { step: "04", title: "High-Amp Load Testing", description: "Testing voltage stability while running active winches or heavy accessory loads." }
    ],
    faqs: [
      { question: "What is the key difference between a starting battery and a deep-cycle battery?", answer: "Starting batteries deliver quick, high-amp bursts to start engines, while deep-cycle batteries supply sustained power over long periods and recover from deep discharges." }
    ],
    suitableFor: ["Nissan Patrol & Toyota Land Cruiser Desert Rigs", "Overland Expedition Vehicles & RVs", "Commercial Fleet Tow Trucks & Support Vans"]
  },
  {
    id: 15,
    slug: "hybrid-ev-12v-auxiliary-starter-replacement",
    icon: RiCarLine,
    title: "Hybrid & EV 12V Auxiliary Starter Replacement",
    shortDescription: "Specialized 12V low-voltage auxiliary starter battery replacements required to boot electric and hybrid vehicle computers.",
    category: "replacement",
    premium: true,
    metaTitle: "Hybrid & EV 12V Auxiliary Battery Replacement Dubai | Tesla, Prius",
    metaDescription: "Dead 12V aux battery in your Hybrid or Electric Car? Specialized 12V auxiliary battery replacement in Dubai for Tesla, Lexus Hybrid, and Toyota Prius.",
    heroHeading: "Specialized 12V Auxiliary Battery Service for Hybrid & Electric Cars",
    overview: "A widespread misconception among electric vehicle (EV) and hybrid owners is that because their vehicle contains a massive high-voltage traction battery pack, it no longer uses a conventional 12V battery. In reality, all electric vehicles (including Tesla Model 3/Y/S/X) and hybrid vehicles (such as Toyota Prius, Lexus RX Hybrids, and Hyundai Ioniq) rely on a dedicated 12V low-voltage auxiliary battery to operate safety relays, power onboard computer ECUs, unlock doors, operate hazard lights, and energize the high-voltage contactors that boot up the main traction battery. If this small 12V auxiliary battery dies, your hybrid or electric car will become completely unresponsive and fail to start—even if the main high-voltage battery is 100% full. Replacing a 12V auxiliary battery in an EV or hybrid requires specialized training to safely navigate high-voltage disconnects, specialized thermal sensors, and unique vent tube attachments. Our certified auto-electricians provide specialized on-site 12V auxiliary replacements across Dubai, supplying factory-correct AGM and LiFePO4 auxiliary batteries fitted with exact OEM terminal configurations and thermal sensors.",
    keyBenefits: [
      "Powers safety relays required to safely energize and engage high-voltage traction battery packs",
      "Includes specialized vent tube routing and thermal sensor pad re-installation",
      "Executed safely by certified auto-electricians adhering to high-voltage safety protocols",
      "Essential service for Tesla, Lexus Hybrid, Toyota Prius, and European EV platforms"
    ],
    processSteps: [
      { step: "01", title: "High-Voltage Safety Isolation", description: "Verifying high-voltage safety interlocks before touching low-voltage 12V circuit components." },
      { step: "02", title: "Auxiliary Terminal Disconnect", description: "Safely disconnecting low-voltage wiring harness, thermal sensors, and exterior gas vent tubes." },
      { step: "03", title: "OEM Auxiliary Installation", description: "Fitting an exact OEM-spec AGM or Lithium 12V auxiliary battery and reconnecting sensors." },
      { step: "04", title: "System Boot & Scan", description: "Verifying instrument cluster displays 'READY' status and clearing 12V low-voltage error codes." }
    ],
    faqs: [
      { question: "Why does an electric car need a 12V battery if it has a huge main battery?", answer: "Safety regulations mandate a separate 12V system to operate hazard lights, power steering, door locks, and safety relays if the main high-voltage battery shuts off." }
    ],
    suitableFor: ["Tesla Model 3, Model Y, Model S & Model X", "Lexus RX, NX & ES Hybrid Ranges", "Toyota Prius, Camry Hybrid & RAV4 Hybrid"]
  },
  {
    id: 16,
    slug: "lithium-ion-lifepo4-performance-installation",
    icon: RiFlashlightLine,
    title: "Lightweight Lithium-Ion (LiFePO4) Performance Installation",
    shortDescription: "Ultra-lightweight high-discharge performance battery fitting for sports cars and track builds.",
    category: "replacement",
    premium: true,
    metaTitle: "Lithium LiFePO4 Car Battery Installation Dubai | Sports & Track Cars",
    metaDescription: "Lightweight LiFePO4 performance battery installation in Dubai. Save up to 15kg for sports cars, track builds, and supercar platforms.",
    heroHeading: "Ultra-Lightweight LiFePO4 Performance Battery Fitting",
    overview: "For sports car owners, supercar collectors, and track-day enthusiasts driving in Dubai, reducing vehicle curb weight is one of the most effective ways to improve acceleration, braking performance, and handling dynamics. Replacing a traditional, heavy 22kg to 28kg lead-acid or AGM battery with an advanced Lithium Iron Phosphate (LiFePO4) performance battery instantly sheds up to 18kg of unsprung weight from your engine bay or front axle. Beyond significant weight savings, LiFePO4 lithium batteries offer 5x faster recharge rates, extremely flat discharge voltage curves, minimal self-discharge rates when parked for extended periods, and exceptional cranking power for high-compression engines. However, installing a lithium battery requires specialized knowledge: the vehicle's charging system must produce compatible voltage levels, and the battery must feature an integrated Battery Management System (BMS) microchip to prevent cell overcharging or thermal damage in hot weather. Our mobile team supplies and fits premium performance LiFePO4 batteries across Dubai, complete with custom mounting brackets, terminal post adapters, and charging circuit calibration.",
    keyBenefits: [
      "Instantly reduces vehicle curb weight by up to 15kg to 18kg for improved handling and acceleration",
      "5x faster recharge acceptance rates and minimal self-discharge when stored parked",
      "Integrated microchip Battery Management System (BMS) protecting against thermal overvoltage",
      "Delivers high cranking amp bursts for high-compression sports car engines"
    ],
    processSteps: [
      { step: "01", title: "Charging Profile Audit", description: "Verifying alternator charging voltage output matches LiFePO4 operating parameters." },
      { step: "02", title: "Heavy OEM Battery Removal", description: "Removing heavy factory lead-acid battery and installing aluminum weight-saving mounting adapters." },
      { step: "03", title: "LiFePO4 Secure Fitment", description: "Fitting lightweight performance unit, connecting terminal post adapters, and locking brackets." },
      { step: "04", title: "BMS Protection Verification", description: "Testing internal microchip BMS safety disconnects and monitoring charging rates under load." }
    ],
    faqs: [
      { question: "Are Lithium LiFePO4 batteries safe to use in hot Dubai summer weather?", answer: "Yes, high-quality LiFePO4 batteries feature built-in microchip BMS systems that actively monitor thermal conditions and protect circuits from heat damage." }
    ],
    suitableFor: ["Porsche 911 GT3, GT2 & Cayman Track Builds", "BMW M Series (M2, M3, M4, M5)", "Supercar Platforms (Ferrari, McLaren, Lamborghini)"]
  },
  {
    id: 17,
    slug: "battery-cable-fuse-ground-strap-replacement",
    icon: RiToolsLine,
    title: "Battery Cable, Main Fuse, & Ground Strap Replacement",
    shortDescription: "Replacing oxidized heavy-duty power cables, main inline fuses, and engine ground straps onsite.",
    category: "maintenance",
    metaTitle: "Car Battery Cable, Ground Strap & Main Fuse Repair Dubai",
    metaDescription: "Fix poor electrical grounds and corroded main cables. On-site battery cable, inline main fuse, and chassis ground strap replacement in Dubai.",
    heroHeading: "Heavy-Duty Battery Cable, Ground Strap & Fuse Replacement",
    overview: "Corroded battery cables, frayed engine ground straps, and blown main inline fusible links are hidden electrical culprits that frequently mimic a completely dead battery or a broken starter motor. Over time, moisture, engine oil seeping, road grime, and battery acid fumes penetrate positive and negative power cables, causing internal copper wire oxidation that turns strands green and brittle. This creates massive electrical resistance, leading to severe voltage drops under load. Similarly, if your engine-to-chassis ground strap deteriorates, current cannot return to the battery, causing erratic electrical gremlins, flickering dashboards, or total power failure while driving. Furthermore, accidentally reverse-jumpstarting a vehicle will instantly blow the main battery inline fuse located on the positive terminal clamp. Our mobile auto-electricians diagnose and replace heavy-duty power cables, ground straps, and main fuses directly at your location anywhere in Dubai. We fabricate custom heavy-gauge, oxygen-free copper cables featuring hydraulic-crimped tinned copper lugs and sealed heat-shrink tubing to permanently restore solid electrical conductivity.",
    keyBenefits: [
      "Eliminates voltage drop across primary positive cables and chassis ground connections",
      "Replaces melted, blown, or corroded main battery inline fusible links on the spot",
      "Prevents dangerous sudden electrical power loss and flickering instrument panels while driving",
      "Uses heavy-gauge oxygen-free copper cables with hydraulically crimped tinned lugs"
    ],
    processSteps: [
      { step: "01", title: "Voltage Drop Diagnostic Scan", description: "Measuring millivolt losses across positive power cables and chassis ground contact points under cranking load." },
      { step: "02", title: "Ground Point Scraping", description: "Removing corrosion, paint, and rust from chassis mounting surfaces to reveal bare metal contact." },
      { step: "03", title: "Custom Cable Fabrication & Fitting", description: "Fitting heavy-gauge, heat-shielded copper cables with crimped copper lugs." },
      { step: "04", title: "Circuit Resistance Test", description: "Verifying total system resistance is restored to near zero and testing starter motor turn-over." }
    ],
    faqs: [
      { question: "What causes a vehicle to suddenly lose 100% of its electrical power?", answer: "A frayed or broken main ground strap, or a blown main battery inline fuse, will sever the circuit and cut all power instantly." }
    ],
    suitableFor: ["Vehicles Experiencing Sudden Electrical Cutouts", "Engines producing Clicking Sounds Despite New Battery", "Cables Showing Visible Green Copper Oxide"]
  },
  {
    id: 18,
    slug: "bench-charging-battery-reconditioning",
    icon: RiSettings4Line,
    title: "Slow Bench Charging & Battery Reconditioning",
    shortDescription: "Workshop-grade desulfation and slow-charge reconditioning cycles for deeply discharged batteries.",
    category: "maintenance",
    metaTitle: "Slow Battery Bench Charging & Desulfation Dubai | Workshop Service",
    metaDescription: "Deeply discharged car battery? Professional slow bench charging, desulfation, and battery reconditioning pickup and drop-off in Dubai.",
    heroHeading: "Professional Micro-Controlled Battery Desulfation & Slow Bench Charging",
    overview: "When a healthy car battery is left completely flat for weeks—such as when a vehicle sits parked while the owner is away on travel—a destructive chemical process called sulfation occurs. Lead sulfate crystals form on the battery's internal plates, gradually hardening into an insulating layer that prevents the battery from accepting a charge from a standard car alternator. Attempting to jumpstart a deeply sulfated battery and driving for 30 minutes will not break down these hardened crystals and usually results in the battery dying again as soon as the engine is turned off. Our workshop slow bench charging and reconditioning service uses advanced microprocessor-controlled desulfation chargers to safely revive deeply discharged batteries. We pick up your flat battery, install a temporary loaner battery so you remain mobile, and subject your battery to a 24-hour, multi-stage high-frequency pulse desulfation process. This controlled process breaks down hardened sulfate crystals, restores electrolyte equilibrium, and recovers lost Cold Cranking Amps (CCA), saving you the expense of buying a new battery if your current unit is structurally sound.",
    keyBenefits: [
      "Breaks down hardened plate sulfation through controlled high-frequency micro-pulse charging cycles",
      "Safely revives deeply discharged AGM and flooded batteries rejected by basic jumpstarters",
      "Saves money by restoring recoverable batteries back to usable CCA health standards",
      "Includes temporary loaner battery installation so you stay mobile during the 24-hour process"
    ],
    processSteps: [
      { step: "01", title: "Doorstep Pickup & Loaner Fitting", description: "Our mobile technician drops off a temporary loaner battery and collects your flat battery." },
      { step: "02", title: "Automated Pulse Desulfation", description: "Subjecting the battery to a 24-hour smart micro-pulse desulfation and slow constant-current recharge." },
      { step: "03", title: "Post-Recondition Load Test", description: "Measuring post-service CCA, internal resistance, and state of health (SOH) on the bench." },
      { step: "04", title: "Return & Re-Installation", description: "Delivering your restored battery back to your car, removing the loaner, and verifying vehicle starting." }
    ],
    faqs: [
      { question: "Can every dead battery be successfully reconditioned?", answer: "No. Batteries with shorted cells, physical plate corrosion, or severe grid shedding cannot be revived and must be replaced." }
    ],
    suitableFor: ["Batteries Left Flat During Extended Travel", "Deeply Discharged Premium AGM Units", "Classic & Vintage Car Collections"]
  },
  {
    id: 19,
    slug: "custom-battery-tray-fabrication",
    icon: RiToolsLine,
    title: "Custom Battery Tray & Hold-Down Fabrication",
    shortDescription: "Custom bracket and battery tray modifications for high-performance retrofits and dual-battery setups.",
    category: "maintenance",
    premium: true,
    metaTitle: "Custom Car Battery Tray & Bracket Modification Dubai",
    metaDescription: "Custom battery tray fabrication and hold-down bracket modifications in Dubai for dual-battery setups, oversized upgrades, and engine swaps.",
    heroHeading: "Custom Battery Tray Fabrication & Oversized Bracket Upgrades",
    overview: "Upgrading your vehicle to a larger capacity battery box size (for instance, stepping up from a factory DIN55 size to a heavy-duty DIN75 or DIN88 box size) or adding a secondary dual-battery setup for off-road expeditions often means your factory plastic battery tray and hold-down bracket will no longer fit. Furthermore, custom engine swaps, aftermarket cold-air intake installations, and performance modifications frequently require relocating the battery or modifying its mounting tray. Installing a larger battery into an ill-fitting, unsecure tray causes hazardous movement and physical rubbing against surrounding engine components. Our custom battery tray fabrication and bracket modification service provides bespoke metalwork solutions directly tailored to your vehicle. Our auto-fabricators measure your engine bay envelope, cut and weld heavy-duty powder-coated steel or lightweight aluminum mounting bases, fit custom rubber vibration-dampening pads, and construct secure top hold-down brackets. Whether you need a dual-battery tray for a desert-bound Toyota Land Cruiser or a custom trunk battery enclosure for a performance build, we deliver safe, rattle-free mounting built to withstand severe road vibration.",
    keyBenefits: [
      "Enables mounting larger physical battery box sizes to increase Cold Cranking Amps and reserve capacity",
      "Constructed using heavy-duty, powder-coated steel or lightweight rustproof aluminum materials",
      "Provides safe, rattle-free mounting for secondary dual-battery setups in off-road 4x4s",
      "Custom trunk or cabin battery enclosures fabricated to strict safety standards"
    ],
    processSteps: [
      { step: "01", title: "Engine Bay Envelope Measurement", description: "Measuring available mounting space, hood clearance, and surrounding component tolerances." },
      { step: "02", title: "Bespoke Tray Fabrication", description: "Cutting, bending, and welding heavy-duty mounting bases complete with rubber dampeners." },
      { step: "03", title: "Chassis Bolt-In Fitting", description: "Securing the fabricated tray firmly to vehicle chassis structural points using grade-8 hardware." },
      { step: "04", title: "Battery Alignment & Lock", description: "Fitting the upgraded battery and locking down custom brackets for zero movement." }
    ],
    faqs: [
      { question: "Why should I consider upgrading to a physically larger battery box size?", answer: "A larger battery box size contains more lead plate surface area, supplying higher CCA and reserve capacity for accessory loads." }
    ],
    suitableFor: ["Off-Road 4x4 Dual-Battery System Builds", "Vehicles Upgrading Small OEM Factory Batteries", "Custom Performance Car Engine Swaps"]
  },
  {
    id: 20,
    slug: "used-battery-core-pickup-recycling",
    icon: RiRecycleLine,
    title: "Used Battery Core Pickup & Eco Recycling",
    shortDescription: "Safe collection and environmentally compliant recycling of hazardous old lead-acid battery cores.",
    category: "eco",
    metaTitle: "Used Car Battery Disposal & Eco Recycling Dubai | Core Pickup",
    metaDescription: "Responsible used car battery collection and eco-friendly disposal in Dubai. We pick up scrap lead-acid batteries and ensure safe green recycling.",
    heroHeading: "Eco-Friendly Used Car Battery Pickup & Recycling Program",
    overview: "Used automotive batteries represent one of the most hazardous forms of electronic and chemical waste generated by motor vehicles. A single discarded lead-acid car battery contains approximately 8 to 11 kilograms of toxic lead, up to 3 liters of highly corrosive sulfuric acid, and heavy polypropylene plastic casing materials. Improper disposal—such as dumping old batteries in municipal trash bins or desert areas—causes severe environmental contamination as toxic lead compounds and acid leak into soil and groundwater systems. In full compliance with Dubai Municipality environmental safety regulations, our mobile team provides a dedicated used battery core pickup and eco-friendly green recycling service. Whenever we perform an on-site battery replacement across Dubai, we collect your old scrap battery core, place it into acid-resistant transport containment containers, and issue you an instant cash trade-in credit rebate directly off the price of your new battery. Collected battery cores are transported to licensed green processing facilities in the UAE, where over 98% of the battery components—including lead plates, plastic casings, and sulfuric acid—are reclaimed, neutralized, and recycled into new industrial materials.",
    keyBenefits: [
      "100% environmentally compliant, green recycling process neutralizing lead and toxic acid safely",
      "Instant cash core trade-in rebate discount applied directly to your new battery purchase invoice",
      "Bulk pickup service available for commercial automotive workshops, transport fleets, and scrap yards",
      "Prevents hazardous lead contamination and illegal chemical dumping in the local UAE ecosystem"
    ],
    processSteps: [
      { step: "01", title: "Safe Leak-Proof Containment", description: "Securing old battery cores inside acid-resistant heavy-duty transport boxes." },
      { step: "02", title: "Trade-In Rebate Calculation", description: "Calculating battery weight to apply an instant core trade-in discount to your invoice." },
      { step: "03", title: "Licensed Facility Hauling", description: "Transporting collected scrap units directly to certified UAE battery recycling plants." },
      { step: "04", title: "98% Material Reclamation", description: "Plastics, lead plates, and acid are separated, purified, and re-processed into raw materials." }
    ],
    faqs: [
      { question: "Do I receive a discount on my purchase when I trade in my old scrap battery?", answer: "Yes! We issue an immediate core trade-in rebate (typically AED 30 to AED 80 based on battery weight) deducted directly off your new unit." }
    ],
    suitableFor: ["Individual Car Owners Replacing Batteries", "Commercial Vehicle Fleet Managers", "Mechanic Garage & Workshop Cleanouts"]
  }
];