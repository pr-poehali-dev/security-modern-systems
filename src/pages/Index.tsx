import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-xl font-bold text-primary-foreground">ССБ</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-primary-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-primary-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#advantages" className="text-primary-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#reviews" className="text-primary-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-primary-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">Заказать звонок</Button>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 z-0"></div>
        <div 
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/e7119407-92b9-4ee8-8ef2-5fcc5b65315d/files/924921b1-1596-4a8f-9dfc-3da2626cc74e.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Современные системы<br />безопасности
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Профессиональная охрана объектов с применением инновационных технологий и многолетним опытом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary text-lg px-8">
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для обеспечения безопасности вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Building2" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Охрана объектов</h3>
                <p className="text-muted-foreground mb-6">
                  Круглосуточная физическая охрана коммерческих и промышленных объектов с использованием современных систем контроля
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Квалифицированные сотрудники</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Система видеонаблюдения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Патрулирование территории</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Охрана территорий</h3>
                <p className="text-muted-foreground mb-6">
                  Защита периметра и контроль доступа на охраняемые территории с применением технологий распознавания
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Контроль периметра</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Система контроля доступа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Мобильные патрули</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Охрана 24/7</h3>
                <p className="text-muted-foreground mb-6">
                  Непрерывная охрана в режиме реального времени с оперативным реагированием на любые инциденты
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Круглосуточное дежурство</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Быстрое реагирование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Связь с полицией</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/e7119407-92b9-4ee8-8ef2-5fcc5b65315d/files/a4923890-53f6-4c8d-9460-32aedd921003.jpg"
                alt="Операционный центр"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong className="text-foreground">Современные системы безопасности</strong> — лидер в области частных охранных услуг с многолетним опытом работы на рынке безопасности.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на комплексной защите бизнеса, применяя передовые технологии и лучшие практики мировой индустрии безопасности.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1200+</div>
                  <div className="text-sm text-muted-foreground">Сотрудников</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему более 500 компаний выбирают нас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Cpu" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Современные технологии</h3>
              <p className="text-muted-foreground">
                ИИ-системы распознавания, видеоаналитика и интеллектуальные сенсоры
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Лицензии и сертификаты</h3>
              <p className="text-muted-foreground">
                Все необходимые разрешения и аккредитации государственных органов
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Опытная команда</h3>
              <p className="text-muted-foreground">
                Квалифицированные специалисты с опытом работы в силовых структурах
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Headphones" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 поддержка</h3>
              <p className="text-muted-foreground">
                Круглосуточная диспетчерская служба и оперативный центр мониторинга
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Алексей Морозов</h4>
                    <p className="text-sm text-muted-foreground">ООО "ТехноПром"</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Сотрудничаем уже 3 года. Профессиональный подход, оперативное реагирование на инциденты. Полностью доверяем безопасность нашего завода.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Елена Соколова</h4>
                    <p className="text-sm text-muted-foreground">ТЦ "Галерея"</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Отличная охранная компания! Современное оборудование, вежливые сотрудники. Чувствуем себя в безопасности. Рекомендуем!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Дмитрий Волков</h4>
                    <p className="text-sm text-muted-foreground">Логистический центр</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Надежная охрана складского комплекса. Система видеонаблюдения работает безупречно. За год сотрудничества — ни одного инцидента.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Получите бесплатную консультацию и расчет стоимости услуг
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Отправьте заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="h-12" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="h-12" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="h-12" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (951) 851-98-65</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">info@ssb-security.ru</p>
                  <p className="text-muted-foreground">support@ssb-security.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                  <p className="text-muted-foreground">Офис 301, БЦ "Безопасность"</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Охрана: 24/7</p>
                </div>
              </div>

              <div className="pt-6">
                <img 
                  src="https://cdn.poehali.dev/projects/e7119407-92b9-4ee8-8ef2-5fcc5b65315d/files/24bc5f6d-cf46-44dc-a9dd-290926cd667a.jpg"
                  alt="Партнерство"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
                <span className="text-xl font-bold">ССБ</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Современные системы безопасности — ваш надежный партнер в области охранных услуг
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Охрана объектов</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Охрана территорий</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Видеонаблюдение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пультовая охрана</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (951) 851-98-65</li>
                <li>info@ssb-security.ru</li>
                <li>г. Москва, ул. Примерная, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 Современные системы безопасности. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;