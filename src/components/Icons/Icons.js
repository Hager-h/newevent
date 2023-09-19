import React from "react";
import "./Icons.css";
import { Data } from "../Dataforicons.js";
import Icondiv from "../Icondiv/Icondiv";
export default function Icons() {
  return (
    <div className="icons">
      {Data.map((item) => (
        <Icondiv
          key={Math.random()}
          id={item.id}
          title={item.title}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </div>
  );
}
