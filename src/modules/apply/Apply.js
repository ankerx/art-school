import paints from "./images/paints.jpeg";
import styles from "./apply.module.scss";
import { Heading } from "./components/Heading";
import { useForm, FormProvider } from "react-hook-form";
// import { LabelWithInput } from "./components/LabelWithInput";
import { InputsContainer } from "./components/InputsContainer";
// import Select from "react-select";
export const Apply = () => {
  const onSubmit = (data) => console.log(data);
  const methods = useForm();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Heading />
        <FormProvider {...methods}>
          <form
            className={styles.form}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputsContainer />
            <input type="submit" value="submit" />
          </form>
        </FormProvider>
      </div>
      <div className={styles["image-container"]}>
        <img src={paints} alt="paints" />
      </div>
    </div>
  );
};
