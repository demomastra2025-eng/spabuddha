export interface BranchService {
  id: string;
  branchId: string;
  name: string;
  description?: string;
  durationMinutes?: number;
  price: number;
  discountPercent?: number;
  currency?: string;
}

type ServiceDictionary = Record<string, BranchService[]>;

const kzt = "KZT";

export const defaultBranchServices: ServiceDictionary = {
  "astana-turan-54": [
    {
      id: "astana-ritual-silk",
      branchId: "astana-turan-54",
      name: "Ритуал «Туранский шёлк»",
      description: "Травяной пар + масляный массаж всего тела",
      durationMinutes: 120,
      price: 65000,
      discountPercent: 10,
      currency: kzt,
    },
    {
      id: "astana-stone-jade",
      branchId: "astana-turan-54",
      name: "Стоун-массаж с нефритом",
      description: "Горячие камни и арома-уход для спины",
      durationMinutes: 90,
      price: 58000,
      discountPercent: 8,
      currency: kzt,
    },
    {
      id: "astana-duo-nirvana",
      branchId: "astana-turan-54",
      name: "SPA для двоих «Нирвана»",
      description: "Синхронный массаж четырьмя руками",
      durationMinutes: 150,
      price: 110000,
      discountPercent: 12,
      currency: kzt,
    },
  ],
  "shymkent-tauke-hana-95a": [
    {
      id: "tauke-detox",
      branchId: "shymkent-tauke-hana-95a",
      name: "Детокс-программа «Лотос»",
      description: "Скраб с морской солью и обёртывание",
      durationMinutes: 100,
      price: 52000,
      discountPercent: 10,
      currency: kzt,
    },
    {
      id: "tauke-aroma",
      branchId: "shymkent-tauke-hana-95a",
      name: "Аромамассаж «Южный бриз»",
      durationMinutes: 75,
      price: 43000,
      discountPercent: 5,
      currency: kzt,
    },
    {
      id: "tauke-couple",
      branchId: "shymkent-tauke-hana-95a",
      name: "Парный массаж «Гармония»",
      durationMinutes: 120,
      price: 95000,
      discountPercent: 15,
      currency: kzt,
    },
  ],
  "shymkent-nursat-173b": [
    {
      id: "nursat-ritual",
      branchId: "shymkent-nursat-173b",
      name: "Ритуал «Дыхание степи»",
      durationMinutes: 110,
      price: 60000,
      discountPercent: 10,
      currency: kzt,
    },
    {
      id: "nursat-hot-ginger",
      branchId: "shymkent-nursat-173b",
      name: "Имбирный массаж",
      description: "Прогрев мышц имбирными компрессами",
      durationMinutes: 80,
      price: 47000,
      discountPercent: 7,
      currency: kzt,
    },
    {
      id: "nursat-face-glow",
      branchId: "shymkent-nursat-173b",
      name: "Spa-уход для лица «Glow»",
      durationMinutes: 60,
      price: 38000,
      discountPercent: 5,
      currency: kzt,
    },
  ],
  "shymkent-kunaeva-13": [
    {
      id: "kunaeva-bamboo",
      branchId: "shymkent-kunaeva-13",
      name: "Бамбуковый массаж",
      durationMinutes: 70,
      price: 42000,
      discountPercent: 6,
      currency: kzt,
    },
    {
      id: "kunaeva-sultan",
      branchId: "shymkent-kunaeva-13",
      name: "Ритуал «Султанская купель»",
      durationMinutes: 130,
      price: 88000,
      discountPercent: 13,
      currency: kzt,
    },
    {
      id: "kunaeva-spine",
      branchId: "shymkent-kunaeva-13",
      name: "Точечный массаж спины",
      durationMinutes: 60,
      price: 36000,
      discountPercent: 5,
      currency: kzt,
    },
  ],
  "taraz-tole-bi-93b": [
    {
      id: "taraz-milk",
      branchId: "taraz-tole-bi-93b",
      name: "Молочная ванна Клеопатры",
      durationMinutes: 90,
      price: 57000,
      discountPercent: 9,
      currency: kzt,
    },
    {
      id: "taraz-foot",
      branchId: "taraz-tole-bi-93b",
      name: "Foot-detox + рефлексотерапия",
      durationMinutes: 60,
      price: 31000,
      discountPercent: 5,
      currency: kzt,
    },
    {
      id: "taraz-gold",
      branchId: "taraz-tole-bi-93b",
      name: "Лифтинг уход с частицами золота",
      durationMinutes: 75,
      price: 49000,
      discountPercent: 8,
      currency: kzt,
    },
  ],
  all: [
    {
      id: "all-head-spa",
      branchId: "all",
      name: "Head SPA & шиацу",
      durationMinutes: 50,
      price: 28000,
      discountPercent: 5,
      currency: kzt,
    },
    {
      id: "all-quick-relax",
      branchId: "all",
      name: "Экспресс релакс 45 мин.",
      durationMinutes: 45,
      price: 24000,
      discountPercent: 5,
      currency: kzt,
    },
    {
      id: "all-gift",
      branchId: "all",
      name: "SPA-сертификат «Забота»",
      durationMinutes: 60,
      price: 40000,
      discountPercent: 7,
      currency: kzt,
    },
  ],
};

export function getFallbackServices(branchId?: string | null) {
  if (!branchId) {
    return [];
  }

  if (branchId === "all") {
    const aggregated = Object.entries(defaultBranchServices)
      .filter(([key]) => key !== "all")
      .flatMap(([, services]) => services);
    return aggregated.length ? aggregated : defaultBranchServices.all;
  }

  return defaultBranchServices[branchId] ?? defaultBranchServices.all ?? [];
}
