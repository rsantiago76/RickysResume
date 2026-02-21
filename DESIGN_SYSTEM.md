# Full-Stack Developer Portfolio Design System

**Purpose**: A complete, production-ready design system for recruiter-focused developer portfolios featuring clean typography, strong visual hierarchy, and professional SaaS aesthetics.

**Target Audience**: Engineering managers, technical recruiters, and startup founders.

**Brand Tone**: Technical, confident, outcome-driven.

---

## Design Philosophy

- **Minimal & Modern**: Clean layouts, ample whitespace, no visual clutter
- **Strong Hierarchy**: Clear information architecture with outcome-driven content
- **Professional SaaS Focus**: Subtle gradients, refined shadows, polished components
- **Technical Credibility**: Feature bullets demonstrate depth without buzzwords

---

## Color Palette

### Light Mode
```css
--background: #F9FAFB
--card: #FFFFFF
--primary: #2563EB
--primary-hover: #1D4ED8
--text-primary: #111827
--text-secondary: #4B5563
--border: #E5E7EB
--success: #16A34A
```

### Dark Mode
```css
--background: #0F172A
--card: #1E293B
--primary: #3B82F6
--primary-hover: #2563EB
--text-primary: #F8FAFC
--text-secondary: #CBD5E1
--border: #334155
--success: #10B981
```

