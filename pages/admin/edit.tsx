import Input from "components/admin/element/input";
import Select from "components/admin/element/select";
import Textarea from "components/admin/element/textarea";
import React from "react";
import css from "styles/admin.module.scss";
import AdminLayout from "./layout";
/**
 * Admin Panel
 */
const EditProductPage = () => {
  return (
    <AdminLayout>
      <h1>Upload Product</h1>
      <div className={css.grid}>
        <Input
          type="text"
          label="Product Name"
          placeholder="Enter product name"
        />
        <Input
          type="text"
          label="Product Name"
          placeholder="Enter product name"
        />
      </div>
      <div className={css.inputsBox}>
        <Textarea
          label="Product Description"
          placeholder="Enter product description"
        />
      </div>
      <div className={css.grid}>
        <Select
          label="Product Size"
          options={[
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
    </AdminLayout>
  );
};
export default EditProductPage;
