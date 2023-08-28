import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex-none w-100 p-5 bg-slate-800 text-slate-300	h-screen">
      <p className="text-red-600 text-xs">MAIN</p>
      <ul>
        <li className="mb-7 mt-2 text-xs">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="my-7 text-xs">
          <NavLink to="/">Menu Layout</NavLink>
        </li>
        <li className="my-7 text-xs">
          <NavLink to="/">Order List</NavLink>
        </li>
        <li className="my-7 text-xs">
          <NavLink to="/">Chef Page</NavLink>
        </li>
        <li className="my-7 text-xs">
          <NavLink to="/">Customer Review</NavLink>
        </li>
        <li className="my-7 text-xs">
          <NavLink to="/">Upload Menu</NavLink>
        </li>
      </ul>
      <p className="mb-2 text-red-600 text-xs">AUTHENTATION PAGE</p>
      <ul>
        <li className="mb-7 text-xs mt-2">Log In</li>
        <li className="my-7 text-xs">Register</li>
        <li className="my-7 text-xs">Lock Screen</li>
      </ul>
    </div>
  );
}

export default Sidebar;
