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
import { nanoid } from "@reduxjs/toolkit";
import FilePicker from "components/admin/element/picker";
import { bedSizeArray } from "constants/data/bed";
import { useCreateNewBedVariant } from "network-requests/mutations";
import { testpost, uploadBedImage } from "network-requests/api";

interface AddNewVarientsProps {
  id: string;
}

const AddNewVarients = ({ id }: AddNewVarientsProps) => {
  const initialFields = {
    id: "edasd3x",
    name: "",
    price: "",
  };

  const [colorInputs, setColorInputs] = React.useState<any>([
    {
      id: "EDF3x",
      name: "",
      image: "",
    },
  ]);
  const colorDraft = [...colorInputs];
  // CHANGE
  const handleColorChange = (index: number, event: any) => {
    if (event.target.name === "image") {
      const file = event.target.files[0];
      // const blob = URL.createObjectURL(file);
      colorDraft[index][event.target.name] = file;
      setColorInputs(colorDraft);
    } else {
      colorDraft[index][event.target.name] = event.target.value;
      setColorInputs(colorDraft);
    }
  };
  console.log({ colorInputs });
  // ADD
  const handleAddColor = () => {
    const add = {
      ...initialFields,
      id: nanoid(4),
    };
    setColorInputs([...colorInputs, add]);
  };
  // REMOVE
  const handleRemoveColor = (id: string) => {
    if (id) {
      const filter = colorDraft.filter((v) => v.id !== id);
      setColorInputs(filter);
    }
  };
  /**
 * Headboard
Storage
Feet
Mattress
 */

  const [HeadboardInputs, setHeadboardInputs] = React.useState<any>([]);
  const headboardDraft = [...HeadboardInputs];
  // CHANGE
  const handleHeadboardChange = (index: number, event: any) => {
    headboardDraft[index][event.target.name] = event.target.value;
    setHeadboardInputs(headboardDraft);
  };
  // ADD
  const handleAddHeadboard = () => {
    const add = {
      ...initialFields,
      id: nanoid(4),
    };
    setHeadboardInputs([...HeadboardInputs, add]);
  };
  // REMOVE
  const handleRemoveHeadboard = (id: string) => {
    if (id) {
      const filter = headboardDraft.filter((v) => v.id !== id);
      setHeadboardInputs(filter);
    }
  };
  const [StorageInputs, setStorageInputs] = React.useState<any>([]);
  const storageDraft = [...StorageInputs];
  // CHANGE
  const handleStorageChange = (index: number, event: any) => {
    storageDraft[index][event.target.name] = event.target.value;
    setStorageInputs(storageDraft);
  };
  // ADD
  const handleAddStorage = () => {
    const add = {
      ...initialFields,
      id: nanoid(4),
    };
    setStorageInputs([...StorageInputs, add]);
  };
  // REMOVE
  const handleRemoveStorage = (id: string) => {
    if (id) {
      const filter = storageDraft.filter((v) => v.id !== id);
      setStorageInputs(filter);
    }
  };

  /**
   * Feet
Mattress
   */
  const [FeetInputs, setFeetInputs] = React.useState<any>([]);
  const feetDraft = [...FeetInputs];
  // CHANGE
  const handleFeetChange = (index: number, event: any) => {
    feetDraft[index][event.target.name] = event.target.value;
    setFeetInputs(feetDraft);
  };
  // ADD
  const handleAddFeet = () => {
    const add = {
      ...initialFields,
      id: nanoid(4),
    };
    setFeetInputs([...FeetInputs, add]);
  };
  // REMOVE
  const handleRemoveFeet = (id: string) => {
    if (id) {
      const filter = feetDraft.filter((v) => v.id !== id);
      setFeetInputs(filter);
    }
  };
  const [MattressInputs, setMattressInputs] = React.useState<any>([]);
  const mattressDraft = [...MattressInputs];
  // CHANGE
  const handleMattressChange = (index: number, event: any) => {
    mattressDraft[index][event.target.name] = event.target.value;
    setMattressInputs(mattressDraft);
  };
  // ADD
  const handleAddMattress = () => {
    const add = {
      ...initialFields,
      id: nanoid(4),
    };
    setMattressInputs([...MattressInputs, add]);
  };
  // REMOVE
  const handleRemoveMattress = (id: string) => {
    if (id) {
      const filter = mattressDraft.filter((v) => v.id !== id);
      setMattressInputs(filter);
    }
  };

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

  const blobToBase64 = (blob: Blob) => {
    if (!blob) {
      return;
    }
    if (typeof blob !== "undefined") {
      const url = URL.createObjectURL(blob);
      return url;
    }
    // return new Promise((resolve, reject) => {
    //   const reader = new FileReader();
    //   reader.onerror = reject;
    //   reader.onload = () => {
    //     resolve(reader.result);
    //   };
    //   reader.readAsDataURL(blob);
    // });
  };

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
      <h4 className={css.heading}>Color</h4>
      <div className={css.grid}>
        {colorInputs.map((data: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="name"
                label="Color Name"
                options={colorArray}
                onChange={(e) => handleColorChange(index, e)}
                value={data?.name}
              />
              <FilePicker
                name="image"
                type="file"
                label="Color Image"
                placeholder="Enter product name"
                onChange={(e) => handleColorChange(index, e)}
                deletable
                onDelete={() => handleRemoveColor(data.id)}
              />
              <img
                style={{
                  height: "100px",
                  borderRadius: "4px",
                  objectFit: "contain",
                }}
                src={blobToBase64(data?.image)}
                alt="selected-image"
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={handleAddColor} title="Add More Color" />
      </div>

      <h4 className={css.heading}>Headboard</h4>
      {/* Headboard */}
      <div className={css.grid}>
        {HeadboardInputs.map((data: any, index: number) => {
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
                onChange={(e) => handleHeadboardChange(index, e)}
              />
              <Input
                name="productPrice"
                type="number"
                label="Price"
                placeholder="Enter product name"
                onChange={(e) => handleHeadboardChange(index, e)}
                deletable
                onDelete={() => handleRemoveHeadboard(data.id)}
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton
          onClick={handleAddHeadboard}
          title="Add More Headboard"
        />
      </div>
      <h4 className={css.heading}>Storage</h4>
      <div className={css.grid}>
        {StorageInputs.map((data: any, index: number) => {
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
                onChange={(e) => handleStorageChange(index, e)}
              />
              <Input
                name="productPrice"
                type="number"
                label="Price"
                placeholder="Enter product name"
                deletable
                onChange={(e) => handleStorageChange(index, e)}
                onDelete={() => handleRemoveStorage(data.id)}
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={handleAddStorage} title="Add More Storage" />
      </div>
      <h4 className={css.heading}>Feet</h4>
      <div className={css.grid}>
        {FeetInputs.map((data: any, index: number) => {
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
                onChange={(e) => handleFeetChange(index, e)}
              />
              <Input
                name="productPrice"
                type="number"
                label="Price"
                placeholder="Enter product name"
                deletable
                onChange={(e) => handleFeetChange(index, e)}
                onDelete={() => handleRemoveFeet(data.id)}
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={handleAddFeet} title="Add More Feet" />
      </div>
      <h4 className={css.heading}>Mattress</h4>
      <div className={css.grid}>
        {MattressInputs.map((data: any, index: number) => {
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
                onChange={(e) => handleMattressChange(index, e)}
              />
              <Input
                name="productPrice"
                type="number"
                label="Price"
                placeholder="Enter product name"
                deletable
                onDelete={() => handleRemoveMattress(data.id)}
                onChange={(e) => handleMattressChange(index, e)}
              />
            </React.Fragment>
          );
        })}
        <AddMoreButton onClick={handleAddMattress} title="Add More Mattress" />
      </div>
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
