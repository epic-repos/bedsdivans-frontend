import React from "react";
import AdminLayout from "../layout";
import css from "styles/admin.module.scss";
import Input from "components/admin/element/input";
import AddMoreButton from "components/admin/element/addmore";
import FilePicker from "components/admin/element/picker";
import Select from "components/admin/element/select";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";
import { useFetchBedById } from "network-requests/queries";
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

const AddNewVarientById = ({ id }: any) => {
  const { data } = useFetchBedById(id);
  console.log({ data });
  return (
    <AdminLayout>
      <h4 className={css.heading}>Price and Size</h4>
      <div className={css.grid3}>
        <Select
          name="size"
          label="Product Size"
          // onChange={onChangeInputs}
          // options={sizeArray}
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
        {[{}].map((data: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <Select
                name="name"
                label="Color Name"
                //   options={colorArray}
                //   onChange={(e) => handleFieldsChange(index, e)}
                value={data?.name}
              />
              <FilePicker
                name="image"
                type="file"
                label="Color Image"
                placeholder="Enter product name"
                deletable
                //   onChange={(e) => handleFieldsChange(index, e)}
                //   onDelete={() => handleFieldsRemove(data.id)}
              />
              {/* <img src={data?.image} alt="selected-image" /> */}
            </React.Fragment>
          );
        })}

        <AddMoreButton
          //   onClick={handleAddFields}
          title="Add More Color"
        />
      </div>

      <br />
    </AdminLayout>
  );
};
export default AddNewVarientById;