"use client";

import { useEffect, useState } from "react";

const TICK_MS = 15_000;
const format = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Jakarta",
});

/** Local time in Semarang. Rendered empty on the server so hydration never mismatches. */
export function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => setTime(format.format(new Date()));
    update();
    const id = window.setInterval(update, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  return <time className="tabular-nums">{time} WIB</time>;
}
