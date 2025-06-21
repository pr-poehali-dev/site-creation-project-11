import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="Bot" size={16} className="text-blue-300" />
            <span className="text-sm font-medium">Telegram автоматизация</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-fade-in">
            Telegram Боты и Каналы
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto animate-fade-in">
            Создаём умных ботов, автоматизируем каналы и разрабатываем Telegram
            решения для бизнеса. Профессиональные инструменты для вашего успеха.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Перейти в каталог
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-full"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть примеры
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Icon
                name="Crown"
                size={24}
                className="text-yellow-400 mb-3 mx-auto"
              />
              <h3 className="font-semibold mb-2">Для звёзд</h3>
              <p className="text-purple-200 text-sm">
                Персональные NFT для знаменитостей и инфлюенсеров
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Icon
                name="MessageCircle"
                size={24}
                className="text-blue-400 mb-3 mx-auto"
              />
              <h3 className="font-semibold mb-2">Telegram каналы</h3>
              <p className="text-purple-200 text-sm">
                Эксклюзивные подарки для подписчиков каналов
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Icon
                name="CreditCard"
                size={24}
                className="text-green-400 mb-3 mx-auto"
              />
              <h3 className="font-semibold mb-2">Оплата на карту</h3>
              <p className="text-purple-200 text-sm">
                Удобная оплата напрямую на банковскую карту
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
