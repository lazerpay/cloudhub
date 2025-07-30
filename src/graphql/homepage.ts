import { gql } from '@apollo/client';

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
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
      companylogossection {
        patreon {
          url
          alt
        }
        airbnb {
          url
          alt
        }
        fiberplane {
          url
          alt
        }
        coinbase {
          url
          alt
        }
        griffin {
          url
          alt
        }
        helpscout {
          url
          alt
        }
        plaid {
          url
          alt
        }
      }
    }
  }
`;

// TypeScript interfaces
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

export interface CompanyLogosSection {
  patreon?: HeroImage;
  airbnb?: HeroImage;
  fiberplane?: HeroImage;
  coinbase?: HeroImage;
  griffin?: HeroImage;
  helpscout?: HeroImage;
  plaid?: HeroImage;
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

export interface Homepage {
  herosection: HeroSection;
  clientsection: ClientSection;
  sharesection: FeatureSection;
  feedbacksection: FeatureSection;
  feedbackdashboardsection: FeedbackDashboardSection;
  archivesection: ArchiveSection;
  testimonialsection: TestimonialsSection;
  finalctasection: FinalCTASection;
  bottomctasection: BottomCTASection;
  companylogossection: CompanyLogosSection;
}

export interface GetHomepageData {
  homepage: Homepage;
}