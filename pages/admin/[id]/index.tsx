import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import AdminLayout from "../layout";

const ProductEdit = ({ data }) => {
  const router = useRouter();
  const id = router.query?.id;

  return (
    <AdminLayout>
      <div>
        <h2>{"Page"}</h2>
        {JSON.stringify(data, null, 4)}
      </div>
    </AdminLayout>
  );
};
export default ProductEdit;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query?.id;

  const res = await fetch(`http://localhost:5000/beds/${id}`);
  const xx = await res.json();
  console.log(xx);
  return {
    props: {
      data: xx,
    },
  };
};
