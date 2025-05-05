
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-micro-green-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Микро-Зелень</h3>
            <p className="mb-4 text-white/80">
              Свежая микрозелень для ресторанов Томска. Качество, которое можно увидеть и попробовать.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-micro-cream-100">Facebook</a>
              <a href="#" className="hover:text-micro-cream-100">Instagram</a>
              <a href="#" className="hover:text-micro-cream-100">WhatsApp</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Продукция</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Микрозелень</a></li>
              <li><a href="#" className="hover:text-white">Проростки</a></li>
              <li><a href="#" className="hover:text-white">Сезонные предложения</a></li>
              <li><a href="#" className="hover:text-white">Для ресторанов</a></li>
              <li><a href="#" className="hover:text-white">Прайс-лист</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Компания</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">О нас</a></li>
              <li><a href="#" className="hover:text-white">Наша ферма</a></li>
              <li><a href="#" className="hover:text-white">Процесс выращивания</a></li>
              <li><a href="#" className="hover:text-white">Блог</a></li>
              <li><a href="#" className="hover:text-white">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span>г. Томск, ул. Пушкина, 25, офис 301</span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+7 (3822) 97-23-45</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@микро-зелень.рус</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Микро-Зелень Томск. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
              <a href="#" className="hover:text-white">Доставка</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
