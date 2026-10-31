"use client";

import React from "react";
import {
  Boxes,
  Columns3,
  Hammer,
  Zap,
  Paintbrush,
  Pipette,
  Lightbulb,
  Nut,
  Layers,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";

interface CategoryNavProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  totalProductsCount: number;
}

export function CategoryNav({
  selectedCategory,
  onSelectCategory,
  totalProductsCount,
}: CategoryNavProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Boxes":
        return Boxes;
      case "Columns3":
        return Columns3;
      case "Hammer":
        return Hammer;
      case "Zap":
        return Zap;
      case "Paintbrush":
        return Paintbrush;
      case "Pipette":
        return Pipette;
      case "Lightbulb":
        return Lightbulb;
      case "Nut":
        return Nut;
      default:
        return Layers;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-500">
          Filtrar por Categoría
        </h3>
        {selectedCategory && (
          <button
            onClick={() => onSelectCategory(null)}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline cursor-pointer"
          >
            Mostrar todas ({totalProductsCount})
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
        {/* "Todas" card */}
        <button
          onClick={() => onSelectCategory(null)}
          className={`flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
            selectedCategory === null
              ? "bg-gray-900 text-white border-gray-900 shadow-md ring-2 ring-amber-400"
              : "bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:bg-amber-50/50"
          }`}
        >
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors ${
              selectedCategory === null
                ? "bg-amber-400 text-gray-950 font-black"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold leading-tight">Todas</span>
          <span
            className={`text-[10px] mt-0.5 ${
              selectedCategory === null ? "text-amber-300" : "text-gray-400"
            }`}
          >
            {totalProductsCount} items
          </span>
        </button>

        {CATEGORIES.map((cat) => {
          const Icon = getIcon(cat.iconName);
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? null : cat.id)}
              className={`flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                isSelected
                  ? "bg-gray-900 text-white border-gray-900 shadow-md ring-2 ring-amber-400"
                  : "bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:bg-amber-50/50"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                  isSelected
                    ? "bg-amber-400 text-gray-950 font-black"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold leading-tight line-clamp-1">
                {cat.name}
              </span>
              <span
                className={`text-[10px] mt-0.5 ${
                  isSelected ? "text-amber-300" : "text-gray-400"
                }`}
              >
                {cat.count} items
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
