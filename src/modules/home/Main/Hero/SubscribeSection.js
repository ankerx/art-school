import "../styles.scss";
import letter from "../../images/letter.png";
import { Button } from "../../components/Button/Button";

export default function SubscribeSection() {
  return (
    <section className="subscribe-section">
      <div className="subscribe-section-container">
        <h3 className="subscribe-title">
          Interested but currently have other plans?
        </h3>
        <p className="subscribe-text">
          Subscribe to our newsletter to stay tuned and get hottest updates and
          deals
        </p>
        <Button text="Subscribe" className="subscribe" />
      </div>
      <div className="subscribe-img-container">
        <img src={letter} alt="letter" />
      </div>
    </section>
  );
}
