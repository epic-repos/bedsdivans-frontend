/* eslint-disable @next/next/no-img-element */
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
import FilePicker from "components/admin/element/picker";
import { bedSizeArray } from "constants/data/bed";
import { useCreateNewBedVariant } from "network-requests/mutations";
import { testpost, uploadBedImage } from "network-requests/api";
import useAdd from "../../../components/admin/useAdd";
import DynamicInput from "components/admin/dynamicinput";

interface AddNewVarientsProps {
  id: string;
}

const AddNewVarients = ({ id }: AddNewVarientsProps) => {
  // API SECTION
  const { data, isFetched } = useFetchBedById(id);

  const [sizeData, setSizeData] = React.useState(bedSizeArray);

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

  const [currentInfo, setCurrentInfo] = React.useState({
    size: "",
    price: "",
    image: null,
  });

  const currentInfoHandler = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCurrentInfo({ ...currentInfo, [name]: files[0] });
    } else {
      setCurrentInfo({ ...currentInfo, [name]: value });
    }
  };

  console.log({ currentInfo });
  //API HANDLING

  const { mutate } = useCreateNewBedVariant(id);

  const handleProductUpload = async () => {
    const baseImage = await uploadBedImage(
      currentInfo.image as unknown as Blob
    );

    // const colorWithUrl = colorInputs.map(async (item: any) => {
    //   const ii = await uploadBedImage(item.image as Blob);
    //   return {
    //     name: item.name,
    //     image: ii,
    //   };
    // });

    // console.log({ baseImage });
    // console.log({ colorWithUrl });

    const test = await testpost();
    console.log({ test, baseImage, blob: currentInfo.image });

    // mutate({
    //   color: await colorWithUrl,
    //   storage: StorageInputs,
    //   feet: FeetInputs,
    //   headboard: HeadboardInputs,
    //   mattress: MattressInputs,
    // });
  };

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
      <h4>NOT AVAILABLE SIZES</h4>
      <div className={css.grid}>
        {data?.variants.map((variant) => {
          return (
            <div key={variant._id}>
              <p>{variant?.size}</p>
            </div>
          );
        })}
      </div>
      {/* <Select label={"Select Size"} options={sizeData} /> */}

      <h4 className={css.heading}>Price and Size</h4>
      <div className={css.grid3}>
        <Select
          name="size"
          label="Product Size"
          onChange={currentInfoHandler}
          options={sizeData}
        />
        <Input
          name="price"
          type="number"
          label="Product Price"
          placeholder="Enter product name"
          onChange={currentInfoHandler}
        />
        <FilePicker
          name="image"
          type="file"
          label="Color Image"
          placeholder="Enter product name"
          onChange={currentInfoHandler}
        />
      </div>
      {/* Dynamic Fields */}
      <DynamicInput title="Color" options={colorArray} />
      {/* Dynamic Fields */}
      <DynamicInput title="Color" options={colorArray} />
      {/* Dynamic Fields */}
      <DynamicInput title="Color" options={colorArray} />
      {/* Dynamic Fields */}
      <DynamicInput title="Color" options={colorArray} />
      {/* Dynamic Fields */}
      <DynamicInput title="Color" options={colorArray} />
      <br />
      <AddMoreButton title="Submit Variant" onClick={handleProductUpload} />
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
