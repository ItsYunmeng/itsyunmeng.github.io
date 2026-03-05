function setDarkMode(on) {
    if (on) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  
  (function () {
    const saved = localStorage.getItem("theme");
  
    if (saved === "dark") {
      setDarkMode(true);
    } else if (saved === "light") {
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  
    document.addEventListener("DOMContentLoaded", function () {
      const toggle = document.getElementById("dark-toggle");
      if (toggle) {
        toggle.addEventListener("click", function () {
          const isDark = document.documentElement.classList.contains("dark");
          setDarkMode(!isDark);
        });
      }
    });
  })();