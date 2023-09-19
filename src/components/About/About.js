import "./About.css";
import imgAbout from "../../images/overview-img.jpg";
export default function About() {
  return (
    <div className="container over">
      <div className="overview-text">
        <h3>
          New Event is a fully responsive one-page template for events,
          conferences or workshops
        </h3>

        <p>
          {" "}
          This is a Bootstrap v3.3.6 layout that is responsive and mobile
          friendly. You may download and modify this template for your website.
          Please tell your friends about templatemo.
        </p>

        <p>
          Quisque facilisis scelerisque venenatis. Nam vulputate ultricies
          luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy nibh euismod tincidunt ut laoreet.
        </p>
      </div>
      <div className="image-overview">
        <img src={imgAbout} alt="" />
      </div>
    </div>
  );
}
