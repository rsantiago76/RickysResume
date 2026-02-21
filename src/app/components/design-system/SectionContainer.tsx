import { ReactNode } from 'react';
import { cn } from '../ui/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted';
  spacing?: 'sm' | 'md' | 'lg';
}

export function SectionContainer({
  children,
  className,
  id,
  background = 'default',
  spacing = 'md',
}: SectionContainerProps) {
  const spacingClasses = {
    sm: 'py-16',
    md: 'py-24',
    lg: 'py-32',
  };

  const bgClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
  };

  return (
    <section
      id={id}
      className={cn(
        'w-full',
        spacingClasses[spacing],
        bgClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={cn('mb-16 max-w-3xl', alignClasses)}>
      {subtitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}