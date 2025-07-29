import React from "react";
import {
	Box,
	Typography,
	Stack,
	Container,
	Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import {
	GET_HOMEPAGE_DATA,
	GetHomepageData,
	HeroImage,
} from "../graphql/homepage";
import LoadingSpinner from "./LoadingSpinner";
import { fallbackTestimonialsData, staticImagePaths, errorMessages } from "../data/fallbackData";

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
	const { loading, error, data } = useQuery<GetHomepageData>(
		GET_HOMEPAGE_DATA
	);

	if (loading || error) {
		return (
			<TestimonialsContainer>
				<LoadingSpinner 
					variant="section" 
					error={error} 
					errorMessage={errorMessages.homepageSections}
				/>
			</TestimonialsContainer>
		);
	}

	const testimonialsData = data?.homepage?.testimonialsection;
	const content = testimonialsData || fallbackTestimonialsData;

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
						fallbackBrandLogo={staticImagePaths.patreonLogo}
						fallbackAvatar={staticImagePaths.gabrielAvatar}
					/>

					<TestimonialCardComponent
						brandLogo={content.rightbrandlogo}
						userComment={content.rightusercomment}
						userAvatar={content.rightuseravatar}
						userName={content.rightusername}
						userDesignation={content.rightuserdesignation}
						fallbackBrandLogo={staticImagePaths.buildkiteLogo}
						fallbackAvatar={staticImagePaths.buzzAvatar}
					/>
				</TestimonialsGrid>
			</Container>
		</TestimonialsContainer>
	);
};

export default TestimonialsSection;