import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.section)`
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactDetails = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 0; /* Remove default margins */
`;

const ContactItem = styled.li`
  margin-bottom: 10px;
  font-weight: bold; /* Emphasize contact details */
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none; /* Remove underline from links */
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #0069d9; /* Slight color change on hover */
  }
`;

const Contact = () => {
  return (
    <ContactContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact</h2>
      <ContactDetails>
        <ContactItem>
          Email: <ContactLink href="mailto:ishwar.siyer@gmail.com">ishwar.siyer@gmail.com</ContactLink>
        </ContactItem>
        <ContactItem>
          Phone: <ContactLink href="tel:+917977268668">(91) 7977268668</ContactLink>
        </ContactItem>
        {/* Add more contact details as needed, e.g., social media links */}
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;
