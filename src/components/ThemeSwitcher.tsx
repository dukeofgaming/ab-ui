import { useRef, useState } from "react";

const THEMES = [
  { value: "", label: "Default" },
  { value: "theme-financial", label: "Financial" },
  { value: "theme-orders", label: "Orders" },
  { value: "theme-logistics", label: "Logistics" },
  { value: "theme-product", label: "Product" },
];

interface ThemeSwitcherProps {
  readonly onChange?: (theme: string) => void;
}

export function ThemeSwitcher({ 
  onChange
}: ThemeSwitcherProps) {
  const [theme, setTheme] = useState("");
  const prevThemeClass    = useRef<string | null>(null);

  function handleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const theme = event.target.value;
    setTheme(theme);

    const root = document.documentElement;
    
    if (prevThemeClass.current){
      root.classList.remove(prevThemeClass.current);
    }
    
    if (theme){
      root.classList.add(theme);
    }
    
    prevThemeClass.current = theme || null;

    if (onChange){
      onChange(theme); 
    }
  }

  return (
    <select
      value={theme}
      onChange={handleThemeChange}
      className={[
        "bg-[var(--global-color-bg)]",
        "text-[var(--global-color-text)]",
        "font-sans",
        "text-lg",
        "font-semibold",
        "px-2",
        "py-2",
        "rounded",
        "shadow",
        "transition-colors",
        "border",
        "border-[var(--global-color-border)]",
      ].join(" ")}
      aria-label="Switch theme"
    >
      {THEMES.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
