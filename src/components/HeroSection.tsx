import React from "react";
import {
	Box,
	Typography,
	Button,
	Stack,
	Container,
	CircularProgress,
	Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_HOMEPAGE_HERO, GetHomepageHeroData } from "../graphql/queries";

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

const PrimaryButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	fontSize: "16px",
	fontWeight: 600,
	textTransform: "none",
	padding: "12px 32px",
	borderRadius: "24px",
	marginBottom: theme.spacing(3),
	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
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

const LoadingContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	padding: theme.spacing(4),
}));

const HeroSection: React.FC = () => {
	const navigate = useNavigate();
	const { loading, error, data } =
		useQuery<GetHomepageHeroData>(GET_HOMEPAGE_HERO);

	const handleStartForFreeClick = () => {
		navigate('/login');
	};

	if (loading) {
		return (
			<LoadingContainer>
				<CircularProgress size={60} />
			</LoadingContainer>
		);
	}

	if (error) {
		return (
			<ErrorContainer>
				<Alert severity="error" sx={{ maxWidth: 600 }}>
					Failed to load hero section content. Please try again later.
				</Alert>
			</ErrorContainer>
		);
	}

	const heroData = data?.homepage?.herosection;

	// Fallback to static content if no data
	const fallbackData = {
		title: "Create, inspect, and apply synthetic surveillance broadly.",
		description:
			"Start with a stunning homepage. Stay motivated without hurting your pocket.",
		ctatext: "Start for free",
		supporttext: "Want to talk or get a live demo?",
		supportlinktext: "Get in touch →",
	};

	const content = heroData || fallbackData;

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
						<PrimaryButton onClick={handleStartForFreeClick}>{content.ctatext}</PrimaryButton>

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