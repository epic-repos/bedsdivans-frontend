/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Select from "./element/select";
import FilePicker from "./element/picker";
import css from "styles/admin.module.scss";
import AddMoreButton from "./element/addmore";

type E = React.ChangeEvent<HTMLSelectElement | HTMLInputElement>;
// type E = React.ChangeEvent<HTMLInputElement>;

interface StateType {
  id: string;
  name: string;
  image: string;
}

interface OptionsTypes {
  text: any;
  value: any;
}
interface DynamicInputProps {
  title: string;
  options: OptionsTypes[];
  // getState: (value: StateType[]) => void;
  addInputs: () => void;
  initialState: StateType[];
  removeInputs: (id: number | string) => void;
  onChangeInputs: (id: number | string, e: E) => void;
}

const ImageSelect = ({
  title,
  options,
  initialState,
  addInputs,
  removeInputs,
  onChangeInputs,
}: DynamicInputProps) => {
  return (
    <React.Fragment>
      {/* Dynamic Fields */}
      <h4 className={css.heading}>{title}</h4>
      <div className={css.grid}>
        {initialState?.map((data: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="name"
                label="Color Name"
                options={options}
                onChange={(e) => onChangeInputs(index, e)}
                value={data?.name}
              />

              <div className="d-flex" style={{ alignItems: "center" }}>
                <FilePicker
                  name="image"
                  type="file"
                  label="Color Image"
                  placeholder="Enter product name"
                  onChange={(e) => onChangeInputs(index, e)}
                  deletable
                  onDelete={() => removeInputs(data.id)}
                  style={{ width: "100%" }}
                />
              </div>
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={addInputs} title="Add More Color" />
      </div>
    </React.Fragment>
  );
};
export default ImageSelect;

// {data?.image && (
//   <Image
//     width={50}
//     height={50}
//     src={handleImageURL(data?.image)}
//     objectFit={"contain"}
//   />
// )}
