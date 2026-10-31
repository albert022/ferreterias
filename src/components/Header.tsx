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
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top micro-info bar */}
      <div className="bg-gray-900 text-gray-200 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.location.reference}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.schedule.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <button
              onClick={handleGeneralWhatsApp}
              className="text-green-400 hover:text-green-300 font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Ventas</span>
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
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 font-semibold text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
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
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-gray-950 fill-current" />
              <span className="hidden sm:inline">Cotizar por WhatsApp</span>
              <span className="sm:hidden">Cotizar</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
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
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-100 text-gray-900 font-bold text-sm border border-gray-300 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Ver lista de cotización ({totalItemsCount})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleGeneralWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-sm shadow cursor-pointer"
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
