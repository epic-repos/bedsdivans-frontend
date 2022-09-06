import React from "react";
import Select from "./element/select";
import FilePicker from "./element/picker";
import css from "styles/admin.module.scss";
import AddMoreButton from "./element/addmore";
import id from "utils/id";

interface StateType {
  id: string;
  name: string;
  image: string;
}

interface DynamicInputProps {
  title: string;
  min: number;
  max: number;
  options: {
    text: any;
    value: any;
  }[];
}

const initialState: StateType[] = [
  {
    id: "7d24f79a",
    name: "",
    image: "",
  },
];

const DynamicInput = ({ options, title, max, min }: DynamicInputProps) => {
  const [inputs, setInputs] = React.useState<StateType[]>(initialState);
  const draft = [...(inputs as any)] as any;
  // CHANGE
  const onChangeInputs = (index: number, event: any) => {
    draft[index][event.target.name] = event.target.value;
    if (event.target.name === "image") {
      const file = event.target.files[0];
      // const blob = URL.createObjectURL(file);
      draft[index][event.target.name] = file;
      setInputs(draft);
    } else {
      draft[index][event.target.name] = event.target.value;
      setInputs(draft);
    }
  };
  // ADD
  const addInputs = () => {
    if (inputs.length < max) {
      const addFields = {
        ...inputs,
        id: id(4),
      };
      // @ts-expect-error
      setInputs((draft) => [...draft, addFields]);
    }
  };
  // REMOVE
  const removeInputs = (id: string) => {
    if (id) {
      const filter = draft.filter((v: StateType) => v.id !== id);
      setInputs(filter);
    }
  };

  React.useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <React.Fragment>
      {/* Dynamic Fields */}
      <h4 className={css.heading}>{title}</h4>
      <div className={css.grid}>
        {inputs.map((data: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="name"
                label="Color Name"
                options={options}
                onChange={(e) => onChangeInputs(index, e)}
                value={data?.name}
              />
              <FilePicker
                name="image"
                type="file"
                label="Color Image"
                placeholder="Enter product name"
                onChange={(e) => onChangeInputs(index, e)}
                deletable
                onDelete={() => removeInputs(data.id)}
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={addInputs} title="Add More Color" />
      </div>
    </React.Fragment>
  );
};
export default DynamicInput;
