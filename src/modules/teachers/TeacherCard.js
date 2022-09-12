import { morphism } from "morphism";

import styles from "./teachers.module.scss";

export const TeacherCard = ({ ...item }) => {
  const schema = {
    firstName: "first_name",
    lastName: "last_name",
  };

  const { firstName, lastName } = morphism(schema, item);
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={item.photo} alt={item.first_name} />
      </div>
      <p className={styles.name}>
        {firstName} {lastName}
      </p>
      <div className={styles.details}>
        <p className={styles.title}>Courses</p>
        <div className={styles.details_courses}>
          {item.courses.map((courseName) => {
            return (
              <p key={courseName} className={styles.text}>
                {courseName}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.title}>Education</p>
        <p className={styles.text}>{item.education}</p>
      </div>
      <div className={styles.details}>
        <p className={styles.title}>About me</p>
        <p className={styles.text}>{item.about}</p>
      </div>
    </div>
  );
};
