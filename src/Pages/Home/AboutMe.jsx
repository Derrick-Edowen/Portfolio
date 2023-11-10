import miniHero from "../../assets/images/mini-hero.png"


export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img className="mini-me" src={miniHero} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading">Full Stack Web Developer</h1>
          <p className="hero--section-description">
          Hello there! I'm Derrick Edowen, a passionate and driven web developer with two years of hands-on experience in crafting digital solutions that leave a lasting impression. I thrive on transforming innovative ideas into functional and visually appealing websites that not only meet but exceed expectations.

My Journey:

My journey into the world of web development began two years ago when I discovered my love for coding and design. Since then, I've been on an exciting learning adventure, honing my skills in front-end and back-end development, as well as mastering various programming languages, including HTML, CSS, JavaScript, and more.

I specialize in creating websites that adapt seamlessly to various screen sizes and devices, ensuring an optimal user experience across the board.

I enjoy the challenge of troubleshooting and solving complex problems. Debugging is not just a task but a puzzle I'm eager to crack.

I thrive in a collaborative environment and enjoy working with cross-functional teams. I understand the value of effective communication and teamwork in achieving project success.
          </p>
        </div>
      </div>
    </section>
  );
}
