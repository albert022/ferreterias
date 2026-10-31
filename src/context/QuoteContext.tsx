"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";
import { siteConfig, buildWhatsAppLink } from "@/config/site";

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  sector?: string;
  notes?: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  totalItemsCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  lastAddedProduct: Product | null;
  sendQuoteViaWhatsApp: (customer: CustomerInfo) => void;
  sendSingleProductInquiry: (product: Product, quantity?: number) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "ferreteria_el_constructor_quote_items";

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);

  // Load from local session on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore sessionStorage issues
    }
  }, []);

  // Sync to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity: Math.max(1, quantity) }];
    });
    setLastAddedProduct(product);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const sendQuoteViaWhatsApp = (customer: CustomerInfo) => {
    if (items.length === 0) return;

    let message = `¡Hola *${siteConfig.name}*! 🏗️\n`;
    message += `Deseo solicitar una cotización formal para los siguientes materiales de su catálogo:\n\n`;
    message += `📋 *LISTA DE MATERIALES SOLICITADOS:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   • Cantidad: ${item.quantity} ${item.product.unit}(s)\n`;
      message += `   • Presentación: ${item.product.presentation}\n`;
      message += `   • Categoría: ${item.product.categoryName}\n`;
    });

    message += `\n👤 *DATOS DEL SOLICITANTE:*\n`;
    message += `• *Nombre:* ${customer.name || "Cliente interesado"}\n`;
    if (customer.phone) {
      message += `• *Teléfono:* ${customer.phone}\n`;
    }
    if (customer.sector) {
      message += `• *Sector / Ubicación:* ${customer.sector}\n`;
    } else {
      message += `• *Zona de referencia:* Santo Domingo Este, RD\n`;
    }
    if (customer.notes) {
      message += `• *Detalles / Notas:* ${customer.notes}\n`;
    }

    message += `\n📍 *Ferretería de referencia:* ${siteConfig.location.reference}\n`;
    message += `_Mensaje generado desde el catálogo web demo (Desarrollado por ${siteConfig.qrmoon.brandName})_`;

    const url = buildWhatsAppLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendSingleProductInquiry = (product: Product, quantity = 1) => {
    let message = `¡Hola *${siteConfig.name}*! 🏗️\n`;
    message += `Me gustaría consultar precio y disponibilidad del siguiente producto:\n\n`;
    message += `📌 *${product.name}*\n`;
    message += `• Categoría: ${product.categoryName}\n`;
    message += `• Presentación: ${product.presentation}\n`;
    message += `• Cantidad requerida: ${quantity} ${product.unit}(s)\n`;
    message += `• Ubicación de entrega: ${siteConfig.location.city}, ${siteConfig.location.country}\n\n`;
    message += `¿Tienen stock disponible y cuál sería el precio? ¡Muchas gracias!`;

    const url = buildWhatsAppLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        totalItemsCount,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        lastAddedProduct,
        sendQuoteViaWhatsApp,
        sendSingleProductInquiry,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
