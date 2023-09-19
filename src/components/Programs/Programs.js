import React from "react";
import "./Programs.css";
import Person from "../Person/Person";
import Person2 from "../Person/Person2";
import Person3 from "../Person/Person3";
import { useState } from "react";
import { Fragment } from "react";

export default function Programs() {
  const [tab, settab] = useState("tab1");

  const tabFun = (tab) => {
    settab(tab);
  };

  return (
    <div className="prog">
      <div className="container">
        <div className="creative">
          <h3>
            {" "}
            our <span>Programs</span>
          </h3>
          <p>
            Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor
            at, vehicula finibus massa. Sed tincidunt metus sed eleifend
            suscipit.
          </p>
        </div>

        <div className="buttns-prog">
          <span
            style={{
              color: tab === "tab1" ? "#f2545f" : "",
              borderBottom: tab === "tab1" ? "2px solid #f2545f" : "",
            }}
            onClick={() => {
              tabFun("tab1");
            }}
          >
            FIRST DAY
          </span>
          <span
            style={{
              color: tab === "tab2" ? "#f2545f" : "",
              borderBottom: tab === "tab2" ? "2px solid #f2545f" : "",
            }}
            onClick={() => {
              tabFun("tab2");
            }}
          >
            SECOND DAY
          </span>
          <span
            style={{
              color: tab === "tab3" ? "#f2545f" : "",
              borderBottom: tab === "tab3" ? "2px solid #f2545f" : "",
            }}
            onClick={() => {
              tabFun("tab3");
            }}
          >
            THIRD DAY
          </span>
        </div>

        <div className="line"></div>

        <div className="all">
          {tab === "tab2" ? (
            <Person2 />
          ) : tab === "tab3" ? (
            <Person3 />
          ) : (
            <Person />
          )}
        </div>
      </div>
    </div>
  );
}
