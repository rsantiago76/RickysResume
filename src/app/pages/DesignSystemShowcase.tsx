import {
  Navbar,
  HeroSection,
  SectionContainer,
  SectionHeader,
  ProjectCard,
  TagPill,
  StatusBadge,
  Footer,
  Button,
  ThemeShowcase,
} from '../components/design-system';

export function DesignSystemShowcase() {
  const sampleProjects = [
    {
      name: 'Prime Drive',
      outcome: 'Futuristic vehicle rental platform featuring area-based search, pricing engine logic, and deposit-ready checkout architecture',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
      imageUrl: 'https://images.unsplash.com/photo-1768360612035-8bf84c9fbc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTYwNTk2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#',
      status: 'live' as const,
    },
    {
      name: 'Hostly',
      outcome: 'Location-based rental marketplace with date-aware availability logic and structured booking flow simulation',
      techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'AWS S3', 'Tailwind'],
      imageUrl: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE1NjE2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: '#',
      status: 'featured' as const,
    },
    {
      name: 'HomeBrewz',
      outcome: 'Coffee e-commerce platform with guest checkout, Stripe-ready payments, and product customization logic',
      techStack: ['React', 'Node.js', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1653194132914-eff329b9043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZXNwcmVzc298ZW58MXx8fHwxNzcxNjU0NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: '#',
      status: 'demo' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar logo="Design System" />

      {/* Hero Section */}
      <HeroSection
        subtitle="Modern Portfolio Design System"
        title="Build Professional Portfolios with Confidence"
        description="A complete design system for full-stack developers featuring clean typography, strong hierarchy, and SaaS-focused components. Built for engineering managers and technical recruiters."
        primaryCta={{
          label: 'View Components',
          onClick: () => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' }),
        }}
        secondaryCta={{
          label: 'Documentation',
          onClick: () => alert('Documentation coming soon'),
        }}
        badge={<StatusBadge status="live" size="md" />}
      />

      {/* Components Section */}
      <SectionContainer id="components" background="muted">
        <SectionHeader
          subtitle="Design System"
          title="Core Components"
          description="Reusable, accessible components built with TypeScript and Tailwind CSS"
        />

        <div className="space-y-16">
          {/* Buttons */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Buttons</h3>
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg">Primary Large</Button>
                <Button>Primary Default</Button>
                <Button size="sm">Primary Small</Button>
                <Button variant="outline" size="lg">Outline Large</Button>
                <Button variant="outline">Outline Default</Button>
                <Button variant="outline" size="sm">Outline Small</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
          </div>

          {/* Tag Pills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Tag Pills</h3>
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex flex-wrap gap-3">
                <TagPill label="React" variant="default" size="sm" />
                <TagPill label="TypeScript" variant="default" size="sm" />
                <TagPill label="Node.js" variant="primary" size="sm" />
                <TagPill label="PostgreSQL" variant="muted" size="sm" />
                <TagPill label="AWS" variant="default" size="md" />
                <TagPill label="Docker" variant="primary" size="md" />
              </div>
            </div>
          </div>

          {/* Status Badges */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Status Badges</h3>
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex flex-wrap gap-4 items-center">
                <StatusBadge status="live" size="sm" />
                <StatusBadge status="featured" size="sm" />
                <StatusBadge status="demo" size="sm" />
                <StatusBadge status="live" size="md" />
                <StatusBadge status="featured" size="md" />
                <StatusBadge status="demo" size="md" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Project Cards Section */}
      <SectionContainer id="projects" background="default">
        <SectionHeader
          subtitle="Projects Showcase"
          title="Featured SaaS Projects"
          description="Professional project cards with status badges, tech stacks, and call-to-action buttons"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </SectionContainer>

      {/* Typography Section */}
      <SectionContainer background="muted">
        <SectionHeader
          subtitle="Typography"
          title="Type Scale & Hierarchy"
          description="Clear, readable typography optimized for technical content"
        />

        <div className="bg-card rounded-lg border border-border p-8 space-y-6">
          <div>
            <h1 className="text-5xl">Heading 1 - Bold, 5xl</h1>
            <p className="text-sm text-muted-foreground mt-1">Used for page titles and hero sections</p>
          </div>
          <div>
            <h2 className="text-4xl">Heading 2 - Semibold, 4xl</h2>
            <p className="text-sm text-muted-foreground mt-1">Used for section headers</p>
          </div>
          <div>
            <h3 className="text-2xl">Heading 3 - Semibold, 2xl</h3>
            <p className="text-sm text-muted-foreground mt-1">Used for subsection titles</p>
          </div>
          <div>
            <h4 className="text-xl">Heading 4 - Medium, xl</h4>
            <p className="text-sm text-muted-foreground mt-1">Used for card titles</p>
          </div>
          <div>
            <p className="text-base">Body Text - Regular, base</p>
            <p className="text-sm text-muted-foreground mt-1">Primary content and descriptions</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Secondary Text - Regular, sm</p>
            <p className="text-xs text-muted-foreground mt-1">Supporting information and metadata</p>
          </div>
        </div>
      </SectionContainer>

      {/* Color Palette Section */}
      <SectionContainer background="default">
        <SectionHeader
          subtitle="Colors"
          title="Color System"
          description="Professional color palette designed for technical portfolios with dark mode support"
        />

        <div className="space-y-8">
          {/* Light Mode Colors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Light Mode</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Primary</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#2563EB' }}>
                  <span className="text-white font-mono text-sm">#2563EB</span>
                </div>
              </div>

              {/* Success */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Success</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#16A34A' }}>
                  <span className="text-white font-mono text-sm">#16A34A</span>
                </div>
              </div>

              {/* Background */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Background</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#F9FAFB' }}>
                  <span className="text-gray-900 font-mono text-sm">#F9FAFB</span>
                </div>
              </div>

              {/* Card */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Card</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#FFFFFF' }}>
                  <span className="text-gray-900 font-mono text-sm">#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Mode Colors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dark Mode</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Primary</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                  <span className="text-white font-mono text-sm">#3B82F6</span>
                </div>
              </div>

              {/* Success */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Success</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                  <span className="text-white font-mono text-sm">#10B981</span>
                </div>
              </div>

              {/* Background */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Background</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#0F172A' }}>
                  <span className="text-gray-100 font-mono text-sm">#0F172A</span>
                </div>
              </div>

              {/* Card */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide">Card</h4>
                <div className="h-20 rounded-lg border border-border flex items-center justify-center" style={{ backgroundColor: '#1E293B' }}>
                  <span className="text-gray-100 font-mono text-sm">#1E293B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Typography Colors</h4>
            <div className="bg-card rounded-lg border border-border p-8 space-y-4">
              <div>
                <p className="text-foreground text-lg font-semibold mb-1">Primary Text (Foreground)</p>
                <p className="text-xs text-muted-foreground font-mono">Light: #111827 | Dark: #F8FAFC</p>
              </div>
              <div>
                <p className="text-muted-foreground text-base mb-1">Secondary Text (Muted Foreground)</p>
                <p className="text-xs text-muted-foreground font-mono">Light: #4B5563 | Dark: #CBD5E1</p>
              </div>
              <div>
                <p className="text-primary text-base font-medium mb-1">Accent Text (Primary)</p>
                <p className="text-xs text-muted-foreground font-mono">Light: #2563EB | Dark: #3B82F6</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Spacing Section */}
      <SectionContainer background="muted">
        <SectionHeader
          subtitle="Spacing"
          title="8px Scale System"
          description="Consistent spacing based on 8px increments for visual rhythm"
        />

        <div className="bg-card rounded-lg border border-border p-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">8px (1)</div>
            <div className="h-8 bg-primary" style={{ width: '8px' }} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">16px (2)</div>
            <div className="h-8 bg-primary" style={{ width: '16px' }} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">24px (3)</div>
            <div className="h-8 bg-primary" style={{ width: '24px' }} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">32px (4)</div>
            <div className="h-8 bg-primary" style={{ width: '32px' }} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">48px (6)</div>
            <div className="h-8 bg-primary" style={{ width: '48px' }} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">64px (8)</div>
            <div className="h-8 bg-primary" style={{ width: '64px' }} />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm font-mono text-muted-foreground">96px (12)</div>
            <div className="h-8 bg-primary" style={{ width: '96px' }} />
          </div>
        </div>
      </SectionContainer>

      {/* Theme Showcase */}
      <SectionContainer background="default">
        <SectionHeader
          subtitle="Dark Mode"
          title="Light & Dark Theme Comparison"
          description="Professional dark mode with strong contrast and subtle depth. Toggle the theme using the navbar button to see it in action."
        />
        <ThemeShowcase />
      </SectionContainer>

      {/* Footer */}
      <Footer
        name="Design System Showcase"
        email="design@example.com"
        socialLinks={{
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
        }}
      />
    </div>
  );
}