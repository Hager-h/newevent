import React from "react";
import "./Sponsors.css";

import { Datasponsor } from "../Dataforsponsors.js";
export default function Sponsors() {
  return (
    <div className="sponsor">
      <div className="creative">
        <h3>
          {" "}
          OUR <span>SPONSORS</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.
        </p>
      </div>
      <div className="container">
        <div className="all-spons">
          {Datasponsor.map((item) => {
            return (
              <div className="spons" key={item.id}>
                <img src={item.imagee} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
