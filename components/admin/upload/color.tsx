import React from "react";
import { MattressArray } from "constants/data/bed";
import DynamicInputWithImagePicker from "../element/dynamicpicker";

const Color = () => {
  return (
    <React.Fragment>
      <DynamicInputWithImagePicker
        title={"Color"}
        // label="Color"
        options={MattressArray}
        getState={(value) => console.log(value)}
      />
      {/* <AddMoreButton title="Next" /> */}
    </React.Fragment>
  );
};

export default Color;
{
  /* <ReactChipInput
              chips={["hello"]}
              classes={""}
              onSubmit={onAddChip}
              onRemove={onRemoveChip}
            /> */
}
