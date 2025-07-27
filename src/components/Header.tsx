import React from "react";
import {
	AppBar,
	Toolbar,
	Stack,
	Button,
	Typography,
	Box,
	IconButton,
	Drawer,
	List,
	ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloudhubLogoIcon from "./icons/CloudhubLogoIcon";
import DropdownArrowIcon from "./icons/DropdownArrowIcon";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	boxShadow: "none",
	borderBottom: "none",
	position: "sticky",
	top: 0,
	zIndex: theme.zIndex.appBar,
}));

const NavButton = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
	color: active ? theme.palette.primary.main : theme.palette.text.primary,
	fontSize: "14px",
	fontWeight: 600,
	textTransform: "none",
	padding: "8px 16px",
	position: "relative",
	minWidth: "auto",
	textDecoration: "none",
	[theme.breakpoints.down("md")]: {
		fontSize: "16px",
		padding: "12px 0",
		width: "100%",
		justifyContent: "flex-start",
	},
	"&:hover": {
		backgroundColor: "transparent",
		"&::after": {
			width: "100%",
		},
	},
	"&::after": {
		content: '""',
		position: "absolute",
		bottom: 0,
		left: "50%",
		transform: "translateX(-50%)",
		width: active ? "100%" : "0%",
		height: "2px",
		backgroundColor: theme.palette.primary.main,
		transition: "width 0.3s ease-in-out",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
}));

const NavLink = styled(Link)({
	textDecoration: "none",
	color: "inherit",
});

const PrimaryButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	fontSize: "14px",
	fontWeight: 600,
	textTransform: "none",
	padding: "8px 24px",
	borderRadius: "32px",
	minWidth: "auto",
	[theme.breakpoints.down("md")]: {
		fontSize: "16px",
		padding: "12px 24px",
		width: "100%",
	},
	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
}));

const LoginButton = styled(Button)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: "14px",
	fontWeight: 600,
	textTransform: "none",
	padding: "8px 16px",
	minWidth: "auto",
	[theme.breakpoints.down("md")]: {
		fontSize: "16px",
		padding: "12px 0",
		width: "100%",
		justifyContent: "flex-start",
	},
	"&:hover": {
		backgroundColor: "transparent",
	},
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
	display: "none",
	color: theme.palette.text.primary,
	padding: theme.spacing(1),
	[theme.breakpoints.down("md")]: {
		display: "flex",
	},
}));

const DesktopNav = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const DesktopActions = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
	"& .MuiDrawer-paper": {
		width: "100%",
		padding: theme.spacing(2),
	},
}));

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
		<Box sx={{ pt: 2 }}>
			<List>
				{navigationItems.map((item) => (
					<ListItem key={item.label} sx={{ px: 0 }}>
						<Stack
							direction="row"
							alignItems="center"
							spacing={1}
							width="100%"
						>
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
							{item.hasDropdown && (
								<DropdownArrowIcon
									width={10}
									height={6}
									color="#282828"
								/>
							)}
						</Stack>
					</ListItem>
				))}
				<ListItem sx={{ px: 0, pt: 2 }}>
					<LoginButton onClick={handleLoginClick}>Login</LoginButton>
				</ListItem>
				<ListItem sx={{ px: 0 }}>
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
					justifyContent: "space-evenly",
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
