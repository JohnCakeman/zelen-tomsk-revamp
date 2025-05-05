
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Горох",
    description: "Сладкий и нежный вкус, идеальный для салатов и гарниров",
    image: "https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "320 ₽/100г",
    growthTime: "7-10 дней"
  },
  {
    id: 2,
    name: "Подсолнечник",
    description: "Ореховый вкус с хрустящей текстурой, прекрасное дополнение к мясным блюдам",
    image: "/lovable-uploads/7871b2b3-db07-4f71-96a2-d6ad7e06c2ca.png",
    price: "290 ₽/100г",
    growthTime: "8-12 дней"
  },
  {
    id: 3,
    name: "Руккола",
    description: "Пикантный, слегка перечный вкус, идеально для салатов и сэндвичей",
    image: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "350 ₽/100г",
    growthTime: "6-8 дней"
  },
  {
    id: 4,
    name: "Кресс-салат",
    description: "Пряный острый вкус, прекрасное дополнение к бутербродам и супам",
    image: "https://images.unsplash.com/photo-1580751667811-c56bc71d1dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "280 ₽/100г",
    growthTime: "5-7 дней"
  },
  {
    id: 5,
    name: "Пшеница",
    description: "Сладковатый вкус с нотками свежего хлеба, богат питательными веществами",
    image: "https://images.unsplash.com/photo-1622729871501-22dea280e2f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "260 ₽/100г",
    growthTime: "7-9 дней"
  },
  {
    id: 6,
    name: "Люцерна",
    description: "Мягкий бобовый вкус, идеально подходит для смузи и здоровых коктейлей",
    image: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "310 ₽/100г",
    growthTime: "6-8 дней"
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
            Наша микрозелень
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Мы выращиваем разнообразные виды свежих проростков микрозелени, чтобы удовлетворить потребности даже самых изысканных ресторанов Томска
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover-scale border-micro-cream-100">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-micro-green-700">{product.name}</h3>
                  <span className="font-semibold text-micro-green-600">{product.price}</span>
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Время роста: {product.growthTime}</span>
                  <button className="text-micro-green-600 font-medium hover:underline">
                    Подробнее
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
