import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router';

export function FreshListCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2 -ml-3">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Fresh-List</h1>
          <p className="text-lg text-gray-600 mb-6">
            Structured grocery planning application focused on scalable React state architecture and modular component design
          </p>
          <div className="flex gap-3">
            <Button variant="default" className="gap-2" onClick={() => window.open('https://fresh-list-pdit.vercel.app/', '_blank')}>
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/rsantiago76/Fresh-List', '_blank')}>
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* 1. Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Fresh-List is a structured grocery planning application focused on scalable React state architecture and modular component design.
          </p>
        </section>

        {/* 2. The Problem */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Problem</h2>
          <p className="text-gray-700 leading-relaxed">
            Meal planning apps often lack structured list organization and scalable state management.
          </p>
        </section>

        {/* 3. The Solution */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fresh-List provides:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Structured grocery list organization</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Modular category logic</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Clean state-driven UI updates</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Expandable architecture for future meal integrations</div>
            </li>
          </ul>
        </section>

        {/* 4. Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Dynamic category filtering</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Item state management</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Responsive component layout</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Scalable component structure</div>
            </li>
          </ul>
        </section>

        {/* 5. Architecture */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Architecture</h2>
          <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
            <pre className="text-gray-100 text-sm font-mono leading-relaxed">
{`React frontend
→ Centralized state management
→ Modular list components
→ Category-based rendering`}
            </pre>
          </div>
        </section>

        {/* 6. Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Scalable Component Architecture', 'Structured State Logic'].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </section>

        {/* 7. Trade-offs */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Trade-Offs</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Focused on front-end scalability and clarity over backend persistence.
            </p>
          </div>
        </section>

        {/* 8. Future Enhancements */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Future Enhancements</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Persistent user accounts</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Multi-user list sharing</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Smart meal plan integration</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Grocery export functionality</div>
            </li>
          </ul>
        </section>

        {/* 9. Live Links */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Live Links</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="default" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://fresh-list-pdit.vercel.app/', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://github.com/rsantiago76/Fresh-List', '_blank')}
            >
              <Github className="w-4 h-4" />
              View Source Code
            </Button>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>&copy; 2026 Full Stack Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
