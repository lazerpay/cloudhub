import { PricingPlan } from '../../graphql/pricing';

export type BillingPeriod = 'monthly' | 'yearly';

export interface TransformedPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  popular: boolean;
}

/**
 * Transforms raw pricing plan data from GraphQL into a format suitable for the UI
 */
export const transformPlanData = (
  plan: PricingPlan,
  isPopular: boolean = false
): TransformedPlan => {
  // Ensure features is always an array
  let features: string[] = [];
  if (Array.isArray(plan.features)) {
    features = plan.features;
  } else if (typeof plan.features === "string") {
    // If features is a string, split by newlines or commas
    features = plan.features
      .split(/\n|,/)
      .map((f) => f.trim())
      .filter((f) => f.length > 0);
  }

  // Remove asterisk marks from feature text
  const cleanedFeatures = features.map((feature) =>
    feature.replace(/^\*\s*/, "").trim()
  );

  return {
    name: plan.planname,
    description: plan.fitfor,
    monthlyPrice: plan.monthlyprice,
    yearlyPrice: plan.yearlyprice,
    features: cleanedFeatures,
    buttonText: plan.ctatext,
    buttonVariant: isPopular ? "primary" : "secondary",
    popular: isPopular,
  };
};

/**
 * Gets the appropriate price based on the billing period
 */
export const getPrice = (plan: TransformedPlan, billingPeriod: BillingPeriod): string => {
  return billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
};

/**
 * Gets the appropriate unit text based on the billing period
 */
export const getPriceUnit = (billingPeriod: BillingPeriod): string => {
  return billingPeriod === "monthly" ? "/month" : "/year";
};

/**
 * Handles billing period change events
 */
export const createBillingChangeHandler = (
  setBillingPeriod: (period: BillingPeriod) => void
) => {
  return (
    event: React.MouseEvent<HTMLElement>,
    newBillingPeriod: BillingPeriod
  ) => {
    if (newBillingPeriod !== null) {
      setBillingPeriod(newBillingPeriod);
    }
  };
};

/**
 * Handles plan selection
 */
export const handlePlanSelection = (planName: string) => {
  console.log(`Selected ${planName} plan`);
  // This could be extended to handle actual plan selection logic
};