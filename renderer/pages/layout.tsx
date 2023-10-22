import { Menu } from "electron";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDataGlobal } from "../model/DataGlobalContext";

const Layout = ({ children }) => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [filepath, updateFilepath] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    window.ipc.on("open-json-file", (data: string) => {
      const jsonData = JSON.parse(data);
      updateDataGlobal(jsonData);
      window.ipc.send("save-data-json", dataGlobal);
      setRefreshKey(refreshKey + 1);
    });
    window.ipc.on("path-json-file", (data: string) => {
      updateFilepath(data);
    });
    window.ipc.on("save-json-file", (data: string) => {
      window.ipc.send("save-data", JSON.stringify(dataGlobal));
    });
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
