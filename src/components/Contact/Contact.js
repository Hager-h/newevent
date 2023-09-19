import React from "react";
import "./Contact.css";
import "../Register/Register.css";
export default function Contact() {
  return (
    <div className="contact  ">
      <div className="container  ">
        <div className="video-text ">
          <h3>New Event</h3>
          <p>
            Proin sodales convallis urna eu condimentum. Morbi tincidunt augue
            eros, vitae pretium mi condimentum eget. Suspendisse eu turpis sed
            elit pretium congue.
          </p>
          <p>
            Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
            fringilla vestibulum. Praesent ullamcorper mauris fermentum turpis
            scelerisque rutrum eget eget turpis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet consectetuer diam nonummy.
          </p>

          <div className="reg-btn-div">
            <button className="reg-btn">DOWNLOAD NOW</button>
          </div>
        </div>
        <div
          className="video-overview"
          style={{ background: "white", padding: "20px 0px" }}
        >
          <h3>Keep In Touch</h3>
          <form>
            <input type="text" placeholder=" Name" />
            <input type="email" placeholder="Email " />
            <textarea name="Message" placeholder="Message" />
          </form>

          <div className="reg-btn-div">
            <button className="reg-btn">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
