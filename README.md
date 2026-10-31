# Ferretería El Constructor | Demo Comercial QRMOON

> **Plan Básico para Ferreterías en República Dominicana**  
> *"Todo para construir, reparar y mejorar"*  
> Desarrollado para el catálogo comercial de **QRMOON**.

Esta solución web demuestra cómo los propietarios de ferreterías en República Dominicana pueden digitalizar su negocio de manera profesional, sólida y enfocada 100% en captar clientes, cotizaciones y pedidos mediante WhatsApp sin las complejidades ni costos de mantenimiento de un e-commerce tradicional.

---

## 🏗️ Características Principales

1. **Identidad Visual Industrial y Sólida**:
   - Paleta de colores: Amarillo industrial (`#FBBF24`), Gris carbón (`#111827`), Blanco (`#FFFFFF`) y Gris claro (`#F3F4F6`).
   - Tipografía moderna con acentos de alta legibilidad técnica.
   - Indicador discreto y elegante de demo comercial QRMOON.

2. **Sección de Inicio (Hero & Propuesta de Valor)**:
   - Header adaptable a móviles con llamada a la acción destacada para WhatsApp.
   - Hero comercial con imágenes de ferretería, sellos de confianza y botones de acción rápida.
   - 3 tarjetas de beneficios comerciales con aviso demostrativo claro.

3. **Catálogo Interactivo con 8 Categorías y 16 Productos**:
   - Categorías: Cemento y materiales, Hierros y varillas, Herramientas manuales, Herramientas eléctricas, Pinturas y accesorios, Plomería y PVC, Electricidad e iluminación, Tornillería y fijaciones.
   - 16 productos reales con presentación detallada (sacos, pulgadas, metros, cubetas).
   - Precios mostrados bajo la modalidad *"Consultar precio"*.
   - Búsqueda en tiempo real y filtrado por categoría interactivo.
   - Modal de especificaciones y características para cada artículo.

4. **Sistema de Cotización Multi-Producto por WhatsApp**:
   - Selección de cantidades y productos en una lista temporal sin base de datos.
   - Drawer deslizante con resumen de artículos y datos del solicitante.
   - Botón directo que genera un mensaje ordenado y codificado para WhatsApp con enlace `wa.me`.

5. **Formulario de Cotización Directa & Contacto Comercial**:
   - Formulario validado para solicitudes especiales o de gran volumen.
   - Información de contacto centralizada en `src/config/site.ts`.
   - Ubicación de referencia en **Santo Domingo Este, República Dominicana**.
   - Tarjeta para invitar a reseñas en Google Maps.
   - **Tarjeta de Presentación Digital QRMOON**: incluye código QR, descarga directa de archivo de contacto `.vcf` para teléfonos y compartir perfil.

6. **Asistente Virtual Preguntas Frecuentes (Don Pedro)**:
   - Widget interactivo y discreto que responde al instante sobre ubicación, horarios, entregas y cotizaciones.

7. **Botón Flotante de WhatsApp**:
   - Con indicador de estado en línea para consultas rápidas.

8. **Preparado para SEO y Analítica**:
   - Metadatos OpenGraph, Twitter Cards y marcado JSON-LD estructurado (`HardwareStore`).
   - Configuración lista para Google Analytics mediante variable de entorno `NEXT_PUBLIC_GA_ID`.

---

## 🛠️ Tecnologías

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React**
- Compatible con **Netlify** y **Vercel**

---

## 🚀 Puesta en Marcha Local

```bash
# 1. Clonar el repositorio e ingresar a la carpeta
cd ferreterias

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre en tu navegador [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Personalización para un Cliente Real

Todos los datos de la ferretería están centralizados en un único archivo:
👉 **[`src/config/site.ts`](file:///src/config/site.ts)**

Puedes modificar fácilmente:
- Nombre y eslogan del negocio.
- Teléfono y número de WhatsApp (código de país y dígitos).
- Dirección física y enlace a Google Maps.
- Horarios de atención al público.
- Redes sociales (Instagram, TikTok, Facebook).
- Enlace para Google Reviews.
- Activar o desactivar el aviso de demostración.

Los productos y categorías se encuentran organizados en:
- **[`src/data/categories.ts`](file:///src/data/categories.ts)**
- **[`src/data/products.ts`](file:///src/data/products.ts)**

---

## 🌐 Despliegue en Netlify

El proyecto cuenta con un archivo `netlify.toml` listo para producción:
1. Conecta tu repositorio en **Netlify**.
2. Comando de compilación: `npm run build`
3. Directorio de publicación: `.next`
4. (Opcional) Agrega la variable `NEXT_PUBLIC_GA_ID` en las variables de entorno de Netlify.
