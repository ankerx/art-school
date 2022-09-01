import success from "../images/Vector.png";
import styles from "../apply.module.scss";
import { Link } from "react-router-dom";
export const Success = () => {
  return (
    <div className={styles.success_container}>
      <div>
        <img src={success} alt="success" />
      </div>
      <h6 className={styles.success_heading}>Thank you!</h6>
      <p className={styles.success_text}>
        Check your mailbox. There should be a confirmation letter.
        <br />
        We’ll contact you soon to give you info about next steps
      </p>
      <Link to="/">
        <span className={styles.success_link}>Back to home</span>
      </Link>
    </div>
  );
};
