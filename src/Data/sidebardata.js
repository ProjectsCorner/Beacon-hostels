import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Hostels",
    path: "/featured",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Feedback",
    path: "/feedback",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpen />,
    cName: "nav-text",
  },
  {
    title: "Help",
    path: "/help",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
