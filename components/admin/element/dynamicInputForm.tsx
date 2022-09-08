import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "styles/admin.module.scss";
import AddMoreButton from "./addmore";
import Input from "./input";
import Select from "./select";

interface InputFields {
  name: string;
  price: string;
}

interface DynamicInputProps {
  title: string;
  options: any[];
  getValue: (value: InputFields[]) => void;
  initialValue?: InputFields[];
}

function DynamicInputForm({
  title,
  options,
  getValue,
  initialValue,
}: DynamicInputProps) {
  const [inputFields, setInputFields] = useState<InputFields[]>([
    { name: "", price: "" },
  ]);

  const handleFormChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let data = [...inputFields] as any;
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let object = { name: "", price: "" };
    setInputFields([...inputFields, object]);
  };

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  useEffect(() => {
    if (initialValue && initialValue?.length > 0) {
      setInputFields(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    getValue(inputFields);
  }, [inputFields]);

  return (
    <React.Fragment>
      {/* Dynamic Fields */}
      <h4 className={styles.heading}>{title}</h4>
      <div className={styles.grid}>
        {inputFields.map((data: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="name"
                label={`${title} Name`}
                options={options}
                onChange={(e) => handleFormChange(index, e)}
                value={data?.name}
              />

              <div className="d-flex" style={{ alignItems: "center" }}>
                <Input
                  name="price"
                  type="number"
                  label={`${title} Price`}
                  placeholder="Enter product price"
                  value={data?.price}
                  onChange={(e) => handleFormChange(index, e)}
                  deletable
                  onDelete={() => removeFields(index)}
                  style={{ width: "100%" }}
                />
              </div>
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={addFields} title={`Add More ${title}`} />
      </div>
    </React.Fragment>
  );
}

export default DynamicInputForm;
