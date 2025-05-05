
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Свежесть и качество",
    description: "Доставляем микрозелень в день сбора, сохраняя все питательные вещества и вкус",
    icon: CheckCircle
  },
  {
    id: 2,
    title: "Без пестицидов и ГМО",
    description: "Выращиваем нашу микрозелень без использования химических пестицидов и ГМО",
    icon: CheckCircle
  },
  {
    id: 3,
    title: "Местное производство",
    description: "Поддерживаете местного производителя, сокращая углеродный след от транспортировки",
    icon: CheckCircle
  },
  {
    id: 4,
    title: "Регулярные поставки",
    description: "Организуем регулярные поставки по вашему расписанию для бесперебойной работы кухни",
    icon: CheckCircle
  },
  {
    id: 5,
    title: "Индивидуальный подход",
    description: "Разрабатываем индивидуальные предложения под меню вашего ресторана",
    icon: CheckCircle
  },
  {
    id: 6,
    title: "Быстрая доставка",
    description: "Доставляем заказы в течение 2-3 часов по всему Томску",
    icon: CheckCircle
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-micro-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
            Почему рестораны выбирают нас
          </h2>
          <p className="text-lg text-gray-700">
            Мы предлагаем не просто микрозелень, а комплексное решение для обогащения вашего меню свежими и полезными ингредиентами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-micro-cream-100"
            >
              <div className="text-micro-green-500 mb-4">
                <benefit.icon size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-micro-green-700">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-micro-green-600 rounded-xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Готовы попробовать нашу микрозелень?</h3>
              <p className="text-white/80 mb-6 md:mb-0">
                Мы предлагаем бесплатные образцы для шеф-поваров и менеджеров ресторанов, чтобы вы могли оценить качество нашей продукции
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="bg-white text-micro-green-600 hover:bg-micro-cream-50 py-3 px-6 rounded-lg font-semibold transition-colors">
                Запросить образцы
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
