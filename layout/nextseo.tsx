import Head from "next/head";
import React from "react";

const NextSEO = ({ title }:any) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default NextSEO;
