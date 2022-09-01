import { useGetAllTeachersQuery } from "../../redux/services/schoolApi";

export const Teachers = () => {
  const { data } = useGetAllTeachersQuery();
  console.log(data);
  return <div>Teachers</div>;
};
