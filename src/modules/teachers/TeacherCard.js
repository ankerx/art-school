import { morphism } from "morphism";
import { teacherSchema } from "./schema";

import styles from "./teachers.module.scss";

export const TeacherCard = (props) => {
  const { firstName, lastName } = morphism(teacherSchema, props);
  const { courses, photo } = props;

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={photo} alt={firstName} />
      </div>
      <p className={styles.name}>
        {firstName} {lastName}
      </p>
      <div className={styles.details}>
        <p className={styles.title}>Courses</p>
        <div className={styles.details_courses}>
          {courses.map((courseName) => {
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
        <p className={styles.text}>{props.education}</p>
      </div>
      <div className={styles.details}>
        <p className={styles.title}>About me</p>
        <p className={styles.text}>{props.about}</p>
      </div>
    </div>
  );
};
