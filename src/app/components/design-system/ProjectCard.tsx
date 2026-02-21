import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { StatusBadge } from './StatusBadge';
import { TagPill } from './TagPill';
import { cn } from '../ui/utils';

interface ProjectCardProps {
  name: string;
  outcome: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  status?: 'live' | 'featured' | 'demo';
  className?: string;
}

export function ProjectCard({
  name,
  outcome,
  techStack,
  imageUrl,
  demoUrl,
  githubUrl,
  caseStudyUrl,
  status,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300',
        'hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30',
        'dark:shadow-lg dark:shadow-black/20',
        className
      )}
    >
      {/* Image Container with Browser Frame */}
      <div className="relative bg-gray-100 dark:bg-slate-900/50 p-6 overflow-hidden">
        {/* Status Badge */}
        {status && (
          <div className="absolute top-4 right-4 z-10">
            <StatusBadge status={status} />
          </div>
        )}

        {/* Browser Frame */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-black/30 overflow-hidden border border-gray-200 dark:border-slate-700">
          {/* Browser Header */}
          <div className="bg-gray-200 dark:bg-slate-700 px-4 py-2 flex items-center gap-2 border-b border-gray-300 dark:border-slate-600">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Screenshot */}
          <div className="aspect-video w-full overflow-hidden bg-gray-50 dark:bg-slate-900">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Outcome Statement */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {outcome}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, 5).map((tech) => (
            <TagPill key={tech} label={tech} />
          ))}
          {techStack.length > 5 && (
            <TagPill label={`+${techStack.length - 5}`} variant="muted" />
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          {demoUrl && (
            <Button
              size="sm"
              variant="default"
              className="gap-1.5"
              onClick={() => window.open(demoUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {caseStudyUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.location.href = caseStudyUrl}
            >
              Case Study
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="ghost"
              className="gap-1.5"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}