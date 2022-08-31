import styles from "../apply.module.scss";

const options = [
  { value: "Select...", text: "Select...", disabled: true },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Select = ({ register, name, label }) => {
  return (
    <div className={styles["label-container"]}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        {...register(name)}
        defaultValue="Select..."
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
