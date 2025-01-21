"use client";

import { useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

const Navbar = () => {
  const [ theme, setTheme ] = useState<'light' | 'dark'>('light')

  return (
    <header className="flex justify-between items-center px-5 mb-10">
      <h1 className="text-3xl">devfinder</h1>

      <button
        type="button"
        onClick={() => setTheme((theme === "light") ? "dark" : "light")}
      >
        {(theme === "light") && (
          <div className="inline-flex items-center gap-2">
            <span className="uppercase font-semibold">Light</span>
            <SunIcon className="text-yellow-500" />
          </div>
        )}

        {(theme === "dark") && (
          <div className="inline-flex items-center gap-2">
            <span className="uppercase font-semibold">Dark</span>
            <MoonIcon className="text-blue-400" />
          </div>
        )}
      </button>
    </header>
  );
};

export default Navbar;
