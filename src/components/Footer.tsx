import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">SPA Сертификаты</h3>
            <p className="text-background/70 leading-relaxed">
              Премиальные подарочные сертификаты для вашего спа-салона
            </p>
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

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Юридическая информация</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/terms" className="hover:text-background transition-colors">Оферта</a></li>
              <li><a href="/privacy" className="hover:text-background transition-colors">Политика конфиденциальности</a></li>
              <li><a href="/personal-data" className="hover:text-background transition-colors">Обработка ПДн</a></li>
              <li><a href="/contacts" className="hover:text-background transition-colors">Реквизиты</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Контакты</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@spacertificates.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© 2025 SPA Сертификаты. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
