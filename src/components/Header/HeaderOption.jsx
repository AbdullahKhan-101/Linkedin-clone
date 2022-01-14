import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";

const HeaderOption = ({ Icon, title, Dropdown, avatar, classs, onClick }) => {
  //   const user = useSelector(selectUser);
  const user = useSelector((state) => state.userState.user);
  // const dispatch = useDispatch();
  return (
    <div className={`headerOption ${classs}`}>
      {Icon && <Icon className="headerOption_icon " />}
      {avatar && (
        <Avatar className="headerOption_icon" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title ">
        <span className="dropdown">
          <span className="headerOption_title_inside">{title}</span>{" "}
          {Dropdown && <ArrowDropDown />}
          {Dropdown && (
            <a onClick={onClick} className="signOut">
              SignOut
            </a>
          )}
        </span>
      </h3>
    </div>
  );
};

export default HeaderOption;
