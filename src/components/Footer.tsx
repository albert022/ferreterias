import React from "react";
import Link from "next/link";
import {
  HardHat,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { InstagramIcon, TikTokIcon } from "@/components/BrandIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t border-gray-800">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-black tracking-tight text-white leading-none">
                  FERRETERÍA
                </span>
                <span className="block text-xs font-black tracking-wider text-amber-400 leading-tight">
                  EL CONSTRUCTOR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-green-400 hover:text-green-300 hover:border-green-400/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-amber-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="hover:text-amber-400 transition-colors"
                >
                  Catálogo de Materiales
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-amber-400 transition-colors"
                >
                  Beneficios Comerciales
                </a>
              </li>
              <li>
                <a
                  href="#cotizar"
                  className="hover:text-amber-400 transition-colors"
                >
                  Formulario de Cotización
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contacto & Tarjeta Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Atención al Cliente
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}, {siteConfig.location.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.schedule.weekdays}</p>
                  <p>{siteConfig.schedule.saturdays}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0 fill-current" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo Disclaimer Box (Mandatory per guidelines) */}
        <div className="mt-12 p-4 rounded-xl bg-gray-900 border border-gray-800 text-xs text-gray-400 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-gray-200">
              Aviso demostrativo del catálogo QRMOON:
            </span>{" "}
            {siteConfig.qrmoon.disclaimerText}
          </div>
        </div>
      </div>

      {/* Sub-footer bottom bar */}
      <div className="border-t border-gray-900 bg-black/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Demo creada por</span>
            <a
              href={siteConfig.qrmoon.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold underline"
            >
              <Sparkles className="w-3 h-3" />
              <span>{siteConfig.qrmoon.brandName}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">{siteConfig.qrmoon.planName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
