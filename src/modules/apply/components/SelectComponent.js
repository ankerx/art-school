import Select from "react-select";
import styles from "../apply.module.scss";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const SelectComponent = ({ label, register, name }) => {
  return (
    <div className={styles["label-container"]}>
      <label className={styles.label}>{label}</label>
      <Select className={styles.select} options={options} {...register(name)} />
    </div>
  );
};
