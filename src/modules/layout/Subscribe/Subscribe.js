import paints from "../../../assets/paints.jpeg";
import styles from "./subscribe.module.scss";
export const SubscribeModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <div>
          <h5>Give us your email to stay tuned!</h5>
          <form>
            <input placeholder="E-mail" />
            <button className={styles.btn}>Subscribe </button>
          </form>
        </div>

        <div>
          <p>You always can undo that in any of your received emails </p>
        </div>
      </div>
      <div className={styles.img_container}>
        <img src={paints} alt="paints" />
      </div>
    </div>
  );
};
