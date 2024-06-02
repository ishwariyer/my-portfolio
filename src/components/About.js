import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.section)`
  padding: 20px;
  text-align: left;
`;

const AboutSection = styled(motion.div)`
  margin-bottom: 40px;
  /* Apply hover animation to all sections */
  cursor: pointer; /* Indicate hover interaction */
  overflow: hidden; /* Prevent content overflow during animation */
  transition: all 0.3s ease-in-out; /* Smooth animation transitions */
  padding: 20px; /* Add padding for consistent spacing */

  &:hover {
    transform: scale(1.02); /* Slightly scale up on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow on hover */
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const SectionContent = styled.p`
  line-height: 1.6;
  font-size: 16px;
  color: #555;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 40px 0;
`;

const AchievementList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
`;

const AchievementItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutSection>
        <SectionTitle>About Me</SectionTitle>
        <SectionContent>
          Hello! I'm Ishwar Iyer, a passionate and versatile Software Engineer with a keen eye for innovation and a drive for excellence. With a solid foundation in web development and a knack for problem-solving, I thrive in dynamic environments where I can leverage cutting-edge technologies to create impactful solutions.
        </SectionContent>
        <SectionContent>
          I have honed my skills in building scalable and user-centric web applications using a variety of technologies, including React.js, Node.js, and others. My dedication to continuous learning and staying updated with the latest industry trends allows me to adapt quickly to new challenges and deliver results that exceed expectations.
        </SectionContent>
        <SectionContent>
          Whether it's collaborating with cross-functional teams to drive projects forward or diving into the depths of code to troubleshoot complex issues, I am committed to delivering high-quality solutions that drive business growth and user satisfaction.
        </SectionContent>
        <SectionContent>
          Let's connect and explore how I can contribute to your team's success!
        </SectionContent>
      </AboutSection>
      <Line />
      <AboutSection>
        <SectionTitle>Achievements</SectionTitle>
        <SectionContent>Technical</SectionContent>
        <AchievementList>
          <AchievementItem>
            Demonstrated commitment as a head of the Technical team during the departmental fest "Technovision", contributing to the technical aspects of the event.
          </AchievementItem>
          <AchievementItem>
            Participated in Kakushin Hackathon conducted by Nomura
          </AchievementItem>
        </AchievementList>
        <SectionContent>Sports</SectionContent>
        <AchievementList>
          <AchievementItem>
            Representing the Mumbai District Football Association in various divisions, showcasing dedication to the sport.
          </AchievementItem>
          <AchievementItem>
            Holds a Brown Belt in Karate, showcasing dedication to martial arts discipline and training.
          </AchievementItem>
        </AchievementList>
      </AboutSection>
      <Line />
      <AboutSection>
        <SectionTitle>Training/Certifications and Courses</SectionTitle>
        <AchievementList>
          <AchievementItem>Google Analytics</AchievementItem>
          <AchievementItem>Photoshop, Illustrator & Flash Animation</AchievementItem>
          <AchievementItem>Aws For Beginners</AchievementItem>
          <AchievementItem>Python A-Z</AchievementItem>
          <AchievementItem>Complete Series Coding to Design</AchievementItem>
        </AchievementList>
      </AboutSection>
      <Line />
      <AboutSection>
        <SectionTitle>Education</SectionTitle>
        <AboutSection>
          <SectionContent>Master of Computer Applications</SectionContent>
          <AchievementList>
            <AchievementItem>SVKM's NMIMS College</AchievementItem>
            <AchievementItem>3.37 CGPA out of 4</AchievementItem>
          </AchievementList>
        </AboutSection>
        <AboutSection>
          <SectionContent>Bachelor of Computer Science</SectionContent>
          <AchievementList>
            <AchievementItem>SIES</AchievementItem>
            <AchievementItem>9.32 CGPA out of 10</AchievementItem>
          </AchievementList>
        </AboutSection>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;
