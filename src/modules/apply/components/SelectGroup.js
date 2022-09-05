import { Controller } from "react-hook-form";

import Select from "react-select";
import styles from "../apply.module.scss";

export const SelectGroup = ({ label, name, control, options, isDisabled }) => {
  const values = options?.map((value) => ({
    label: value.days.join("/") + " " + value.time,
    groupId: value.id,
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
              }}
              value={value}
              selected={value}
              options={values}
              isDisabled={isDisabled}
            />
          )}
        />
      </div>
    </div>
  );
};
