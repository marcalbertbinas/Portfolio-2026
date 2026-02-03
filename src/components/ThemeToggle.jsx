import { Sun, Moon } from 'lucide-react';
import useDarkMode from '../Hooks/useDarkMode';

export default function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition-all"
    >
      {colorTheme === "light" ? (
        <Sun size={20} className="hover:text-yellow-500" />
      ) : (
        <Moon size={20} className="hover:text-blue-400" />
      )}
    </button>
  );
}