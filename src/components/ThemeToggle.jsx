import { HiSun, HiMoon } from "react-icons/hi2";

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="text-2xl text-text-secondary hover:text-accent transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <HiSun /> : <HiMoon />}
    </button>
  );
};
