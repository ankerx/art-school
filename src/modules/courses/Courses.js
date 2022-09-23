import { useGetAllCoursesQuery } from "../../redux/services/schoolApi";

import { Course } from "./components/Course";

import styles from "./courses.module.scss";

export const Courses = () => {
  const { data, isLoading, error } = useGetAllCoursesQuery();

  if (error) return <p>Error has occured</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Pick your perfect course!</h2>
      <div className={styles.container}>
        {data.map((item) => {
          return <Course key={item.id} course={item} />;
        })}
      </div>
    </section>
  );
};
