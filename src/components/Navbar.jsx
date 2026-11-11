import { useEffect, useRef, useState } from "react";
import { profile, whatsappUrl } from "../data/profile";
import Icon from "./Icon";

const links = [
  { href: "proyectos", label: "Proyectos" },
  { href: "sobre-mi", label: "Sobre mí" },
  { href: "habilidades", label: "Stack" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus();
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    if (!("IntersectionObserver" in window)) {
      return () => document.removeEventListener("keydown", handleEscape);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-15% 0px -55% 0px" });
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    return () => {
      document.removeEventListener("keydown", handleEscape);
      observer.disconnect();
    };
  }, []);

  function navigate(section) {
    setOpen(false);
    setActive(section);
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#inicio" className="brand" aria-label={profile.name + ", ir al inicio"} onClick={() => navigate("inicio")}>
          <span className="brand__mark" aria-hidden="true">b<span>.</span></span>
          <span className="brand__name">{profile.name}<span>JavaScript & Full Stack</span></span>
        </a>
        <button ref={toggleRef} className="navbar__toggle" type="button" aria-expanded={open}
          aria-controls="main-navigation" aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
        <nav ref={navRef} className="navbar__nav" id="main-navigation" aria-label="Navegación principal" data-open={open}>
          {links.map((link) => (
            <a key={link.href} href={"#" + link.href} aria-current={active === link.href ? "location" : undefined}
              onClick={() => navigate(link.href)}>{link.label}</a>
          ))}
          <a href={whatsappUrl} className="navbar__contact" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Hablemos <Icon name="diagonal" size={17} />
            <span className="sr-only"> por WhatsApp (abre en una nueva pestaña)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
