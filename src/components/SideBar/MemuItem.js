import React, { useRef, useState } from "react";
import { NavLink, Link, useMatch } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;

  return (
    <li onClick={props.onClick}>
      <NavLink exact to={to} className={`menu-item`}>
        <div className="menu-icon">
          <img className={`${"menu-item active" ? "imgActive":"image"}`} src={iconClassName} alt="" />
        </div>
        <span>{name}</span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
