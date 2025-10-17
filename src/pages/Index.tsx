import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: "Scale",
      title: "Корпоративное право",
      description: "Юридическое сопровождение бизнеса, M&A сделки, корпоративные споры"
    },
    {
      icon: "FileText",
      title: "Договорное право",
      description: "Подготовка и экспертиза договоров, разрешение споров, претензионная работа"
    },
    {
      icon: "Building2",
      title: "Недвижимость",
      description: "Сделки с недвижимостью, строительное право, земельные вопросы"
    },
    {
      icon: "Briefcase",
      title: "Арбитраж",
      description: "Представительство в судах всех инстанций, защита интересов клиентов"
    },
    {
      icon: "Shield",
      title: "Налоговое право",
      description: "Налоговое планирование, налоговые споры, консультации"
    },
    {
      icon: "Users",
      title: "Трудовое право",
      description: "Кадровый аудит, трудовые споры, защита прав работников и работодателей"
    }
  ];

  const practices = [
    {
      title: "Сопровождение сделки M&A",
      amount: "2,5 млрд ₽",
      description: "Полное юридическое сопровождение сделки по приобретению доли в крупной производственной компании"
    },
    {
      title: "Защита в налоговом споре",
      amount: "450 млн ₽",
      description: "Успешное представительство интересов клиента в арбитражном суде, снижение налоговых начислений"
    },
    {
      title: "Корпоративная реструктуризация",
      amount: "1,8 млрд ₽",
      description: "Проведение комплексной реструктуризации группы компаний с оптимизацией налоговой нагрузки"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">АСТАРТЕС</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#practice" className="text-foreground hover:text-primary transition-colors">Практика</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Юридическая защита<br />высшего уровня
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное решение самых сложных правовых задач для бизнеса и частных клиентов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  Консультация
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  О компании
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">выигранных дел</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">успешных кейсов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/670b57db-694c-4a64-9156-cd61217b42bb.jpg" 
                alt="Эльбрус" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное юридическое обслуживание для достижения ваших целей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наша практика</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно завершенных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl font-bold text-accent mb-2">{practice.amount}</div>
                  <CardTitle className="text-xl mb-2">{practice.title}</CardTitle>
                  <CardDescription className="text-base">{practice.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, офис 400</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@astartes-law.ru</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Обратная связь</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" size={28} />
                <span className="text-xl font-bold">АСТАРТЕС</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Профессиональные юридические услуги высшего уровня
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Услуги</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Корпоративное право</li>
                <li>Договорное право</li>
                <li>Недвижимость</li>
                <li>Арбитраж</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Компания</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@astartes-law.ru</li>
                <li>Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            © 2024 АСТАРТЕС. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
