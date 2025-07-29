import React from "react";
import { Box, Typography, Stack, Container, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
	GET_HOMEPAGE_DATA,
	GetHomepageData,
} from "../graphql/homepage";

const FooterContainer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(6, 0),
	backgroundColor: theme.palette.grey[50],
	[theme.breakpoints.down("md")]: {
		padding: theme.spacing(4, 0),
	},
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(3, 0),
	},
}));

const FooterContent = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(5),
	[theme.breakpoints.down("md")]: {
		gap: theme.spacing(4),
	},
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(3),
	},
}));

const FooterTop = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	justifyContent: "space-evenly",
	alignItems: "flex-start",
	gap: theme.spacing(17.5),
	[theme.breakpoints.down("lg")]: {
		gap: theme.spacing(8),
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		gap: theme.spacing(6),
		alignItems: "center",
	},
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(4),
	},
}));

const FooterLinks = styled(Stack)(({ theme }) => ({
	flexDirection: "row",
	gap: theme.spacing(10),
	[theme.breakpoints.down("lg")]: {
		gap: theme.spacing(6),
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		gap: theme.spacing(4),
		alignItems: "center",
		textAlign: "center",
	},
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(3),
	},
}));

const FooterColumn = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(2),
	[theme.breakpoints.down("md")]: {
		alignItems: "center",
	},
	[theme.breakpoints.down("sm")]: {
		gap: theme.spacing(1.5),
	},
}));

const FooterColumnTitle = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: 600,
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(1),
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
		marginBottom: theme.spacing(0.5),
	},
}));

const FooterLink = styled(Link)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: 400,
	color: theme.palette.text.secondary,
	textDecoration: "none",
	cursor: "pointer",
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},
	"&:hover": {
		color: theme.palette.text.primary,
		textDecoration: "underline",
	},
}));

const FooterRouterLink = styled(RouterLink)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: 400,
	color: theme.palette.text.secondary,
	textDecoration: "none",
	cursor: "pointer",
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},
	"&:hover": {
		color: theme.palette.text.primary,
		textDecoration: "underline",
	},
}));

const FooterBottom = styled(Box)(({ theme }) => ({
	textAlign: "center",
	paddingTop: theme.spacing(4),
	borderTop: "1px solid rgba(0, 0, 0, 0.05)",
	[theme.breakpoints.down("md")]: {
		paddingTop: theme.spacing(3),
	},
	[theme.breakpoints.down("sm")]: {
		paddingTop: theme.spacing(2),
	},
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
	fontSize: "14px",
	fontWeight: 400,
	color: theme.palette.text.secondary,
	[theme.breakpoints.down("sm")]: {
		fontSize: "12px",
	},
}));

const FooterLogoIcon = styled(Box)(({ theme }) => ({
	width: 94,
	height: 94,
	background: "linear-gradient(315deg, #FB432C 0%, #FF591E 100%)",
	borderRadius: "8px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	[theme.breakpoints.down("md")]: {
		width: 80,
		height: 80,
	},
	[theme.breakpoints.down("sm")]: {
		width: 64,
		height: 64,
	},
}));

const FooterLogoImage = styled("img")(({ theme }) => ({
	width: 94,
	height: 94,
	objectFit: "contain",
	[theme.breakpoints.down("md")]: {
		width: 80,
		height: 80,
	},
	[theme.breakpoints.down("sm")]: {
		width: 64,
		height: 64,
	},
}));

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