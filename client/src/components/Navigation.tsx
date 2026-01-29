/* Neo-Noir Detective Aesthetic - Navigation Component
 * Cinematic top navigation with dramatic contrast and amber accents
 */

import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-amber rounded-sm flex items-center justify-center">
                <span className="text-display text-2xl font-bold text-background">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-display text-xl font-bold text-foreground group-hover:text-amber transition-colors duration-300">
                  China Detective
                </span>
                <span className="text-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Investigation Agency
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                    location === item.href
                      ? "text-amber"
                      : "text-foreground hover:text-amber"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* Language Switcher Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-amber/30 text-foreground hover:bg-amber/10 hover:text-amber hover:border-amber transition-all duration-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? '中文' : 'English'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-amber transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block text-base font-medium transition-colors duration-300 cursor-pointer ${
                      location === item.href
                        ? "text-amber"
                        : "text-foreground hover:text-amber"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-amber/30 text-foreground hover:bg-amber/10 hover:text-amber hover:border-amber transition-all duration-300 w-full"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'en' ? '中文' : 'English'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
