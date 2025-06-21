import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PaymentInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <Icon name="Shield" size={16} className="text-green-600" />
              <span className="text-sm font-medium text-green-800">
                Безопасная оплата
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Оплата Telegram услуг
            </h2>
            <p className="text-xl text-gray-600">
              Принимаем оплату за разработку ботов и Telegram решений удобным
              для вас способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="CreditCard"
                    size={32}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Гибкая оплата
                </h3>
                <p className="text-gray-600 mb-6">
                  Оплачивайте разработку бота поэтапно или полностью. Первый
                  платёж только после демонстрации рабочего прототипа.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Без комиссий
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Быстрый запуск
                </h3>
                <p className="text-gray-600 mb-6">
                  После оплаты начинаем разработку вашего Telegram бота в
                  течение 24 часов. Первая версия готова за 3-5 дней.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Clock" size={20} className="text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Старт за 24 часа
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <Icon name="Shield" size={32} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Гарантия результата</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Гарантируем работоспособность бота в течение 3 месяцев. Если
              возникнут проблемы — устраним их бесплатно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
