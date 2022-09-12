import styles from "../courses.module.scss";
export const Details = ({ level, duration, periodicity }) => (
  <>
    <div>
      <p>Level:</p>
      <p>Duration:</p>
    </div>
    <div className={styles.details_container}>
      <p>{level}</p>
      <div className={styles.details_time}>
        <p className={styles.details}>{duration}</p>
        <p className={styles.details}>{periodicity}</p>
      </div>
    </div>
  </>
);
