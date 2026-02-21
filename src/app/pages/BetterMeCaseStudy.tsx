import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router';

export function BetterMeCaseStudy() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900">BetterMe</h1>
          <p className="text-lg text-gray-600 mb-6">
            Performance-focused fitness SaaS featuring macro calculation logic, supplement timing workflows, and subscription-ready architecture
          </p>
          <div className="flex gap-3">
            <Button variant="default" className="gap-2" onClick={() => window.open('https://better-me-lovat.vercel.app/', '_blank')}>
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/rsantiago76/BetterMe', '_blank')}>
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
            BetterMe is a performance-focused fitness SaaS application that integrates macro calculation logic, 
            supplement timing workflows, and structured weekly planning into a unified web platform.
          </p>
        </section>

        {/* 2. The Problem */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Problem</h2>
          <p className="text-gray-700 leading-relaxed">
            Many fitness tools separate nutrition tracking, supplement timing, and workout structure into disconnected apps. 
            Users must manually manage macros, planning, and subscriptions across multiple platforms.
          </p>
        </section>

        {/* 3. The Solution */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BetterMe centralizes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              Macro calculation engine
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              Supplement timing planner
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              Weekly meal and shake generator
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              Tier-based feature gating
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              SaaS-ready architecture
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            The application is designed to support subscription expansion, role-based access, and persistent data storage.
          </p>
        </section>

        {/* 4. Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                Dynamic macro calculation logic (goal-based adjustments)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                Supplement timing planner with contextual scheduling
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                Weekly structured meal planning
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                Scalable component architecture
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                Subscription-ready feature gating
              </div>
            </li>
          </ul>
        </section>

        {/* 5. Architecture Diagram */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Architecture (Conceptual)</h2>
          <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
            <pre className="text-gray-100 text-sm font-mono leading-relaxed">
{`Frontend (React + TypeScript)
→ State-driven macro engine
→ Structured planner logic
→ Subscription layer abstraction`}
            </pre>
          </div>
        </section>

        {/* 6. Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'SaaS Architecture Patterns', 'Subscription Flow Design', 'Component-Based UI'].map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </section>

        {/* 7. Technical Trade-offs */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Trade-Offs</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="text-gray-700 leading-relaxed">
              Prioritized clean business logic and modular structure over complex backend persistence in the current demo version.
            </p>
          </div>
        </section>

        {/* 8. Future Improvements */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Future Enhancements</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                Stripe webhook implementation
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                Persistent user profile storage
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                Progress analytics dashboard
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                Role-based coaching tier
              </div>
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
              onClick={() => window.open('https://better-me-lovat.vercel.app/', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://github.com/rsantiago76/BetterMe', '_blank')}
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
