import React, { useState } from "react";
import Tab from "./Tab";
import "../index.css";

const initialTabs = [{ id: 1, title: "Tab 1", content: "Content in the Tab 1" }];

const Tabs = () => {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState(initialTabs[0].id);

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([...tabs, { id: newId, title: `Tab ${newId}`, content: `Content in the Tab ${newId}` }]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    if (tabs.length === 1) return;
    const filteredTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(filteredTabs);
    if (activeTab === id) {
      setActiveTab(filteredTabs[0]?.id || null);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header-wrapper">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab}
                isActive={tab.id === activeTab}
                onClick={() => setActiveTab(tab.id)}
                onRemove={() => removeTab(tab.id)}
              />
            ))}
          </div>
          <button className="add-tab" onClick={addTab}>+ Add Tab</button>
        </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
