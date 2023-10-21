import React from "react";
import type { AppProps } from "next/app";
import "../styles/main.scss";
import Layout from "./layout";
import { DataGlobalProvider } from "../model/DataGlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataGlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataGlobalProvider>
  );
}

export default MyApp;
