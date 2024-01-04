"use client";

import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className={`${
        darkMode ? "bg-black" : "bg-light"
      } relative inline-flex h-6 w-11 items-center rounded-full ring-2`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          darkMode ? "translate-x-6 bg-gray-500" : "translate-x-1 bg-gray-300"
        } inline-block h-4 w-4 transform rounded-full transition`}
      >
        {darkMode ? (
          <MoonIcon className="w-full text-yellow-200" />
        ) : (
          <SunIcon className="w-full text-yellow-300" />
        )}
      </span>
    </Switch>
  );
}
