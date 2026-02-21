import { cn } from '../ui/utils';
import { Circle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'live' | 'featured' | 'demo';
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const statusConfig = {
    live: {
      label: 'Live',
      className: 'bg-success/10 text-success border-success/20',
      dotClassName: 'text-success',
    },
    featured: {
      label: 'Featured',
      className: 'bg-primary/10 text-primary border-primary/20',
      dotClassName: 'text-primary',
    },
    demo: {
      label: 'Demo',
      className: 'bg-muted text-muted-foreground border-border',
      dotClassName: 'text-muted-foreground',
    },
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  const config = statusConfig[status];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold rounded-full border backdrop-blur-sm',
        config.className,
        sizeClasses[size]
      )}
    >
      <Circle className={cn('w-2 h-2 fill-current', config.dotClassName)} />
      {config.label}
    </div>
  );
}