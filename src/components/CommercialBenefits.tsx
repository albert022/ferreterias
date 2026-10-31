import React from "react";
import { PackageCheck, Users2, Zap, Info } from "lucide-react";

export function CommercialBenefits() {
  const benefits = [
    {
      icon: PackageCheck,
      title: "Variedad de productos",
      description: "Materiales y herramientas para cada proyecto.",
      detail:
        "Desde sacos de cemento y varillas estructurales hasta herramientas de precisión, iluminación y plomería para obras residenciales y comerciales.",
      badge: "Amplio Catálogo",
    },
    {
      icon: Users2,
      title: "Atención personalizada",
      description: "Te ayudamos a encontrar lo que necesitas.",
      detail:
        "Asesoría técnica directa para calcular cantidades de materiales, equivalencias de tuberías y recomendaciones de herramientas según tu presupuesto.",
      badge: "Soporte Experto",
    },
    {
      icon: Zap,
      title: "Cotizaciones rápidas",
      description: "Consulta productos directamente por WhatsApp.",
      detail:
        "Selecciona productos en tu lista y genera una cotización formal en segundos para recibir confirmación de disponibilidad inmediata.",
      badge: "Respuesta Ágil",
    },
  ];

  return (
    <section id="beneficios" className="py-14 sm:py-18 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            Ventajas Comerciales
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            ¿Por qué cotizar con El Constructor?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Diseñado para agilizar las compras de maestros constructores, ingenieros y particulares en Santo Domingo Este.
          </p>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-600 group-hover:bg-amber-400 group-hover:text-gray-950 transition-colors p-3">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 tracking-tight group-hover:text-amber-600 transition-colors">
                    {b.title}
                  </h3>

                  <p className="mt-1 font-semibold text-gray-800 text-sm">
                    {b.description}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {b.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-amber-600">
                  <span>Paso 0{idx + 1} de experiencia de compra</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet demonstrative disclaimer required by guidelines */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-500 bg-amber-50/80 border border-amber-200/60 rounded-xl py-2.5 px-4 max-w-xl mx-auto">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Nota demostrativa:</strong> Estos beneficios forman parte de la propuesta comercial de demostración y no constituyen afirmaciones verificadas de un negocio real.
          </span>
        </div>
      </div>
    </section>
  );
}
