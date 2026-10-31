import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CommercialBenefits } from "@/components/CommercialBenefits";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ContactAndQuoteSection } from "@/components/ContactAndQuoteSection";
import { QuoteDrawer } from "@/components/QuoteDrawer";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header with Demo Notice */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Commercial Benefits */}
        <CommercialBenefits />

        {/* Product Catalog with Categories, Search, Filters & Modals */}
        <ProductCatalog />

        {/* Quote Form, Commercial Info, Google Reviews & QRMOON Digital Card */}
        <ContactAndQuoteSection />
      </main>

      {/* Floating Multi-Product Quote Slide-over Drawer */}
      <QuoteDrawer />

      {/* Interactive FAQ Assistant (Don Pedro) */}
      <ChatbotWidget />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
