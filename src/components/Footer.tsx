import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import { branches } from "@/data/branches";

export const Footer = () => {
  const salonBranches = branches.filter((branch) => branch.id !== "all");

  return (
    <footer className="bg-foreground text-background py-16 mt-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Buddha Spa Certificates</h3>
            <p className="text-background/70 leading-relaxed">
              Премиальные подарочные сертификаты сети Buddha Spa.
            </p>
            <li className="flex items-start gap-2">
                <Clock3 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Ежедневно с 11:00 до 23:00</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@buddhaspa.kz</span>
              </li>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Навигация</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/" className="hover:text-background transition-colors">Главная</a></li>
              <li><a href="/create" className="hover:text-background transition-colors">Создать сертификат</a></li>
              <li><a href="#templates" className="hover:text-background transition-colors">Шаблоны</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Адреса и контакты</h4>
            <ul className="space-y-3 text-background/70">
              {salonBranches.map((branch) => (
                <li key={branch.id} className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-background">{branch.label}{branch.phone && <div>Тел: {branch.phone}</div>}</div>
                    <div>{branch.address}</div>
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Документы</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/offer-certificate" className="hover:text-background transition-colors">Оферта на сертификаты</a></li>
              <li><a href="/spa-offer" className="hover:text-background transition-colors">Оферта на услуги SPA</a></li>
              <li><a href="/spa-rules" className="hover:text-background transition-colors">Правила посещения</a></li>
              <li><a href="/privacy-policy" className="hover:text-background transition-colors">Политика данных</a></li>
            </ul>
          </div>

        </div>
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© 2025 Buddha Spa Certificates. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
