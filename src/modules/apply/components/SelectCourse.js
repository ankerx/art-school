import { Controller } from "react-hook-form";

import Select from "react-select";
import styles from "../apply.module.scss";

export const SelectCourse = ({
  label,
  name,
  control,
  options,
  setIsDisabled,
}) => {
  const values = options?.map((value) => ({
    label: value.name,
    courseId: value.id,
  }));

  return (
    <div className={styles["label-container"]}>
      <label className={styles.label}>{label}</label>
      <div className={styles.select_container}>
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={(val) => {
                onChange(val);
                if (val) setIsDisabled(false);
              }}
              value={value}
              selected={value}
              options={values}
            />
          )}
        />
      </div>
    </div>
  );
};
