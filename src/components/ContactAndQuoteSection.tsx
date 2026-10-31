"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  Star,
  Send,
  CheckCircle2,
  AlertCircle,
  Share2,
  Download,
  QrCode,
  Sparkles,
  Building2,
  Copy,
  Check,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { downloadVCard } from "@/utils/vcard";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";

export function ContactAndQuoteSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    materials: "",
    quantity: "",
    comments: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Form Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Por favor, ingresa tu nombre completo.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Por favor, ingresa un número de teléfono o WhatsApp.";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Ingresa un número telefónico válido.";
    }
    if (!formData.materials.trim()) {
      newErrors.materials =
        "Indica los productos o materiales que necesitas cotizar.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let message = `¡Hola *${siteConfig.name}*! 🏗️\n`;
    message += `Deseo solicitar una cotización personalizada a través del formulario web:\n\n`;
    message += `👤 *SOLICITANTE:*\n`;
    message += `• *Nombre:* ${formData.name.trim()}\n`;
    message += `• *Teléfono de contacto:* ${formData.phone.trim()}\n\n`;
    message += `📦 *MATERIALES O PRODUCTOS REQUERIDOS:*\n`;
    message += `${formData.materials.trim()}\n\n`;

    if (formData.quantity.trim()) {
      message += `🔢 *CANTIDAD ESTIMADA:* ${formData.quantity.trim()}\n\n`;
    }

    if (formData.comments.trim()) {
      message += `📝 *COMENTARIOS / LUGAR DE ENTREGA:*\n${formData.comments.trim()}\n\n`;
    }

    message += `📍 *Ubicación de referencia:* ${siteConfig.location.city}, ${siteConfig.location.country}\n`;
    message += `_Enviado desde el formulario web demo (Plataforma QRMOON)_`;

    const url = buildWhatsAppLink(message);
    setSubmitted(true);

    // Open WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  // Handle Share Profile
  const handleShareProfile = async () => {
    const shareData = {
      title: siteConfig.name,
      text: `${siteConfig.name} — ${siteConfig.tagline}. Consulta materiales y cotiza en Santo Domingo Este.`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or failed
      }
    } else {
      // Fallback to copy link
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2000);
      } catch {
        // Ignore clipboard fallback error
      }
    }
  };

  return (
    <section id="cotizar" className="py-16 sm:py-24 bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-gray-900 border border-amber-400/40 text-xs font-black uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            Cotizaciones y Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Solicita tu Cotización al Instante
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Dinos qué necesitas para tu proyecto o visita nuestra ferretería en
            Santo Domingo Este. Te atendemos de inmediato por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Formulario de Cotización Directa (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                  Formulario de Cotización Rápida
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Completa los datos y se abrirá WhatsApp con tu mensaje listo para enviar.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-600 flex items-center justify-center shrink-0">
                <Send className="w-5 h-5" />
              </div>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold">¡Mensaje generado correctamente!</p>
                  <p className="text-green-700 mt-0.5">
                    Se ha abierto WhatsApp con tu cotización organizada. Si tu navegador bloqueó la ventana emergente, verifica tus permisos.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Nombre & Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Nombre o Empresa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Ej. Ing. Rafael Mejía"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.name
                        ? "border-red-500 bg-red-50/50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Teléfono / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="(829) 555-0199"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.phone
                        ? "border-red-500 bg-red-50/50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Producto o Materiales Requeridos */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Producto o Materiales Requeridos{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.materials}
                  onChange={(e) => {
                    setFormData({ ...formData, materials: e.target.value });
                    if (errors.materials)
                      setErrors({ ...errors, materials: "" });
                  }}
                  placeholder="Ej. 50 sacos de cemento gris, 20 varillas de 3/8, 2 cubetas de pintura acrílica blanca..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                    errors.materials
                      ? "border-red-500 bg-red-50/50"
                      : "border-gray-300 bg-white"
                  }`}
                />
                {errors.materials && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.materials}
                  </p>
                )}
              </div>

              {/* Row 3: Cantidad Estimada */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Cantidad estimada (Opcional):
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  placeholder="Ej. 1 viaje de camión / 100 unidades"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                />
              </div>

              {/* Row 4: Comentarios Adicionales */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Comentarios o Sector de Entrega:
                </label>
                <textarea
                  rows={2}
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                  placeholder="Ej. Ubicación de la obra en Ensanche Ozama, requerimos entrega en la mañana."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 font-black text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current text-gray-950" />
                  <span>Enviar Cotización por WhatsApp</span>
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  🔒 No recopilamos datos en bases de datos. La cotización se procesa directamente a través de WhatsApp.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Información Comercial, Google Reviews & QRMOON Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Commercial Info Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md space-y-5">
              <div className="border-b border-gray-100 pb-3">
                <h4 className="text-lg font-black text-gray-900">
                  {siteConfig.name}
                </h4>
                <p className="text-xs text-amber-700 font-bold">
                  {siteConfig.tagline}
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Ubicación:</strong>
                    <span>{siteConfig.location.address}</span>
                    <span className="block text-gray-500 text-xs">
                      {siteConfig.location.city}, {siteConfig.location.country}
                    </span>
                    <a
                      href={siteConfig.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 font-bold mt-1 underline"
                    >
                      <span>Abrir en Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">
                      Horarios de Atención:
                    </strong>
                    <p className="text-gray-600 text-xs">
                      {siteConfig.schedule.weekdays}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {siteConfig.schedule.saturdays}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {siteConfig.schedule.sundays}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Contacto:</strong>
                    <p className="text-gray-600 text-xs">
                      Tel: {siteConfig.contact.phoneDisplay}
                    </p>
                    <p className="text-green-700 font-bold text-xs">
                      WhatsApp: {siteConfig.contact.whatsappDisplay}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <span className="text-xs font-bold text-gray-600">Redes:</span>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-colors"
                >
                  <TikTokIcon className="w-3.5 h-3.5 text-gray-900" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            {/* Google Reviews Card (Required) */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h4 className="text-sm font-black text-gray-900">
                  ¿Te atendimos bien? Déjanos tu reseña en Google
                </h4>
                <p className="text-xs text-gray-500">
                  Tu opinión nos ayuda a seguir brindando el mejor servicio en Santo Domingo Este.
                </p>
              </div>

              <a
                href={siteConfig.googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs flex items-center gap-1.5 border border-gray-300 transition-colors"
              >
                <span>Calificar</span>
                <ExternalLink className="w-3 h-3 text-gray-600" />
              </a>
            </div>

            {/* QRMOON Digital Business Card Element (Required) */}
            <div className="bg-gray-900 text-white rounded-2xl p-5 sm:p-6 border border-gray-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                      Tarjeta Digital QRMOON
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700">
                    Plan Básico
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  {/* Clean SVG QR code representation */}
                  <div className="w-20 h-20 bg-white p-1.5 rounded-xl shrink-0 flex items-center justify-center shadow">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      fill="#111827"
                    >
                      {/* Stylized QR Code matrix */}
                      <rect x="0" y="0" width="30" height="30" rx="3" />
                      <rect x="5" y="5" width="20" height="20" fill="white" />
                      <rect x="10" y="10" width="10" height="10" />

                      <rect x="70" y="0" width="30" height="30" rx="3" />
                      <rect x="75" y="5" width="20" height="20" fill="white" />
                      <rect x="80" y="10" width="10" height="10" />

                      <rect x="0" y="70" width="30" height="30" rx="3" />
                      <rect x="5" y="75" width="20" height="20" fill="white" />
                      <rect x="10" y="80" width="10" height="10" />

                      {/* Random aesthetic QR data modules */}
                      <rect x="40" y="5" width="8" height="8" />
                      <rect x="52" y="12" width="8" height="8" />
                      <rect x="40" y="24" width="8" height="8" />
                      <rect x="12" y="40" width="8" height="8" />
                      <rect x="24" y="52" width="8" height="8" />
                      <rect x="40" y="40" width="20" height="20" fill="#f59e0b" />
                      <rect x="68" y="40" width="8" height="8" />
                      <rect x="84" y="52" width="8" height="8" />
                      <rect x="40" y="70" width="8" height="8" />
                      <rect x="55" y="82" width="8" height="8" />
                      <rect x="75" y="75" width="15" height="15" />
                    </svg>
                  </div>

                  <div>
                    <h5 className="font-extrabold text-sm text-white">
                      {siteConfig.name}
                    </h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Ferretería & Construcción
                    </p>
                    <p className="text-[11px] text-amber-300 mt-1 font-semibold">
                      {siteConfig.location.city}, RD
                    </p>
                  </div>
                </div>

                {/* Digital Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={downloadVCard}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs transition-colors shadow cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Guardar contacto</span>
                  </button>

                  <button
                    onClick={handleShareProfile}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs transition-colors border border-gray-700 cursor-pointer"
                  >
                    {copiedShare ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400">¡Enlace copiado!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Compartir perfil</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-800 text-[10px] text-gray-400 flex items-center justify-between">
                  <span>Tarjeta digital de presentación</span>
                  <a
                    href={siteConfig.qrmoon.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline font-bold"
                  >
                    QRMOON.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
