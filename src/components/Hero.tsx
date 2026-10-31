"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  FileSpreadsheet,
  CheckCircle2,
  ShieldCheck,
  Truck,
  MessageSquare,
  Award,
  Zap,
} from "lucide-react";
import { buildWhatsAppLink } from "@/config/site";

export function Hero() {
  const handleExplore = () => {
    const el = document.querySelector("#catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuoteClick = () => {
    const el = document.querySelector("#cotizar");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppQuick = () => {
    window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="inicio" className="relative bg-gray-900 text-white overflow-hidden font-sans">
      {/* Decorative background grid and industrial glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#fbbf24 1px, transparent 1px), radial-gradient(#fbbf24 1px, #111827 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-xs sm:text-sm text-gray-200">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-semibold text-amber-400">
                Santo Domingo Este
              </span>
              <span className="text-gray-400">|</span>
              <span>Despachos y atención inmediata</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-none">
              Todo lo que necesitas para{" "}
              <span className="text-amber-400 inline-block underline decoration-amber-400/40 decoration-wavy decoration-2">
                construir, reparar
              </span>{" "}
              y mejorar.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Materiales de construcción, herramientas, pinturas y mucho más.
              Consulta disponibilidad y solicita tu cotización fácilmente.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleExplore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-gray-950 font-extrabold text-base transition-all shadow-lg hover:shadow-amber-400/20 group cursor-pointer"
              >
                <span>Explorar productos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-bold text-base border border-gray-600 transition-all cursor-pointer"
              >
                <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                <span>Solicitar cotización</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Marcas certificadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Despacho en SDE</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Asesoría personalizada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 rounded-2xl blur-xl" />

              {/* Main Featured Hardware Store Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl bg-gray-800 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1000&q=80"
                  alt="Herramientas y ferretería profesional"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                {/* Badge on image */}
                <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm border border-amber-400/40 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold text-amber-400 shadow">
                  <Award className="w-4 h-4" />
                  <span>Calidad Garantizada</span>
                </div>

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/95 backdrop-blur-md p-3.5 rounded-xl border border-gray-700 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-sm">
                        Catálogo de Materiales
                      </p>
                      <p className="text-gray-400 text-xs">
                        +16 categorías clave de ferretería y construcción
                      </p>
                    </div>
                    <button
                      onClick={handleWhatsAppQuick}
                      className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-black px-3 py-1.5 rounded-md text-xs flex items-center gap-1 shadow shrink-0 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Consultar</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Metric 1 */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-amber-400 text-gray-950 p-3 sm:p-4 rounded-xl shadow-xl font-bold border-2 border-white flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-lg bg-gray-950 text-amber-400 flex items-center justify-center font-black text-lg">
                  ⚡
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-extrabold text-gray-800">
                    Cotización
                  </p>
                  <p className="text-sm sm:text-base font-black">
                    Vía WhatsApp
                  </p>
                </div>
              </div>

              {/* Floating Metric 2 */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-gray-900 border border-gray-700 text-white p-3.5 rounded-xl shadow-xl items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-extrabold text-white">Atención Rápida</p>
                  <p className="text-gray-400">Respuesta ágil a constructores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
