"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HardHat,
  MessageCircle,
  FileText,
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { useQuote } from "@/context/QuoteContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, openDrawer } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Cotizar", href: "#cotizar" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGeneralWhatsApp = () => {
    const msg = `¡Hola *${siteConfig.name}*! 🏗️\nVisito su sitio web demo y me gustaría consultar disponibilidad y cotizar algunos materiales.`;
    window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Discreet Demo Banner by QRMOON */}
      <div className="bg-gray-900 text-gray-200 text-xs py-1.5 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-400 font-semibold px-2 py-0.5 rounded text-[11px] border border-amber-400/30">
              <Sparkles className="w-3 h-3" />
              DEMO COMERCIAL
            </span>
            <span className="text-gray-300 hidden sm:inline">
              Ferretería El Constructor — {siteConfig.qrmoon.planName}
            </span>
            <span className="text-gray-400 hidden md:inline">
              | Santo Domingo Este, RD
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-gray-400">Desarrollado por</span>
            <a
              href={siteConfig.qrmoon.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors underline decoration-amber-400/50"
            >
              {siteConfig.qrmoon.brandName}
            </a>
          </div>
        </div>
      </div>

      {/* Top micro-info bar (Desktop) */}
      <div className="hidden lg:block bg-gray-100 text-gray-700 text-xs py-1.5 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{siteConfig.location.reference}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{siteConfig.schedule.weekdays}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Tel: {siteConfig.contact.phoneDisplay}</span>
            </span>
            <span className="text-gray-300">|</span>
            <button
              onClick={handleGeneralWhatsApp}
              className="text-green-700 hover:text-green-800 font-medium flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp: {siteConfig.contact.whatsappDisplay}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 bg-white border-b border-gray-200 ${
          isScrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-lg bg-gray-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-sm group-hover:bg-gray-800 transition-colors">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-gray-900 leading-none">
                FERRETERÍA
              </span>
              <span className="block text-sm font-extrabold tracking-wider text-amber-600 leading-tight">
                EL CONSTRUCTOR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Quote List Button */}
            <button
              onClick={openDrawer}
              aria-label="Ver lista de cotización"
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 font-semibold text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Cotización</span>
              {totalItemsCount > 0 && (
                <span className="bg-amber-500 text-gray-950 font-black text-xs px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* WhatsApp Primary CTA */}
            <button
              onClick={handleGeneralWhatsApp}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <MessageCircle className="w-4 h-4 text-gray-950 fill-current" />
              <span className="hidden sm:inline">Cotizar por WhatsApp</span>
              <span className="sm:hidden">Cotizar</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl px-4 py-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between text-base font-semibold text-gray-800 hover:text-amber-600 py-2 border-b border-gray-100"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-100 text-gray-900 font-bold text-sm border border-gray-300"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Ver lista de cotización ({totalItemsCount})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleGeneralWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-sm shadow"
              >
                <MessageCircle className="w-4 h-4 text-gray-950 fill-current" />
                <span>Cotizar por WhatsApp</span>
              </button>
            </div>

            <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 space-y-1">
              <p>📍 {siteConfig.location.reference}</p>
              <p>🕒 {siteConfig.schedule.weekdays}</p>
              <p>📞 {siteConfig.contact.phoneDisplay}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
