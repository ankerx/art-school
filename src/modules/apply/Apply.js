import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";

import { Success } from "./components/Success";
import { Heading } from "./components/Heading";
import { InputsContainer } from "./components/InputsContainer";

import paints from "./images/paints.jpeg";
import styles from "./apply.module.scss";

export const Apply = () => {
  const [isSuccess, setIsSuccess] = useState();

  const methods = useForm({ mode: "onChange" });

  const { isValid, isDirty } = methods.formState;

  const onSubmit = async (data) => {
    const formatedData = {
      courseId: data.course.courseId,
      groupId: data.group.groupId,
      full_name: data.name,
      email: data.email,
      phone: data.phone,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/form/apply",
        formatedData
      );
      console.log(response);
      setIsSuccess(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {isSuccess ? (
        <Success />
      ) : (
        <>
          <div className={styles.flex}>
            <Heading />
            <FormProvider {...methods}>
              <form
                className={styles.form}
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <InputsContainer {...methods} />
                <input
                  type="submit"
                  value="Apply"
                  className={styles.submit}
                  disabled={!isValid || !isDirty}
                />
              </form>
            </FormProvider>
          </div>
          <div className={styles["image-container"]}>
            <img src={paints} alt="paints" />
          </div>
        </>
      )}
    </div>
  );
};
