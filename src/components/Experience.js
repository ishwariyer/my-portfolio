import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled(motion.section)`
  padding: 20px;
  text-align: left; /* Align text to the left for better readability */
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ExperienceItem = styled.div`
  margin-bottom: 10px; /* Add spacing between experience entries */
`;

const ExperienceTitle = styled.h3`
  font-weight: bold; /* Emphasize job title */
  margin-bottom: 5px;
`;

const ExperienceDetails = styled.p`
  font-size: 0.9rem; /* Adjust font size for better readability within container */
  margin-bottom: 0; /* Remove default bottom margin for better spacing */
`;

const ExperienceList = styled.ul`
  margin-top: 10px; /* Add spacing after details */
  padding-left: 15px; /* Indent list for readability */
`;

const ExperienceListItem = styled.li`
  line-height: 1.5; /* Increase line height for better spacing */
`;

const Experience = () => {
  return (
    <ExperienceContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Experience</h2>
      <ExperienceItem>
        <ExperienceTitle>
          <strong>Programmer Analyst</strong>
        </ExperienceTitle>
        <ExperienceDetails>
          <em>Mobicule Pvt Ltd, Mumbai</em><br />
          <em>01/2024</em>
        </ExperienceDetails>
        <ExperienceList>
          <ExperienceListItem>Developed a REST API using Spring MVC framework</ExperienceListItem>
          <ExperienceListItem>Implemented a scheduler component</ExperienceListItem>
          <ExperienceListItem>Created a report feature for a web portal</ExperienceListItem>
          <ExperienceListItem>Deployed the application on IBM Cloud WebSphere</ExperienceListItem>
          <ExperienceListItem>Conducted unit testing for the scheduler, API, and reports</ExperienceListItem>
          <ExperienceListItem>Configured pipeline in GitLab and introduced auto merging into the team</ExperienceListItem>
          <ExperienceListItem>Migrated Async Queue from Spring MVC to Spring Boot</ExperienceListItem>
          <ExperienceListItem>Migrated our portal from Spring MVC to Spring Boot Jmix</ExperienceListItem>
          <ExperienceListItem>Developed APIs on JHipster</ExperienceListItem>
        </ExperienceList>
      </ExperienceItem>
    </ExperienceContainer>
  );
};

export default Experience;
