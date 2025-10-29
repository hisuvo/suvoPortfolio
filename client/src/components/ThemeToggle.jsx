import { useEffect, useState } from "react";
import Button from "../shared/Button";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("preferences"));
    if (saved?.theme) return saved.theme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify({ theme }));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div>
      <Button className={"border-none"} onClick={toggleTheme}>
        {theme === "dark" ? <LuSun size={28} /> : <LuMoon size={28} />}
      </Button>
    </div>
  );
};

export default ThemeToggle;
