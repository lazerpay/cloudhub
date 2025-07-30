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
	HeroButtonContainer,
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
					alignItems: { xs: "flex-start", md: "center" },
					minHeight: { xs: "auto", md: "100vh" },
					height: { xs: "auto", md: "100vh" },
					px: { xs: 0, md: 3 },
					pt: { xs: 0, md: 0 },
				}}
			>
				<HeroContent spacing={{ xs: 2, md: 3 }}>
					<HeroTitle>{content.title}</HeroTitle>

					<HeroSubtitle>{content.description}</HeroSubtitle>

					<HeroButtonContainer spacing={2}>
						<Button 
							variant="primary" 
							size="large"
							onClick={handleStartForFreeClick}
							sx={{ 
								marginBottom: { xs: 2, md: 3 },
								width: { xs: '100%', md: 'auto' },
								minWidth: { xs: 'auto', md: '160px' },
								alignSelf: { xs: 'flex-start', md: 'center' },
							}}
						>
							{content.ctatext}
						</Button>

						<GetInTouchLink>
							{content.supporttext}{" "}
							<strong>{content.supportlinktext}</strong>
						</GetInTouchLink>
					</HeroButtonContainer>
				</HeroContent>
			</Container>
		</HeroContainer>
	);
};

export default HeroSection;