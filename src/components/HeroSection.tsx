import React from "react";
import {
	Box,
	Typography,
	Stack,
	Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_HOMEPAGE_DATA, GetHomepageData } from "../graphql/homepage";
import LoadingSpinner from "./LoadingSpinner";
import Button from "./ui/Button";
import { fallbackHeroData, errorMessages } from "../data/fallbackData";

const HeroContainer = styled(Box)(({ theme }) => ({
	position: "relative",
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
	backgroundColor: theme.palette.background.default,
}));

const HeroContent = styled(Stack)(({ theme }) => ({
	alignItems: "center",
	textAlign: "center",
	zIndex: 2,
	maxWidth: "900px",
	margin: "0 auto",
	transform: "translateY(-10vh)",
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
	fontSize: "54px",
	fontWeight: 600,
	lineHeight: "63px",
	letterSpacing: "-1.5px",
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(3),
	[theme.breakpoints.down("md")]: {
		fontSize: "42px",
		lineHeight: "50px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "32px",
		lineHeight: "38px",
	},
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	fontWeight: 400,
	lineHeight: "30px",
	color: theme.palette.text.secondary,
	marginBottom: theme.spacing(4),
	maxWidth: "600px",
	margin: `0 auto ${theme.spacing(4)} auto`,
}));


const GetInTouchLink = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: 400,
	color: theme.palette.text.secondary,
	cursor: "pointer",
	"&:hover": {
		textDecoration: "underline",
	},
}));

const HeroBackgroundImage = styled("img")({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "100%",
	height: "100%",
	minHeight: "100vh",
	zIndex: 1,
	opacity: 0.8,
	objectFit: "contain",
});

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