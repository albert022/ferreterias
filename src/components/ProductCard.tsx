"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Plus,
  Check,
  Eye,
  Tag,
  Sparkles,
} from "lucide-react";
import { Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const { addItem, sendSingleProductInquiry } = useQuote();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    sendSingleProductInquiry(product, 1);
  };

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group relative bg-white rounded-2xl border border-gray-200 hover:border-amber-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Product Image Header with badges */}
        <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            {product.badge && (
              <span className="inline-flex items-center gap-1 bg-gray-900/90 text-amber-400 text-[11px] font-black px-2 py-0.5 rounded-md shadow backdrop-blur-xs">
                <Sparkles className="w-3 h-3" />
                {product.badge}
              </span>
            )}
            <span className="inline-flex items-center gap-1 bg-white/95 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-md shadow backdrop-blur-xs">
              <Tag className="w-2.5 h-2.5 text-amber-600" />
              {product.categoryName}
            </span>
          </div>

          {/* Quick view icon on hover */}
          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <span className="bg-gray-900/90 text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1 shadow">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Ver ficha</span>
            </span>
          </div>
        </div>

        {/* Content body */}
        <div className="p-4 sm:p-5">
          {/* Title */}
          <h3 className="font-extrabold text-base text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Presentation pill */}
          <div className="mt-2 inline-block">
            <span className="inline-block bg-amber-50 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded border border-amber-200">
              {product.presentation}
            </span>
          </div>

          {/* Short description */}
          <p className="mt-2.5 text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Price status */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-gray-400 block uppercase tracking-wider">
                Precio estimado:
              </span>
              <span className="text-sm font-black text-gray-900">
                Consultar precio
              </span>
            </div>
            <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
              Disponible
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-4 pt-0 sm:p-5 sm:pt-0 grid grid-cols-2 gap-2">
        {/* Botón: Consultar precio */}
        <button
          onClick={handleWhatsApp}
          title="Consultar precio por WhatsApp"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs transition-colors border border-gray-200 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-green-600 fill-current" />
          <span className="truncate">Consultar</span>
        </button>

        {/* Botón: Agregar a cotización */}
        <button
          onClick={handleAdd}
          title="Agregar producto a la lista de cotización"
          className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-xs transition-all shadow-xs cursor-pointer ${
            justAdded
              ? "bg-green-600 text-white"
              : "bg-amber-400 hover:bg-amber-500 text-gray-950"
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span className="truncate">¡Agregado!</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span className="truncate">+ Cotizar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
