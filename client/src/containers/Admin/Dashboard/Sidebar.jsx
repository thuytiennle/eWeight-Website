import React from "react";
import { useDispatch} from 'react-redux';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  import {
    FaUsers,
    FaWeight,
    FaGithub,
  } from "react-icons/fa";
  import { Header } from "../../../components/Header";
  import {actSelectUserManagement, actSelectWeightManagement} from './module/action';

function Sidebar({toggled, handleToggleSidebar }) {
  const dispatch = useDispatch();
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Header id="logo">
            <span id="sub-logo">E</span>Weight
          </Header>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          {/* click on menu wil direct page */}
          <MenuItem icon={<FaUsers />} onClick={()=> dispatch(actSelectUserManagement())}>User Management</MenuItem>
          <MenuItem icon={<FaWeight />} onClick={()=> dispatch(actSelectWeightManagement())}>Weight Management</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>viewSource</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default Sidebar;
