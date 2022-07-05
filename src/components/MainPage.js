import React from "react";
import classes from "./MainPage.module.css";
import LandingPage from "../img/Landing page- scrolling photo.png";
import { GiQueenCrown } from "react-icons/gi";
import { BsArrowRightCircle } from "react-icons/bs";

const MainPage = () => {
  return (
    <div className={classes["main_container"]}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h2>
            <GiQueenCrown className={classes.icon} /> Redberry Knight Cup
          </h2>
          <div className={classes.img}>
            <img src={LandingPage} alt="Queen" />
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes["right-title"]}>
          <h1>
            CHESS SAYS <span>A LOT ABOUT</span>
            <br />
            WHO WE ARE
          </h1>
        </div>
        <div className={classes.button}>
          Get Started <BsArrowRightCircle />{" "}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
