export interface SpaBranch {
  id: string;
  label: string;
  address: string;
  phone?: string;
}

export const branches: SpaBranch[] = [
  { id: "all", label: "Все филиалы Buddha Spa", address: "Действует во всех городах" },
  { id: "astana-turan-54", label: "Buddha Spa", phone: "+7 (701) 989 80 01", address: "Астана, пр. Туран, 54" },
  { id: "shymkent-tauke-hana-95a", label: "Buddha Spa", phone: "+7 (778) 779 43 09", address: "Шымкент, ул. Тауке хана, 95А" },
  { id: "shymkent-nursat-173b", label: "Buddha Spa", phone: "+7 (702) 651 80 99", address: "Шымкент, микрорайон Нурсат, 173Б" },
  { id: "shymkent-kunaeva-13", label: "Buddha Spa", phone: "+7 (702) 222 31 00", address: "Шымкент, ул. Кунаева, 13" },
  { id: "taraz-tole-bi-93b", label: "Buddha Spa", phone: "+7 (705) 888 76 50", address: "Тараз, ул. Толе Би, 93Б" },
];
