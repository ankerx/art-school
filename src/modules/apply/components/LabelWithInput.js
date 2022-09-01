import styles from "../apply.module.scss";
export const LabelWithInput = ({
  placeholder,
  label,
  register,
  name,
  type,
}) => {
  return (
    <div className={styles["label-container"]}>
      <label className={styles.label}> {label} </label>
      <input
        type={type}
        {...register(name)}
        className={styles.input}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
