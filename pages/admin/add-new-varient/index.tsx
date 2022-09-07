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
import { uploadBedImage } from "network-requests/api";
import DynamicInput from "components/admin/dynamicinput";
import pMap from "p-map";

interface AddNewVarientsProps {
  id: string;
}

const AddNewVarients = ({ id }: AddNewVarientsProps) => {
  // API SECTION
  const { data, isFetched } = useFetchBedById(id);

  const [sizeData, setSizeData] = React.useState(bedSizeArray);
  const [colorInput, setColorInput] = React.useState<any>([]);

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
    basePrice: 0,
    salePrice: 0,
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

  // console.log({ currentInfo });
  //API HANDLING

  const { mutate } = useCreateNewBedVariant(id);

  const handleProductUpload = async () => {
    const baseImage = !currentInfo.image
      ? null
      : await (
          await uploadBedImage(currentInfo.image as unknown as Blob)
        ).url;

    const getImageUrlAndName = async (color: any) => {
      if (color.image) {
        const imageUrl = (await uploadBedImage(color.image as Blob)).url;

        return {
          name: color?.name,
          image: imageUrl,
        };
      }

      return {
        name: color?.name,
        image: null,
      };
    };
    const colorWithUrlAndName = await pMap(colorInput, getImageUrlAndName);

    mutate({
      price: {
        basePrice: currentInfo.basePrice,
        salePrice: currentInfo.salePrice,
      },
      size: currentInfo.size,
      image: baseImage,

      accessories: {
        color: colorWithUrlAndName as any,
        // storage: StorageInputs,
        // feet: FeetInputs,
        // headboard: HeadboardInputs,
        // mattress: MattressInputs,
      },
    });
    console.log({ colorWithUrlAndName });
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
          name="basePrice"
          type="number"
          label="Base Price"
          placeholder="Enter product name"
          onChange={currentInfoHandler}
        />
        <Input
          name="salePrice"
          type="number"
          label="Selling Price"
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
      <DynamicInput
        title="Color"
        options={colorArray}
        getState={(value) => setColorInput(value)}
      />
      {/* Dynamic Fields */}
      {/* <DynamicInput title="Color" options={colorArray} /> */}
      {/* Dynamic Fields */}
      {/* <DynamicInput title="Color" options={colorArray} /> */}
      {/* Dynamic Fields */}
      {/* <DynamicInput title="Color" options={colorArray} /> */}
      {/* Dynamic Fields */}
      {/* <DynamicInput title="Color" options={colorArray} /> */}
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
    text: "Select Bed Color",
    value: "",
  },
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
