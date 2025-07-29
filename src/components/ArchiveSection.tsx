import React from "react";
import {
	Stack,
	Container,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import {
	GET_HOMEPAGE_DATA,
	GetHomepageData,
	HeroImage,
} from "../graphql/homepage";
import LoadingSpinner from "./LoadingSpinner";
import { fallbackArchiveData, staticImagePaths, errorMessages } from "../data/fallbackData";
import {
	ArchiveContainer,
	SectionTitle,
	ArchiveGrid,
	ArchiveCard,
	CardHeader,
	CardTitle,
	CardSubtitle,
	ChartContainer,
	ChartImage,
} from "./styles/ArchiveSection.styles";


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