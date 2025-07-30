// Re-export queries and types from separate files
// This file serves as a central export point for all GraphQL queries

// Homepage queries and types
export {
  GET_HOMEPAGE_DATA,
  type HeroImage,
  type HeroSection,
  type FeatureSection,
  type FeedbackDashboardCard,
  type FeedbackDashboardSection,
  type ArchiveSection,
  type TestimonialsSection,
  type FinalCTASection,
  type BottomCTASection,
  type ClientSection,
  type CompanyLogosSection,
  type Homepage,
  type GetHomepageData,
} from './homepage';

// Pricing queries and types
export {
  GET_PRICING_PAGE,
  type PricingPlan,
  type PricingPageData,
  type GetPricingPageData,
} from './pricing';