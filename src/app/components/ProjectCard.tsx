import { ExternalLink, Github, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  name: string;
  outcome: string;
  techStack: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
}

export function ProjectCard({
  name,
  outcome,
  techStack,
  imageUrl,
  demoUrl,
  githubUrl,
  caseStudyUrl,
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Browser Frame Mockup */}
      <div className="bg-gray-50">
        {/* Browser Header */}
        <div className="bg-gray-200 px-3 py-2 flex items-center gap-1.5 border-b border-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        {/* Screenshot */}
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Project Name */}
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>

        {/* One-line Outcome */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{outcome}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs px-2.5 py-0.5 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="default"
            size="default"
            className="flex-1 gap-2"
            onClick={() => window.open(demoUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="default"
            className="flex-1 gap-2"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>
        
        {/* Case Study Button (if available) */}
        {caseStudyUrl && caseStudyUrl !== '#' && (
          <Button
            variant="ghost"
            size="default"
            className="w-full gap-2 mt-2"
            onClick={() => navigate(caseStudyUrl)}
          >
            <FileText className="w-4 h-4" />
            View Case Study
          </Button>
        )}
      </div>
    </div>
  );
}