import { siteConfig } from "@/config/site";

/**
 * Generates and triggers download of a .vcf (vCard) contact file for smartphones.
 */
export function downloadVCard(): void {
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Constructor;Ferretería El;;;
FN:${siteConfig.name}
ORG:${siteConfig.name}
TITLE:Ferretería & Materiales de Construcción
TEL;TYPE=WORK,VOICE:${siteConfig.contact.phoneRaw}
TEL;TYPE=CELL,VOICE,WHATSAPP:${siteConfig.contact.whatsappNumber}
EMAIL;TYPE=WORK:${siteConfig.contact.email}
ADR;TYPE=WORK:;;${siteConfig.location.address};${siteConfig.location.city};${siteConfig.location.province};;${siteConfig.location.country}
NOTE:Demo comercial QRMOON - Plan Básico para Ferreterías. ${siteConfig.tagline}
URL:${siteConfig.location.mapsUrl}
END:VCARD`;

  const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Ferreteria_El_Constructor.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
