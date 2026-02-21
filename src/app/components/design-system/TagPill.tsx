import { cn } from '../ui/utils';

interface TagPillProps {
  label: string;
  variant?: 'default' | 'primary' | 'muted';
  size?: 'sm' | 'md';
}

export function TagPill({ label, variant = 'default', size = 'sm' }: TagPillProps) {
  const variantClasses = {
    default: 'bg-secondary text-secondary-foreground border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    muted: 'bg-muted text-muted-foreground border-border',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-md border transition-colors',
        variantClasses[variant],
        sizeClasses[size]
      )}
    >
      {label}
    </span>
  );
}