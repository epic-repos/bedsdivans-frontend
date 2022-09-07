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

interface OptionsTypes {
  text: any;
  value: any;
}
interface DynamicInputProps {
  title: string;
  // min?: number;
  // max?: number;
  options: OptionsTypes[];
  getState: (value: StateType[]) => void;
  initialState?: StateType[];
}

const init: StateType[] = [
  {
    id: "7d24f79a",
    name: "",
    image: "",
  },
];

const DynamicInput = ({
  options,
  title,
  getState,
  initialState,
}: DynamicInputProps) => {
  console.log({ initialState });
  const [inputs, setInputs] = React.useState<StateType[]>(initialState || init);
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
    const addFields = {
      id: id(4),
      name: "",
      image: "",
    };

    draft.push(addFields);
    setInputs(draft);
  };
  // REMOVE
  const removeInputs = (id: string) => {
    if (id) {
      const filter = inputs.filter((v: StateType) => v.id !== id);
      setInputs(filter);
    }
  };

  React.useEffect(() => {
    if (getState) getState(inputs);
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
