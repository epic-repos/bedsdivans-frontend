import type { AppProps } from "next/app";
import "styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "layout";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { Provider } from "react-redux";
import store from "store";

// import 'bootstrap/dist/css/bootstrap.min.css'
function RootApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TR98HZH');`,
        }}
      ></Script>
    </React.Fragment>
  );
}
export default RootApp;
