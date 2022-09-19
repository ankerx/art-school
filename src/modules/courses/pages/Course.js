import React from "react";
import { Link, useParams } from "react-router-dom";
import { morphism } from "morphism";

import { useGetAllCoursesQuery } from "../../../redux/services/schoolApi";

import { Details } from "../components/Details";

import styles from "../courses.module.scss";

const schema = {
  descriptionFull: "description_full",
  fullImgUrl: "full_img_url",
};

export const Course = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAllCoursesQuery();

  if (isLoading) return <p>Loading...</p>;

  const course = data.find((i) => i.id === id);

  const { descriptionFull, fullImgUrl } = morphism(schema, course);

  return (
    <section className={styles.single_course_container}>
      <div className={styles.single_course_wrapper}>
        <h4 className={styles.single_course_heading}>{course.name}</h4>
        <div className={styles.single_info_box}>
          <Details
            level={course.level}
            duration={course.duration}
            periodicity={course.periodicity}
          />
        </div>
        <h5>You will learn:</h5>
        <ul>
          {descriptionFull.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <div className={styles.price_wrapper}>
          <p>Price</p>
          <p className={styles.price}>${course.price}</p>
        </div>
        <Link to={`/apply/${course.id}`}>
          <span className={styles.apply_btn}>Apply now</span>
        </Link>
      </div>
      <div className={styles.single_course_img}>
        <img src={fullImgUrl} alt={course.name} />
      </div>
    </section>
  );
};
