import DeleteIcon from "icons/delete";
import css from "styles/admin.module.scss";
import { I } from "../types";

const Input = ({
    label,
    onDelete,
    deletable,
    type,
    ImageElement,
    error,
    ...rest
}: I) => {
    return (
        <div className={css.input}>
            <label>{label}</label>
            <div className={css.field}>
                <input type={type} {...rest} />
                {deletable ? (
                    <i title="Delete" onClick={onDelete}>
                        <DeleteIcon height={18} width={18} />
                    </i>
                ) : null}
                {type === "file" && (
                    <div className={css.fileupload}>{ImageElement}</div>
                )}
            </div>
            {error ? <span className={css.error}>{error}</span> : null}
        </div>
    );
};

export default Input;
