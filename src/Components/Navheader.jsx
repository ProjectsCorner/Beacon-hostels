import React, {useState} from 'react';
import "../Design/navheader.css";
import SearchIcon from "@mui/icons-material/Search";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {sidebarData} from "../Data/sidebardata";
import { IconContext } from 'react-icons';
import Logo from "../assets/beacon logo8.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandUpIcon from "@mui/icons-material/ExpandLess";
import ExpandDownIcon from "@mui/icons-material/ExpandMore";
import userr from "../app.config";
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import SettingsIcon from "@mui/icons-material/Settings";
import HouseboatIcon from "@mui/icons-material/Houseboat";




export default function Navheader() {
  const navigate = useNavigate();
    const [state, setState] = useState({
      userDropDownActive: false,
      helpDropDownActive: false,
    });
      const [sidebar, setSidebar] = useState(false);
      const showSidebar = ()=>{setSidebar(!sidebar);}
   
  return (
    <>
      <IconContext.Provider value={{ color: "blue" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/">
            <div className="hdr-nav-logo">
              <img src={Logo} alt="" />
            </div>
          </Link>
          <div className="header-search-ctn">
            <form className="header-search">
              <input
                type="text"
                name="search"
                placeholder="Search for your hostel...."
              />
              <button className="search-icon" type="submit">
                <SearchIcon fontSize="medium" />
              </button>
            </form>
          </div>
          <div className="h-btn-s">
            <Button style={{ fontSize: "13px" }}>Login</Button>
            <Button style={{ fontSize: "13px" }}>Register</Button>
          </div>
          <div className="user-account">
            <button
              className="user-round"
              onFocus={() => {
                if (userr) {
                  setState({
                    ...state,
                    userDropDownActive: true,
                  });
                } else {
                  navigate("/");
                }
              }}
              onBlur={() => {
                setTimeout(() => {
                  setState({
                    ...state,
                    userDropDownActive: false,
                  });
                }, 500);
              }}
            >
              <AccountCircleIcon />

              {state.userDropDownActive ? <ExpandUpIcon /> : <ExpandDownIcon />}
            </button>
            <ul
              className="drop_dwn -p"
              style={
                state.userDropDownActive
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <Link to="/profile">
                <li className="icns">
                  <AccountCircleIcon color="primary" />
                  My Profile
                </li>
              </Link>
              <Link to="/settings">
                <li className="icns">
                  <SettingsIcon color="primary" />
                  Settings
                </li>
              </Link>
              <Link to="/bookings">
                <li className="icns">
                  <HouseboatIcon color="primary" />
                  Bookings
                </li>
              </Link>
              <a href="/edit">
                <li className="icns">
                  <PersonIcon color="primary" variant="outlined" />
                  Edit Profile
                </li>
              </a>
              <li className="icns">
                <Button
                  variant="outlined"
                  style={{ width: "100%" }}
                  onClick={() => {
                    const token_stored = localStorage.getItem("token");
                    if (token_stored) {
                      localStorage.removeItem("token");
                    } else {
                      sessionStorage.removeItem("token");
                    }
                    window.location.replace("/");
                  }}
                >
                  <i className="las la-sign-out-alt"></i>
                  Log Out
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
          <ul className="nav_menu_items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
