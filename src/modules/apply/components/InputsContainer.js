import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useGetAllCoursesQuery } from "../../../redux/services/schoolApi";

import { LabelWithInput } from "./LabelWithInput";

import { SelectComponent } from "./SelectComponent";

export const InputsContainer = ({ watch, id }) => {
  const methods = useFormContext();
  const selectedCourse = watch("course");

  const { data: courses, isLoading, error } = useGetAllCoursesQuery();

  const courseOptions = useMemo(() => {
    const options = courses?.map(({ name, id }) => ({
      label: name,
      courseId: id,
    }));
    return options;
  }, [courses]);

  const indexNumber = courseOptions?.findIndex((i) => i.courseId === id);

  const groupsOptions = useMemo(() => {
    const { groups } =
      courses?.find((item) => item?.name === selectedCourse?.label) || [];

    return groups?.map((value) => ({
      label: value.days.join("/") + " " + value.time,
      groupId: value.id,
    }));
  }, [courses, selectedCourse?.label]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error has occured: {error.message}</p>;

  return (
    <>
      <SelectComponent
        name="course"
        label="Course"
        {...methods}
        options={courseOptions}
        indexNumber={indexNumber}
      />
      <SelectComponent
        name="group"
        label="Group"
        {...methods}
        isDisabled={Boolean(!selectedCourse)}
        options={groupsOptions}
      />

      <LabelWithInput label="Full name" name="name" {...methods} type="text" />

      <LabelWithInput
        label="E-mail"
        name="email"
        {...methods}
        type="email"
        placeholder="email@email.com"
      />
      <LabelWithInput
        label="Phone number"
        name="phone"
        {...methods}
        type="tel"
        placeholder="(___)___-__-__"
      />
    </>
  );
};
