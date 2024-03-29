import React, { useState } from 'react';
import SideBarTabs from './sidebartabs';

export default function SideBar(props) {
    const [activeTab, setActiveTab] = useState('question-page'); 
  
    const handleTabChange = (e, tabId) => {
      setActiveTab(tabId);
      props.handlePageChange(e);
    };
  
    return (
      <div className="w-1/6 border-r-2 bg-gray-200" style={{ height: 1350 }}>
        <ul className="flex flex-col justify-start items-center h-full">
          <li className="mb-5"></li>
          <SideBarTabs 
            id={"question-page"} 
            handlePageChange={(e) => handleTabChange(e, "question-page")} 
            tabName={"Questions"}
            isActive={activeTab === "question-page"}
          />
          <li className="mb-5"></li>
          <SideBarTabs 
            id={"tag-page"}
            handlePageChange={(e) => handleTabChange(e, "tag-page")} 
            tabName={"Tags"}
            isActive={activeTab === "tag-page"}
          />
            <li className="mb-5"></li>
          <SideBarTabs
            id={"profile-page"}
            handlePageChange={(e) => handleTabChange(e, "profile-page")}
            tabName={"Profile"}
            isActive={activeTab === "profile-page"}
            />
            </ul>
      </div>
    );
  }
  