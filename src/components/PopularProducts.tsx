import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      title: "Персональный аватар для звезды",
      description: "Уникальный NFT портрет с космическими элементами",
      price: "50,000₽",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop",
      category: "Звёзды",
      likes: 142,
    },
    {
      id: 2,
      title: "Эксклюзив для Telegram канала",
      description: "Коллекционный NFT для топовых подписчиков",
      price: "25,000₽",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=300&fit=crop",
      category: "Telegram",
      likes: 89,
    },
    {
      id: 3,
      title: "Цифровая награда блогера",
      description: "Интерактивный NFT с анимацией и звуком",
      price: "35,000₽",
      image:
        "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=300&h=300&fit=crop",
      category: "Блогеры",
      likes: 205,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Популярные NFT подарки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши самые востребованные цифровые подарки, которые уже порадовали
            звёзд и их фанатов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Icon name="Heart" size={16} className="text-red-500" />
                  <span className="text-xs font-medium ml-1">
                    {product.likes}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-600">
                    {product.price}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-semibold px-8 py-4 rounded-full"
          >
            Смотреть весь каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
