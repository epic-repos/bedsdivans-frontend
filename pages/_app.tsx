import type { AppProps } from "next/app";

import "styles/globals.scss";

// import "styles/globals.css";
import "../styles/globals.scss";
import Layout from "layout";

import "bootstrap/dist/css/bootstrap.min.css";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default RootApp;
