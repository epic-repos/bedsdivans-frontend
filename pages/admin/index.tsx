import * as React from "react";
import axios from "axios";
import { randomBytes } from "crypto";
import Input from "components/admin/input";
import Select from "components/admin/select";
import adminSlice, { dynamicFieldsSlice } from "components/admin/state";
import Textarea from "components/admin/textarea";
import AddMoreButton from "components/admin/addmore";
import FilePicker from "components/admin/picker";
import css from "styles/admin.module.scss";

// CONTEXT FOR FORM

const UploadContext = React.createContext<null | any>(null);
type E = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
type EF = React.FormEvent<HTMLFormElement>;

/**
 * Admin Panel
 */
const AdminPage = () => {
  const {
    state,
    addColorField,
    deleteField,
    onChangeInputs,
    onSubmitData,
    colorHandler,
    colorFieldsArray,
    inputFields,
    AddInputField,
    RemoveInputField,
    UpdateInputField,
  } = useAdminPanel();
  return (
    <UploadContext.Provider
      value={{
        state,
        addColorField,
        deleteField,
        onChangeInputs,
        onSubmitData,
        colorHandler,
        colorFieldsArray,
        //
        inputFields,
        AddInputField,
        RemoveInputField,
        UpdateInputField,
      }}
    >
      <FormContent />
    </UploadContext.Provider>
  );
};
export default AdminPage;

const FormContent = () => {
  const {
    state,
    addColorField,
    deleteField,
    onChangeInputs,
    onSubmitData,
    colorHandler,
    colorFieldsArray,
    inputFields,
    AddInputField,
    RemoveInputField,
    UpdateInputField,
  } = React.useContext(UploadContext);

  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <div className={css.controls}>
          <button>Edit</button>
          <button>Upload</button>
        </div>
      </div>
      <form className={css.content} onSubmit={onSubmitData}>
        <h1>Upload New Product</h1>
        {/* Basic Info */}
        <div className={css.inputsBox}>
          <Input
            name="name"
            type="text"
            label="Product Name"
            placeholder="Enter product name"
            onChange={onChangeInputs}
          />
          <Textarea
            name="description"
            label="Product Description"
            placeholder="Enter product description"
            onChange={onChangeInputs}
          />
          <Select
            name="categoty"
            label="Category"
            onChange={onChangeInputs}
            options={[
              {
                text: "Category One",
                value: "Category One",
              },
              {
                text: "Category Two",
                value: "Category Two",
              },
            ]}
          />
        </div>
        <h4 className={css.heading}>Price and Size</h4>
        <div className={css.grid3}>
          <Select
            name="size"
            label="Product Size"
            onChange={onChangeInputs}
            options={[
              {
                text: `(2'6 x 6)- Small Single`,
                value: `(2'6 x 6)- Small Single`,
              },
              {
                text: `(3 x 6'3)- Single`,
                value: `(3 x 6'3)- Single`,
              },
              {
                text: `(4' x 6'3) - Small Double`,
                value: `(4' x 6'3) - Small Double`,
              },
              {
                text: `(4' x 6'3) - Double`,
                value: `(4' x 6'3) - Double`,
              },
              {
                text: `(5' x 6'6) - King`,
                value: `(5' x 6'6) - King`,
              },
              {
                text: `(6' x 6'6) - Super King`,
                value: `(6' x 6'6) - Super King`,
              },
            ]}
          />
          <Input
            name="price"
            type="text"
            label="Product Price"
            placeholder="Enter product name"
            onChange={onChangeInputs}
          />
          <FilePicker
            name="image"
            type="file"
            label="Color Image"
            placeholder="Enter product name"
            // value={data?.ColorImage}
            onChange={({ target }) => colorHandler(target.name, target.files)}
          />
        </div>
        {/* Dynamic Fields */}
        {/* AddInputField */}
        {/* RemoveInputField */}
        {/* UpdateInputField */}
        <h4 className={css.heading}>Color</h4>
        <div className={css.grid}>
          {inputFields.map((data: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <Select
                  name="ColorName"
                  label="Color Name"
                  onChange={({ target }) =>
                    UpdateInputField(index, {
                      name: target.name,
                      value: target.value,
                    })
                  }
                  // value={data?.ColorName}
                  options={[
                    {
                      text: "Color One",
                      value: "Color One",
                    },
                    {
                      text: "Color Two",
                      value: "Color Two",
                    },
                    {
                      text: "Color Three",
                      value: "Color Three",
                    },
                    {
                      text: "Color Four",
                      value: "Color Four",
                    },
                  ]}
                />
                <FilePicker
                  name="ColorImage"
                  type="file"
                  label="Color Image"
                  placeholder="Enter product name"
                  onChange={({ target }) =>
                    UpdateInputField(index, {
                      name: target.name,
                      value: target.files,
                    })
                  }
                  deletable
                  onDelete={() => RemoveInputField(index)}
                />
              </React.Fragment>
            );
          })}

          <AddMoreButton onClick={AddInputField} title="Add More Color" />
        </div>

        <br />
        <div className={css.buttonBox}>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </div>
  );
};

const ii = {
  colorFields: {},
  colorFieldsArray: [],
};

