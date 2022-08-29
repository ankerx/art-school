import { useFormContext } from "react-hook-form";
import { LabelWithInput } from "./LabelWithInput";
import { Select } from "./Select";

export const InputsContainer = () => {
  const methods = useFormContext();
  return (
    <>
      {/* {/* <SelectComponent label="Course" name="course" {...methods} /> */}
      {/* <SelectComponent label="Group" name="group" {...methods} /> */}
      <Select name="course" label="Course" {...methods} />
      <Select name="group" label="Group" {...methods} />
      <LabelWithInput label="Full name" name="name" {...methods} />
      <LabelWithInput label="E-mail" name="email" {...methods} />
      <LabelWithInput label="Phone number" name="phone" {...methods} />
    </>
  );
};
