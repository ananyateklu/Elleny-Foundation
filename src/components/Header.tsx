import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { NavLink, NavLinkProps } from 'react-router-dom';
const logo = require("../assets/EllenyLogo.png");

interface StyledNavLinkProps extends NavLinkProps {
  activeClassName: string;
}

const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  text-decoration: none;
  color: inherit;
  margin-left: 1rem;

  &.active {
    font-weight: bold;
    color: inherit;
    border-bottom: 2px solid currentColor;
  }
`;

const TransparentToolbar = styled(Toolbar)`
  background-color: transparent;
`;

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <TransparentToolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item container xs={4} justifyContent="space-between">
            <StyledNavLink to="/mission" activeClassName="active">
              <Typography variant="h6">Mission</Typography>
            </StyledNavLink>
            <StyledNavLink to="/impact" activeClassName="active">
              <Typography variant="h6">Impact</Typography>
            </StyledNavLink>
            <StyledNavLink to="/gallery" activeClassName="active">
              <Typography variant="h6">Gallery</Typography>
            </StyledNavLink>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center' }}>
            <NavLink to="/">
              <img src={logo} alt="logo" style={{ width: '10rem', height: 'auto' }} />
            </NavLink>
          </Grid>
          <Grid item container xs={4} justifyContent="space-between">
            <StyledNavLink to="/about" activeClassName="active">
              <Typography variant="h6">About Us</Typography>
            </StyledNavLink>
            <StyledNavLink to="/contact" activeClassName="active">
              <Typography variant="h6">Contact Us</Typography>
            </StyledNavLink>
            {/* Donate button */}
            <Button variant="contained" style={{ backgroundColor: '#D0B25E', marginLeft: '1rem' }}>
              Donate
            </Button>
          </Grid>
        </Grid>
      </TransparentToolbar>
    </AppBar>
  );
};

export default Header;
