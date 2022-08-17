import DeleteIcon from "icons/delete";
import css from "styles/admin.module.scss";
import { S } from "./types";

const Select = ({ options, label, onDelete, deletable, error, ...rest }: S) => {
  return (
    <div className={css.input}>
      <label>{label}</label>
      <div className={css.field}>
        <select {...rest}>
          {options?.map((d, i) => (
            <option key={i} value={d.value}>
              {d.text}
            </option>
          ))}
          {deletable ? (
            <i title="Delete" onClick={onDelete}>
              <DeleteIcon height={18} width={18} />
            </i>
          ) : null}
        </select>
      </div>
      {error ? <span className={css.error}>{error}</span> : null}
    </div>
  );
};

export default Select;
