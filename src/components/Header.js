import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid #61dafb; /* Add a bottom border for emphasis */
`;

const HeaderTitle = styled.h1`
  margin-bottom: 5px; /* Adjust margin for better spacing */
`;

const Subtitle = styled.h2`
  margin-top: 0;
  font-weight: normal; /* Remove default bold font weight */
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 16px; /* Increase font size for better readability */

  &.active {
    border-bottom: 2px solid #61dafb;
  }
`;

const variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#334151",
    transition: { duration: 0.3 },
  },
};

const Header = () => {
  return (
    <HeaderContainer
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <HeaderTitle>Ishwar Iyer</HeaderTitle>
      <Subtitle>Software Engineer</Subtitle>
      <NavBar>
        <NavItem to="/about" activeClassName="active">
          About
        </NavItem>
        <NavItem to="/experience" activeClassName="active">
          Experience
        </NavItem>
        <NavItem to="/projects" activeClassName="active">
          Projects
        </NavItem>
        <NavItem to="/contact" activeClassName="active">
          Contact
        </NavItem>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
