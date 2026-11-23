# LANGROUP

Одностраничный сайт компьютерных мастеров из Ташкента. Next.js App Router, TypeScript, Tailwind CSS, Lucide и Motion.

## Запуск и проверка

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Сборка создаёт статический сайт в `out/`. Перед сборкой для другого домена задайте `NEXT_PUBLIC_SITE_URL` по примеру в `.env.example`. Эта переменная задаёт адрес для canonical, Open Graph и карты сайта.

## GitHub Pages

В настройках репозитория откройте **Settings → Pages** и выберите **GitHub Actions** в поле **Source**. Затем запустите **Deploy to GitHub Pages** на вкладке **Actions**. Дальнейшие изменения в ветке `main` будут публиковаться автоматически. Адрес сайта и путь репозитория берутся из настроек GitHub Pages при сборке.

Русская версия открывается на главной странице, узбекская — по пути `/uz/`. Тексты обеих версий, списки услуг и контакты редактируются в `lib/content.ts`. Логотип из предоставленного баннера сохранён в `public/images/logo.png`, а шапка и подвал загружают оптимизированную копию `public/images/logo.webp`. Фотография команды подключается из `public/images/team.webp`.
