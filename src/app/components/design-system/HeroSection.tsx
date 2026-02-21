import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: {
    label: string;
    onClick: () => void;
  };
  secondaryCta?: {
    label: string;
    onClick: () => void;
  };
  badge?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        {badge && (
          <div className="mb-6 flex justify-center">
            {badge}
          </div>
        )}

        {/* Subtitle */}
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
          {subtitle}
        </p>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCta && (
            <Button size="lg" onClick={primaryCta.onClick} className="gap-2 min-w-[200px]">
              {primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Button>
          )}
          {secondaryCta && (
            <Button size="lg" variant="outline" onClick={secondaryCta.onClick} className="min-w-[200px]">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
