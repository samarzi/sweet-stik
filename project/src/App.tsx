import React, { useState } from 'react';
import { Package, Shield, Truck, Award, Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-lime-500 to-lime-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                SUGAR
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-lime-600 transition-colors">
                О Нас
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-lime-600 transition-colors">
                Продукция
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-gray-700 hover:text-lime-600 transition-colors">
                Наши Преимущества
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-lime-600 transition-colors">
                Контакты
              </button>
            </nav>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-sm text-gray-600">+7 (977) 305-17-05</div>
              <div className="bg-green-500 p-2 rounded-full">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-lime-600">
                  О Нас
                </button>
                <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-lime-600">
                  Продукция
                </button>
                <button onClick={() => scrollToSection('advantages')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-lime-600">
                  Наши Преимущества
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-lime-600">
                  Контакты
                </button>
                <div className="px-3 py-2">
                  <div className="text-sm text-gray-600">+7 (977) 305-17-05</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-lime-50 to-lime-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="relative max-w-4xl mx-auto">
              {/* Product Image */}
              <div className="bg-gradient-to-r from-lime-400 to-lime-600 rounded-3xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-lime-700/20"></div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-6xl md:text-8xl font-bold text-white mb-4">
                      SUGAR
                    </div>
                    <div className="text-2xl md:text-3xl text-white/90 mb-6">
                      САХАР
                    </div>
                    <div className="text-lg md:text-xl text-white/80">
                      ПОРЦИОННЫЙ САХАР ОТ ПРОИЗВОДИТЕЛЯ
                    </div>
                    <div className="text-sm md:text-base text-white/70 mt-4">
                      ПО ИНДИВИДУАЛЬНОМУ ДИЗАЙНУ
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Премиальные
                <span className="bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent"> сахарные стики</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Высококачественный порционный сахар с индивидуальным дизайном для вашего бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="bg-gradient-to-r from-lime-500 to-lime-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-lime-600 hover:to-lime-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Посмотреть продукцию
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-lime-500 text-lime-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-lime-500 hover:text-white transition-all"
                >
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">О нас</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SUGAR — это современная компания, специализирующаяся на производстве высококачественных порционных сахарных стиков. Мы предлагаем нашим клиентам удобное решение для кафе, ресторанов, отелей и офисов.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Наша продукция отличается превосходным качеством сырья, современной упаковкой и возможностью нанесения индивидуального дизайна. Мы понимаем потребности бизнеса и предлагаем гибкие условия сотрудничества.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Каждый клиент для нас важен, и мы стремимся обеспечить максимальное качество продукции и сервиса на всех этапах сотрудничества.
              </p>
              <div className="bg-lime-50 p-6 rounded-xl">
                <div className="text-right">
                  <div className="text-lg font-semibold text-lime-700 mb-1">Команда SUGAR</div>
                  <div className="text-lime-600">Качество превыше всего</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="font-semibold">Высокое качество</div>
                      <div className="text-white/80">сертифицированная продукция</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Package className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="font-semibold">Индивидуальный подход</div>
                      <div className="text-white/80">дизайн под ваш бренд</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Shield className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="font-semibold">Надежность</div>
                      <div className="text-white/80">стабильные поставки</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Наша продукция</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Высококачественные сахарные стики с индивидуальным дизайном для вашего бренда
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">Маленький набор</div>
                      <div className="text-sm text-gray-600">Стик 5г</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сахар порционный стик 5г Стандарт</h3>
                <p className="text-gray-600 mb-4">1 кг — 200 шт/кор</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-lime-600">125 ₽</span>
                    <span className="text-lg text-gray-400 line-through ml-2">190 ₽</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">Средний набор</div>
                      <div className="text-sm text-gray-600">Стик 5г</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сахар порционный стик 5г Стандарт</h3>
                <p className="text-gray-600 mb-4">2,5кг — 500 шт/кор</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-lime-600">320 ₽</span>
                    <span className="text-lg text-gray-400 line-through ml-2">370 ₽</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">Большой набор</div>
                      <div className="text-sm text-gray-600">Стик 5г</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сахар порционный стик 5г Стандарт</h3>
                <p className="text-gray-600 mb-4">5 кг — 1000 шт/кор</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-lime-600">610 ₽</span>
                    <span className="text-lg text-gray-400 line-through ml-2">710 ₽</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">Особый набор</div>
                      <div className="text-sm text-gray-600">Стик 5г</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  SALE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сахар порционный стик 5г Стандарт</h3>
                <p className="text-gray-600 mb-4">10 кг — 2000 шт/кор</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-lime-600">1200 ₽</span>
                    <span className="text-lg text-gray-400 line-through ml-2">1350 ₽</span>
                  </div>
                </div>
              </div>
            </div>

         <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">ПРАЙС</h2>
    <ul className="space-y-2 text-center">
      <li className="text-lg text-gray-700"><span className="font-semibold">от 10кг:</span> 0.6₽ / стик</li>
      <li className="text-lg text-gray-700"><span className="font-semibold">от 200кг:</span> 0.57₽ / стик</li>
      <li className="text-lg text-gray-700"><span className="font-semibold">от 500кг:</span> 0.55₽ / стик</li>
      <li className="text-lg text-gray-700"><span className="font-semibold">от 1000кг:</span> 0.53₽ / стик</li>
      <li className="text-lg text-gray-700"><span className="font-semibold">от 5000кг:</span> по договорённости</li>
    </ul>
    <p className="mt-4 text-center text-sm text-gray-500">Стик 5г</p>
  </div>

  <div className="p-6">
    <div className="flex items-center justify-between">
      <span className="text-xl font-semibold text-lime-600">ЛУЧШИЕ УСЛОВИЯ</span>
   
    </div>
  </div>
</div>

              {/* Product 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-64 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-lime-500 to-lime-600 text-white p-6 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold mb-2">SUGAR</div>
                      <div className="text-xs">индивидуальный дизайн</div>
                    </div>
                  </div>
                </div>
              
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center"></h3>
              
                  <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                    <ul className="space-y-2 text-gray-700 text-center">
                      <li><span className="font-semibold">от 100кг:</span> 0.75₽ / стик</li>
                      <li><span className="font-semibold">от 500кг:</span> 0.7₽ / стик</li>
                      <li><span className="font-semibold">от 1000кг:</span> 0.65₽ / стик</li>
                      <li><span className="font-semibold">от 5000кг:</span> по договорённости</li>
                    </ul>      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            


      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Наши Преимущества</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Advantage 1 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-lime-100 to-lime-200 p-6 rounded-2xl mb-6 group-hover:from-lime-200 group-hover:to-lime-300 transition-all">
                <Package className="h-16 w-16 text-lime-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Сырье</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы уделяем особое внимание производителю качественного сахара в России, закупая только лучшее сырье
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-lime-100 to-lime-200 p-6 rounded-2xl mb-6 group-hover:from-lime-200 group-hover:to-lime-300 transition-all">
                <Award className="h-16 w-16 text-lime-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Наш продукт высокого качества благодаря работе на лучшем европейском оборудовании
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-lime-100 to-lime-200 p-6 rounded-2xl mb-6 group-hover:from-lime-200 group-hover:to-lime-300 transition-all">
                <Truck className="h-16 w-16 text-lime-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Оперативное производство</h3>
              <p className="text-gray-600 leading-relaxed">
                Отлаженная работа на всех этапах позволяет укладываться в рекордные сроки по выпуску готовой продукции
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-lime-100 to-lime-200 p-6 rounded-2xl mb-6 group-hover:from-lime-200 group-hover:to-lime-300 transition-all">
                <Shield className="h-16 w-16 text-lime-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Лучшие условия</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы знаем чего хочет наш клиент и оптимизируем все процессы для достижения лучших условий на рынке
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-lime-50 to-lime-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для получения консультации</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-lime-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (977) 305-17-05</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-lime-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">sweet-stik2025@mail.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-lime-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600">МО Балашиха, Текстильщиков 2</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Время работы</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб-Вс:</span>
                    <span>Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gradient-to-r from-lime-500 to-lime-600 text-white px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
                SUGAR
              </div>
              <p className="text-gray-400 leading-relaxed">
                Премиальные сахарные стики с индивидуальным дизайном для вашего бизнеса.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Стандартные стики</a></li>
                <li><a href="#" className="hover:text-white transition-colors">С брендингом</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оптовые поставки</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (977) 305-17-05</p>
                <p>sweet-stik2025@mail.ru</p>
                <p>МО Балашиха, Текстильщиков 2</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SUGAR. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/79773051705"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default App;