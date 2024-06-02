// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Ishwar Iyer. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
