
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    restaurant: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the code to submit the form
    console.log("Form submitted:", formState);
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    // Reset form
    setFormState({
      name: "",
      restaurant: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  
  return (
    <section id="contact" className="section-padding bg-micro-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Готовы начать сотрудничество или у вас есть вопросы? Наша команда всегда на связи
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-micro-green-700">Напишите нам</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-1">
                    Название ресторана *
                  </label>
                  <Input
                    id="restaurant"
                    name="restaurant"
                    value={formState.restaurant}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full"
                  placeholder="Расскажите нам о ваших потребностях или задайте вопрос..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-micro-green-600 hover:bg-micro-green-700 text-white">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-micro-green-700">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-micro-green-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Телефон</p>
                    <p className="text-gray-700">+7 (3822) 97-23-45</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-micro-green-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-700">info@микро-зелень.рус</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-micro-green-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Адрес</p>
                    <p className="text-gray-700">г. Томск, ул. Пушкина, 25, офис 301</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-micro-green-700">Часы работы</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Понедельник - Пятница:</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Суббота:</span>
                  <span className="font-medium">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Воскресенье:</span>
                  <span className="font-medium">Выходной</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-micro-green-600 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Экстренная доставка</h3>
              <p className="mb-4">Нужна микрозелень срочно? Мы организуем доставку в течение 2-3 часов!</p>
              <div className="text-xl font-bold">+7 (3822) 97-23-46</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
