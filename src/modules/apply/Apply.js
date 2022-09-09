import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useParams } from "react-router-dom";

import { postData } from "./api/applyApi";

import { Success } from "./components/Success";
import { Heading } from "./components/Heading";
import { InputsContainer } from "./components/InputsContainer";

import paints from "./images/paints.jpeg";
import styles from "./apply.module.scss";
import { useParams } from "react-router-dom";

export const Apply = () => {
  const { id } = useParams();

  const [isSuccess, setIsSucces] = useState();
  const { id } = useParams();

  const methods = useForm({ mode: "onChange" });

  const { isValid, isDirty } = methods.formState;

  const onSubmit = async (data) => {
    const formattedData = {
      courseId: data.course.courseId,
      groupId: data.group.groupId,
      full_name: data.name,
      email: data.email,
      phone: data.phone,
    };
    try {
      await postData(formattedData);
      setIsSucces(true);
    } catch (error) {
      console.error(error);
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
                <InputsContainer {...methods} id={id} />
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