const useAdminPanel = () => {
  const { actions, init, reducer } = adminSlice;
  const [state, dispatch] = React.useReducer(reducer, init);
  // COLOR STATE
  const [colorFieldsArray, setColorFieldsArray] = React.useState<any>([]);
  const [colorFields, setColorFields] = React.useState({});
  // COLOR START
  const colorHandler = (name: string, value: any) => {
    setColorFields({
      ...colorFields,
      [name]: value,
    });
  };

  // ADD COLOR NEW FIELD
  const addColorField = () => {
    const data = {
      id: randomBytes(4).toString("hex"),
      ...colorFields,
    };
    setColorFieldsArray((old: any) => [...old, data]);
  };

  // DELETE FIELD BY ID
  const deleteField = (id: string) => {
    setColorFieldsArray(colorFieldsArray.filter((data: any) => data.id !== id));
  };
  // COLOR END
  const onChangeInputs = React.useCallback(
    (e: E) => {
      const { name, value } = e.target;
      dispatch(actions.addInputValue(name, value));
    },
    [actions]
  );

  //  SUBMIT DATA TO DATABASE
  const onSubmitData = async (e: EF) => {
    e.preventDefault();
    // if (window.confirm("Are you sure to upload product")) {
    //   try {
    //     axios
    //       .post("http://localhost:5000/beds/create", state)
    //       .then((res) => console.log({ res }));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    console.log(colorFieldsArray);
    // console.log(state);
  };

  const [inputFields, updateField] = React.useReducer(
    dynamicFieldsSlice.reducer,
    dynamicFieldsSlice.init
  );

  const AddInputField = React.useCallback(() => {
    updateField(dynamicFieldsSlice.actions.AddInputField(null));
  }, [inputFields]);
  const RemoveInputField = React.useCallback(
    (index: number) => {
      updateField(dynamicFieldsSlice.actions.RemoveInputField(index));
    },
    [inputFields]
  );
  const UpdateInputField = React.useCallback(
    (index: number, value: any) => {
      updateField(dynamicFieldsSlice.actions.UpdateInputField(index, value));
    },
    [inputFields]
  );

  console.log({ inputFields });
  // DYNAMIC FIELDS FOR CONTENT
  return {
    state,
    colorFieldsArray,
    addColorField,
    deleteField,
    onChangeInputs,
    onSubmitData,
    colorHandler,
    // FOR INPUT
    inputFields,
    AddInputField,
    RemoveInputField,
    UpdateInputField,
  };
};

// <h4 className={css.heading}>Headboard</h4>
// {/* Headboard */}
// <div className={css.grid}>
//   {[{}].map((data: any, index) => {
//     return (
//       <React.Fragment key={index}>
//         <Select
//           name="ColorName"
//           label="Type"
//           options={[
//             {
//               text: "Color One",
//               value: "Color One",
//             },
//             {
//               text: "Color Two",
//               value: "Color Two",
//             },
//             {
//               text: "Color Three",
//               value: "Color Three",
//             },
//             {
//               text: "Color Four",
//               value: "Color Four",
//             },
//           ]}
//         />
//         <Input
//           name="productPrice"
//           type="text"
//           label="Price"
//           placeholder="Enter product name"
//         />
//       </React.Fragment>
//     );
//   })}
//   <AddMoreButton title="Add More Headboard" />
// </div>
// <h4 className={css.heading}>Storage</h4>
// <div className={css.grid}>
//   {[{}].map((data: any, index) => {
//     return (
//       <React.Fragment key={index}>
//         <Select
//           name="ColorName"
//           label="Type"
//           options={[
//             {
//               text: "Color One",
//               value: "Color One",
//             },
//             {
//               text: "Color Two",
//               value: "Color Two",
//             },
//             {
//               text: "Color Three",
//               value: "Color Three",
//             },
//             {
//               text: "Color Four",
//               value: "Color Four",
//             },
//           ]}
//         />
//         <Input
//           name="productPrice"
//           type="text"
//           label="Price"
//           placeholder="Enter product name"
//         />
//       </React.Fragment>
//     );
//   })}
//   <AddMoreButton title="Add More Storage" />
// </div>
// <h4 className={css.heading}>Feet</h4>
// <div className={css.grid}>
//   {[{}].map((data: any, index) => {
//     return (
//       <React.Fragment key={index}>
//         <Select
//           name="ColorName"
//           label="Type"
//           options={[
//             {
//               text: "Color One",
//               value: "Color One",
//             },
//             {
//               text: "Color Two",
//               value: "Color Two",
//             },
//             {
//               text: "Color Three",
//               value: "Color Three",
//             },
//             {
//               text: "Color Four",
//               value: "Color Four",
//             },
//           ]}
//         />
//         <Input
//           name="productPrice"
//           type="text"
//           label="Price"
//           placeholder="Enter product name"
//         />
//       </React.Fragment>
//     );
//   })}
//   <AddMoreButton title="Add More Feet" />
// </div>
// <h4 className={css.heading}>Mattress</h4>
// <div className={css.grid}>
//   {[{}].map((data: any, index) => {
//     return (
//       <React.Fragment key={index}>
//         <Select
//           name="ColorName"
//           label="Type"
//           options={[
//             {
//               text: "Color One",
//               value: "Color One",
//             },
//             {
//               text: "Color Two",
//               value: "Color Two",
//             },
//             {
//               text: "Color Three",
//               value: "Color Three",
//             },
//             {
//               text: "Color Four",
//               value: "Color Four",
//             },
//           ]}
//         />
//         <Input
//           name="productPrice"
//           type="text"
//           label="Price"
//           placeholder="Enter product name"
//         />
//       </React.Fragment>
//     );
//   })}
//   <AddMoreButton title="Add More Mattress" />
// </div>
