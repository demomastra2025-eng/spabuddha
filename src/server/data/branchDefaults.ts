export interface BranchOneVisionConfig {
  apiKey: string;
  secret: string;
  merchantId?: string;
  serviceId?: string;
}

export interface BranchDefault {
  slug: string;
  label: string;
  address: string;
  phone: string;
  managerName: string;
  timezone: string;
  nameCompany: string;
  email?: string;
  oneVision: BranchOneVisionConfig;
}

export interface SpaMenuItem {
  category: string;
  name: string;
  price: number;
  durationMinutes?: number;
  description?: string;
}

export const branchDefaults: BranchDefault[] = [
  {
    slug: "astana-turan-54",
    label: "Buddha Spa",
    address: "Астана, пр. Туран, 54",
    phone: "+7 (701) 989 80 01",
    managerName: "Айгерим",
    timezone: "Asia/Almaty",
    nameCompany: "ИП STEAKFIELD Buddha Spa Астана, Туран 54",
    oneVision: {
      apiKey: "3c6ba1b0-5349-013e-927e-0645dcfd0614",
      secret: "71e1397473a074b3661de049d21a541fbb396efcd613c7d5",
      merchantId: "3c6ba1b0-5349-013e-927e-0645dcfd0614",
      serviceId: "3c6ba1b0-5349-013e-927e-0645dcfd0614",
    },
  },
  {
    slug: "shymkent-tauke-hana-95a",
    label: "Buddha Spa",
    address: "Шымкент, ул. Тауке хана, 95А",
    phone: "+7 (778) 779 43 09",
    managerName: "Нурбек",
    timezone: "Asia/Almaty",
    nameCompany: "ИП STEAKFIELD Buddha Spa Шымкент, Тауке хана 95А",
    oneVision: {
      apiKey: "30e86560-5349-013e-927e-0645dcfd0614",
      secret: "228b29f4f5417abada85b4f7db78ec8a29dc73024ea0e70b",
      merchantId: "30e86560-5349-013e-927e-0645dcfd0614",
      serviceId: "30e86560-5349-013e-927e-0645dcfd0614",
    },
  },
  {
    slug: "shymkent-nursat-173b",
    label: "Buddha Spa",
    address: "Шымкент, микрорайон Нурсат, 173Б",
    phone: "+7 (702) 651 80 99",
    managerName: "Гаухар",
    timezone: "Asia/Almaty",
    nameCompany: "ИП STEAKFIELD Buddha Spa Шымкент, Нурсат 173Б",
    oneVision: {
      apiKey: "59572170-5349-013e-927e-0645dcfd0614",
      secret: "ff53c0335f2f7f24c82cfd624988e3c66a626396d0d7a747",
      merchantId: "59572170-5349-013e-927e-0645dcfd0614",
      serviceId: "59572170-5349-013e-927e-0645dcfd0614",
    },
  },
  {
    slug: "shymkent-kunaeva-13",
    label: "Buddha Spa",
    address: "Шымкент, ул. Кунаева, 13",
    phone: "+7 (702) 222 31 00",
    managerName: "Самат",
    timezone: "Asia/Almaty",
    nameCompany: "ИП STEAKFIELD Buddha Spa Шымкент, Кунаева 13",
    oneVision: {
      apiKey: "4b009070-5349-013e-927e-0645dcfd0614",
      secret: "343c18cc9d38b4921ea261f9e93ddcf7684905e622971876",
      merchantId: "4b009070-5349-013e-927e-0645dcfd0614",
      serviceId: "4b009070-5349-013e-927e-0645dcfd0614",
    },
  },
  {
    slug: "taraz-tole-bi-93b",
    label: "Buddha Spa",
    address: "Тараз, ул. Толе Би, 93Б",
    phone: "+7 (705) 888 76 50",
    managerName: "Айдана",
    timezone: "Asia/Almaty",
    nameCompany: "ИП STEAKFIELD Buddha Spa Тараз, Толе Би 93Б",
    oneVision: {
      apiKey: "1af6a0e0-5349-013e-927e-0645dcfd0614",
      secret: "15d37ac63c99fdcc31fd0298ffbebd6fe99fd20a4be70599",
      merchantId: "1af6a0e0-5349-013e-927e-0645dcfd0614",
      serviceId: "1af6a0e0-5349-013e-927e-0645dcfd0614",
    },
  },
];

export const spaMenu: SpaMenuItem[] = [
  {
    category: "Тайские массажи",
    name: "Тайский классический массаж — 60 мин",
    durationMinutes: 60,
    price: 16000,
  },
  {
    category: "Тайские массажи",
    name: "Тайский классический массаж — 90 мин",
    durationMinutes: 90,
    price: 21000,
  },
  {
    category: "Тайские массажи",
    name: "Тайский классический массаж — 120 мин",
    durationMinutes: 120,
    price: 26000,
  },
  {
    category: "Тайские массажи",
    name: "Тайский релакс-массаж с маслом — 60 мин",
    durationMinutes: 60,
    price: 18000,
  },
  {
    category: "Тайские массажи",
    name: "Тайский релакс-массаж с маслом — 90 мин",
    durationMinutes: 90,
    price: 24000,
  },
  {
    category: "Тайские массажи",
    name: "Тайский релакс-массаж с маслом — 120 мин",
    durationMinutes: 120,
    price: 29000,
  },
  {
    category: "SPA-уходы",
    name: "Пилинг-скраб тела",
    description: "Обновление и очищение кожи, массаж маслами",
    price: 20000,
  },
  {
    category: "SPA-уходы",
    name: "Обёртывание с кокосом",
    description: "Питание и увлажнение кожи",
    price: 22000,
  },
  {
    category: "SPA-уходы",
    name: "Обёртывание с грязью Мёртвого моря",
    description: "Минерализация и подтяжка кожи",
    price: 23000,
  },
  {
    category: "Парные программы",
    name: "«Рай для двоих» (пилинг + масло) — 90 мин",
    durationMinutes: 90,
    price: 38000,
  },
  {
    category: "Парные программы",
    name: "«Бали» (скраб + массаж + чай) — 120 мин",
    durationMinutes: 120,
    price: 44000,
  },
  {
    category: "Парные программы",
    name: "«Королевская пара» — 150 мин",
    durationMinutes: 150,
    price: 53000,
  },
  {
    category: "Премиум-ритуалы",
    name: "«Божественное прикосновение» — 150 мин",
    description: "Массаж, ароматерапия и обёртывание",
    durationMinutes: 150,
    price: 48000,
  },
  {
    category: "Премиум-ритуалы",
    name: "«Золото Таиланда» — 180 мин",
    description: "Уход с золотом и аромамаслами",
    durationMinutes: 180,
    price: 55000,
  },
  {
    category: "Дополнительные услуги",
    name: "Массаж головы",
    price: 8000,
  },
  {
    category: "Дополнительные услуги",
    name: "Массаж стоп",
    price: 9000,
  },
  {
    category: "Дополнительные услуги",
    name: "Массаж шеи и спины",
    price: 10000,
  },
  {
    category: "Дополнительные услуги",
    name: "Сауна (30 мин)",
    durationMinutes: 30,
    price: 4000,
  },
];
