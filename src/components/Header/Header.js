import {
  Search,
  SupervisorAccount,
  Home,
  Notifications,
  Chat,
  BusinessCenter,
  ArrowDropDown,
} from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import "./Header.css";
import HeaderOption from "./HeaderOption";
// import { useDispatch } from "react-redux";
// import { logout } from "../../features/userSlice";
// import { auth } from "../../firebase";
import { signOutAPI } from "../../actions";

const Header = () => {
  const dispatch = useDispatch();
  // const logoutOfApp = () => {
  //   dispatch(logout());
  //   auth.signOut();
  // };

  const logoutOfApp = () => {
    dispatch(signOutAPI());
  };

  return (
    <div className="main_H">
      <div className="header_line">
        <div className="container header">
          <div className="header_left">
            <img
              src="https://freepngimg.com/thumb/categories/1371.png"
              alt=""
            />
            <div className="header_search">
              <Search />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="header_right">
            <HeaderOption classs="active" Icon={Home} title="Home" />
            <span className="network_hide">
              <HeaderOption title="My Network" Icon={SupervisorAccount} />
            </span>
            <HeaderOption title="Jobs" Icon={BusinessCenter} />
            <HeaderOption title="Messeging" Icon={Chat} />
            <HeaderOption title="Notifications" Icon={Notifications} />{" "}
            <HeaderOption
              onClick={logoutOfApp}
              title="me"
              Dropdown={true}
              avatar={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
