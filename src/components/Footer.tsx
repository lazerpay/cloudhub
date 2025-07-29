import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import { useQuery } from "@apollo/client";
import {
	GET_HOMEPAGE_DATA,
	GetHomepageData,
} from "../graphql/homepage";
import {
	FooterContainer,
	FooterContent,
	FooterTop,
	FooterLinks,
	FooterColumn,
	FooterColumnTitle,
	FooterLink,
	FooterRouterLink,
	FooterBottom,
	CopyrightText,
	FooterLogoIcon,
	FooterLogoImage,
} from "./styles/Footer.styles";

const Footer: React.FC = () => {
	const { data } = useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);
	const logoImage = data?.homepage?.bottomctasection?.image;

	return (
		<FooterContainer>
			<Container maxWidth="xl">
				<FooterContent>
					<FooterTop>
						{logoImage?.url ? (
							<FooterLogoImage
								src={logoImage.url}
								alt={logoImage.alt || "Company logo"}
							/>
						) : (
							<FooterLogoIcon>
								{/* Cube icon placeholder */}
								<Box
									sx={{
										width: 47,
										height: 47,
										backgroundColor: "white",
										borderRadius: "4px",
									}}
								/>
							</FooterLogoIcon>
						)}

						<FooterLinks>
							<FooterColumn>
								<FooterColumnTitle>Product</FooterColumnTitle>
								<Stack spacing={1.5}>
									<FooterLink>Features</FooterLink>
									<FooterRouterLink to="/pricing">
										Pricing
									</FooterRouterLink>
									<FooterLink>Changelog</FooterLink>
									<FooterLink>Support</FooterLink>
								</Stack>
							</FooterColumn>

							<FooterColumn>
								<FooterColumnTitle>Legal</FooterColumnTitle>
								<Stack spacing={1.5}>
									<FooterLink>Terms of Privacy</FooterLink>
									<FooterLink>Privacy Policy</FooterLink>
									<FooterLink>Security</FooterLink>
								</Stack>
							</FooterColumn>

							<FooterColumn>
								<FooterColumnTitle>Company</FooterColumnTitle>
								<Stack spacing={1.5}>
									<FooterLink>Blog</FooterLink>
									<FooterLink>Contact</FooterLink>
								</Stack>
							</FooterColumn>

							<FooterColumn>
								<FooterColumnTitle>Social</FooterColumnTitle>
								<Stack spacing={1.5}>
									<FooterLink>Dribbble</FooterLink>
									<FooterLink>Behance</FooterLink>
									<FooterLink>Discord</FooterLink>
								</Stack>
							</FooterColumn>
						</FooterLinks>
					</FooterTop>

					<FooterBottom>
						<CopyrightText>
							All rights reserved.© 2024 DejectStudio
						</CopyrightText>
					</FooterBottom>
				</FooterContent>
			</Container>
		</FooterContainer>
	);
};

export default Footer;