import "./Intro.css";

export default function Intro({ scrollTo }) {
  return (
    <div className="home">
      <div className="container">
        <div className="home-infor">
          <h4 className="home-title margin-bottom">
            July 22 - 26 in San Francisco, CA
          </h4>

          <p className="home-desc">Web Design Conference</p>
          <div className="btns">
            <button className="home-btn">LEARN MORE</button>
            <button className="home-btn two" onClick={scrollTo}>
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
