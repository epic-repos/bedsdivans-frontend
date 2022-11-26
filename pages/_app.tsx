import "styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "store";
import { AppPropsWithLayout } from "typings/layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import localforage from "localforage";

localforage.config({
  driver: localforage.LOCALSTORAGE, // Force LocalStorage;
  name: "app",
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: "local-database", // Should be alphanumeric, with underscores.
  description: "some description",
});

// import 'bootstrap/dist/css/bootstrap.min.css'
function RootApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  //REACT QUERY
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            retry: false,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  store.subscribe(async () => {
    localforage.setItem("cart-items", store.getState().addToCart);
  });

  return getLayout(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}
export default RootApp;
