import React from "react";
import {
	Box,
	Typography,
	Stack,
	Container,
	Avatar,
	CircularProgress,
	Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import {
	GET_HOMEPAGE_SECTIONS,
	GetHomepageSectionsData,
	HeroImage,
} from "../graphql/queries";

const TestimonialsContainer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(12, 0),
	backgroundColor: theme.palette.grey[50],
}));

const TestimonialsGrid = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		gap: theme.spacing(4),
	},
}));

const TestimonialCard = styled(Box)(({ theme }) => ({
	flex: 1,
	padding: theme.spacing(4),
	marginTop: "0 !important",
}));

const TestimonialIcon = styled(Box)(({ theme }) => ({
	marginBottom: theme.spacing(4),
}));

const BrandLogo = styled("img")({
	width: "auto",
	height: "34px",
	maxWidth: "120px",
});

const TestimonialText = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	fontWeight: 400,
	lineHeight: "30px",
	color: "#171717",
	marginBottom: theme.spacing(4),
}));

const AuthorInfo = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	alignItems: "center",
	gap: theme.spacing(1.5),
}));

const AuthorDetails = styled(Stack)({
	gap: "1px",
});

const AuthorName = styled(Typography)(({ theme }) => ({
	fontSize: "16px",
	fontWeight: 600,
	color: "#171717",
}));

const AuthorTitle = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: 400,
	color: "#737373",
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "400px",
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "400px",
	padding: theme.spacing(4),
}));

interface TestimonialCardProps {
	brandLogo?: HeroImage;
	userComment: string;
	userAvatar?: HeroImage;
	userName: string;
	userDesignation: string;
	fallbackBrandLogo?: string;
	fallbackAvatar?: string;
}

const TestimonialCardComponent: React.FC<TestimonialCardProps> = ({
	brandLogo,
	userComment,
	userAvatar,
	userName,
	userDesignation,
	fallbackBrandLogo,
	fallbackAvatar,
}) => {
	return (
		<TestimonialCard>
			<TestimonialIcon>
				<BrandLogo
					src={brandLogo?.url || fallbackBrandLogo}
					alt={brandLogo?.alt || `${userName} company logo`}
				/>
			</TestimonialIcon>

			<TestimonialText>{userComment}</TestimonialText>

			<AuthorInfo>
				<Avatar
					src={userAvatar?.url || fallbackAvatar}
					alt={userAvatar?.alt || userName}
					sx={{ width: 40, height: 40 }}
				/>
				<AuthorDetails>
					<AuthorName>{userName}</AuthorName>
					<AuthorTitle>{userDesignation}</AuthorTitle>
				</AuthorDetails>
			</AuthorInfo>
		</TestimonialCard>
	);
};

const TestimonialsSection: React.FC = () => {
	const { loading, error, data } = useQuery<GetHomepageSectionsData>(
		GET_HOMEPAGE_SECTIONS
	);

	if (loading) {
		return (
			<TestimonialsContainer>
				<LoadingContainer>
					<CircularProgress size={60} />
				</LoadingContainer>
			</TestimonialsContainer>
		);
	}

	if (error) {
		return (
			<TestimonialsContainer>
				<ErrorContainer>
					<Alert severity="error" sx={{ maxWidth: 600 }}>
						Failed to load testimonials content. Please try again
						later.
					</Alert>
				</ErrorContainer>
			</TestimonialsContainer>
		);
	}

	const testimonialsData = data?.homepage?.testimonialsection;

	// Fallback to static content if no data
	const fallbackData = {
		leftbrandlogo: undefined,
		leftusercomment:
			"Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures.",
		leftuseravatar: undefined,
		leftusername: "Gabriel Valdivia",
		leftuserdesignation: "Principal Product Designer, Patreon",
		rightbrandlogo: undefined,
		rightusercomment:
			"Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.",
		rightuseravatar: undefined,
		rightusername: "Buzz Usborne",
		rightuserdesignation: "Principal Designer, Buildkite",
	};

	const content = testimonialsData || fallbackData;

	return (
		<TestimonialsContainer>
			<Container maxWidth="xl">
				<TestimonialsGrid spacing={4}>
					<TestimonialCardComponent
						brandLogo={content.leftbrandlogo}
						userComment={content.leftusercomment}
						userAvatar={content.leftuseravatar}
						userName={content.leftusername}
						userDesignation={content.leftuserdesignation}
						fallbackBrandLogo="/images/patreon-logo.svg"
						fallbackAvatar="/images/gabriel-avatar.png"
					/>

					<TestimonialCardComponent
						brandLogo={content.rightbrandlogo}
						userComment={content.rightusercomment}
						userAvatar={content.rightuseravatar}
						userName={content.rightusername}
						userDesignation={content.rightuserdesignation}
						fallbackBrandLogo="/images/buildkite-logo.svg"
						fallbackAvatar="/images/buzz-avatar.png"
					/>
				</TestimonialsGrid>
			</Container>
		</TestimonialsContainer>
	);
};

export default TestimonialsSection;
