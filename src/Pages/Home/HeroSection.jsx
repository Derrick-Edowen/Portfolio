import { Link } from "react-scroll";
import Hero from "../../assets/images/hero.jpg"


export default function HeroSection() {
  
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Derrick Edowen</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack Web </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          </p>
        </div>
        <div>
        <Link
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000} to="Contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </div>
      <div className="hero--section--img">
        <img className="big-image" src={Hero} alt="Hero Section" />
      </div>
    </section>
  );
}
