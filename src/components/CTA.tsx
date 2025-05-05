
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-micro-green-600 to-micro-green-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Готовы улучшить ваше меню?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Закажите свежую микрозелень сегодня и повысьте качество и привлекательность ваших блюд уже завтра.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white hover:bg-micro-cream-50 text-micro-green-700 font-semibold">
                  Заказать сейчас
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Запросить прайс-лист
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1555159026-e3f4109a5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Микрозелень на блюде" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-micro-green-600/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
