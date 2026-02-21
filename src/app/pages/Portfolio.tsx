import { Download, ExternalLink, Github, FileText, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    name: 'BetterMe',
    outcome: 'Performance-focused fitness SaaS featuring macro calculation logic, supplement timing workflows, and subscription-ready architecture.',
    techStack: ['React', 'TypeScript', 'Vercel', 'Stripe (scaffold)', 'SaaS Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3lmJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzcxNjM5MzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: 'https://better-me-lovat.vercel.app/',
    githubUrl: 'https://github.com/rsantiago76/BetterMe',
    caseStudyUrl: '/case-study/betterme',
  },
  {
    name: 'Prime Drive',
    outcome: 'Futuristic vehicle rental platform with area-based search, structured pricing engine logic, and deposit-ready checkout architecture.',
    techStack: ['React', 'TypeScript', 'Availability Logic', 'Booking Flow', 'Payment Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTYwNTk2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: 'https://prime-drive-five.vercel.app/',
    githubUrl: 'https://github.com/rsantiago76/Prime-Drive',
    caseStudyUrl: '/case-study/prime-drive',
  },
  {
    name: 'Hostly',
    outcome: 'Location-aware rental marketplace implementing date conflict detection and availability-driven booking simulation.',
    techStack: ['React', 'TypeScript', 'Availability Engine', 'Booking UI', 'Structured State'],
    imageUrl: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE1NjE2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: 'https://hostly-sigma.vercel.app/',
    githubUrl: 'https://github.com/rsantiago76/Hostly',
    caseStudyUrl: '/case-study/hostly',
  },
  {
    name: 'HomeBrewz',
    outcome: 'Coffee e-commerce platform with guest checkout flow, Stripe-ready payments, and customizable product configuration logic.',
    techStack: ['React', 'Stripe', 'E-commerce Flow', 'Checkout UX', 'State Management'],
    imageUrl: 'https://images.unsplash.com/photo-1653194132914-eff329b9043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZXNwcmVzc298ZW58MXx8fHwxNzcxNjU0NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: 'https://homebrewz.vercel.app/',
    githubUrl: 'https://github.com/rsantiago76/Homebrewz',
    caseStudyUrl: '/case-study/homebrewz',
  },
  {
    name: 'Fresh-List',
    outcome: 'Structured grocery planning application with scalable React state architecture and modular component design.',
    techStack: ['React', 'TypeScript', 'Component Architecture', 'State Logic', 'UI System'],
    imageUrl: 'https://images.unsplash.com/photo-1594549208400-128687ad97ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBsaXN0JTIwbW9iaWxlfGVufDF8fHx8MTc3MTY1NjU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: 'https://fresh-list-pdit.vercel.app/',
    githubUrl: 'https://github.com/rsantiago76/Fresh-List',
    caseStudyUrl: '/case-study/fresh-list',
  },
];

const capabilities = [
  'Multi-tenant SaaS platforms',
  'Subscription billing systems (Stripe)',
  'Booking & availability engines',
  'Scalable React architectures',
];

const technicalStack = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'REST APIs', 'Stripe API', 'Serverless Functions'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD Pipelines'],
  },
  {
    category: 'Systems Administration',
    skills: ['Windows Administration', 'Linux Administration', 'System Configuration'],
  },
  {
    category: 'Application Architecture',
    skills: ['Booking Engines', 'Subscription Billing Systems', 'Pricing Logic', 'SaaS Feature Gating'],
  },
  {
    category: 'Design & Creative',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
  },
];

export function Portfolio() {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            Full-Stack Developer Building Production-Ready SaaS Systems
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            I design and ship scalable web applications featuring booking engines, subscription systems, 
            availability logic, and cloud-ready architecture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Contact
            </Button>
          </div>

          {/* What I Build Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto border border-gray-100">
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">What I Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technical Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-stack expertise across modern development, cloud infrastructure, and design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalStack.map((stack) => (
              <div key={stack.category} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Production systems delivering real business value and exceptional user experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
            Open to new opportunities and collaborations
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:santiago.ricardo@gmail.com'}
            >
              <ExternalLink className="w-5 h-5" />
              santiago.ricardo@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://www.linkedin.com/in/richardsantiago01/', '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://github.com/rsantiago76', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2026 Full Stack Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}