import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  StyledGearSmall,
  DrillSmall,
  PhoneSmall,
} from "../Custom-Icons/CustomIcons";
import bmcLogo from '../assets/bmc_logo.png';


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const iconColor = drawerOpen ? 'rgb(46, 48, 145)' : 'inherit';

  const drawerItems = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/equipment" sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
          <ListItemIcon>
            <DrillSmall style={{ fill: iconColor }} />
          </ListItemIcon>
          <ListItemText primary="Equipment" />
        </ListItem>
        <ListItem button component={Link} to="/services" sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
          <ListItemIcon>
            <StyledGearSmall style={{ fill: iconColor }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/contact" sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
          <ListItemIcon>
            <PhoneSmall style={{ fill: iconColor }} />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'rgb(46, 48, 145)', padding: '0 1rem' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={bmcLogo} alt="Beothuk Mechanical Logo"  style={{ height: '5rem', width: 'auto' }}  />
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              component={Link}
              to="/equipment"
              startIcon={<DrillSmall />}
              sx={{ color: '#fffaf0', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#3949ab' } }}
            >
              Equipment
            </Button>
            <Button
              component={Link}
              to="/services"
              startIcon={<StyledGearSmall />}
              sx={{ color: '#fffaf0', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#3949ab' } }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="/contact"
              startIcon={<PhoneSmall />}
              sx={{ color: '#fffaf0', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#3949ab' } }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#fffaf0' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerItems}
      </Drawer>
    </>
  );
};

export default Header;



















// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";
// import {
//   StyledGearSmall,
//   DrillSmall,
//   PhoneSmall,
// } from "../Custom-Icons/CustomIcons";
// const Wrapper = styled.div`
//   display: flex;
//   position: relative;
//   width: 100%;
//   max-width: 100%;
//   background-color: rgb(46, 48, 145);
//   justify-content: space-between;
//   box-sizing: border-box;
//   align-items: center;
// `;

// const Logo = styled.img`
//   display: block;
//   max-width: 20rem;
//   max-height: 10rem;
//   width: auto;
//   height: 5rem;
//   padding: 4px;
//   @media (max-width: 380px) {
//     height: 3.1rem;
//   }
// `;
// const HeaderItemCtn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const NavbarLink = styled(Link)`
//   text-decoration: none;
//   color: #fffaf0;
//   &:hover {
//     color: yellow;
//   }
// `;

// const HeaderItem = styled.button`
//   height: fit-content;
//   border: none;
//   background-color: transparent;
//   font-size: 1.3rem;
//   color: #fffaf0;
//   padding: 0 1rem;
//   @media (max-width: 380px) {
//     font-size: 0.8rem;
//   }
//   @media (max-width: 767px) {
//     display: none;
//   }
// `;

// const Header = () => {
//   const menuArr = [
//     { title: "Equipment", src: <DrillSmall /> },
//     { title: "Services", src: <StyledGearSmall /> },
//     { title: "Contact", src: <PhoneSmall /> },
//   ];
//   return (
//     <Wrapper>
//       <Link to="/">
//         <Logo src="./assets/bmechlogo.png" />
//       </Link>

//       <HeaderItemCtn>
//         <Dropdown content={menuArr} />

//         <HeaderItem>
//           <NavbarLink to="equipment">Equipment</NavbarLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavbarLink to="services">Services</NavbarLink>
//         </HeaderItem>
//         <HeaderItem>
//           <NavbarLink to="contact">Contact</NavbarLink>
//         </HeaderItem>
//       </HeaderItemCtn>
//     </Wrapper>
//   );
// };

// export default Header;
