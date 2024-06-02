// src/components/Tabs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ isActive }) => (isActive ? '#333' : '#999')};
  color: white;
  border: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth background color transition */

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#222' : '#777')};
  }
`;

const TabContent = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  transition: opacity 0.3s ease; /* Smooth opacity transition */
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabsContainer>
      <div>
        {tabs.map((tab, index) => (
          <TabContent key={index} isActive={activeTab === index}>
            {tab.content}
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
