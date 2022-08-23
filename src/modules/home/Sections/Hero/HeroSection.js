import { Button } from "../../components/Button/Button";
import "./hero.css";
import paris from "../../images/paris.png";
export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <h1 className="hero-title">
          Desperate to learn drawing? We’ll teach you!
        </h1>
        <h2 className="hero-description">
          Our school has more than 20 years of experience in teaching people who
          always thought that they don’t have even a slightest hint of a talent.
          Some other descriptive stuff that I’m too lazy to make up.
        </h2>
        <h3 className="hero-info">With us you will get:</h3>
        <ul className="hero-info">
          <li className="hero-list-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li className="hero-list-item">
            Vestibulum commodo id amet non facilisis in.
          </li>
          <li className="hero-list-item">
            Est eros, vestibulum cursus luctus luctus aenean molestie.
          </li>
          <li className="hero-list-item">
            Augue ultricies non tristique malesuada justo neque mi, pellentesque
            lacus.
          </li>
        </ul>
        <Button text="Apply now" />
      </div>
      <div className="hero-img-container">
        <img src={paris} alt="paris" />
      </div>
    </section>
  );
};
