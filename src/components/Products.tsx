
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
    image: "https://images.unsplash.com/photo-1583687355032-89b902b7335f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "290 ₽/100г",
    growthTime: "8-12 дней"
  },
  {
    id: 3,
    name: "Редис",
    description: "Острый пряный вкус, отлично подходит для азиатских блюд и бургеров",
    image: "https://images.unsplash.com/photo-1517029596710-ddd2e88a0eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "350 ₽/100г",
    growthTime: "6-8 дней"
  },
  {
    id: 4,
    name: "Базилик",
    description: "Ароматный с нотками аниса, идеален для итальянских блюд и гарниров",
    image: "https://images.unsplash.com/photo-1627037846867-02c50790b9c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "380 ₽/100г",
    growthTime: "14-21 день"
  },
  {
    id: 5,
    name: "Брокколи",
    description: "Мягкий вкус с нотками капусты, богат питательными веществами",
    image: "https://images.unsplash.com/photo-1584270354955-9b76e73fb9d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "340 ₽/100г",
    growthTime: "10-14 дней"
  },
  {
    id: 6,
    name: "Горчица",
    description: "Пикантный острый вкус, прекрасно дополняет мясные блюда и супы",
    image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    price: "310 ₽/100г",
    growthTime: "7-10 дней"
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-micro-green-700">
            Наша продукция
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Мы выращиваем разнообразные виды микрозелени, чтобы удовлетворить потребности даже самых изысканных ресторанов Томска
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
