import styles from "../apply.module.scss";
export const LabelWithInput = ({ placeholder, label, register, name }) => {
  return (
    <div className={styles["label-container"]}>
      <label className={styles.label}> {label} </label>
      <input
        {...register(name)}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};
