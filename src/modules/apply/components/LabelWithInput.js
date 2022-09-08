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
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.label_flex}>
        <input
          type={type}
          {...register(name, {
            minLength: 3,
            required: true,
          })}
          className={styles.input}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};
