import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Covid-19 Impact Data Analysis',
    description: [
      'Sorted and processed a dataset of over 10 million records to extract key insights on global COVID19 cases.',
      'Presented detailed analysis of top 10 countries with highest COVID19 cases, showing a 30% increase in cases in Q4 2023 compared to the previous year.',
      'Examined COVID19 spread patterns, identifying a 15% acceleration rate in infection rates across urban centers over 3 months.',
      'Calculated a 5% mortality rate among affected populations, with regional variations analyzed.',
      'Assessed economic impact, correlating a 20% GDP decline with lockdown measures and reduced consumer spending. Studied HDI changes, noting a 10-point decrease due to disruptions in education and healthcare.'
    ],
    skills: ['Data Analysis', 'Visualization', 'Python'],
    link: 'https://your-project-link.com', // Optional link to project details
    imageUrl: 'path/to/your/image.jpg', // Add image URL and alt text
    altText: 'Covid-19 Data Analysis Project', // Descriptive alt text
  },
  {
    title: 'CryptoCurrency Portfolio Application',
    description: [
      'Implemented CRUD operations with SQLite3, achieving a 20% improvement in data efficiency compared to traditional file-based methods.',
      'Integrated real-time cryptocurrency values from CoinMarketCap API, providing updates every 10 seconds for accurate investment decisions.',
      'Designed responsive GUI with Tkinter, earning 95% positive feedback for usability and aesthetics.',
      'Developed using Python, reducing development time by 30% compared to other languages.',
      'Implemented color-coded indicators for visual feedback on rate changes, leading to 87% user satisfaction.'
    ],
    skills: ['Python', 'Tkinter', 'SQLite3', 'CoinMarketCapAPI', 'SQL', 'Server Management', 'Studio Management'],
    link: 'https://your-project-link.com', // Optional link to project details
    imageUrl: 'path/to/your/image.jpg', // Add image URL and alt text
    altText: 'CryptoCurrency Portfolio Application Project', // Descriptive alt text
  },
  {
    title: 'Image Classification Model Deep Learning',
    description: [
      'Sourced and processed 10,000 diverse happy and sad images to create a high-quality dataset.',
      'Presented detailed analysis of top 10 countries with highest COVID19 cases, showing a 30% increase in cases in Q4 2023 compared to the previous year.',
      'Visualized training progress through detailed accuracy and loss graphs.',
      'Validated model accuracy with 82% precision and 88% recall on a separate test dataset.',
      'Demonstrated coding proficiency by optimizing and saving the model in efficient h5 format.'
    ],
    skills: ['Tensorflow', 'Jupyter Notebook', 'Numpy', 'Keras'],
    link: 'https://your-project-link.com', // Optional link to project details
    imageUrl: 'path/to/your/image.jpg', // Add image URL and alt text
    altText: 'Image Classification Model Deep Learning Project', // Descriptive alt text
  },
  {
    title: 'Serverless Api using Api Gateway, Lambda and DynammoDb',
    description: [
      'Developed DynamoDBManager for centralized DynamoDB operations.',
      'Implemented POST method using Lambda for efficient database interactions. Utilized Amazon API Gateway for seamless Lambda function invocation.',
      'Designed to support essential DynamoDB operations (create, update, delete).',
      'Managed CRUD operations for optimized data management.',
      'Implemented efficient data retrieval mechanisms.',
      'Demonstrated AWS serverless proficiency and database management skills.'
    ],
    skills: ['JSON', 'AWS', 'Postman'],
    link: 'https://your-project-link.com', // Optional link to project details
    imageUrl: 'path/to/your/image.jpg', // Add image URL and alt text
    altText: 'Serverless Api using Api Gateway, Lambda and DynammoDb Project', // Descriptive alt text
  },
  {
    title: 'BuildTogether',
    description: [
      'A full stack D&I dashboard focused on gender diversity using the MERN stack (MongoDB, Express.js, React.js, and Node.js). ',
      'Conducts extensive data analysis on a dataset to provide insights on gender diversity within organizations, and visualizes it with interactive graphs by the use of nivo charts.',
      'Implemented predictive modeling techniques, such as linear regression, to make accurate predictions based on historic data.',
      'Leveraged MongoDB aggregate queries for efficient data retrieval and analysis. '
    ],
    skills: ['ReactJs', 'MongoDB', 'Express', 'Nodejs', 'Material UI '],
    link: 'https://your-project-link.com', // Optional link to project details
    imageUrl: 'path/to/your/image.jpg', // Add image URL and alt text
    altText: 'BuildTogether Project', // Descriptive alt text
  }
];

const ProjectsContainer = styled(motion.section)`
  padding: 20px;
  text-align: left;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectItem = styled(motion.div)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProjectDescription = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
`;

const ProjectDetails = styled.ul`
  margin-bottom: 10px;
  padding-left: 20px;
`;

const ProjectDetail = styled.li`
  font-size: 14px;
  color: #555;
`;

const SkillsUsed = styled.ul`
  font-weight: bold;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  color: #333;
  text-decoration: underline;
`;

const Projects = () => {
  return (
    <ProjectsContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <ProjectItem key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          {/* Uncomment the following line if you want to include images */}
          {/*project.imageUrl && <ProjectImage src={project.imageUrl} alt={project.altText} />*/}
          <ProjectDescription>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDetails>
              {project.description.map((descItem, i) => (
                <ProjectDetail key={i}>{descItem}</ProjectDetail>
              ))}
            </ProjectDetails>
            <SkillsUsed>Skills Used: {project.skills.join(', ')}</SkillsUsed>
            {/* Uncomment the following line if you want to include project links */}
            {/*project.link && <ProjectLink href={project.link}>Learn More</ProjectLink>*/}
          </ProjectDescription>
        </ProjectItem>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
