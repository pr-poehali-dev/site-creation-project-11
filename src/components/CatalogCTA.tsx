
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CatalogCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Icon name="Sparkles" size={20} className="text-yellow-400" />
            <span className="font-medium">Готовы создать свой NFT подарок?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            Перейдите в каталог
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-10 max-w-3xl mx-auto">
            Выберите идеальный NFT подарок из нашей коллекции или закажите индивидуальную разработку. 
            Превратите цифровые моменты в незабываемые воспоминания.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-lg"
            >
              <Icon name="ShoppingBag" size={24} className="mr-3" />
              Открыть каталог
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-10 py-6 rounded-full text-lg"
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Задать вопрос
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-purple-200 text-sm">Готовых NFT</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-purple-200 text-sm">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">48ч</div>
              <div className="text-purple-200 text-sm">Создание</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-purple-200 text-sm">Гарантия</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;
