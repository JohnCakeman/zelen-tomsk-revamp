
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-micro-green-600">Микро-Зелень</span>
            <span className="text-sm ml-2 text-micro-green-500">Томск</span>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-foreground hover:text-micro-green-500 transition-colors font-medium">
              Продукты
            </a>
            <a href="#benefits" className="text-foreground hover:text-micro-green-500 transition-colors font-medium">
              Преимущества
            </a>
            <a href="#about" className="text-foreground hover:text-micro-green-500 transition-colors font-medium">
              О нас
            </a>
            <a href="#contact" className="text-foreground hover:text-micro-green-500 transition-colors font-medium">
              Контакты
            </a>
          </nav>
          
          <div className="hidden md:block">
            <Button variant="default" className="bg-micro-green-500 hover:bg-micro-green-600">
              Заказать
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className="text-foreground hover:text-micro-green-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Продукты
              </a>
              <a 
                href="#benefits" 
                className="text-foreground hover:text-micro-green-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Преимущества
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-micro-green-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-micro-green-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button 
                variant="default" 
                className="bg-micro-green-500 hover:bg-micro-green-600 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Заказать
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
