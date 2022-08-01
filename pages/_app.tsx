import type { AppProps } from "next/app";

import "styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "layout";


function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default RootApp;
