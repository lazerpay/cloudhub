import React from "react";
import {
	Box,
	Typography,
	Stack,
	Container,
	Card,
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
	const { loading, error, data } = useQuery<GetHomepageSectionsData>(
		GET_HOMEPAGE_SECTIONS
	);

	if (loading) {
		return (
			<ArchiveContainer>
				<LoadingContainer>
					<CircularProgress size={60} />
				</LoadingContainer>
			</ArchiveContainer>
		);
	}

	if (error) {
		return (
			<ArchiveContainer>
				<ErrorContainer>
					<Alert severity="error" sx={{ maxWidth: 600 }}>
						Failed to load archive section content. Please try again
						later.
					</Alert>
				</ErrorContainer>
			</ArchiveContainer>
		);
	}

	const archiveData = data?.homepage?.archivesection;

	// Fallback to static content if no data
	const fallbackData = {
		title: "Your Archive of progress",
		leftcardtitle: "Projects",
		leftcardsubtitle: "Organize, follow, and archive.",
		rightcardtitle: "Member profiles",
		rightcardsubtitle: "Automatic portfolios of your work.",
	};

	const content = archiveData || fallbackData;

	return (
		<ArchiveContainer>
			<Container maxWidth="xl">
				<SectionTitle>{content.title}</SectionTitle>

				<ArchiveGrid spacing={4}>
					<ArchiveCardComponent
						title={content.leftcardtitle}
						subtitle={content.leftcardsubtitle}
						image={content.leftcardimage}
						fallbackImageSrc="/images/projects-chart.svg"
						fallbackImageAlt="Projects overview chart showing monthly progress"
					/>

					<ArchiveCardComponent
						title={content.rightcardtitle}
						subtitle={content.rightcardsubtitle}
						image={content.rightcardimage}
						fallbackImageSrc="/images/member-profiles-chart.svg"
						fallbackImageAlt="Member profiles analytics chart"
					/>
				</ArchiveGrid>
			</Container>
		</ArchiveContainer>
	);
};

export default ArchiveSection;
