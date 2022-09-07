/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";
import AdminLayout from "../layout";
import { useFetchBedVariantsById } from "network-requests/queries";
import AddMoreButton from "components/admin/element/addmore";
import css from "styles/admin.module.scss";
import Input from "components/admin/element/input";
import FilePicker from "components/admin/element/picker";
import { useUpdateBedVariant } from "network-requests/mutations";
import { uploadBedImage } from "network-requests/api";
import DynamicInput from "components/admin/dynamicinput";
import pMap from "p-map";
import Image from "next/image";

interface AddNewVarientsProps {
  id: string;
}

const AddNewVarients = ({ id }: AddNewVarientsProps) => {
  const [colorInput, setColorInput] = React.useState<any>();
  const [apiColorInput, setApiColorInput] = React.useState<any>();
  const [currentInfo, setCurrentInfo] = React.useState({
    basePrice: 0,
    salePrice: 0,
    image: "" as any,
  });

  console.log({ colorInput });

  const currentInfoHandler = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setCurrentInfo({ ...currentInfo, [name]: files[0] });
    } else {
      setCurrentInfo({ ...currentInfo, [name]: value });
    }
  };

  // console.log({ currentInfo });
  //API HANDLING
  // API SECTION

  const { data, isFetched } = useFetchBedVariantsById(id);
  const { mutate } = useUpdateBedVariant(id);

  console.log({ data });

  useEffect(() => {
    if (data) {
      const newData = {
        basePrice: (data && data?.price.basePrice) || 0,
        salePrice: (data && data?.price.salePrice) || 0,
      };
      setCurrentInfo((prev: any) => ({
        ...prev,
        ...newData,
      }));

      const color = data?.accessories?.color?.map((color: any) => {
        return { ...color, id: color._id };
      });

      console.log({ color });
      setApiColorInput(color);
    }
  }, [data]);

  const handleProductUpload = async () => {
    const baseImage = !currentInfo.image
      ? data?.image
      : (await uploadBedImage(currentInfo.image as unknown as Blob)).url;

    const getImageUrlAndName = async (color: any) => {
      console.log({ color: typeof color.image });

      if (color?.image instanceof File || color?.image instanceof Blob) {
        const imageUrl = (await uploadBedImage(color.image as Blob)).url;

        return {
          name: color?.name,
          image: imageUrl,
        };
      }

      return {
        name: color?.name,
        image: typeof color?.image === "string" ? color?.image : null,
      };
    };
    const colorWithUrlAndName = await pMap(colorInput, getImageUrlAndName);

    mutate({
      price: {
        basePrice: currentInfo.basePrice,
        salePrice: currentInfo.salePrice,
      },
      image: baseImage as string,
      accessories: {
        color: colorWithUrlAndName as any,
        // storage: StorageInputs,
        // feet: FeetInputs,
        // headboard: HeadboardInputs,
        // mattress: MattressInputs,
      },
    });
    // console.log({ baseImage });
  };

  const handleImageURL = ({
    local,
    api,
  }: {
    local: File;
    api: string | undefined | null;
  }) => {
    if (local) {
      console.log({ local: "local" });
      return URL.createObjectURL(local);
    }

    if (api) {
      return api;
    }

    return "";
  };

  return (
    <AdminLayout>
      <h6>Add New Variant for ID : {id}</h6>

      <h4 className={css.heading}>Price and Size</h4>
      <div className={css.grid3}>
        <Input
          name="basePrice"
          type="number"
          label="Base Price"
          placeholder="Enter Base Price"
          value={currentInfo.basePrice}
          onChange={currentInfoHandler}
        />
        <Input
          name="salePrice"
          type="number"
          label="Selling Price"
          placeholder="Enter Selling Price"
          onChange={currentInfoHandler}
          value={currentInfo.salePrice}
        />

        <div className="d-flex" style={{ alignItems: "center" }}>
          {(currentInfo?.image || data?.image) && (
            <Image
              width={50}
              height={50}
              src={handleImageURL({
                local: currentInfo?.image as File,
                api: data?.image,
              })}
              objectFit={"contain"}
              layout={"fixed"}
            />
          )}
          <FilePicker
            name="image"
            type="file"
            label="Color Image"
            placeholder="Enter product name"
            onChange={currentInfoHandler}
            // value={currentInfo.image}
          />
        </div>
      </div>
      {/* Dynamic Fields */}
      {isFetched && (
        <DynamicInput
          title="Color"
          options={colorArray}
          initialState={apiColorInput}
          getState={(value) => setColorInput(value)}
        />
      )}
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
