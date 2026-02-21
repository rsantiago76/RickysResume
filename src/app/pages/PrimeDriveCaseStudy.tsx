import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router';

export function PrimeDriveCaseStudy() {
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Prime Drive</h1>
          <p className="text-lg text-gray-600 mb-6">
            Real-time vehicle booking system processing 500+ reservations per month with dynamic pricing
          </p>
          <div className="flex gap-3">
            <Button variant="default" className="gap-2" onClick={() => window.open('#', '_blank')}>
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('#', '_blank')}>
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
            Prime Drive is a full-stack vehicle rental platform designed to eliminate friction in the booking process. 
            The system enables users to search available vehicles by location, reserve instantly with dynamic pricing, 
            and complete secure payments through Stripe. Built to handle high concurrency, the platform prevents 
            double-bookings through optimistic locking and leverages Redis caching to deliver sub-200ms response times 
            for availability queries across a distributed fleet.
          </p>
        </section>

        {/* 2. The Problem */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Problem</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              Traditional car rental workflows require phone calls, manual availability checks, and delayed confirmations. 
              This creates operational bottlenecks for businesses and poor user experience for customers who expect 
              instant digital transactions.
            </p>
            <p>
              Additionally, fixed pricing models fail to optimize revenue during peak demand periods, while manual fleet 
              management across multiple locations leads to underutilized inventory and missed booking opportunities.
            </p>
          </div>
        </section>

        {/* 3. The Solution */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">The Solution</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              Built a real-time booking platform with geolocation-based search, automated availability tracking, and 
              intelligent pricing. Users receive instant confirmation upon booking, while the system automatically adjusts 
              pricing based on demand patterns, seasonality, and location-specific factors.
            </p>
            <p>
              The platform integrates Stripe for secure payment processing with deposit handling, automated refunds, 
              and comprehensive transaction logging. Backend workers handle booking confirmations, reminder notifications, 
              and fleet status synchronization across all locations.
            </p>
          </div>
        </section>

        {/* 4. Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Geolocation-based Search:</strong> Real-time availability queries with Redis caching achieving sub-200ms response times
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Dynamic Pricing Engine:</strong> Automated rate adjustments based on demand forecasting and seasonal patterns
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Stripe Payment Integration:</strong> Secure checkout with deposit handling, automated refunds, and PCI-compliant transaction processing
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Optimistic Locking:</strong> Prevents double-bookings during concurrent reservations using PostgreSQL row-level locking
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">AWS S3 Integration:</strong> Scalable storage for vehicle images and booking documents with CloudFront CDN delivery
              </div>
            </li>
          </ul>
        </section>

        {/* 5. Architecture Diagram */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">System Architecture</h2>
          <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
            <pre className="text-gray-100 text-sm font-mono leading-relaxed">
{`┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                            │
│  React SPA (TypeScript) + React Router + TailwindCSS       │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API (JSON)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   APPLICATION LAYER                         │
│  Node.js + Express + JWT Authentication                     │
│  - Booking Engine                                           │
│  - Pricing Algorithm                                        │
│  - Payment Processing                                       │
└──────┬──────────┬──────────┬──────────┬─────────────────────┘
       │          │          │          │
       ▼          ▼          ▼          ▼
   ┌────────┐ ┌──────┐ ┌─────────┐ ┌─────────┐
   │PostgreSQL Redis  │ Stripe  │ │  AWS S3 │
   │Database│ Cache  │  API    │ │ Storage │
   └────────┘ └──────┘ └─────────┘ └─────────┘
   │                   │           │
   │ • Bookings        │ Payments  │ Images
   │ • Vehicles        │ Refunds   │ Documents
   │ • Users           │ Webhooks  │ Backups
   │ • Locations       │           │
   └───────────────────┴───────────┴──────────┘`}
            </pre>
          </div>
        </section>

        {/* 6. Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'React Router', 'TailwindCSS'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'JWT'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Database</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'Redis'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS S3', 'CloudFront', 'Docker'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Payments</h3>
              <div className="flex flex-wrap gap-2">
                {['Stripe'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['GitHub Actions', 'Docker Compose'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Technical Trade-offs */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Trade-offs</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Redis Caching Strategy</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Decision:</strong> Implemented Redis for availability queries and session management</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Benefit:</strong> Reduced database load by 70% and achieved sub-200ms response times</p>
              <p className="text-sm text-gray-600"><strong>Trade-off:</strong> Added complexity around cache invalidation and consistency during booking conflicts</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Monolithic Architecture</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Decision:</strong> Built as a monolithic application rather than microservices</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Benefit:</strong> Faster development velocity and simplified deployment pipeline</p>
              <p className="text-sm text-gray-600"><strong>Trade-off:</strong> Would require refactoring to microservices for horizontal scaling beyond 10K daily active users</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Client-Side Routing</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Decision:</strong> Used React Router for SPA navigation instead of server-side rendering</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Benefit:</strong> Instant page transitions and reduced server load</p>
              <p className="text-sm text-gray-600"><strong>Trade-off:</strong> Limited SEO optimization compared to Next.js SSR approach</p>
            </div>
          </div>
        </section>

        {/* 8. Future Improvements */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Future Enhancements</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Mobile Application:</strong> Native iOS/Android apps with push notifications for booking reminders
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">ML-Based Pricing:</strong> Predictive demand forecasting model to optimize pricing and maximize revenue
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Insurance Integration:</strong> Partner API integration for instant coverage options during checkout
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">▹</span>
              <div className="text-gray-700">
                <strong className="text-gray-900">Fleet Analytics Dashboard:</strong> Real-time reporting on utilization rates and revenue per vehicle
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
              onClick={() => window.open('#', '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('#', '_blank')}
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
