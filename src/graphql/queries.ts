import { gql } from '@apollo/client';

export const GET_HOMEPAGE_HERO = gql`
  query GetHomepageHero {
    homepage {
      herosection {
        title
        description
        heroimage {
          url
          alt
        }
        ctatext
        supporttext
        supportlinktext
      }
    }
  }
`;

export const GET_HOMEPAGE_SECTIONS = gql`
  query GetHomepageSections {
    homepage {
      clientsection {
        title
        crowdstrike {
          url
          alt
        }
        airbus {
          url
          alt
        }
        hays {
          url
          alt
        }
        sentry {
          url
          alt
        }
        medwing {
          url
          alt
        }
        cathaypacific {
          url
          alt
        }
        liquidweb {
          url
          alt
        }
        autotrader {
          url
          alt
        }
      }
      sharesection {
        tagtext
        title
        description
        ctatext
        image {
          url
          alt
        }
      }
      feedbacksection {
        tagtext
        title
        description
        ctatext
        image {
          url
          alt
        }
      }
      feedbackdashboardsection {
        toptext
        title
        image {
          url
          alt
        }
        feedbackdashboardmentionscard {
          title
          description
        }
        feedbackdashboardpollscard {
          title
          description
        }
        feedbackdashboardcommentscard {
          title
          description
        }
      }
      archivesection {
        title
        leftcardtitle
        leftcardsubtitle
        rightcardtitle
        rightcardsubtitle
        leftcardimage {
          url
          alt
        }
        rightcardimage {
          url
          alt
        }
      }
      testimonialsection {
        leftbrandlogo {
          url
          alt
        }
        leftusercomment
        leftuseravatar {
          url
          alt
        }
        leftusername
        leftuserdesignation
        rightbrandlogo {
          url
          alt
        }
        rightusercomment
        rightuseravatar {
          url
          alt
        }
        rightusername
        rightuserdesignation
      }
      finalctasection {
        title
        description
        ctatext
        image {
          url
          alt
        }
      }
      bottomctasection {
        image {
          url
          alt
        }
        title
        subtitle
        secondaryctatext
        primaryctatext
      }
    }
  }
`;

export interface HeroImage {
  url: string;
  alt?: string;
}

export interface HeroSection {
  title: string;
  description: string;
  heroimage?: HeroImage;
  ctatext: string;
  supporttext: string;
  supportlinktext: string;
}

export interface FeatureSection {
  tagtext: string;
  title: string;
  description: string;
  ctatext: string;
  image?: HeroImage;
}

export interface Homepage {
  herosection: HeroSection;
}

export interface FeedbackDashboardCard {
  title: string;
  description: string;
}

export interface FeedbackDashboardSection {
  toptext: string;
  title: string;
  image?: HeroImage;
  feedbackdashboardmentionscard: FeedbackDashboardCard;
  feedbackdashboardpollscard: FeedbackDashboardCard;
  feedbackdashboardcommentscard: FeedbackDashboardCard;
}

export interface ArchiveSection {
  title: string;
  leftcardtitle: string;
  leftcardsubtitle: string;
  rightcardtitle: string;
  rightcardsubtitle: string;
  leftcardimage?: HeroImage;
  rightcardimage?: HeroImage;
}

export interface TestimonialsSection {
  leftbrandlogo?: HeroImage;
  leftusercomment: string;
  leftuseravatar?: HeroImage;
  leftusername: string;
  leftuserdesignation: string;
  rightbrandlogo?: HeroImage;
  rightusercomment: string;
  rightuseravatar?: HeroImage;
  rightusername: string;
  rightuserdesignation: string;
}

export interface FinalCTASection {
  title: string;
  description: string;
  ctatext: string;
  image?: HeroImage;
}

export interface BottomCTASection {
  image?: HeroImage;
  title: string;
  subtitle: string;
  secondaryctatext: string;
  primaryctatext: string;
}

export interface ClientSection {
  title: string;
  crowdstrike?: HeroImage;
  airbus?: HeroImage;
  hays?: HeroImage;
  sentry?: HeroImage;
  medwing?: HeroImage;
  cathaypacific?: HeroImage;
  liquidweb?: HeroImage;
  autotrader?: HeroImage;
}

export interface HomepageWithSections {
  clientsection: ClientSection;
  sharesection: FeatureSection;
  feedbacksection: FeatureSection;
  feedbackdashboardsection: FeedbackDashboardSection;
  archivesection: ArchiveSection;
  testimonialsection: TestimonialsSection;
  finalctasection: FinalCTASection;
  bottomctasection: BottomCTASection;
}

export interface GetHomepageHeroData {
  homepage: Homepage;
}

export const GET_PRICING_PAGE = gql`
  query GetPricingPage {
    pricingpage {
      title
      subtitle
      bottomctasectiontitle
      bottomctasectionsubtitle
      bottomctatext
      starterplan {
        planname
        fitfor
        ctatext
        features
        monthlyprice
        yearlyprice
      }
      professionalplan {
        planname
        fitfor
        ctatext
        features
        monthlyprice
        yearlyprice
      }
      enterpriseplan {
        planname
        fitfor
        ctatext
        features
        monthlyprice
        yearlyprice
      }
    }
  }
`;

export interface PricingPlan {
  planname: string;
  fitfor: string;
  ctatext: string;
  features: string[];
  monthlyprice: string;
  yearlyprice: string;
}

export interface PricingPageData {
  title: string;
  subtitle: string;
  bottomctasectiontitle: string;
  bottomctasectionsubtitle: string;
  bottomctatext: string;
  starterplan: PricingPlan;
  professionalplan: PricingPlan;
  enterpriseplan: PricingPlan;
}

export interface GetPricingPageData {
  pricingpage: PricingPageData;
}

export interface GetHomepageSectionsData {
  homepage: HomepageWithSections;
}