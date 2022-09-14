/* eslint-disable @next/next/no-img-element */
// import Input from "components/admin/context/input";
import Input from "components/admin/element/input";
import { useCreateBedColor } from "network-requests/mutations";
import React from "react";
import { Button } from "react-bootstrap";
import Styles from "styles/commerce/order.module.scss";
import extraSpace from "utils/extraspace";
import replacer from "utils/replacer";

interface InputTypes {
  label: string;
  value: string;
  price: string;
}

const UpdateHeadBoard = () => {
  //API POST
  //   const { mutate } = useCreateBedColor();

  const [inputValue, setInputValue] = React.useState<InputTypes>({
    label: "",
    value: "",
    price: "",
  });

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleIconUpload = () => {
    if (!inputValue.price || !inputValue.label || !inputValue.value) return;
    // mutate(inputValue, {
    //   onSuccess: (data) => {
    //     console.log(data);
    //   },
    // });
  };

  React.useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      value: replacer(inputValue.label),
    }));
  }, [inputValue.label]);

  return (
    <div className="tabcontantinner">
      <h1>HeadBoard</h1>
      <div className="box">
        <ul>
          <li>
            <Input
              name="label"
              type="text"
              label={"Name"}
              placeholder="Enter Name"
              value={extraSpace(inputValue.label)}
              onChange={onChangeInputs}
            />
          </li>
          <li>
            <Input
              value={inputValue.value}
              type="text"
              name="value"
              label={"Value"}
              placeholder="auto-generated"
              onChange={onChangeInputs}
            />
          </li>
          <li>
            <Input
              value={inputValue.price}
              type="number"
              name="price"
              label={"Price"}
              placeholder="Enter price"
              onChange={onChangeInputs}
            />
          </li>
        </ul>
        <div className={Styles.buttonsection}>
          <Button onClick={handleIconUpload}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateHeadBoard;
