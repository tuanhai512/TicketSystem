import React, { useState } from "react";
import logo from "../../assets/logo/logo-insign.png";

import MenuItem from "./MemuItem";
import "./SideMenu.css";
export const menuItems = [
  {
    name: "Trang chủ",
    exact: true,
    to: "/",
    iconClassName: require("../../assets/images/home.png"),
  },
  {
    name: "Quản lý vé",
    exact: true,
    to: `/management-ticket`,
    iconClassName: require("../../assets/images/ticket.png"),
  },
  {
    name: "Đổi soát vé",
    to: `/change-ticket`,
    iconClassName: require("../../assets/images/changeticket.png"),
  },
  {
    name: "Cài đặt",
    exact: true,
    to: `/setting/service-pack`,
    iconClassName: require("../../assets/images/ticket.png"),
    subMenus: [{ name: "Gói dịch vụ", to: "/setting/service-pack" }],
  },
];

const SideMenu = () => {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="toggle-menu-btn">
          <i className="bi bi-arrow-left-square-fill"> </i>
        </div>
      </div>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
