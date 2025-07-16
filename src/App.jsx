import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useState, useEffect, useMemo } from "react";
import { getParticlesConfig } from "./particles-config";
import Navbar from "./components/layout/Navbar";
import ProfileCard from "./components/layout/ProfileCard";

function App() {
  const location = useLocation();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const particlesInit = useCallback(
    async (engine) => await loadSlim(engine),
    []
  );

  const particlesOptions = useMemo(() => getParticlesConfig(theme), [theme]);

  return (
    <main className="relative bg-background text-text-primary font-sans">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="relative z-10 flex justify-center items-center min-h-screen p-4 sm:p-8 pt-28">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-[85vh]">
          <div className="mt-2 lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="mt-2 lg:col-span-2 bg-card rounded-2xl p-6 sm:p-8 border border-card-border overflow-y-auto">
            <AnimatePresence mode="wait">
              <div key={location.pathname}>
                <Outlet />
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
