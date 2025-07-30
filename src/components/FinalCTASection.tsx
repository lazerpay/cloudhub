import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
	GET_HOMEPAGE_DATA,
	GetHomepageData,
	HeroImage,
} from "../graphql/homepage";
import LoadingSpinner from "./LoadingSpinner";
import Button from "./ui/Button";
import {
	fallbackFinalCTAData,
	staticImagePaths,
	errorMessages,
} from "../data/fallbackData";

const CTAContainer = styled(Box)(({ theme }) => ({
	background: "linear-gradient(315deg, #FB432C 0%, #FF591E 100%)",
	padding: theme.spacing(8, 0, 0, 0),
	color: theme.palette.common.white,
	display: "flex",
	flexDirection: "column",
	minHeight: "600px",
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(6, 0, 0, 0),
		minHeight: "500px",
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(4, 0, 0, 0),
		minHeight: "400px",
	},
}));

const CTAContent = styled(Stack)(({ theme }) => ({
	textAlign: "center",
	marginBottom: theme.spacing(6),
	alignItems: "center",
	[theme.breakpoints.down("md")]: {
		marginBottom: theme.spacing(4),
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: theme.spacing(3),
	},
}));

const CTATitle = styled(Typography)(({ theme }) => ({
	fontSize: "63px",
	fontWeight: 600,
	lineHeight: "73px",
	letterSpacing: "-2.5px",
	color: theme.palette.common.white,
	marginBottom: theme.spacing(2),
	[theme.breakpoints.down("lg")]: {
		fontSize: "56px",
		lineHeight: "64px",
		letterSpacing: "-2px",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "48px",
		lineHeight: "56px",
		letterSpacing: "-1.5px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "36px",
		lineHeight: "42px",
		letterSpacing: "-1px",
		marginBottom: theme.spacing(1.5),
	},
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "20px",
	fontWeight: 400,
	lineHeight: "35px",
	color: theme.palette.common.white,
	opacity: 0.9,
	marginBottom: theme.spacing(3),
	maxWidth: "600px",
	margin: "0 auto",
	[theme.breakpoints.down("md")]: {
		fontSize: "18px",
		lineHeight: "28px",
		maxWidth: "500px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
		lineHeight: "24px",
		maxWidth: "300px",
		marginBottom: theme.spacing(2),
	},
}));

const MockupContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginTop: "auto",
	paddingTop: theme.spacing(6),
	alignSelf: "flex-end",
	[theme.breakpoints.down("md")]: {
		paddingTop: theme.spacing(4),
	},
	[theme.breakpoints.down("sm")]: {
		paddingTop: theme.spacing(3),
	},
}));

const MockupImage = styled("img")(({ theme }) => ({
	width: "100%",
	maxWidth: "1014px",
	height: "auto",
	borderRadius: "16px 16px 0px 0px",
	[theme.breakpoints.down("md")]: {
		borderRadius: "12px 12px 0px 0px",
	},
	[theme.breakpoints.down("sm")]: {
		borderRadius: "8px 8px 0px 0px",
	},
}));

interface CTAContentProps {
	title: string;
	description: string;
	ctatext: string;
	image?: HeroImage;
	fallbackImageSrc?: string;
	fallbackImageAlt?: string;
	onCtaClick?: () => void;
}

const CTAContentComponent: React.FC<CTAContentProps> = ({
	title,
	description,
	ctatext,
	image,
	fallbackImageSrc,
	fallbackImageAlt,
	onCtaClick,
}) => {
	return (
		<>
			<CTAContent>
				<CTATitle>{title}</CTATitle>
				<CTASubtitle>{description}</CTASubtitle>
				<Button
					variant="secondary"
					size="large"
					onClick={onCtaClick}
					sx={{
						backgroundColor: "white",
						color: "text.primary",
						letterSpacing: "-0.2px",
						width: "fit-content",
						minWidth: "auto",
						marginTop: 2,
						"&:hover": {
							backgroundColor: "grey.100",
						},
					}}
				>
					{ctatext}
				</Button>
			</CTAContent>

			<MockupContainer>
				<MockupImage
					src={
						image?.url ||
						fallbackImageSrc ||
						"/images/project-management.svg"
					}
					alt={
						image?.alt ||
						fallbackImageAlt ||
						"Project management interface"
					}
				/>
			</MockupContainer>
		</>
	);
};

const FinalCTASection: React.FC = () => {
	const navigate = useNavigate();
	const { loading, error, data } =
		useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);

	const handleCtaClick = () => {
		navigate("/login");
	};

	if (loading || error) {
		return (
			<CTAContainer>
				<LoadingSpinner
					variant="section"
					error={error}
					errorMessage={errorMessages.homepageSections}
					size={60}
				/>
			</CTAContainer>
		);
	}

	const ctaData = data?.homepage?.finalctasection;
	const content = ctaData || fallbackFinalCTAData;

	return (
		<CTAContainer>
			<Container maxWidth="xl">
				<CTAContentComponent
					title={content.title}
					description={content.description}
					ctatext={content.ctatext}
					image={content.image}
					fallbackImageSrc={staticImagePaths.projectManagement}
					fallbackImageAlt="Project management interface showing task organization and team collaboration"
					onCtaClick={handleCtaClick}
				/>
			</Container>
		</CTAContainer>
	);
};

export default FinalCTASection;
