"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  FileText,
  Building,
  User,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import { siteConfig } from "@/config/site";

export function QuoteDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearQuote,
    totalItemsCount,
    isDrawerOpen,
    closeDrawer,
    sendQuoteViaWhatsApp,
  } = useQuote();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    sector: "Santo Domingo Este",
    notes: "",
  });

  if (!isDrawerOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuoteViaWhatsApp(customer);
  };

  const handleExploreCatalog = () => {
    closeDrawer();
    setTimeout(() => {
      const el = document.querySelector("#catalogo");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={closeDrawer}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-gray-200">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-gray-950 flex items-center justify-center font-black">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-base leading-tight">
                  Lista de Cotización
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  {totalItemsCount} {totalItemsCount === 1 ? "artículo" : "artículos"} seleccionados
                </p>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              aria-label="Cerrar lista"
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {items.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-3">
                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                  <FileText className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-gray-900 text-base">
                  Tu lista está vacía
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Explora nuestro catálogo y presiona &ldquo;+ Cotizar&rdquo; en los productos que necesitas para tu proyecto.
                </p>
                <button
                  onClick={handleExploreCatalog}
                  className="mt-3 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs font-black shadow transition-all cursor-pointer"
                >
                  Explorar catálogo
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                      Productos a cotizar:
                    </span>
                    <button
                      onClick={clearQuote}
                      className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Vaciar lista</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-200 shrink-0 border border-gray-200">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            sizes="60px"
                            className="object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs text-gray-900 truncate">
                            {item.product.name}
                          </h5>
                          <p className="text-[11px] text-gray-500 truncate">
                            {item.product.presentation}
                          </p>

                          {/* Controls */}
                          <div className="flex items-center gap-2 mt-1.5">
                            <div className="flex items-center border border-gray-300 rounded-md bg-white">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  )
                                }
                                className="p-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                aria-label="Menos"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center text-xs font-bold text-gray-900">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                className="p-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                aria-label="Más"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="text-[10px] text-gray-500 font-medium">
                              {item.product.unit}s
                            </span>
                          </div>
                        </div>

                        {/* Remove single item button */}
                        <button
                          onClick={() => removeItem(item.product.id)}
                          aria-label={`Eliminar ${item.product.name}`}
                          className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-white transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Contact Details for WhatsApp generation */}
                <form
                  id="quote-drawer-form"
                  onSubmit={handleSendWhatsApp}
                  className="pt-4 border-t border-gray-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-gray-700 tracking-wider">
                      Tus datos para el mensaje:
                    </span>
                    <span className="text-[10px] text-gray-400">
                      (No se guardan en servidor)
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Nombre o Empresa:
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={customer.name}
                        onChange={(e) =>
                          setCustomer({ ...customer, name: e.target.value })
                        }
                        placeholder="Ej. Ing. Carlos Santana"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">
                        Teléfono / Celular:
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={customer.phone}
                          onChange={(e) =>
                            setCustomer({ ...customer, phone: e.target.value })
                          }
                          placeholder="(829) 000-0000"
                          className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">
                        Sector / Zona:
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={customer.sector}
                          onChange={(e) =>
                            setCustomer({ ...customer, sector: e.target.value })
                          }
                          placeholder="Santo Domingo Este"
                          className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Comentarios o fecha requerida:
                    </label>
                    <textarea
                      rows={2}
                      value={customer.notes}
                      onChange={(e) =>
                        setCustomer({ ...customer, notes: e.target.value })
                      }
                      placeholder="Ej. ¿Tienen flete para el Ensanche Ozama? Requiero factura con comprobante."
                      className="w-full p-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Resumen de solicitud:</span>
                <span className="font-bold text-gray-900">
                  {items.length} productos | {totalItemsCount} unidades
                </span>
              </div>

              <button
                type="submit"
                form="quote-drawer-form"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 font-black text-sm transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current text-gray-950" />
                <span>Enviar cotización por WhatsApp</span>
              </button>

              <p className="text-[11px] text-gray-500 text-center leading-tight">
                Se abrirá WhatsApp con el resumen formateado para ser atendido por el equipo de {siteConfig.shortName}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
