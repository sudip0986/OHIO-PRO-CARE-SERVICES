import brandLogoImg from '../assets/images/logo.png';
import heroHomeCareImg from '../assets/images/hero-home-care.jpg';
import applianceRepairImg from '../assets/images/appliance-repair.jpg';
import hvacServiceImg from '../assets/images/hvac-service.jpg';
import waterHeaterImg from '../assets/images/hero-kitchen.jpg';
import tech1Img from '../assets/images/tech1.jpeg';
import tech2Img from '../assets/images/tech2.jpeg';
import tech3Img from '../assets/images/tech3.jpg';
import tech4Img from '../assets/images/tech4.jpg';
import tech5Img from '../assets/images/tech5.jpg';
import tech6Img from '../assets/images/tech6.jpg';
import tech7Img from '../assets/images/tech7.jpg';

export const brandLogo = brandLogoImg;
export const heroImage = heroHomeCareImg;

export const companyInfo = {
  name: "Ohio Pro Care Services",
  phone: "(567) 453-0586",
  phoneRaw: "+15674530586",
  email: "support.ohioprocareservices@gmail.com",
  address: "6545 Market Ave, Canton, OH 44721",
  officialWebsite: "https://unitedhvaccare.com/",
  badge: "Certified & Insured Home Service Technicians — Ohio",
  years: "15+",
  homesServed: "8,500+",
  rating: "4.9/5"
};

export const servicesData = [
  {
    id: "appliance-repair",
    title: "Appliance Repair & Diagnostics",
    description: "Same-day diagnostics and repair for refrigerators, washers, dryers, ovens, ranges, dishwashers, and microwaves across all major brands using quality OEM parts.",
    image: applianceRepairImg,
    icon: "🔌"
  },
  {
    id: "hvac-services",
    title: "HVAC Heating & Air Conditioning",
    description: "Full-service furnace repair, central AC troubleshooting, heat pumps, thermostat upgrades, ductwork inspection, and seasonal tune-ups to keep Ohio homes comfortable year-round.",
    image: hvacServiceImg,
    icon: "❄️"
  },
  {
    id: "plumbing-leaks",
    title: "Plumbing, Leaks & Drain Care",
    description: "Fast response across Ohio for burst pipes, hidden water leaks, stubborn drain clogs, sump pumps, fixture installations, and durable PEX or copper repiping.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
    icon: "💧"
  },
  {
    id: "water-heaters",
    title: "Water Heaters & Boilers",
    description: "Expert troubleshooting and installation for tank and tankless water heaters, residential boilers, heating elements, sediment flushing, and same-day replacements.",
    image: waterHeaterImg,
    icon: "🔥"
  },
  {
    id: "home-systems",
    title: "Electrical & General Home Systems",
    description: "Dependable multi-trade support for garbage disposals, appliance hookups, dryer vents, exhaust fans, smart home controls, and preventive whole-home maintenance.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
    icon: "🔧"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Schedule Your Ohio Technician",
    description: "Share your appliance, HVAC, plumbing, or home system issue and select a convenient arrival window for our local certified technician."
  },
  {
    num: "02",
    title: "On-Site Diagnostic",
    description: "Our technician inspects your equipment, identifies the root cause accurately, and provides transparent, upfront fixed pricing before work begins."
  },
  {
    num: "03",
    title: "Precision Repair & Verify",
    description: "We complete the repair using durable parts, thoroughly test performance and safety, and leave your home clean and spotless."
  }
];

// Our Certified Technicians Slideshow
export const technicianImages = [
  tech6Img,
  tech7Img,
  tech1Img,
  tech2Img,
  tech3Img,
  tech4Img,
  tech5Img
];

export const testimonial = {
  quote: "Very professional, fast, and polite. The technician quickly diagnosed both our cooling unit and kitchen appliance issue, fixed everything cleanly, and had our home running smoothly the same afternoon.",
  author: "Verified Customer, Canton, OH"
};
