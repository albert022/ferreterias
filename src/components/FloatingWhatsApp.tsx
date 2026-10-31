"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 font-sans">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-900 px-3.5 py-2 rounded-2xl shadow-xl border border-gray-200 text-xs animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          <div>
            <p className="font-extrabold text-gray-900 leading-tight">
              ¿Cotizamos por WhatsApp?
            </p>
            <p className="text-[11px] text-gray-500 leading-tight">
              Respuestas rápidas para tu obra
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar mensaje"
            className="text-gray-400 hover:text-gray-600 p-0.5 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-108 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 cursor-pointer"
      >
        <MessageCircle className="w-8 h-8 fill-current" />

        {/* Pulse status badge */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-400 border-2 border-white" />
        </span>
      </button>
    </div>
  );
}
