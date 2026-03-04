import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home", ocid: "nav.home_link" },
  { label: "About", href: "#about", ocid: "nav.about_link" },
  { label: "Skills", href: "#skills", ocid: "nav.skills_link" },
  { label: "Projects", href: "#projects", ocid: "nav.projects_link" },
  {
    label: "Certifications",
    href: "#certifications",
    ocid: "nav.certifications_link",
  },
  { label: "Education", href: "#education", ocid: "nav.education_link" },
  { label: "Resume", href: "#resume", ocid: "nav.resume_link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact_link" },
];

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 backdrop-blur-md border-b" : "py-5",
      )}
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottomColor: scrolled ? "var(--nav-border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="font-display text-xl font-bold tracking-tight"
          data-ocid="nav.home_link"
          aria-label="Go to home"
        >
          <span className="text-gradient">DY</span>
          <span className="ml-2 text-foreground/80 hidden sm:inline font-medium text-base">
            Darisi Yaswanth
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              data-ocid={link.ocid}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200",
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            data-ocid="nav.theme_toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full w-9 h-9"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-primary" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </Button>

          {/* Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full w-9 h-9"
            onClick={() => setMenuOpen((v) => !v)}
            data-ocid="nav.menu_toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className="px-4 py-3 border-t flex flex-col gap-1"
          style={{ borderTopColor: "var(--nav-border)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              data-ocid={link.ocid}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === link.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
