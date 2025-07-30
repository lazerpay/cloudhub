import React from "react";
import {
	Toolbar,
	Stack,
	Typography,
	Box,
	List,
	ListItem,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloudhubLogoIcon from "./icons/CloudhubLogoIcon";
import DropdownArrowIcon from "./icons/DropdownArrowIcon";
import {
	StyledAppBar,
	NavButton,
	NavLink,
	PrimaryButton,
	LoginButton,
	MenuButton,
	DesktopNav,
	DesktopActions,
	MobileDrawer,
	MobileMenuHeader,
	CloseButton,
} from "./styles/Header.styles";

const Header: React.FC = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const currentPath = location.pathname;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleLoginClick = () => {
		navigate("/login");
	};

	const handleStartForFreeClick = () => {
		navigate("/login");
	};

	const navigationItems = [
		{ label: "Home", path: "/", active: currentPath === "/" },
		{
			label: "Pricing",
			path: "/pricing",
			active: currentPath === "/pricing",
		},
		{ label: "Integrations", path: "#", active: false },
		{ label: "Developers", path: "#", active: false },
	];

	const mobileMenu = (
		<Box>
			<MobileMenuHeader direction="row">
				<CloudhubLogoIcon
					width={104}
					height={23}
					color="#000000"
				/>
				<CloseButton onClick={handleDrawerToggle}>
					<Box
						sx={{
							width: 24,
							height: 2,
							backgroundColor: "#000000",
							position: "relative",
							transform: "rotate(45deg)",
							"&::after": {
								content: '""',
								position: "absolute",
								width: 24,
								height: 2,
								backgroundColor: "#000000",
								left: 0,
								top: 0,
								transform: "rotate(-90deg)",
							},
						}}
					/>
				</CloseButton>
			</MobileMenuHeader>
			
			<List sx={{ pt: 0 }}>
				{navigationItems.map((item) => (
					<ListItem key={item.label} sx={{ px: 0, py: 0 }}>
						{item.path === "#" ? (
							<NavButton active={item.active}>
								{item.label}
							</NavButton>
						) : (
							<NavLink
								to={item.path}
								onClick={handleDrawerToggle}
							>
								<NavButton active={item.active}>
									{item.label}
								</NavButton>
							</NavLink>
						)}
					</ListItem>
				))}
				<ListItem sx={{ px: 0, py: 0, mt: 2 }}>
					<LoginButton onClick={handleLoginClick}>Login</LoginButton>
				</ListItem>
				<ListItem sx={{ px: 0, py: 0 }}>
					<PrimaryButton onClick={handleStartForFreeClick}>
						Start for free
					</PrimaryButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<StyledAppBar>
			<Toolbar
				sx={{
					justifyContent: "space-between",
					px: { xs: 2, md: 10 },
					py: { xs: 1, md: 2 },
					minHeight: { xs: 56, md: 64 },
				}}
			>
				<Stack direction="row" alignItems="center" spacing={1}>
					<CloudhubLogoIcon
						width={104}
						height={23}
						color="#000000"
						style={{
							width: "clamp(80px, 10vw, 104px)",
							height: "auto",
						}}
					/>
				</Stack>

				<DesktopNav direction="row" alignItems="center" spacing={4}>
					<NavLink to="/">
						<NavButton active={currentPath === "/"}>Home</NavButton>
					</NavLink>
					<NavLink to="/pricing">
						<NavButton active={currentPath === "/pricing"}>
							Pricing
						</NavButton>
					</NavLink>
					<NavButton active={false}>Integrations</NavButton>
					<NavButton active={false}>Developers</NavButton>
				</DesktopNav>

				<DesktopActions
					direction="row"
					alignItems="center"
					spacing={2.5}
				>
					<LoginButton onClick={handleLoginClick}>Login</LoginButton>
					<PrimaryButton onClick={handleStartForFreeClick}>
						Start for free
					</PrimaryButton>
				</DesktopActions>

				<MenuButton
					aria-label="open drawer"
					onClick={handleDrawerToggle}
				>
					<Box
						sx={{
							width: 24,
							height: 2,
							backgroundColor: "#000000",
							position: "relative",
							"&::before, &::after": {
								content: '""',
								position: "absolute",
								width: 24,
								height: 2,
								backgroundColor: "#000000",
								left: 0,
							},
							"&::before": {
								top: -8,
							},
							"&::after": {
								top: 8,
							},
						}}
					/>
				</MenuButton>

				<MobileDrawer
					variant="temporary"
					anchor="top"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
				>
					{mobileMenu}
				</MobileDrawer>
			</Toolbar>
		</StyledAppBar>
	);
};

export default Header;