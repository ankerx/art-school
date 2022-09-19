import { useGetAllTeachersQuery } from "../../redux/services/schoolApi";
import { TeacherCard } from "./TeacherCard";

import styles from "./teachers.module.scss";

export const Teachers = () => {
  const { data, isLoading, error } = useGetAllTeachersQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occured</p>;

  return (
    <section>
      <h5 className={styles.heading}>Meet our great team!</h5>
      <div className={styles.wrapper}>
        {data.map((item) => {
          return <TeacherCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
