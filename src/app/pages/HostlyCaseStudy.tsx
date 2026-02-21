import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router';

export function HostlyCaseStudy() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Hostly</h1>
          <p className="text-lg text-gray-600 mb-6">
            Airbnb-style rental marketplace focused on structured availability detection and booking simulation
          </p>
          <div className="flex gap-3">
            <Button variant="default" className="gap-2" onClick={() => window.open('https://hostly-sigma.vercel.app/', '_blank')}>
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/rsantiago76/Hostly', '_blank')}>
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
            Hostly is an Airbnb-style rental marketplace focused on structured availability detection and booking simulation.
          </p>
        </section>

        {/* 2. The Problem */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Problem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rental marketplaces must:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Prevent date conflicts</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Handle blocked dates</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Filter by geographic location</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Maintain clean booking workflows</div>
            </li>
          </ul>
        </section>

        {/* 3. The Solution */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hostly incorporates:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Location-aware search</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Date conflict detection logic</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Calendar-based availability UI</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Structured booking confirmation flow</div>
            </li>
          </ul>
        </section>

        {/* 4. Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Per-night pricing logic</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Blocked date validation</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Messaging UI simulation</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">Modular listing component system</div>
            </li>
          </ul>
        </section>

        {/* 5. Architecture */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Architecture</h2>
          <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
            <pre className="text-gray-100 text-sm font-mono leading-relaxed">
{`React frontend
→ Date validation engine
→ Booking state handler
→ Confirmation abstraction`}
            </pre>
          </div>
        </section>

        {/* 6. Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Date Logic Handling', 'Availability Validation', 'Component-Based Architecture'].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </section>

        {/* 7. Trade-offs */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Trade-Offs</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Focused on demonstrating booking validation logic rather than real-time multi-user concurrency handling.
            </p>
          </div>
        </section>

        {/* 8. Future Enhancements */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Future Enhancements</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Real backend availability API</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Stripe booking deposits</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Map clustering</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">Host-side dashboard</div>
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
              onClick={() => window.open('https://hostly-sigma.vercel.app/', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://github.com/rsantiago76/Hostly', '_blank')}
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
