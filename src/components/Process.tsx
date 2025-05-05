
const steps = [
  {
    id: 1,
    title: "Выращивание",
    description: "Мы выращиваем микрозелень в контролируемой среде без пестицидов и химикатов",
    image: "https://images.unsplash.com/photo-1581296493682-7b0221b4ee8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Сбор",
    description: "Собираем микрозелень в оптимальное время, когда она достигает пика питательности",
    image: "https://images.unsplash.com/photo-1520052203542-d3ad28c3be4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Упаковка",
    description: "Бережно упаковываем в экологичную тару, сохраняющую свежесть",
    image: "https://images.unsplash.com/photo-1589923188651-268a9765eb58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Доставка",
    description: "Быстро доставляем непосредственно на вашу кухню, часто в день сбора",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-micro-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
            Как мы работаем
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            От семян до вашей кухни — процесс, которым мы гордимся и который гарантирует качество нашей микрозелени
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop line connector */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-micro-green-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-xl shadow-md mb-6 relative">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-micro-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-micro-green-700">{step.title}</h3>
                <p className="text-center text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
