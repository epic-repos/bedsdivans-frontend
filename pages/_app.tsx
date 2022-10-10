import "styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import store from "store";
import { AppPropsWithLayout } from "typings/layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// import 'bootstrap/dist/css/bootstrap.min.css'
function RootApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return getLayout(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}
export default RootApp;
