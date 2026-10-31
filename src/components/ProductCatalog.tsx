"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  SlidersHorizontal,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { CategoryNav } from "./CategoryNav";
import { ProductCard } from "./ProductCard";
import { ProductDetailModal } from "./ProductDetailModal";
import { useQuote } from "@/context/QuoteContext";

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(
    null
  );

  const { totalItemsCount, openDrawer } = useQuote();

  // Filter products based on search term and selected category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        !selectedCategory || item.categoryId === selectedCategory;

      const normalizedSearch = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !normalizedSearch ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch) ||
        item.presentation.toLowerCase().includes(normalizedSearch) ||
        item.categoryName.toLowerCase().includes(normalizedSearch) ||
        item.features.some((f) => f.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-gray-900 border border-amber-400/40 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Catálogo Comercial
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Materiales y Herramientas Destacadas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Explora las categorías más solicitadas en Santo Domingo Este. Añade
            productos a tu lista o consulta precios directamente por WhatsApp.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cemento, varillas, taladro, pinturas, tubos PVC..."
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick status count and drawer toggle button */}
            <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
              <span className="text-xs font-bold text-gray-500 bg-white px-3 py-2 rounded-xl border border-gray-200">
                Mostrando{" "}
                <strong className="text-gray-900">
                  {filteredProducts.length}
                </strong>{" "}
                de {PRODUCTS.length} productos
              </span>

              {totalItemsCount > 0 && (
                <button
                  onClick={openDrawer}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs shadow transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-gray-950" />
                  <span>Ver Cotización ({totalItemsCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Cards */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <CategoryNav
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              totalProductsCount={PRODUCTS.length}
            />
          </div>
        </div>

        {/* Active Filters Bar if any */}
        {(selectedCategory || searchTerm) && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs">
            <span className="font-bold text-gray-700 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
              Filtros activos:
            </span>

            {selectedCategory && (
              <span className="inline-flex items-center gap-1 bg-white border border-amber-300 text-amber-900 px-2.5 py-1 rounded-md font-semibold">
                Categoría:{" "}
                {
                  PRODUCTS.find((p) => p.categoryId === selectedCategory)
                    ?.categoryName
                }
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-400 hover:text-gray-700 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchTerm && (
              <span className="inline-flex items-center gap-1 bg-white border border-amber-300 text-amber-900 px-2.5 py-1 rounded-md font-semibold">
                Búsqueda: &ldquo;{searchTerm}&rdquo;
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-gray-400 hover:text-gray-700 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleClearFilters}
              className="ml-auto text-amber-800 hover:text-amber-950 font-black underline cursor-pointer"
            >
              Restablecer todos
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={setActiveModalProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900">
              No se encontraron productos coincidentes
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mt-1">
              Intenta con otra palabra clave o restablece los filtros para ver
              todo el catálogo disponible.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Mostrar todos los materiales
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
}
