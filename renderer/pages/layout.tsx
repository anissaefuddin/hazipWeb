import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDataGlobal } from "../model/DataGlobalContext";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    window.ipc.on("open-json-file", (data: string) => {
      const jsonData = JSON.parse(data);
      updateDataGlobal(jsonData);
      window.ipc.send("save-data-json", dataGlobal);
      setRefreshKey(refreshKey + 1);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    window.ipc.on("save-json-file", (data: string) => {
      window.ipc.send("save-data", JSON.stringify(dataGlobal));
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    window.ipc.on("save-as-json-file", (data: string) => {
      window.ipc.send("save-data", JSON.stringify(dataGlobal));
    });
  });
  return (
    <>
      <Header />
      <main className="pl-2 pr-2" key={refreshKey}>{children}</main>
    </>
  );
};

export default Layout;
