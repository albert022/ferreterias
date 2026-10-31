export interface Category {
  id: string;
  name: string;
  shortDescription: string;
  iconName: string;
  count: number;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "cemento-materiales",
    name: "Cemento y materiales",
    shortDescription: "Cementos, blocks, arena, gravilla y agregados",
    iconName: "Boxes",
    count: 2,
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hierros-varillas",
    name: "Hierros y varillas",
    shortDescription: "Varillas corrugadas, vigas, alambres de amarre",
    iconName: "Columns3",
    count: 2,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "herramientas-manuales",
    name: "Herramientas manuales",
    shortDescription: "Martillos, destornilladores, llaves y pinzas",
    iconName: "Hammer",
    count: 3,
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "herramientas-electricas",
    name: "Herramientas eléctricas",
    shortDescription: "Taladros, pulidoras, sierras y amoladoras",
    iconName: "Zap",
    count: 2,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pinturas-accesorios",
    name: "Pinturas y accesorios",
    shortDescription: "Pinturas acrílicas, brochas, rodillos y selladores",
    iconName: "Paintbrush",
    count: 2,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "plomeria-pvc",
    name: "Plomería y PVC",
    shortDescription: "Tubos de presión, codos, llaves de paso y pegamentos",
    iconName: "Pipette",
    count: 2,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "electricidad-iluminacion",
    name: "Electricidad e iluminación",
    shortDescription: "Cables THHN, bombillos LED, interruptores y breakers",
    iconName: "Lightbulb",
    count: 2,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "tornilleria-fijaciones",
    name: "Tornillería y fijaciones",
    shortDescription: "Tornillos galvanizados, tarugos, clavos y pernos",
    iconName: "Nut",
    count: 2,
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=600&q=80",
  },
];
