import {
  Camera,
  CodeXml,
  MessageSquareText,
  Monitor,
  ReceiptText,
  Router,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { siteUrl } from "./site-url";

export const site = {
  name: "LANGROUP",
  location: "Ташкент, Узбекистан",
  title: "LANGROUP — Компьютерные мастера в Ташкенте",
  description:
    "Частные компьютерные мастера в Ташкенте. Сборка ПК, диагностика, установка Windows, настройка Wi-Fi и Hikvision, разработка сайтов и Telegram-ботов.",
  url: siteUrl,
};

export const navigation = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О нас" },
  { id: "workflow", label: "Как работаем" },
  { id: "contacts", label: "Контакты" },
] as const;

type Service = {
  title: string;
  icon: LucideIcon;
  variant: "blue" | "cyan" | "orange" | "indigo";
  items: readonly string[];
};

export const services = [
  {
    title: "Компьютеры и ноутбуки",
    icon: Monitor,
    variant: "blue",
    items: [
      "Сборка игровых и офисных ПК",
      "Подбор и апгрейд комплектующих",
      "Диагностика и тестирование",
      "Установка Windows и драйверов",
      "Оптимизация системы",
    ],
  },
  {
    title: "Сети и оборудование",
    icon: Router,
    variant: "cyan",
    items: [
      "Настройка Wi-Fi и роутеров",
      "Локальные сети",
      "Подключение принтеров",
      "Настройка рабочих мест",
      "Системное администрирование",
    ],
  },
  {
    title: "Видеонаблюдение и безопасность",
    icon: Camera,
    variant: "orange",
    items: [
      "Настройка камер Hikvision",
      "IP-камеры и видеорегистраторы",
      "Удалённый просмотр камер",
      "Электронные замки",
      "Системы контроля доступа",
    ],
  },
  {
    title: "Разработка и автоматизация",
    icon: CodeXml,
    variant: "indigo",
    items: [
      "Telegram-боты",
      "Боты с искусственным интеллектом",
      "Интеграция с Google Sheets",
      "Сайты и веб-приложения",
      "Небольшие программы и автоматизация",
    ],
  },
] satisfies readonly Service[];

export const steps = [
  { title: "Вы описываете задачу", icon: MessageSquareText },
  { title: "Мы уточняем детали", icon: SlidersHorizontal },
  { title: "Согласовываем стоимость", icon: ReceiptText },
  { title: "Выполняем работу", icon: Wrench },
] as const;

export const contacts = [
  {
    name: "Ислам",
    phone: "+998 88 497 87 27",
    telephone: "+998884978727",
    telegram: "nutella_co",
    telegramUrl: "https://t.me/nutella_co",
  },
  {
    name: "Денис",
    phone: "+998 94 530 26 66",
    telephone: "+998945302666",
    telegram: "Stanczyk_224",
    telegramUrl: "https://t.me/Stanczyk_224",
  },
] as const;
