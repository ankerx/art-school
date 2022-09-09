import { useNavigate } from "react-router-dom";

import { Details } from "./Details";

import styles from "../courses.module.scss";

export const Course = ({
  title,
  price,
  level,
  img,
  duration,
  description,
  id,
  periodicity,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div>
        <img src={img} alt={title} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.info_container}>
          <p className={styles.title}>{title}</p>
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
          <p className={styles.description}>{description}</p>
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
