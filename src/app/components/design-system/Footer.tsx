import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  name?: string;
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export function Footer({ 
  name = 'Full Stack Engineer', 
  email = 'your.email@example.com',
  socialLinks = {}
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">{name}</h3>
            <p className="text-sm text-muted-foreground">
              Building production-ready systems with modern technologies
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
              <div className="flex gap-3 pt-2">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
