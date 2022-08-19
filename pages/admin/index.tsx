import * as React from "react";
import Input from "components/admin/input";
import Select from "components/admin/select";
import Textarea from "components/admin/textarea";
import AddMoreButton from "components/admin/addmore";
import FilePicker from "components/admin/picker";
import css from "styles/admin.module.scss";
import useAdminPanel from "components/admin/useAdmin";
import useInput from "components/admin/useInput";

// CONTEXT FOR FORM

const UploadContext = React.createContext<null | any>(null);

/**
 * Admin Panel
 */
const AdminPage = () => {
  const data = useAdminPanel();
  return (
    <UploadContext.Provider value={{ ...data }}>
      <FormContent />
    </UploadContext.Provider>
  );
};
export default AdminPage;

const FormContent = () => {
  const { onChangeInputs, onSubmitData, colorHandler } =
    React.useContext(UploadContext);

  const { addField, inputState, removeField, updateField } = useInput();

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
            options={categoryArray}
          />
        </div>
        <h4 className={css.heading}>Price and Size</h4>
        <div className={css.grid3}>
          <Select
            name="size"
            label="Product Size"
            onChange={onChangeInputs}
            options={sizeArray}
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
        <h4 className={css.heading}>Color</h4>
        <div className={css.grid}>
          {inputState.map((data: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <Select
                  name="ColorName"
                  label="Color Name"
                  options={colorArray}
                  // onChange={({ target }) =>
                  //   updateField({index,value: target.value})
                  // }
                  onChange={(e) => updateField(index, e)}
                  // value={data?.ColorName}
                />
                <FilePicker
                  name="ColorImage"
                  type="file"
                  label="Color Image"
                  placeholder="Enter product name"
                  onChange={(e) => updateField(data.id, e)}
                  deletable
                  onDelete={() => removeField(data.id)}
                />
              </React.Fragment>
            );
          })}

          <AddMoreButton onClick={addField} title="Add More Color" />
        </div>

        <br />
        <div className={css.buttonBox}>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </div>
  );
};

// CATEGORY ARRAY
const categoryArray = [
  {
    text: "Category One",
    value: "Category One",
  },
  {
    text: "Category Two",
    value: "Category Two",
  },
];
// SIZE ARRAY
const sizeArray = [
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
];
// COLOR ARRAY

const colorArray = [
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
];
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