**Dark Mode Features:**
- Strong contrast for readability (#F8FAFC on #0F172A)
- Subtle card shadows for depth
- Consistent accent color (#3B82F6) aligned with light mode
- No neon or harsh colors - professional and minimal
- Smooth transitions between themes (0.2s ease-in-out)

## Typography

**Font Family:** Inter (Google Fonts)

### Type Scale
- **H1:** 5xl, Bold (700), line-height 1.2 - Page titles, hero sections
- **H2:** 4xl, Semibold (600), line-height 1.3 - Section headers
- **H3:** 2xl, Semibold (600), line-height 1.4 - Subsection titles
- **H4:** xl, Medium (500), line-height 1.5 - Card titles
- **Body:** base, Regular (400), line-height 1.6 - Primary content
- **Small:** sm, Regular (400), line-height 1.5 - Supporting text

## Spacing System

Based on 8px scale for consistent visual rhythm:

```css
--spacing-1: 8px
--spacing-2: 16px
--spacing-3: 24px
--spacing-4: 32px
--spacing-6: 48px
--spacing-8: 64px
--spacing-12: 96px
```

## Components

### Core Components

#### 1. Navbar
Sticky navigation with logo, links, dark mode toggle, and CTA button.

```tsx
import { Navbar } from './components/design-system';

<Navbar logo="Portfolio" onNavigate={(section) => {}} />
```

#### 2. HeroSection
Full-height hero with title, subtitle, description, and CTAs.

```tsx
import { HeroSection } from './components/design-system';

<HeroSection
  subtitle="Full Stack Engineer"
  title="Building Production Systems"
  description="Specialized in scalable architecture..."
  primaryCta={{ label: "View Projects", onClick: () => {} }}
  secondaryCta={{ label: "Contact", onClick: () => {} }}
  badge={<StatusBadge status="live" />}
/>
```

#### 3. SectionContainer
Wrapper for content sections with consistent spacing.

```tsx
import { SectionContainer, SectionHeader } from './components/design-system';

<SectionContainer id="projects" background="muted" spacing="lg">
  <SectionHeader
    subtitle="Featured Work"
    title="Projects"
    description="Production-ready applications"
  />
  {/* Content */}
</SectionContainer>
```

#### 4. ProjectCard
Feature-rich project showcase with browser frame, status badge, tech stack, and CTAs.

```tsx
import { ProjectCard } from './components/design-system';

<ProjectCard
  name="Prime Drive"
  outcome="Vehicle rental platform with dynamic pricing"
  techStack={['React', 'Node.js', 'PostgreSQL']}
  imageUrl="https://..."
  demoUrl="#"
  githubUrl="#"
  caseStudyUrl="#"
  status="live"
/>
```

#### 5. TagPill
Tech stack and category tags.

```tsx
import { TagPill } from './components/design-system';

<TagPill label="React" variant="default" size="sm" />
<TagPill label="Featured" variant="primary" size="md" />
```

**Variants:** `default` | `primary` | `muted`  
**Sizes:** `sm` | `md`

#### 6. StatusBadge
Project status indicators with live dots.

```tsx
import { StatusBadge } from './components/design-system';

<StatusBadge status="live" size="md" />
```

**Statuses:** `live` | `featured` | `demo`  
**Sizes:** `sm` | `md`

#### 7. Button
Multi-variant button system.

```tsx
import { Button } from './components/design-system';

<Button size="lg">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

**Variants:** `default` | `outline` | `secondary` | `ghost` | `destructive` | `link`  
**Sizes:** `sm` | `default` | `lg` | `icon`

#### 8. Footer
Three-column footer with branding, quick links, and social connections.

```tsx
import { Footer } from './components/design-system';

<Footer
  name="Your Name"
  email="you@example.com"
  socialLinks={{
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/...",
    twitter: "https://twitter.com/..."
  }}
/>
```

#### 9. DarkModeToggle
Theme switcher with local storage persistence.

```tsx
import { DarkModeToggle } from './components/design-system';

<DarkModeToggle />
```

## Usage

### Installation

All components are located in `/src/app/components/design-system/`.

Import components individually:
```tsx
import { Navbar, HeroSection, ProjectCard } from './components/design-system';
```

### Dark Mode Setup

The design system includes a fully functional dark mode. The `DarkModeToggle` component:

1. **Auto-detects** system theme preference on first visit
2. **Persists** theme choice in localStorage
3. **Prevents** flash of unstyled content (FOUC)
4. **Smooth transitions** between themes (0.2s)

The toggle is already integrated in the `Navbar` component. Click the Sun/Moon icon to switch themes.

**Theme persistence:** The selected theme is saved in `localStorage` and restored on page reload.

### Example Page Structure

```tsx
import {
  Navbar,
  HeroSection,
  SectionContainer,
  SectionHeader,
  ProjectCard,
  Footer,
} from './components/design-system';

export function Portfolio() {
  return (
    <div>
      <Navbar logo="Portfolio" />
      
      <HeroSection
        subtitle="Full Stack Engineer"
        title="Building Production Systems"
        description="Specialized in modern web technologies"
        primaryCta={{ label: "Projects", onClick: () => {} }}
      />
      
      <SectionContainer id="projects" background="muted">
        <SectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard {...project} />
        </div>
      </SectionContainer>
      
      <Footer name="Your Name" email="you@example.com" />
    </div>
  );
}
```

## Design Principles

1. **Clarity Over Decoration** - Every element serves a purpose
2. **Strong Hierarchy** - Clear visual importance through size and weight
3. **Consistent Spacing** - 8px scale creates visual rhythm
4. **Accessible Colors** - WCAG AA compliant contrast ratios
5. **Mobile-First** - Responsive by default
6. **Performance** - Optimized components with minimal re-renders

## File Structure

```
/src/app/components/design-system/
├── index.tsx                  # Exports all components
├── Navbar.tsx                 # Navigation component
├── HeroSection.tsx            # Hero component
├── SectionContainer.tsx       # Section wrapper
├── ProjectCard.tsx            # Project showcase
├── TagPill.tsx                # Tag component
├── StatusBadge.tsx            # Status indicator
├── Footer.tsx                 # Footer component
└── DarkModeToggle.tsx         # Theme toggle

/src/styles/
├── theme.css                  # Design tokens
└── fonts.css                  # Font imports
```

## Viewing the Design System

Navigate to `/design-system` to see all components in action with live examples.

## Customization

### Changing Colors

Edit `/src/styles/theme.css` to update the color palette:

```css
:root {
  --primary: #2563EB;        /* Change primary color */
  --success: #16A34A;        /* Change success color */
  /* ... */
}
```

### Changing Fonts

Edit `/src/styles/fonts.css` to use a different font:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `theme.css`:

```css
:root {
  --font-sans: 'Your Font', sans-serif;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT