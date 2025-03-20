import React from "react";

const Tab = ({ tab, isActive, onClick, onRemove }) => {
  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {tab.title}
      {onRemove && <span className="close-btn" onClick={(e) => { e.stopPropagation(); onRemove(); }}>✖</span>}
    </div>
  );
};

export default Tab;
