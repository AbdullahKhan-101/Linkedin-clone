import React, { useEffect } from "react";
import Header from "../Header/Header";
import Leftside from "../Left/Leftside";
import Main from "../Main/Main";
import Rightside from "../Right/Rightside";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import "react-perfect-scrollbar/dist/css/styles.css";

const Home = () => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const history = useNavigate();

  useEffect(() => {
    {
      !user && history("/");
    }
  }, []);

  return (
    <div>
      {!user && history("/")}
      <Header />
      <div className="home container">
        <div className="upwork_add">
          <h5>
            <a href="https://www.upwork.com" target="_blank">
              Hiring in a hurry? -{" "}
            </a>
          </h5>
          <p>
            Find talendted pros in record time with Upwork and keep business
            moving.
          </p>
        </div>
        <div className="layout">
          <div className="left_side">
            <Leftside />
          </div>
          <div className="main">
            <Main />
          </div>
          <div className="right_side">
            <Rightside />
          </div>
        </div>
      </div>
      {/* </PerfectScrollbar> */}
    </div>
  );
};

export default Home;
