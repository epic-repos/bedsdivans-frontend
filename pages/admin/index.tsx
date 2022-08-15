import axios from "axios";
import React, { useState } from "react";
import css from "styles/admin.module.scss";
type E = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

type EF = React.FormEvent<HTMLFormElement>;

/**
 * Admin Panel
 */
const AdminPage = () => {
  const { actions, init, reducer } = adminSlice;
  const [state, dispatch] = React.useReducer(reducer, init);

  const [colorFields, setColorFields] = useState([{}]);

  const handlerDynmicColor = (event: E) => {
    const { name, value } = event.target;
    setColorFields((old) => [...old, { name: name, value: value }]);
  };

  const [product, setProduct] = useState({
    name: "",
    description: "",
  });

  const handleProductChange = (event: E) => {
    setProduct({
      ...product,
      [event?.target.name]: event.target.value,
    });
  };

  const onSubmitData = React.useCallback(
    async (e: EF) => {
      e.preventDefault();
      try {
        axios
          .post("http://localhost:5000/beds/create", product)
          .then((res) => console.log({ res }));
      } catch (error) {
        console.log(error);
      }
    },
    [product]
  );

  const onChangeInputs = React.useCallback(
    (e: E) => {
      const { name, value } = e.target;
      dispatch(actions.addInputValue(name, value));
    },
    [actions]
  );

  console.log(state);
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <div className={css.controls}>
          <button>Upload</button>
          <button>Upload</button>
        </div>
      </div>
      <form className={css.content} onSubmit={onSubmitData}>
        <h1>Upload Product</h1>
        <div className={css.grid}>
          <Input
            name="name"
            type="text"
            label="Product Name"
            placeholder="Enter product name"
            onChange={handleProductChange}
          />
          <Input
            name="productType"
            type="text"
            label="Product Name"
            placeholder="Enter product name"
            // onChange={handleProductChange}
          />
        </div>
        <div className={css.inputsBox}>
          <Textarea
            name="description"
            label="Product Description"
            placeholder="Enter product description"
            onChange={handleProductChange}
          />
        </div>
        <div className={css.grid}>
          <Select
            label="size"
            onChange={onChangeInputs}
            options={[
              {
                text: "Hello",
                value: "World",
              },
              {
                text: "Hello",
                value: "World",
              },
              {
                text: "Hello",
                value: "World",
              },
              {
                text: "Hello",
                value: "World",
              },
              {
                text: "Hello",
                value: "World",
              },
            ]}
          />
          <Select
            label="Product Size"
            options={[
              {
                text: "Hello",
                value: "World",
              },
            ]}
          />
        </div>
        <br />
        {colorFields.map((data, index) => {
          return (
            <>
              <div key={index} className={css.grid}>
                <Input
                  name="ColorName"
                  type="text"
                  label="Color Name"
                  placeholder="Enter product name"
                  onChange={handlerDynmicColor}
                />
                <FilePicker
                  name="ColorImage"
                  type="file"
                  label="Color Image"
                  placeholder="Enter product name"
                  onChange={handlerDynmicColor}
                />
              </div>
            </>
          );
        })}
        <div className={css.buttonBox}>
          <button>Add More Images </button>
        </div>
        <br />
        <div className={css.buttonBox}>
          <button type="submit">Submit Data</button>
        </div>
      </form>
    </div>
  );
};
export default AdminPage;

interface Common {
  label: string;
  error?: string;
}

interface I extends Common, React.ComponentPropsWithoutRef<"input"> {}
const Input = ({ label, error, ...rest }: I) => {
  return (
    <div className={css.input}>
      <label>{label}</label>
      <input {...rest} />
      {error ? <span className={css.error}>{error}</span> : null}
    </div>
  );
};
interface T extends Common, React.ComponentPropsWithoutRef<"textarea"> {}
const Textarea = ({ label, error, ...rest }: T) => {
  return (
    <div className={css.input}>
      <label>{label}</label>
      <textarea {...rest}></textarea>
      {error ? <span className={css.error}>{error}</span> : null}
    </div>
  );
};
interface S extends Common, React.ComponentPropsWithoutRef<"select"> {
  options?: {
    text: any;
    value: any;
  }[];
}
const Select = ({ options, label, error, ...rest }: S) => {
  return (
    <div className={css.input}>
      <label>{label}</label>
      <select {...rest}>
        {options?.map((d, i) => (
          <option key={i} value={d.value}>
            {d.text}
          </option>
        ))}
      </select>
      {error ? <span className={css.error}>{error}</span> : null}
    </div>
  );
};
interface FP extends Common, React.ComponentPropsWithoutRef<"input"> {}
const FilePicker = ({ label, error, ...rest }: FP) => {
  return (
    <div className={css.input}>
      <label>{label}</label>
      <input type="file" {...rest} />
      {error ? <span className={css.error}>{error}</span> : null}
    </div>
  );
};

interface ProductType {
  name?: string;
  image?: string;
  price?: string;
}

interface VariantsTypes {
  price: string | number;
  size: string | number;
  accessories: {
    color: ProductType[];
    storage: ProductType[];
    feet: ProductType[];
    headboard: ProductType[];
    mattress: ProductType[];
  };
}
interface StateTypes {
  name: string;
  description: string;
  categories: string[];
  variants: VariantsTypes[];
}
interface ActionTypes {
  type: string;
  payload: {
    name: string;
    value: string;
    [key: string]: any;
  };
}

const init: StateTypes = {
  name: "",
  description: "",
  categories: [],
  variants: [],
};

const adminSlice = {
  init,
  reducer: (state: StateTypes, action: ActionTypes) => {
    switch (action.type) {
      case "InputField":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  },
  actions: {
    addInputValue: (name: string, value: any) => ({
      type: "InputField",
      payload: { name, value },
    }),
  },
};

const x = {
  data: {
    _id: "62fa5b0682d30bb5709e4775",
    name: "Product Test One  ",
    description: "Product Test One =====  ",
    variants: [
      {
        accessories: {
          color: [
            {
              name: "gray",
              image: "/test.png",
              _id: "62fa5e5e39836909d19797d4",
            },
            {
              name: "black",
              image: "/test.png",
              _id: "62fa5e5e39836909d19797d5",
            },
          ],
          storage: [],
          feet: [],
          headboard: [],
          mattress: [],
        },
        _id: "62fa5e5e39836909d19797d3",
        price: "98.9",
        size: "2",
        createdAt: "2022-08-15T14:55:26.209Z",
        updatedAt: "2022-08-15T14:55:26.209Z",
        __v: 0,
      },
    ],
    categories: [],
    createdAt: "2022-08-15T14:41:10.157Z",
    updatedAt: "2022-08-15T14:55:26.296Z",
    __v: 0,
  },
};
