import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { DarkModeToggle } from './DarkModeToggle';

interface NavbarProps {
  logo?: string;
  onNavigate?: (section: string) => void;
}

export function Navbar({ logo = 'Portfolio', onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm dark:shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {logo}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <DarkModeToggle />
            <Button size="sm">Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card shadow-lg dark:shadow-black/30">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button size="sm" className="w-full">Get in Touch</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}