import * as React from "react";
import Input from "components/admin/element/input";
import Select from "components/admin/element/select";
import Textarea from "components/admin/element/textarea";
import AddMoreButton from "components/admin/element/addmore";
import FilePicker from "components/admin/element/picker";
import css from "styles/admin.module.scss";
import useAdminPanel from "components/admin/useAdmin";
import axios from "axios";
import AdminLayout from "./layout";
import { nanoid } from "@reduxjs/toolkit";

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

  //   const { addField, inputState, removeField, updateField } = useInput();

  const initialFields = {
    id: "ed3x",
    name: "",
    image: "",
  };
  // {
  //   name: "",
  //   image: "",
  // },

  const [inputFields, setInputFields] = React.useState<any>([]);
  const draft = [...inputFields];

  const handleFieldsChange = (index: number, event: any) => {
    if (event.target.name === "image") {
      const file = event.target.files[0];
      const blob = URL.createObjectURL(file);
      draft[index][event.target.name] = blob;
    } else {
      draft[index][event.target.name] = event.target.value;
    }
    setInputFields(draft);
  };

  const handleAddFields = () => {
    const add = {
      ...initialFields,
      id: nanoid(4),
    };
    setInputFields([...inputFields, add]);
  };

  const handleFieldsRemove = (id: string) => {
    if (id) {
      const filter = draft.filter((v) => v.id !== id);
      setInputFields(filter);
    }
  };

  console.log({ inputFields });

  const payload = {
    name: "Test Name",
    description: "This is Test Product",
    size: 4,
    image: "imgae-fake.webp",
    price: {
      basePrice: 100,
      salePrice: 50,
    },

    accessories: {
      color: !inputFields[0]?.name && !inputFields[0]?.image ? [] : inputFields,
      headboard: [
        {
          name: "headboard 1",
          price: 400,
        },
      ],
      storage: [
        {
          name: "Storage 1",
          price: 400,
        },
      ],
      feet: [
        {
          name: "Feet 1",
          price: 200,
        },
      ],
      mattress: [
        {
          name: "mattress 1",
          price: 200,
        },
      ],
    },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/beds/add-bed/62fa5b0682d30bb5709e4775",
        payload
      );
      console.log({ DONE: response });
    } catch (error) {
      console.log(error);
    }
  };

  const initCategory: string[] = ["One"];

  const [selectedCategory, setCategory] = React.useState(initCategory);
  const draftCategory = [...selectedCategory];

  const addCategory = () => {
    setCategory([...selectedCategory, ""]);
  };
  const removeCategory = (value: string) => {
    setCategory(draftCategory.filter((d) => d !== value));
  };
  const updateCategory = (i: number, e: any) => {
    draftCategory[i] = e.target.value;
    setCategory(draftCategory);
  };
  console.log({ selectedCategory });

  return (
    <AdminLayout>
      <form className={css.content} onSubmit={handleSubmit}>
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
        </div>
        <div className={css.inputsBox}>
          <h4 className={css.heading}>Product Category</h4>
          {selectedCategory.map((value, i) => {
            return (
              <React.Fragment key={i}>
                <Select
                  name="category"
                  label="Category"
                  value={value}
                  onChange={(e) => updateCategory(i, e)}
                  options={categoryArray}
                  deletable
                  onDelete={() => removeCategory(value)}
                />
              </React.Fragment>
            );
          })}
          <br />
          <AddMoreButton onClick={addCategory} title="Add More Category" />
        </div>

        <div className={css.buttonBox}>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </AdminLayout>
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
  {
    text: "Category Three",
    value: "Category Three",
  },
  {
    text: "Category Four",
    value: "Category Four",
  },
];