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
    embedMapsUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappDisplay: string;
    whatsappNumber: string; // international digits without + or spaces
    email: string;
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
    badgeText: string;
    planName: string;
    websiteUrl: string;
    contactUrl: string;
    isDemo: boolean;
    disclaimerText: string;
  };
  analytics: {
    googleAnalyticsId: string;
  };
}

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
    address: "Av. San Vicente de Paúl esq. Carretera Mella (Ref. Demostrativa)",
    reference: "Santo Domingo Este, República Dominicana",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santo+Domingo+Este+Republica+Dominicana",
    embedMapsUrl: "https://maps.google.com/maps?q=Santo%20Domingo%20Este,%20Dominican%20Republic&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  contact: {
    phoneDisplay: "(809) 555-0150",
    phoneRaw: "8095550150",
    whatsappDisplay: "(829) 555-0199",
    whatsappNumber: "18295550199",
    email: "contacto@elconstructor.demo",
  },
  schedule: {
    weekdays: "Lunes a Viernes: 7:30 AM – 6:00 PM",
    saturdays: "Sábados: 8:00 AM – 5:00 PM",
    sundays: "Domingos: 8:30 AM – 1:00 PM",
    holidays: "Feriados: 8:00 AM – 1:00 PM",
  },
  social: {
    instagram: "https://instagram.com/qrmoon.rd",
    tiktok: "https://tiktok.com/@qrmoon.rd",
    facebook: "https://facebook.com/qrmoon.rd",
  },
  googleReviews: {
    enabled: true,
    url: "https://search.google.com/local/writereview?placeid=ChIJ-e8w-y_kr44RkDEMOSTORE",
    rating: 4.9,
    ratingCountDisplay: "Calificación de referencia demostrativa",
  },
  qrmoon: {
    brandName: "QRMOON",
    badgeText: "Demo Oficial QRMOON",
    planName: "Plan Básico para Ferreterías",
    websiteUrl: "https://qrmoon.com",
    contactUrl: "https://wa.me/18295550199?text=Hola%20QRMOON,%20deseo%20información%20sobre%20el%20Plan%20Básico%20para%20Ferreterías",
    isDemo: true,
    disclaimerText:
      "Esta es una página web de demostración comercial desarrollada por QRMOON para ilustrar la digitalización de ferreterías en República Dominicana bajo el Plan Básico. Ferretería El Constructor es una identidad comercial ficticia diseñada para captación y cotización directa por WhatsApp.",
  },
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
};

/**
 * Builds a direct WhatsApp URL with custom text.
 */
export function buildWhatsAppLink(message: string, customPhone?: string): string {
  const phone = customPhone || siteConfig.contact.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
}
