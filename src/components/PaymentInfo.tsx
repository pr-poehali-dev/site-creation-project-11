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
              Удобная оплата на карту
            </h2>
            <p className="text-xl text-gray-600">
              Мы принимаем оплату напрямую на банковскую карту для вашего
              удобства
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
                  Прямой перевод
                </h3>
                <p className="text-gray-600 mb-6">
                  Оплачивайте заказ переводом на нашу банковскую карту. Никаких
                  комиссий и скрытых платежей.
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
                  Быстрая обработка
                </h3>
                <p className="text-gray-600 mb-6">
                  После подтверждения оплаты мы начинаем работу над вашим NFT
                  подарком в течение 2 часов.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Icon name="Clock" size={20} className="text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Старт за 2 часа
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <Icon name="Shield" size={32} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Гарантия качества</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Мы гарантируем высокое качество наших NFT подарков. Если результат
              вас не устроит — вернём деньги в полном объёме.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
