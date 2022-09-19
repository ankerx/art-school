import { useNavigate } from "react-router-dom";
import { morphism } from "morphism";

import { Details } from "./Details";

import styles from "../courses.module.scss";
import { courseSchema } from "../schema";

export const Course = ({ ...item }) => {
  const navigate = useNavigate();

  const { descriptionShort, thumbnailImgUrl } = morphism(schema, item);

  return (
    <div className={styles.card}>
      <div>
        <img src={thumbnailImgUrl} alt={item.name} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.info_container}>
          <p className={styles.title}>{item.name}</p>
          <p className={styles.price}>{item.price}</p>
        </div>
        <div>
          <div className={styles.info_box}>
            <Details
              level={item.level}
              duration={item.duration}
              periodicity={item.periodicity}
            />
          </div>
          <p className={styles.description}>{descriptionShort}</p>
        </div>
        <button
          onClick={() => navigate(`/courses/${item.id}`)}
          className={styles.btn}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
