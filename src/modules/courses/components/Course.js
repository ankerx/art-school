import { useNavigate } from "react-router-dom";

import { Details } from "./Details";

import styles from "../courses.module.scss";

export const Course = ({ course }) => {
  const navigate = useNavigate();
  const {
    thumbnailImgUrl,
    name,
    price,
    level,
    duration,
    periodicity,
    descriptionShort,
    id,
  } = course;

  return (
    <div className={styles.card}>
      <div>
        <img src={thumbnailImgUrl} alt={name} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.info_container}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>{price}</p>
        </div>
        <div>
          <div className={styles.info_box}>
            <Details
              level={level}
              duration={duration}
              periodicity={periodicity}
            />
          </div>
          <p className={styles.description}>{descriptionShort}</p>
        </div>
        <button
          onClick={() => navigate(`/courses/${id}`)}
          className={styles.btn}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
