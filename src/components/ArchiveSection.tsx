import React from "react";
import {
	Box,
	Typography,
	Stack,
	Container,
	Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import {
	GET_HOMEPAGE_DATA,
	GetHomepageData,
	HeroImage,
} from "../graphql/homepage";
import LoadingSpinner from "./LoadingSpinner";
import { fallbackArchiveData, staticImagePaths, errorMessages } from "../data/fallbackData";

const ArchiveContainer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(12, 0),
	backgroundColor: theme.palette.background.default,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
	fontSize: "54px",
	fontWeight: 600,
	lineHeight: "63px",
	letterSpacing: "-1.5px",
	color: theme.palette.text.primary,
	textAlign: "center",
	marginBottom: theme.spacing(8),
	[theme.breakpoints.down("md")]: {
		fontSize: "42px",
		lineHeight: "50px",
	},
}));

const ArchiveGrid = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		gap: theme.spacing(4),
	},
}));

const ArchiveCard = styled(Card)(({ theme }) => ({
	flex: 1,
	backgroundColor: theme.palette.grey[50],
	border: "1px solid rgba(0, 0, 0, 0.05)",
	borderRadius: "8px",
	boxShadow: "none",
	marginTop: "0 !important",
}));

const CardHeader = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(3),
	textAlign: "center",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	fontWeight: 600,
	color: "#171717",
	marginBottom: theme.spacing(1),
}));

const CardSubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "18px",
	fontWeight: 400,
	color: "#525252",
}));

const ChartContainer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 3, 3, 3),
	display: "flex",
	justifyContent: "center",
}));

const ChartImage = styled("img")({
	width: "100%",
	maxWidth: "572px",
	height: "auto",
});


interface ArchiveCardProps {
	title: string;
	subtitle: string;
	image?: HeroImage;
	fallbackImageSrc?: string;
	fallbackImageAlt?: string;
}

const ArchiveCardComponent: React.FC<ArchiveCardProps> = ({
	title,
	subtitle,
	image,
	fallbackImageSrc,
	fallbackImageAlt,
}) => {
	return (
		<ArchiveCard>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardSubtitle>{subtitle}</CardSubtitle>
			</CardHeader>
			<ChartContainer>
				<ChartImage
					src={
						image?.url ||
						fallbackImageSrc ||
						"/images/projects-chart.svg"
					}
					alt={image?.alt || fallbackImageAlt || `${title} chart`}
				/>
			</ChartContainer>
		</ArchiveCard>
	);
};

const ArchiveSection: React.FC = () => {
	const { loading, error, data } = useQuery<GetHomepageData>(
		GET_HOMEPAGE_DATA
	);

	if (loading || error) {
		return (
			<ArchiveContainer>
				<LoadingSpinner 
					variant="section" 
					error={error} 
					errorMessage={errorMessages.homepageSections}
				/>
			</ArchiveContainer>
		);
	}

	const archiveData = data?.homepage?.archivesection;
	const content = archiveData || fallbackArchiveData;

	return (
		<ArchiveContainer>
			<Container maxWidth="xl">
				<SectionTitle>{content.title}</SectionTitle>

				<ArchiveGrid spacing={4}>
					<ArchiveCardComponent
						title={content.leftcardtitle}
						subtitle={content.leftcardsubtitle}
						image={content.leftcardimage}
						fallbackImageSrc={staticImagePaths.projectsChart}
						fallbackImageAlt="Projects overview chart showing monthly progress"
					/>

					<ArchiveCardComponent
						title={content.rightcardtitle}
						subtitle={content.rightcardsubtitle}
						image={content.rightcardimage}
						fallbackImageSrc={staticImagePaths.memberProfilesChart}
						fallbackImageAlt="Member profiles analytics chart"
					/>
				</ArchiveGrid>
			</Container>
		</ArchiveContainer>
	);
};

export default ArchiveSection;