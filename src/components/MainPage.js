import React from "react";
import classes from "./MainPage.module.css";
import LandingPage from "../img/Landing page- scrolling photo.png";
import { GiQueenCrown } from "react-icons/gi";

const MainPage = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h2 className={classes.title1}>
            <GiQueenCrown className={classes.icon} /> Redberry Knight Cup
          </h2>
          <div className={classes.img}>
            <img src={LandingPage} alt="Queen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
