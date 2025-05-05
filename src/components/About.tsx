
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551893134-55fc5191c037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Наше производство" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-micro-green-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-micro-green-700">5+</span>
                  <span className="text-sm text-gray-600">лет опыта</span>
                </div>
                <div className="bg-micro-green-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-micro-green-700">15+</span>
                  <span className="text-sm text-gray-600">видов зелени</span>
                </div>
                <div className="bg-micro-green-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-micro-green-700">32+</span>
                  <span className="text-sm text-gray-600">ресторанов</span>
                </div>
                <div className="bg-micro-green-50 p-4 rounded-lg text-center">
                  <span className="block text-3xl font-bold text-micro-green-700">500+</span>
                  <span className="text-sm text-gray-600">кг ежемесячно</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Микро-Зелень Томск — это местное предприятие по выращиванию высококачественной микрозелени, основанное в 2018 году. Мы начинали с небольшой городской фермы и постепенно выросли до надежного поставщика для десятков ресторанов Томска.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Наша миссия — обеспечивать рестораны Томска самой свежей, питательной и вкусной микрозеленью, выращенной с заботой об окружающей среде и здоровье потребителей.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Мы используем современные технологии вертикального земледелия, позволяющие нам выращивать микрозелень круглый год независимо от сезона, при этом экономя воду и энергию.
            </p>
            <Button className="bg-micro-green-600 hover:bg-micro-green-700 text-white">
              Подробнее о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
