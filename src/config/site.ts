export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  location: {
    city: string;
    province: string;
    country: string;
    address: string;
    reference: string;
    mapsUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappDisplay: string;
    whatsappNumber: string; // digits only
  };
  schedule: {
    weekdays: string;
    saturdays: string;
    sundays: string;
    holidays: string;
  };
  social: {
    instagram: string;
    tiktok: string;
    facebook: string;
  };
  googleReviews: {
    enabled: boolean;
    url: string;
    rating: number;
    ratingCountDisplay: string;
  };
  qrmoon: {
    brandName: string;
    websiteUrl: string;
  };
  whatsappDefaultMessage: string;
  analytics: {
    googleAnalyticsId: string;
  };
}

const DEFAULT_WHATSAPP_MESSAGE =
  "¡Hola! Quisiera solicitar una cotización y saber más detalles del servicio. (QRMOON) (Ferretería El Constructor)";

export const siteConfig: SiteConfig = {
  name: "Ferretería El Constructor",
  shortName: "El Constructor",
  tagline: "Todo para construir, reparar y mejorar.",
  description:
    "Materiales de construcción, herramientas manuales y eléctricas, pinturas, plomería y electricidad en Santo Domingo Este, República Dominicana. Consulta disponibilidad y cotiza rápido por WhatsApp.",
  location: {
    city: "Santo Domingo Este",
    province: "Santo Domingo",
    country: "República Dominicana",
    address: "Av. San Vicente de Paúl esq. Carretera Mella",
    reference: "Santo Domingo Este, República Dominicana",
    mapsUrl: "https://maps.app.goo.gl/H2rKWwfrzkDnj27Y9",
  },
  contact: {
    phoneDisplay: "+1 (829) 499-4321",
    phoneRaw: "18294994321",
    whatsappDisplay: "+1 (829) 499-4321",
    whatsappNumber: "18294994321",
  },
  schedule: {
    weekdays: "Lunes a Viernes: 7:30 AM – 6:00 PM",
    saturdays: "Sábados: 8:00 AM – 5:00 PM",
    sundays: "Domingos: 8:30 AM – 1:00 PM",
    holidays: "Feriados: 8:00 AM – 1:00 PM",
  },
  social: {
    instagram: "https://instagram.com/qrmoon.rd",
    tiktok: "https://tiktok.com/@gato_colonial",
    facebook: "https://facebook.com/qrmoon.rd",
  },
  googleReviews: {
    enabled: true,
    url: "https://www.google.com/travel/search?q=google%20map%20gato%20colonial&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72880339%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076%2C122097177%2C122192361&hl=en-DO&gl=do&cs=1&ssta=1&ts=CAEaRwopEicyJTB4OGVhZjg5MGM0ZDQ5NTBlOToweDM1YmNlMGIwN2MzYzIxYmYSGhIUCgcI6g8QCxgBEgcI6g8QCxgCGAEyAhAA&qs=CAEyE0Nnb0l2OFB3NFllV3VONDFFQUU4AkIJCb8hPHyw4Lw1&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwoM-x6eSXAxUAAAAAHQAAAAAQAw",
    rating: 4.9,
    ratingCountDisplay: "Calificación 5 estrellas en Google",
  },
  qrmoon: {
    brandName: "QRMOON",
    websiteUrl: "https://qrmoon.com",
  },
  whatsappDefaultMessage: DEFAULT_WHATSAPP_MESSAGE,
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
};

/**
 * Builds a direct WhatsApp URL with custom text or the default standard text.
 */
export function buildWhatsAppLink(customMessage?: string, customPhone?: string): string {
  const phone = customPhone || siteConfig.contact.whatsappNumber;
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
}
