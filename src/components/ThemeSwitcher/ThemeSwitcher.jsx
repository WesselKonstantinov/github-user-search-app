import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const prefersDark = theme === "dark";

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setTheme("dark");
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setTheme("light");
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  return (
    <button
      className="inline-flex gap-x-4 text-san-marino dark:text-white font-bold tracking-[0.19em] uppercase"
      onClick={prefersDark ? setLightTheme : setDarkTheme}
    >
      {prefersDark ? (
        <>
          Light
          <img
            src="/images/icon-sun.svg"
            alt=""
            width="20"
            height="20"
            className="w-5 h-5"
          />
        </>
      ) : (
        <>
          Dark
          <img
            src="/images/icon-moon.svg"
            alt=""
            width="20"
            height="20"
            className="w-5 h-5"
          />
        </>
      )}
    </button>
  );
}

export default ThemeSwitcher;
