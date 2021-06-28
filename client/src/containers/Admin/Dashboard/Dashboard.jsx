import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarContent from "./SidebarContent";
import "./Dashboard.scss";

function Dashboard() {
  const [toggled, setToggled] = useState(false);
  
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`dashboard ${toggled ? "toggled" : ""}`}>
      <Sidebar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
       <SidebarContent
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
}

export default Dashboard;
