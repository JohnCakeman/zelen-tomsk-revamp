
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Алексей Соколов",
    position: "Шеф-повар, ресторан 'Сибирский Двор'",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Микрозелень от этой компании изменила наше меню. Наши блюда стали не только выглядеть лучше, но и приобрели новые вкусовые нюансы. Клиенты отмечают разницу, и это отражается на наших продажах.",
    rating: 5
  },
  {
    id: 2,
    name: "Ирина Васильева",
    position: "Владелица кафе 'Зеленая Миля'",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Как владелец веганского кафе, я особенно тщательно выбираю поставщиков. Микро-Зелень Томск — это надежность, качество и забота о клиенте. Уже год сотрудничаем и ни одного нарекания!",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий Петров",
    position: "Менеджер ресторана 'Панорама'",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    quote: "Радует пунктуальность доставки и качество продукции. За все время сотрудничества не было ни одной задержки или проблемы с качеством. Рекомендую всем ресторанам, которые хотят выделиться.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Мы гордимся тем, что помогаем лучшим ресторанам Томска создавать уникальные блюда
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative px-4 md:px-10">
            <Card className="border-micro-cream-100">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < testimonials[activeIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-center italic mb-8 text-gray-700">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-micro-green-700">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-micro-green-600 hover:bg-micro-green-50"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-micro-green-600 hover:bg-micro-green-50"
            >
              &rarr;
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? "bg-micro-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
