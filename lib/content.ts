import {
  Camera,
  CodeXml,
  MessageSquareText,
  Monitor,
  ReceiptText,
  Router,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";
import type { Language, SectionId } from "./locales";

export const siteName = "LANGROUP";

export const services = [
  { id: "computers", icon: Monitor, variant: "blue" },
  { id: "networks", icon: Router, variant: "cyan" },
  { id: "security", icon: Camera, variant: "orange" },
  { id: "software", icon: CodeXml, variant: "indigo" },
] as const;

export const steps = [
  { id: "describe", icon: MessageSquareText },
  { id: "clarify", icon: SlidersHorizontal },
  { id: "agree", icon: ReceiptText },
  { id: "work", icon: Wrench },
] as const;

export const contacts = [
  {
    id: "islam",
    phone: "+998 88 497 87 27",
    telephone: "+998884978727",
    telegram: "nutella_co",
    telegramUrl: "https://t.me/nutella_co",
  },
  {
    id: "denis",
    phone: "+998 94 530 26 66",
    telephone: "+998945302666",
    telegram: "Stanczyk_224",
    telegramUrl: "https://t.me/Stanczyk_224",
  },
] as const;

export type Copy = {
  title: string;
  description: string;
  city: string;
  country: string;
  skipLink: string;
  navigation: {
    labels: Record<SectionId, string>;
    primary: string;
    mobile: string;
    footer: string;
    siteLanguage: string;
    menuOpen: string;
    menuClose: string;
    contact: string;
  };
  hero: {
    question: string;
    answer: string;
    description: string;
    telegram: string;
    services: string;
    note: string;
  };
  services: {
    heading: string;
    categories: Record<(typeof services)[number]["id"], { title: string; items: readonly string[] }>;
  };
  about: {
    heading: string;
    introduction: string;
    approach: string;
    photoAlt: string;
  };
  workflow: {
    heading: string;
    steps: Record<(typeof steps)[number]["id"], string>;
  };
  contacts: {
    heading: string;
    description: string;
    names: Record<(typeof contacts)[number]["id"], string>;
  };
  footerTagline: string;
};

export const translations: Record<Language, Copy> = {
  ru: {
    title: "LANGROUP — Компьютерные мастера в Ташкенте",
    description: "Частные компьютерные мастера в Ташкенте. Сборка ПК, диагностика, установка Windows, настройка Wi-Fi и Hikvision, разработка сайтов и Telegram-ботов.",
    city: "Ташкент",
    country: "Узбекистан",
    skipLink: "Перейти к содержанию",
    navigation: {
      labels: {
        home: "Главная",
        services: "Услуги",
        about: "О нас",
        workflow: "Как работаем",
        contacts: "Контакты",
      },
      primary: "Основная навигация",
      mobile: "Мобильная навигация",
      footer: "Навигация в подвале",
      siteLanguage: "Язык сайта",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
      contact: "Связаться",
    },
    hero: {
      question: "Компьютер тормозит?",
      answer: "Мы поможем.",
      description: "Сборка, диагностика и настройка компьютеров. Сети, видеонаблюдение и разработка программного обеспечения в Ташкенте.",
      telegram: "Написать в Telegram",
      services: "Наши услуги",
      note: "Частные компьютерные мастера. Без посредников.",
    },
    services: {
      heading: "Чем мы можем помочь?",
      categories: {
        computers: {
          title: "Компьютеры и ноутбуки",
          items: [
            "Сборка игровых и офисных ПК",
            "Подбор и апгрейд комплектующих",
            "Диагностика и тестирование",
            "Установка Windows и драйверов",
            "Оптимизация системы",
          ],
        },
        networks: {
          title: "Сети и оборудование",
          items: [
            "Настройка Wi-Fi и роутеров",
            "Локальные сети",
            "Подключение принтеров",
            "Настройка рабочих мест",
            "Системное администрирование",
          ],
        },
        security: {
          title: "Видеонаблюдение и безопасность",
          items: [
            "Настройка камер Hikvision",
            "IP-камеры и видеорегистраторы",
            "Удалённый просмотр камер",
            "Электронные замки",
            "Системы контроля доступа",
          ],
        },
        software: {
          title: "Разработка и автоматизация",
          items: [
            "Telegram-боты",
            "Боты с искусственным интеллектом",
            "Интеграция с Google Sheets",
            "Сайты и веб-приложения",
            "Небольшие программы и автоматизация",
          ],
        },
      },
    },
    about: {
      heading: "Кто мы?",
      introduction: "LANGROUP — команда частных компьютерных мастеров из Ташкента. Мы занимаемся компьютерной техникой, сетевым оборудованием и разработкой программного обеспечения.",
      approach: "Работаем напрямую с клиентами, разбираемся в задачах и предлагаем решения с учётом бюджета.",
      photoAlt: "Команда LANGROUP за рабочим местом",
    },
    workflow: {
      heading: "Как мы работаем?",
      steps: {
        describe: "Вы описываете задачу",
        clarify: "Мы уточняем детали",
        agree: "Согласовываем стоимость",
        work: "Выполняем работу",
      },
    },
    contacts: {
      heading: "Нужна помощь с техникой?",
      description: "Напишите нам, расскажите о проблеме или отправьте фото ошибки. Обсудим возможное решение и стоимость.",
      names: { islam: "Ислам", denis: "Денис" },
    },
    footerTagline: "Частные компьютерные мастера",
  },
  uz: {
    title: "LANGROUP — Toshkentdagi kompyuter ustalari",
    description: "Toshkentdagi mustaqil kompyuter ustalari. Kompyuter yigʻish va diagnostika, Windows oʻrnatish, Wi-Fi va Hikvision kameralarini sozlash, saytlar va Telegram botlarini yaratish.",
    city: "Toshkent",
    country: "Oʻzbekiston",
    skipLink: "Asosiy mazmunga oʻtish",
    navigation: {
      labels: {
        home: "Bosh sahifa",
        services: "Xizmatlar",
        about: "Biz haqimizda",
        workflow: "Qanday ishlaymiz",
        contacts: "Aloqa",
      },
      primary: "Asosiy navigatsiya",
      mobile: "Mobil navigatsiya",
      footer: "Sahifa ostidagi navigatsiya",
      siteLanguage: "Sayt tili",
      menuOpen: "Menyuni ochish",
      menuClose: "Menyuni yopish",
      contact: "Bogʻlanish",
    },
    hero: {
      question: "Kompyuter sekin ishlayaptimi?",
      answer: "Yordam beramiz.",
      description: "Kompyuterlarni yigʻamiz, tekshiramiz va sozlaymiz. Toshkentda tarmoq va videokuzatuv tizimlarini sozlaymiz hamda dasturiy ta’minot yaratamiz.",
      telegram: "Telegram orqali yozish",
      services: "Xizmatlarimiz",
      note: "Mustaqil kompyuter ustalari. Vositachilarsiz.",
    },
    services: {
      heading: "Qanday yordam bera olamiz?",
      categories: {
        computers: {
          title: "Kompyuter va noutbuklar",
          items: [
            "Oʻyin va ofis uchun kompyuter yigʻish",
            "Qismlarni tanlash va yangilash",
            "Diagnostika va sinov",
            "Windows va drayverlarni oʻrnatish",
            "Tizim ishini tezlashtirish",
          ],
        },
        networks: {
          title: "Tarmoq va uskunalar",
          items: [
            "Wi-Fi va routerlarni sozlash",
            "Mahalliy tarmoqlarni tashkil qilish",
            "Printerlarni ulash",
            "Ish joylarini sozlash",
            "Tizimlarni boshqarish",
          ],
        },
        security: {
          title: "Videokuzatuv va xavfsizlik",
          items: [
            "Hikvision kameralarini sozlash",
            "IP-kameralar va videoregistratorlar",
            "Kameralarni masofadan kuzatish",
            "Elektron qulflar",
            "Kirishni nazorat qilish tizimlari",
          ],
        },
        software: {
          title: "Dasturlash va avtomatlashtirish",
          items: [
            "Telegram botlari",
            "Sun’iy intellekt asosidagi botlar",
            "Google Sheets bilan integratsiya",
            "Saytlar va veb-ilovalar",
            "Kichik dasturlar va avtomatlashtirish",
          ],
        },
      },
    },
    about: {
      heading: "Biz kimmiz?",
      introduction: "LANGROUP — Toshkentdagi mustaqil kompyuter ustalari jamoasi. Kompyuter texnikasi va tarmoq uskunalari bilan ishlaymiz, dasturiy ta’minot yaratamiz.",
      approach: "Mijozlar bilan bevosita ishlaymiz. Vazifani oʻrganib, byudjetingizga mos yechim taklif qilamiz.",
      photoAlt: "LANGROUP jamoasi ish joyida",
    },
    workflow: {
      heading: "Qanday ishlaymiz?",
      steps: {
        describe: "Vazifani tushuntirasiz",
        clarify: "Tafsilotlarni aniqlaymiz",
        agree: "Narxni kelishib olamiz",
        work: "Ishni bajaramiz",
      },
    },
    contacts: {
      heading: "Texnika boʻyicha yordam kerakmi?",
      description: "Bizga yozing, muammoni tasvirlab bering yoki xatolik rasmini yuboring. Yechim va narxni muhokama qilamiz.",
      names: { islam: "Islom", denis: "Denis" },
    },
    footerTagline: "Mustaqil kompyuter ustalari",
  },
};
