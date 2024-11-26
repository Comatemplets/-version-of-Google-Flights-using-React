import { useState } from "react";
import Logo from "../../images/google.png";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [Slidebar, setSlidebar] = useState("");

  return (
    <nav className="relative bg-white border-b z-40">
      <div className={`sidebar-content  ${Slidebar} fixed  `}>
        <div className="nav-sidebar relative flex">
          <Link
            to={"/travel"}
            className="flex  items-center gap-2 rounded-3xl  transition duration-150 px-3 py-2 text-sm font-medium  "
            aria-current="page">
            <svg
              enable-background="new 0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              className="HhI4X NMm5M ">
              <g>
                <rect fill="none" height="24" width="24"></rect>
                <path d="M16.5,6H15l0-3.25C15,2.34,14.66,2,14.25,2h-4.5C9.34,2,9,2.34,9,2.75V6H7.5C6.67,6,6,6.67,6,7.5v11 C6,19.33,6.67,20,7.5,20v0.5C7.5,21.33,8.17,22,9,22s1.5-0.67,1.5-1.5V20h3v0.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5V20 c0.83,0,1.5-0.67,1.5-1.5v-11C18,6.67,17.33,6,16.5,6z M10.5,3.5h3V6h-3V3.5z M14.56,15.58c-0.62,0.57-1.47,0.91-2.48,0.91 c-1.46,0-2.73-0.84-3.35-2.07c-0.26-0.51-0.4-1.08-0.4-1.68c0-0.61,0.14-1.18,0.4-1.69c0.62-1.22,1.89-2.07,3.35-2.07 c0.99,0,1.84,0.36,2.48,0.95c0.01,0.01,0.01,0.04,0,0.05L13.54,11c-0.01,0.02-0.04,0.02-0.05,0c-0.39-0.35-0.87-0.53-1.41-0.53 c-0.98,0-1.8,0.66-2.1,1.55c-0.08,0.23-0.12,0.47-0.12,0.71c0,0.25,0.04,0.49,0.12,0.71c0.3,0.89,1.12,1.55,2.1,1.55 c0.5,0,0.93-0.13,1.27-0.36c0.38-0.25,0.64-0.63,0.73-1.08c0-0.02-0.01-0.05-0.04-0.05h-1.93c-0.02,0-0.04-0.02-0.04-0.04v-1.37 c0-0.02,0.02-0.04,0.04-0.04h3.46c0.02,0,0.03,0.01,0.04,0.03c0.04,0.23,0.06,0.48,0.06,0.73C15.68,13.97,15.27,14.93,14.56,15.58z"></path>
              </g>
            </svg>
            Travel
          </Link>
          <Link
            to={"/explore"}
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              enable-background="new 0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              className="HhI4X NMm5M ">
              <rect fill="none" height="24" width="24"></rect>
              <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
            </svg>
            Explore
          </Link>
          <Link
            to={"/"}
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              enable-background="new 0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              className="HhI4X NMm5M ">
              <rect fill="none" height="24" width="24"></rect>
              <path d="M3.29,6.56l1.41-1.41l9.55,2.47l3.89-3.89c0.59-0.59,1.53-0.59,2.12,0s0.59,1.53,0,2.12l-3.89,3.89l2.47,9.55l-1.41,1.41 l-4.24-7.78l-3.89,3.89l0.35,2.47L8.6,20.35l-1.77-3.18L3.65,15.4l1.06-1.06l2.47,0.35l3.89-3.89L3.29,6.56z"></path>
            </svg>
            Flights
          </Link>
          <Link
            to={"/hotels"}
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              enable-background="new 0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              className="HhI4X NMm5M ">
              <g>
                <rect fill="none" height="24" width="24"></rect>
              </g>
              <g>
                <g>
                  <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-7h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path>
                </g>
              </g>
            </svg>
            Hotels
          </Link>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              enable-background="new 0 0 24 24"
              width="24"
              height="24"
              focusable="false"
              className="HhI4X NMm5M ">
              <g>
                <g>
                  <rect fill="none" height="24" width="24"></rect>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"></path>
                  </g>
                </g>
              </g>
            </svg>
            Vacation rentals
          </a>
          <span className="pl-2 text-xs text-gray-400 ">
            Change information
          </span>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className=" NMm5M hhikbc">
              <path d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path>
            </svg>
            Tracked flight prices
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className=" NMm5M">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>
            Change language
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor">
              <g>
                <rect fill="none" width="24" height="24"></rect>
              </g>
              <g>
                <g>
                  <circle cx="12" cy="12" r="3"></circle>
                  <polygon points="6.5,9.5 9,9.5 9,8 5,8 5,12 6.5,12"></polygon>
                  <polygon points="15,16 19,16 19,12 17.5,12 17.5,14.5 15,14.5"></polygon>
                  <path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20, 5z M20,17H4V7h16V17z"></path>
                </g>
              </g>
            </svg>
            Change currency
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className=" NMm5M">
              <path d="M18.17 4.91L17.1 3.84l-5.55 5.55v1.08h1.08l5.54-5.56zM16 2.74l1.29-1.29a1.49 1.49 0 0 1 2.12 0l1.15 1.15c.59.59.59 1.54 0 2.12l-.68.68-.02.02-.58.58-6 6H10V8.74l6-6zm-2.28-.55l-.55.55-1.27 1.27c-3.3.05-5.9 2.6-5.9 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-.1l1.8-1.8c.13.6.2 1.24.2 1.9 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.2.58 0 1.16.06 1.72.18z"></path>
            </svg>
            Change location
          </a>
          <span className="pl-2 text-xs text-gray-400">settings</span>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className=" NMm5M">
              <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
              <circle cx="12" cy="12" r="3.5"></circle>
            </svg>
            Flights settings
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className=" NMm5M">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12z"></path>
              <path d="M11 12h2v2h-2zm0-6h2v4h-2z"></path>
            </svg>
            Feedback
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-3xl    transition duration-150  px-3 py-2 text-sm font-medium "
            aria-current="page">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className=" NMm5M">
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
            Help
          </a>
        </div>
      </div>

      <div className=" px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center  justify-start">
            <button
              onClick={() =>
                Slidebar === "active-bar"
                  ? setSlidebar("")
                  : setSlidebar("active-bar")
              }
              className={`btn-menu flex ${Slidebar} justify-center items-center mr-4 shrink-0 w-10 h-10 hover:bg-gray-200 rounded-full`}>
              <i className="bx bx-menu text-3xl text-gray-500"></i>
            </button>
            <a className="flex items-center" aria-label="Google" href="/">
              <img className="w-20" src={Logo} alt="" srcset="" />
            </a>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                <NavLink
                  className={`flex items-center gap-2 ${({ isActive }) =>
                    isActive
                      ? "active-link"
                      : ""} rounded-3xl border text-black  hover:bg-blue-50 hover:text-Link transition duration-150 px-3 py-2 text-sm font-medium `}
                  to="/travel"
                  aria-current="page">
                  <svg
                    enable-background="new 0 0 24 24"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    focusable="false"
                    className="HhI4X NMm5M fill-blue-600">
                    <g>
                      <rect fill="none" height="24" width="24"></rect>
                      <path d="M16.5,6H15l0-3.25C15,2.34,14.66,2,14.25,2h-4.5C9.34,2,9,2.34,9,2.75V6H7.5C6.67,6,6,6.67,6,7.5v11 C6,19.33,6.67,20,7.5,20v0.5C7.5,21.33,8.17,22,9,22s1.5-0.67,1.5-1.5V20h3v0.5c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5V20 c0.83,0,1.5-0.67,1.5-1.5v-11C18,6.67,17.33,6,16.5,6z M10.5,3.5h3V6h-3V3.5z M14.56,15.58c-0.62,0.57-1.47,0.91-2.48,0.91 c-1.46,0-2.73-0.84-3.35-2.07c-0.26-0.51-0.4-1.08-0.4-1.68c0-0.61,0.14-1.18,0.4-1.69c0.62-1.22,1.89-2.07,3.35-2.07 c0.99,0,1.84,0.36,2.48,0.95c0.01,0.01,0.01,0.04,0,0.05L13.54,11c-0.01,0.02-0.04,0.02-0.05,0c-0.39-0.35-0.87-0.53-1.41-0.53 c-0.98,0-1.8,0.66-2.1,1.55c-0.08,0.23-0.12,0.47-0.12,0.71c0,0.25,0.04,0.49,0.12,0.71c0.3,0.89,1.12,1.55,2.1,1.55 c0.5,0,0.93-0.13,1.27-0.36c0.38-0.25,0.64-0.63,0.73-1.08c0-0.02-0.01-0.05-0.04-0.05h-1.93c-0.02,0-0.04-0.02-0.04-0.04v-1.37 c0-0.02,0.02-0.04,0.04-0.04h3.46c0.02,0,0.03,0.01,0.04,0.03c0.04,0.23,0.06,0.48,0.06,0.73C15.68,13.97,15.27,14.93,14.56,15.58z"></path>
                    </g>
                  </svg>
                  Travel
                </NavLink>
                <NavLink
                  className={`flex items-center gap-2 ${({ isActive }) =>
                    isActive
                      ? "active-link"
                      : ""} rounded-3xl border text-black  hover:bg-blue-50 hover:text-Link transition duration-150 px-3 py-2 text-sm font-medium `}
                  to="/explore"
                  aria-current="page">
                  <svg
                    enable-background="new 0 0 24 24"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    focusable="false"
                    className="HhI4X NMm5M fill-blue-600">
                    <rect fill="none" height="24" width="24"></rect>
                    <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
                  </svg>
                  Explore
                </NavLink>
                <NavLink
                  className={`flex items-center gap-2 ${({ isActive }) =>
                    isActive
                      ? "active-link"
                      : ""} rounded-3xl border text-black  hover:bg-blue-50 hover:text-Link transition duration-150 px-3 py-2 text-sm font-medium `}
                  to="/"
                  aria-current="page">
                  <svg
                    enable-background="new 0 0 24 24"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    focusable="false"
                    className="HhI4X NMm5M fill-blue-600">
                    <rect fill="none" height="24" width="24"></rect>
                    <path d="M3.29,6.56l1.41-1.41l9.55,2.47l3.89-3.89c0.59-0.59,1.53-0.59,2.12,0s0.59,1.53,0,2.12l-3.89,3.89l2.47,9.55l-1.41,1.41 l-4.24-7.78l-3.89,3.89l0.35,2.47L8.6,20.35l-1.77-3.18L3.65,15.4l1.06-1.06l2.47,0.35l3.89-3.89L3.29,6.56z"></path>
                  </svg>
                  Flights
                </NavLink>
                <NavLink
                  className={`flex items-center gap-2 ${({ isActive }) =>
                    isActive
                      ? "active-link"
                      : ""} rounded-3xl border text-black  hover:bg-blue-50 hover:text-Link transition duration-150 px-3 py-2 text-sm font-medium `}
                  to="/hotels"
                  aria-current="page">
                  <svg
                    enable-background="new 0 0 24 24"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    focusable="false"
                    className="HhI4X NMm5M fill-blue-600">
                    <g>
                      <rect fill="none" height="24" width="24"></rect>
                    </g>
                    <g>
                      <g>
                        <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm12-7h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path>
                      </g>
                    </g>
                  </svg>
                  Hotels
                </NavLink>
                <NavLink
                  className={`flex items-center gap-2 ${({ isActive }) =>
                    isActive
                      ? "active-link"
                      : ""} rounded-3xl border text-black  hover:bg-blue-50 hover:text-Link transition duration-150 px-3 py-2 text-sm font-medium `}
                  to="/vacation"
                  aria-current="page">
                  <svg
                    enable-background="new 0 0 24 24"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    focusable="false"
                    className="HhI4X NMm5M fill-blue-600">
                    <g>
                      <g>
                        <rect fill="none" height="24" width="24"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <g>
                          <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Vacation rentals
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
