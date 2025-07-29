import { gql } from '@apollo/client';

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

// TypeScript interfaces
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