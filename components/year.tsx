"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("ru-RU", {
  year: "numeric",
  timeZone: "Asia/Tashkent",
});

const subscribe = () => () => {};
const currentYear = () => formatter.format(new Date());

export function Year({ buildYear }: { buildYear: string }) {
  return useSyncExternalStore(subscribe, currentYear, () => buildYear);
}
