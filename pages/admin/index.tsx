/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import css from "styles/admin.module.scss";
import AdminLayout from "./layout";
/**
 * Admin Panel
 */
const EditProductPage = () => {
  const { data, isLoading, isError } = useQuery("beds", () =>
    fetch("http://localhost:5000/beds").then((res) => res.json())
  );

  console.log(data?.data);
  const router = useRouter();
  const goto = (id: string) => {
    router.push(id);
  };

  return (
    <AdminLayout>
      <div className={css.content}>
        <h1>All Product</h1>
        <div className={css.products}>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data?.data.map((idata: any, i: number) => {
              return (
                <div
                  key={i}
                  className={css.item}
                  onClick={() => goto(idata._id)}
                >
                  <div className={css.image}>
                    <img src="/image.png" alt="icon" />
                  </div>
                  <div className={css.text}>
                    <h4>{idata.name}</h4>
                    <p>{idata.description}</p>
                    <div className={css.category}>
                      {idata?.categories?.map((c: string, i: number) => (
                        <span key={i}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
export default EditProductPage;
