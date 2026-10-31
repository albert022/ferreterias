"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  MessageCircle,
  FileText,
  CheckCircle,
  ShieldCheck,
  Tag,
  Boxes,
} from "lucide-react";
import { Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const { addItem, sendSingleProductInquiry, openDrawer } = useQuote();

  if (!product) return null;

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToQuote = () => {
    addItem(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
      openDrawer();
    }, 900);
  };

  const handleWhatsAppInquiry = () => {
    sendSingleProductInquiry(product, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-md">
              <Tag className="w-3.5 h-3.5 text-amber-600" />
              {product.categoryName}
            </span>
            {product.badge && (
              <span className="bg-gray-900 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-amber-700 bg-amber-50 inline-block px-2.5 py-0.5 rounded border border-amber-200">
                  {product.presentation}
                </p>
              </div>

              {/* Price placeholder */}
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="block text-xs text-gray-500 font-semibold uppercase">
                  Condición de precio:
                </span>
                <span className="text-lg font-black text-gray-900">
                  Consultar precio por volumen
                </span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Precios competitivos para obras y minoristas en Santo Domingo Este.
                </p>
              </div>

              {/* Quantity selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Cantidad a cotizar ({product.unit}s):
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={handleDecrement}
                      className="p-2 hover:bg-gray-100 text-gray-700 transition-colors"
                      aria-label="Disminuir"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-gray-900 text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="p-2 hover:bg-gray-100 text-gray-700 transition-colors"
                      aria-label="Aumentar"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {product.unit}s requeridos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-900">
              Descripción del producto:
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <h4 className="text-sm font-bold text-gray-900 pt-2">
              Características destacadas:
            </h4>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAddToQuote}
            disabled={addedSuccess}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-sm ${
              addedSuccess
                ? "bg-green-600 text-white"
                : "bg-gray-900 hover:bg-gray-800 text-white"
            }`}
          >
            {addedSuccess ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>¡Agregado a la cotización!</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Agregar {quantity} a mi cotización</span>
              </>
            )}
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 font-black text-sm transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current text-gray-950" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
