import React from "react";
import {
	Box,
	Typography,
	Stack,
	Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import {
	GET_PRICING_PAGE,
	GetPricingPageData,
} from "../graphql/pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import PricingCard from "../components/ui/PricingCard";
import BillingToggle from "../components/ui/BillingToggle";
import Button from "../components/ui/Button";
import {
	fallbackPricingPlans,
	fallbackPricingPageData,
	errorMessages,
} from "../data/fallbackData";
import {
	BillingPeriod,
	transformPlanData,
	getPrice,
	getPriceUnit,
	createBillingChangeHandler,
	handlePlanSelection,
} from "../utils/pricingUtils";

const PricingContainer = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	backgroundColor: theme.palette.background.default,
}));

const HeroSection = styled(Box)(({ theme }) => ({
	padding: theme.spacing(8, 0),
	textAlign: "center",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(6, 0),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0),
	},
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
	fontSize: "54px",
	fontWeight: 600,
	lineHeight: "63px",
	letterSpacing: "-1.5px",
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(3),
	[theme.breakpoints.down("lg")]: {
		fontSize: "48px",
		lineHeight: "56px",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "42px",
		lineHeight: "50px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "32px",
		lineHeight: "38px",
		letterSpacing: "-1px",
	},
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "20px",
	fontWeight: 400,
	lineHeight: "30px",
	color: theme.palette.text.secondary,
	maxWidth: "600px",
	margin: "0 auto",
	marginBottom: theme.spacing(4),
	[theme.breakpoints.down("md")]: {
		fontSize: "18px",
		lineHeight: "28px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
		lineHeight: "24px",
	},
}));

const PricingSection = styled(Box)(({ theme }) => ({
	padding: theme.spacing(8, 0),
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(6, 0),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0),
	},
}));

const PricingGrid = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	gap: theme.spacing(4),
	justifyContent: "center",
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		alignItems: "center",
		gap: theme.spacing(3),
	},
}));

const CTASection = styled(Box)(({ theme }) => ({
	padding: theme.spacing(8, 0),
	textAlign: "center",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(6, 0),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0),
	},
}));

const CTATitle = styled(Typography)(({ theme }) => ({
	fontSize: "32px",
	fontWeight: 600,
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(2),
	[theme.breakpoints.down("md")]: {
		fontSize: "28px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "24px",
	},
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	color: theme.palette.text.secondary,
	marginBottom: theme.spacing(4),
	maxWidth: "500px",
	margin: "0 auto",
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},
}));

const PricingPage: React.FC = () => {
	const [billingPeriod, setBillingPeriod] = React.useState<BillingPeriod>("monthly");
	const { loading, error, data } = useQuery<GetPricingPageData>(GET_PRICING_PAGE);

	const handleBillingChange = createBillingChangeHandler(setBillingPeriod);

	if (loading || error) {
		return (
			<PricingContainer>
				<Header />
				<LoadingSpinner
					variant="section"
					error={error}
					errorMessage={errorMessages.pricingPage}
				/>
				<Footer />
			</PricingContainer>
		);
	}

	const pricingData = data?.pricingpage;
	const pricingPlans = pricingData
		? [
				transformPlanData(pricingData.starterplan),
				transformPlanData(pricingData.professionalplan, true),
				transformPlanData(pricingData.enterpriseplan),
		  ]
		: fallbackPricingPlans;

	const heroTitle = pricingData?.title || fallbackPricingPageData.title;
	const heroSubtitle =
		pricingData?.subtitle || fallbackPricingPageData.subtitle;

	return (
		<PricingContainer>
			<Header />

			<HeroSection>
				<Container maxWidth="lg">
					<HeroTitle>{heroTitle}</HeroTitle>
					<HeroSubtitle>{heroSubtitle}</HeroSubtitle>

					<BillingToggle
						value={billingPeriod}
						onChange={handleBillingChange}
						showSavingsBadge={true}
					/>
				</Container>
			</HeroSection>

			<PricingSection>
				<Container maxWidth="lg">
					<PricingGrid>
						{pricingPlans.map((plan) => (
							<PricingCard
								key={plan.name}
								name={plan.name}
								description={plan.description}
								price={getPrice(plan, billingPeriod)}
								unit={getPrice(plan, billingPeriod) !== "Free" ? getPriceUnit(billingPeriod) : ""}
								features={plan.features}
								buttonText={plan.buttonText}
								buttonVariant={plan.buttonVariant}
								popular={plan.popular}
								onButtonClick={() => handlePlanSelection(plan.name)}
							/>
						))}
					</PricingGrid>
				</Container>
			</PricingSection>

			<CTASection>
				<Container maxWidth="lg">
					<CTATitle>
						{pricingData?.bottomctasectiontitle ||
							fallbackPricingPageData.bottomctasectiontitle}
					</CTATitle>
					<CTASubtitle>
						{pricingData?.bottomctasectionsubtitle ||
							fallbackPricingPageData.bottomctasectionsubtitle}
					</CTASubtitle>
					<Button
						variant="primary"
						size="large"
						sx={{ marginTop: 3 }}
					>
						{pricingData?.bottomctatext ||
							fallbackPricingPageData.bottomctatext}
					</Button>
				</Container>
			</CTASection>

			<Footer />
		</PricingContainer>
	);
};

export default PricingPage;