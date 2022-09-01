import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useGetAllCoursesQuery } from "../../../redux/services/schoolApi";

import { LabelWithInput } from "./LabelWithInput";

import { SelectCourse } from "./SelectCourse";
import { SelectGroup } from "./SelectGroup";

export const InputsContainer = ({ watch }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const methods = useFormContext();

  const { data: courses, isLoading, error } = useGetAllCoursesQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error has occured: {error.message}</p>;

  const coursesOptions = courses.map(({ name, id }) => {
    return { name, id };
  });

  const selectedCourse = watch("course");

  const { groups } =
    courses?.find((item) => item?.name === selectedCourse?.label) || [];

  return (
    <>
      <SelectCourse
        name="course"
        label="Course"
        {...methods}
        options={coursesOptions}
        setIsDisabled={setIsDisabled}
      />
      <SelectGroup
        name="group"
        label="Group"
        {...methods}
        isDisabled={isDisabled}
        options={groups}
      />
      <LabelWithInput label="Full name" name="name" {...methods} type="text" />
      <LabelWithInput label="E-mail" name="email" {...methods} type="email" />
      <LabelWithInput
        label="Phone number"
        name="phone"
        {...methods}
        type="tel"
      />
    </>
  );
};
