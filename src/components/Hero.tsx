
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-b from-micro-cream-50 to-micro-cream-100 w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in [animation-delay:0.2s]">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-micro-green-700">
              Свежая микрозелень для вашего ресторана
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Поднимите блюда вашего меню на новый уровень с помощью свежей, питательной и вкусной микрозелени от местного производителя в Томске
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-micro-green-600 hover:bg-micro-green-700 text-white px-8 py-6 text-lg">
                Заказать образцы
              </Button>
              <Button variant="outline" className="border-micro-green-600 text-micro-green-600 px-8 py-6 text-lg hover:bg-micro-green-50">
                Посмотреть каталог
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-micro-green-200 flex items-center justify-center">
                    <span className="text-xs font-bold text-micro-green-700">Р{i+1}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600">Уже сотрудничаем с <span className="font-bold text-micro-green-700">32+ ресторанами</span> в Томске</p>
            </div>
          </div>
          
          <div className="relative fade-in [animation-delay:0.5s]">
            <div className="rounded-2xl overflow-hidden bg-white p-4 shadow-lg rotate-3 transform hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1520565538411-e641b5bbd101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Свежая микрозелень" 
                className="rounded-xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg -rotate-6 hidden md:block hover-scale z-10">
              <img 
                src="https://images.unsplash.com/photo-1592488831709-8f13e65b9b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                alt="Микрозелень крупным планом" 
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
