import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";
import AdminLayout from "../layout";
import { useFetchBedById } from "network-requests/queries";
import AddMoreButton from "components/admin/element/addmore";
import Select from "components/admin/element/select";
import css from "styles/admin.module.scss";
import Input from "components/admin/element/input";
import Textarea from "components/admin/element/textarea";
import { nanoid } from "@reduxjs/toolkit";
import FilePicker from "components/admin/element/picker";

interface AddNewVarientsProps {
  id: string;
}

const AddNewVarients = ({ id }: AddNewVarientsProps) => {
  const initialFields = {
    id: "ed3x",
    name: "",
    image: "",
  };

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

  const { data, isFetched } = useFetchBedById(id);
  console.log({ data });

  const initialSizes = [
    {
      text: 1,
      value: 1,
    },
    {
      text: 2,
      value: 2,
    },
    {
      text: 3,
      value: 3,
    },
    {
      text: 4,
      value: 4,
    },
    {
      text: 5,
      value: 5,
    },
    {
      text: 6,
      value: 6,
    },
  ];

  const [sizeData, setSizeData] = React.useState(initialSizes);

  useEffect(() => {
    const handleSizeOption = () => {
      const temp = [...sizeData];

      if (isFetched) {
        const availableSizes = temp.filter((item) => {
          return !data?.variants.find(
            (variant) => Number(variant.size) === item.value
          );
        });
        setSizeData(availableSizes);
      }
    };
    void handleSizeOption();
  }, [isFetched]);

  return (
    <AdminLayout>
      <h6>Add New Variant for ID : {id}</h6>
      <div className={css.inputsBox}>
        <Input
          name="name"
          type="text"
          label="Product Name"
          placeholder="Enter product name"
          value={data?.name}
          // onChange={onChangeInputs}
        />
        <Textarea
          name="description"
          label="Product Description"
          placeholder="Enter product description"
          value={data?.description}
          // onChange={onChangeInputs}
        />
      </div>
      <h4>SIZES</h4>
      <div className={css.grid}>
        {data?.variants.map((variant) => {
          return (
            <div key={variant._id}>
              <p>{variant?.size}</p>
            </div>
          );
        })}
      </div>
      <Select label={"Select Size"} options={sizeData} />

      <h4 className={css.heading}>Price and Size</h4>
      <div className={css.grid3}>
        <Select
          name="size"
          label="Product Size"
          // onChange={onChangeInputs}
          options={sizeArray}
        />
        <Input
          name="price"
          type="number"
          label="Product Price"
          placeholder="Enter product name"
          // onChange={onChangeInputs}
        />
        <FilePicker
          name="image"
          type="file"
          label="Color Image"
          placeholder="Enter product name"
          // onChange={({ target }) => colorHandler(target.name, target.files)}
        />
      </div>
      {/* Dynamic Fields */}
      <h4 className={css.heading}>Color</h4>
      <div className={css.grid}>
        {inputFields.map((data: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="name"
                label="Color Name"
                options={colorArray}
                onChange={(e) => handleFieldsChange(index, e)}
                value={data?.name}
              />
              <FilePicker
                name="image"
                type="file"
                label="Color Image"
                placeholder="Enter product name"
                onChange={(e) => handleFieldsChange(index, e)}
                deletable
                onDelete={() => handleFieldsRemove(data.id)}
              />
              {/* <img src={data?.image} alt="selected-image" /> */}
            </React.Fragment>
          );
        })}

        <AddMoreButton onClick={handleAddFields} title="Add More Color" />
      </div>

      <h4 className={css.heading}>Headboard</h4>
      {/* Headboard */}
      <div className={css.grid}>
        {[{}].map((data: any, index) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="ColorName"
                label="Type"
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
              <Input
                name="productPrice"
                type="text"
                label="Price"
                placeholder="Enter product name"
                deletable
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton title="Add More Headboard" />
      </div>
      <h4 className={css.heading}>Storage</h4>
      <div className={css.grid}>
        {[{}].map((data: any, index) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="ColorName"
                label="Type"
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
              <Input
                name="productPrice"
                type="text"
                label="Price"
                placeholder="Enter product name"
                deletable
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton title="Add More Storage" />
      </div>
      <h4 className={css.heading}>Feet</h4>
      <div className={css.grid}>
        {[{}].map((data: any, index) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="ColorName"
                label="Type"
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
              <Input
                name="productPrice"
                type="text"
                label="Price"
                placeholder="Enter product name"
                deletable
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton title="Add More Feet" />
      </div>
      <h4 className={css.heading}>Mattress</h4>
      <div className={css.grid}>
        {[{}].map((data: any, index) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="ColorName"
                label="Type"
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
              <Input
                name="productPrice"
                type="text"
                label="Price"
                placeholder="Enter product name"
                deletable
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton title="Add More Mattress" />
      </div>
      <br />
      <AddMoreButton title="Submit Variant" />
      {/* {JSON.stringify(data)} */}
    </AdminLayout>
  );
};
export default AddNewVarients;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  if (isValidObjectId(id)) {
    return {
      props: {
        id,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
};

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
