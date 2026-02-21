import { createBrowserRouter } from 'react-router';
import { Portfolio } from './pages/Portfolio';
import { PrimeDriveCaseStudy } from './pages/PrimeDriveCaseStudy';
import { BetterMeCaseStudy } from './pages/BetterMeCaseStudy';
import { HostlyCaseStudy } from './pages/HostlyCaseStudy';
import { HomeBrewzCaseStudy } from './pages/HomeBrewzCaseStudy';
import { FreshListCaseStudy } from './pages/FreshListCaseStudy';
import { DesignSystemShowcase } from './pages/DesignSystemShowcase';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Portfolio,
  },
  {
    path: '/case-study/prime-drive',
    Component: PrimeDriveCaseStudy,
  },
  {
    path: '/case-study/betterme',
    Component: BetterMeCaseStudy,
  },
  {
    path: '/case-study/hostly',
    Component: HostlyCaseStudy,
  },
  {
    path: '/case-study/homebrewz',
    Component: HomeBrewzCaseStudy,
  },
  {
    path: '/case-study/fresh-list',
    Component: FreshListCaseStudy,
  },
  {
    path: '/design-system',
    Component: DesignSystemShowcase,
  },
]);