"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  X,
  Send,
  HardHat,
  MapPin,
  Clock,
  Truck,
  FileText,
  MessageCircle,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/config/site";
import { useQuote } from "@/context/QuoteContext";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  actionType?: "maps" | "hours" | "quote" | "delivery" | "whatsapp";
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { openDrawer } = useQuote();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: `¡Hola! Soy Don Pedro, el asistente de Ferretería El Constructor 🏗️. ¿Cómo te puedo orientar hoy? Selecciona una de las preguntas frecuentes:`,
    },
  ]);

  const questions = [
    {
      id: "q1",
      question: "¿Dónde están ubicados?",
      reply: `Estamos ubicados en ${siteConfig.location.address}, ${siteConfig.location.city}, República Dominicana. Contamos con amplio parqueo y zona de carga para camiones.`,
      actionType: "maps" as const,
    },
    {
      id: "q2",
      question: "¿Cuál es su horario?",
      reply: `Nuestros horarios de atención son:\n• ${siteConfig.schedule.weekdays}\n• ${siteConfig.schedule.saturdays}\n• ${siteConfig.schedule.sundays}`,
      actionType: "hours" as const,
    },
    {
      id: "q3",
      question: "¿Cómo puedo solicitar una cotización?",
      reply: `¡Es muy fácil! Puedes agregar productos directamente desde nuestro catálogo presionando '+ Cotizar' en cada artículo, o escribirnos directamente a nuestro WhatsApp oficial con tu lista de materiales.`,
      actionType: "quote" as const,
    },
    {
      id: "q4",
      question: "¿Realizan entregas?",
      reply: `Sí, contamos con servicio de transporte y flete para despachos de materiales pesados (cemento, blocks, varillas, agregados) y livianos en todo Santo Domingo Este y zonas aledañas. Consulta el costo de flete según tu sector exacto.`,
      actionType: "delivery" as const,
    },
  ];

  const handleAskQuestion = (q: typeof questions[0]) => {
    // Add user question
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: q.question,
    };

    // Add bot answer
    const botMsg: ChatMessage = {
      id: `b-${Date.now() + 1}`,
      sender: "bot",
      text: q.reply,
      actionType: q.actionType,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: `¡Hola! Soy Don Pedro, el asistente de Ferretería El Constructor 🏗️. ¿Cómo te puedo orientar hoy? Selecciona una de las preguntas frecuentes:`,
      },
    ]);
  };

  const handleOpenWhatsAppFromBot = () => {
    const text = `¡Hola *${siteConfig.name}*! Vengo del asistente virtual y deseo hablar con un representante de ventas.`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 font-sans">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir asistente de preguntas frecuentes"
            className="group flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl border-2 border-amber-400 transition-all hover:scale-105 cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-400/40"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center font-black">
                <HardHat className="w-5 h-5" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse" />
            </div>

            <div className="text-left hidden sm:block pr-1">
              <p className="text-xs font-black text-amber-400 leading-none">
                ¿Dudas frecuentes?
              </p>
              <p className="text-[11px] text-gray-300 font-medium leading-tight mt-0.5">
                Pregunta a Don Pedro
              </p>
            </div>
          </button>
        )}
      </div>

      {/* Chat Popover Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-4 sm:left-6 z-50 w-[92vw] sm:w-96 max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200 font-sans">
          {/* Header */}
          <div className="p-4 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center font-black">
                  <HardHat className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
              </div>

              <div>
                <h4 className="font-black text-sm text-white flex items-center gap-1.5 leading-tight">
                  Don Pedro
                  <span className="text-[10px] bg-amber-400/20 text-amber-400 font-bold px-1.5 py-0.2 rounded border border-amber-400/30">
                    Asistente
                  </span>
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Preguntas frecuentes predeterminadas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reiniciar conversación"
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Cerrar asistente"
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages List Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gray-50/70 text-xs sm:text-sm max-h-[46vh]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-xs leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-amber-400 text-gray-950 font-bold rounded-tr-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Contextual Action Button based on actionType */}
                  {m.actionType === "maps" && (
                    <a
                      href={siteConfig.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-amber-400 font-bold text-xs shadow hover:bg-gray-800"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Ver mapa interactivo</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}

                  {m.actionType === "quote" && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        openDrawer();
                      }}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-amber-400 font-bold text-xs shadow hover:bg-gray-800 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Abrir lista de cotización</span>
                    </button>
                  )}

                  {m.actionType === "delivery" && (
                    <button
                      onClick={handleOpenWhatsAppFromBot}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-700 text-white font-bold text-xs shadow hover:bg-green-800 cursor-pointer"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Consultar flete a mi sector</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick interactive questions */}
          <div className="p-3 bg-white border-t border-gray-200">
            <span className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-wider">
              Toca una pregunta frecuente:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleAskQuestion(q)}
                  className="text-left p-2 rounded-xl bg-gray-100 hover:bg-amber-100 hover:text-gray-950 text-gray-700 text-xs font-semibold transition-colors border border-gray-200 line-clamp-1 cursor-pointer"
                >
                  {q.question}
                </button>
              ))}
            </div>

            {/* Direct human WhatsApp escalation */}
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500">
                ¿Necesitas algo más específico?
              </span>
              <button
                onClick={handleOpenWhatsAppFromBot}
                className="flex items-center gap-1 text-xs font-bold text-green-700 hover:text-green-800"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
