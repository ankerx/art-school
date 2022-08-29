import styles from "../apply.module.scss";
export const Heading = () => {
  return (
    <div className={styles["text-container"]}>
      <h2>Apply to desired course right away!</h2>
      <h3>
        Select desired course and group, leave us your contact information and
        we’ll reach out to you for confirmation and letting you know about
        further steps
      </h3>
    </div>
  );
};
