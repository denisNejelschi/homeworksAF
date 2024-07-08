import React, { useEffect, useState } from "react";
import style from "./layout.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Layout() {
  const location = useLocation();

  console.log("a я тут ?", location.pathname); 

  return (
    <div className={style.page}>
      <header className={style.header}>
        <Link
          className={location.pathname === "/" ? style.active : ""}
          to={"/"}
        >
          home
        </Link>
        <Link
          className={location.pathname === "/KnowGender" ? style.active : ""}
          to={"/KnowGender"}
        >
          Guess gender
        </Link>
        <Link
          className={location.pathname === "/ImageCarousel" ? style.active : ""}
          to={"/ImageCarousel"}
        >
         ImageCarousel
        </Link>
        
        <Link
          className={
            location.pathname === "/LandmarkGallery" ? style.active : ""
          }
          to={"/LandmarkGallery"}
        >
          Landmarks
        </Link>
        <Link
          className={location.pathname === "/CatFacts" ? style.active : ""}
          to={"/CatFacts"}
        >
          Cats
        </Link>
        <Link
          className={location.pathname === "/Login" ? style.active : ""}
          to={"/Login"}
        >
          Login
        </Link>
        <Link
          className={location.pathname === "/Feedback" ? style.active : ""}
          to={"/Feedback"}
        >
          Feedback
        </Link>
        <Link
          className={location.pathname === "/Form" ? style.active : ""}
          to={"/Form"}
        >
          Form
        </Link>
        <Link
          className={location.pathname === "/FakeStore" ? style.active : ""}
          to={"/FakeStore"}
        >
          FakeStore
        </Link>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
      <footer className={style.footer}>
        <>
          <p>made by denisNejelschi</p>
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            onClick={() => window.open("https://github.com/denisNejelschi")}
            style={{ cursor: "pointer" }}
          />
        </>
      </footer>
    </div>
  );
}
