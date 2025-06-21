import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Андрей Козлов",
      role: "Владелец @shopbot",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Бот увеличил продажи на 300%! Клиенты заказывают прямо в Telegram, очень удобно. Рекомендую!",
      date: "2 недели назад",
    },
    {
      id: 2,
      name: "Елена Морозова",
      role: "Канал @businesstips, 50K подписчиков",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Модерационный бот работает идеально. Спам исчез, аудитория стала качественнее. Отличная работа!",
      date: "1 месяц назад",
    },
    {
      id: 3,
      name: "Максим Петров",
      role: "IT-директор ООО 'Техно'",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Интеграция с CRM превзошла ожидания. Все заявки из Telegram автоматически попадают в систему!",
      date: "3 недели назад",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-6">
            <Icon
              name="Star"
              size={16}
              className="text-yellow-500 fill-current"
            />
            <span className="text-sm font-medium text-yellow-800">
              Отзывы клиентов
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 150 компаний уже автоматизировали свой бизнес с нашими
            Telegram решениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex mr-2">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <blockquote className="text-gray-700 leading-relaxed">
                  "{review.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600">Готовых ботов</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.9</div>
              <div className="text-sm text-gray-600">Средняя оценка</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2ч</div>
              <div className="text-sm text-gray-600">Среднее время запуска</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
