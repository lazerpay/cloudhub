// Fallback data for when GraphQL queries fail or return no data

// Hero Section Fallback Data
export const fallbackHeroData = {
  title: "Create, inspect, and apply synthetic surveillance broadly.",
  description: "Start with a stunning homepage. Stay motivated without hurting your pocket.",
  ctatext: "Start for free",
  supporttext: "Want to talk or get a live demo?",
  supportlinktext: "Get in touch →",
};

// Client Logos Section Fallback Data
export const fallbackClientTitle = "Loved By Designers At";

// Share Feature Fallback Data
export const fallbackShareData = {
  tagtext: "SHARE",
  title: "Share anything you're working on.",
  description: "Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slipping through the cracks.",
  ctatext: "Try sharing for free",
};

// Feedback Feature Fallback Data
export const fallbackFeedbackData = {
  tagtext: "FEEDBACK",
  title: "Better feedback at the right time.",
  description: "Get feedback when it's most valuable with smart notifications, mentions, and approval flows.",
  ctatext: "Try feedback for free",
};

// Orange CTA Section (Feedback Dashboard) Fallback Data
export const fallbackOrangeCTAData = {
  toptext: "Feedback Dashboard",
  title: "Everything you need to ship with confidence.",
  feedbackdashboardmentionscard: {
    title: "Mentions",
    description: "Get notified when someone mentions you in a comment or review.",
  },
  feedbackdashboardpollscard: {
    title: "Polls",
    description: "Create polls to get quick feedback from your team on design decisions.",
  },
  feedbackdashboardcommentscard: {
    title: "Comments",
    description: "Leave contextual feedback directly on designs with threaded conversations.",
  },
};

// Archive Section Fallback Data
export const fallbackArchiveData = {
  title: "A snapshot of your team's progress",
  leftcardtitle: "Projects",
  leftcardsubtitle: "See all your projects in one place",
  rightcardtitle: "Member Profiles",
  rightcardsubtitle: "Track individual contributions",
};

// Testimonials Section Fallback Data
export const fallbackTestimonialsData = {
  leftbrandlogo: { url: "/images/patreon-logo.svg", alt: "Patreon" },
  leftusercomment: "Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slipping through the cracks.",
  leftuseravatar: { url: "/images/gabriel-avatar.png", alt: "Gabriel Valdivia" },
  leftusername: "Gabriel Valdivia",
  leftuserdesignation: "Principal Product Designer, Patreon",
  rightbrandlogo: { url: "/images/buildkite-logo.svg", alt: "Buildkite" },
  rightusercomment: "We use Campsite to share work-in-progress designs with the team. It's been a game-changer for our design process.",
  rightuseravatar: { url: "/images/buzz-avatar.png", alt: "Buzz Usborne" },
  rightusername: "Buzz Usborne",
  rightuserdesignation: "Principal Designer, Buildkite",
};

// Final CTA Section Fallback Data
export const fallbackFinalCTAData = {
  title: "Ship better products, faster.",
  description: "Campsite is the fastest way to organize and share your design work. Get started for free.",
  ctatext: "Get started for free",
};

// Bottom CTA Section Fallback Data
export const fallbackBottomCTAData = {
  title: "Bring your team together",
  subtitle: "Get started with Campsite today",
  secondaryctatext: "View demo",
  primaryctatext: "Get started for free",
};

// Pricing Page Fallback Data
export const fallbackPricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    features: [
      'Up to 5 team members',
      'Basic project management',
      '10GB storage',
      'Email support',
      'Basic integrations'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'secondary' as const
  },
  {
    name: 'Professional',
    description: 'Best for growing teams and businesses',
    monthlyPrice: '$29',
    yearlyPrice: '$24',
    originalYearlyPrice: '$29',
    popular: true,
    features: [
      'Up to 50 team members',
      'Advanced project management',
      '100GB storage',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'Analytics & reporting'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'primary' as const
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: '$99',
    yearlyPrice: '$79',
    originalYearlyPrice: '$99',
    features: [
      'Unlimited team members',
      'Enterprise project management',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced security',
      'Custom branding',
      'API access'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'secondary' as const
  }
];

export const fallbackPricingPageData = {
  title: "Simple, transparent pricing",
  subtitle: "Choose the perfect plan for your team. Start free and scale as you grow.",
  bottomctasectiontitle: "Ready to get started?",
  bottomctasectionsubtitle: "Join thousands of teams already using our platform to streamline their workflow.",
  bottomctatext: "Start your free trial",
};

// Static Image Paths
export const staticImagePaths = {
  heroConnections: "/images/hero-connections.svg",
  codeEditorMockup: "/images/code-editor-mockup.svg",
  feedbackInterface: "/images/feedback-interface.svg",
  projectManagement: "/images/project-management.svg",
  projectsChart: "/images/projects-chart.svg",
  memberProfilesChart: "/images/member-profiles-chart.svg",
  // Client logos
  crowdstrikeLogo: "/images/crowdstrike-logo.png",
  airbusLogo: "/images/airbus-logo.png",
  haysLogo: "/images/hays-logo.svg",
  sentryLogo: "/images/sentry-logo.svg",
  medwingLogo: "/images/medwing-logo.png",
  cathayPacificLogo: "/images/cathay-pacific-logo.png",
  liquidWebLogo: "/images/liquid-web-logo.png",
  autotraderLogo: "/images/autotrader-logo.png",
  // Testimonial assets
  patreonLogo: "/images/patreon-logo.svg",
  buildkiteLogo: "/images/buildkite-logo.svg",
  gabrielAvatar: "/images/gabriel-avatar.png",
  buzzAvatar: "/images/buzz-avatar.png",
};

// Error Messages
export const errorMessages = {
  heroSection: "Failed to load hero section content. Please try again later.",
  pricingPage: "Failed to load pricing data. Please try again later.",
  homepageSections: "Failed to load page content. Please try again later.",
  general: "Failed to load content. Please try again later.",
};