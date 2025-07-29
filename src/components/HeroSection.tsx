import React from "react";
import {
	Stack,
	Container,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_HOMEPAGE_DATA, GetHomepageData } from "../graphql/homepage";
import LoadingSpinner from "./LoadingSpinner";
import Button from "./ui/Button";
import { fallbackHeroData, errorMessages } from "../data/fallbackData";
import {
	HeroContainer,
	HeroContent,
	HeroTitle,
	HeroSubtitle,
	GetInTouchLink,
	HeroBackgroundImage,
} from "./styles/HeroSection.styles";

const HeroSection: React.FC = () => {
	const navigate = useNavigate();
	const { loading, error, data } =
		useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);

	const handleStartForFreeClick = () => {
		navigate('/login');
	};

	if (loading || error) {
		return (
			<LoadingSpinner 
				variant="fullscreen" 
				error={error} 
				errorMessage={errorMessages.heroSection}
			/>
		);
	}

	const heroData = data?.homepage?.herosection;
	const content = heroData || fallbackHeroData;

	return (
		<HeroContainer>
			{heroData?.heroimage?.url ? (
				<HeroBackgroundImage
					src={heroData.heroimage.url}
					alt={heroData.heroimage.alt || "Hero background"}
				/>
			) : (
				<HeroBackgroundImage
					src="/images/hero-connections.svg"
					alt="Connection lines"
				/>
			)}

			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					alignItems: "center",
					minHeight: "100vh",
				}}
			>
				<HeroContent spacing={3}>
					<HeroTitle>{content.title}</HeroTitle>

					<HeroSubtitle>{content.description}</HeroSubtitle>

					<Stack alignItems="center" spacing={2}>
						<Button 
							variant="primary" 
							size="large"
							onClick={handleStartForFreeClick}
							sx={{ marginBottom: 3 }}
						>
							{content.ctatext}
						</Button>

						<GetInTouchLink>
							{content.supporttext}{" "}
							<strong>{content.supportlinktext}</strong>
						</GetInTouchLink>
					</Stack>
				</HeroContent>
			</Container>
		</HeroContainer>
	);
};

export default HeroSection;