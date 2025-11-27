
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/create", label: "Создать сертификат" },
  { to: "/offer-certificate", label: "Оферта" },
  { to: "/spa-rules", label: "Правила посещения" },
  { to: "/privacy-policy", label: "Политика данных" },
];

const BrandHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-accent/40 bg-accent text-accent-foreground backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-accent-foreground">
          <img src="/logo.png" alt="Buddha Spa" className="h-10 w-auto" />
        </Link>

        <button
          type="button"
          aria-label="Показать меню"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-accent-foreground/30 text-accent-foreground transition-colors sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <nav
          className={`w-full flex-col gap-3 text-sm font-medium text-accent-foreground/80 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-5 ${
            open ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-accent-foreground ${isActive ? "text-accent-foreground" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/create"
            className="inline-flex items-center justify-center rounded-xl border border-accent-foreground/40 px-4 py-2 text-accent-foreground transition hover:bg-accent-foreground hover:text-accent"
            onClick={() => setOpen(false)}
          >
            Купить сертификат
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default BrandHeader;
