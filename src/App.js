import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
