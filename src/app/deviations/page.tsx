"use client";
import React, { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from "uuid";
import { useDataGlobal } from "../../model/DataGlobalContext";
import {
  Sessions,
  Team_Members,
  Nodes,
  Deviations,
  Causes,
  Consequences,
  Safeguard_IDs,
  Pha_Recommendation_IDs,
} from "@/model/classModel";
const NodesPage: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialNodes: Nodes[] = dataGlobal.Nodes;
  const [nodes, setNodes] = useState<Nodes[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState(
    nodes.length > 0 ? nodes[0] : null,
  );
  const [deviation, setDeviation] = useState<Deviations[]>([]);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const [firstIndex, setFirstIndex] = useState(1);
  useEffect(() => {
    if (selectedNode) {
      setDeviation(selectedNode?.Deviations || []); // Menggunakan Deviations dari selectedNode jika ada, atau array kosong jika tidak ada
    } else {
      setDeviation([]); // Jika selectedNode null atau undefined, inisialisasikan deviation dengan array kosong
    }
  }, [selectedNode]);
  const handleAddRow = () => {
    if (deviation !== undefined) {
      const newDeviation = new Deviations();
      newDeviation.Causes = [new Causes()];
      newDeviation.Causes[0].Consequences = [new Consequences()];
      newDeviation.Causes[0].Consequences[0].Safeguard_IDs = [
        new Safeguard_IDs(),
      ];
      newDeviation.Causes[0].Consequences[0].Pha_Recommendation_IDs = [
        new Pha_Recommendation_IDs(),
      ];
      setDeviation([...deviation, newDeviation]);
    }
    if (selectedNode !== null) {
      const index = nodes.findIndex((node) => node.ID === selectedNode.ID);
      const datas = dataGlobal;
      datas.Nodes[index].Deviations = deviation;
      updateDataGlobal(datas);
    }
  };
  const handleCloseError = () => {
    setShowError(false);
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null && deviation !== undefined) {
      const updatedDeviations = [...deviation];
      updatedDeviations.splice(activeRow, 1);
      setDeviation(updatedDeviations);
      const data = dataGlobal;
      data.Nodes = nodes;
      updateDataGlobal(data);
      setActiveRow(null);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  const handleActiveRow = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setActiveRow(index);
  };
  const moveUp = () => {
    if (activeRow !== null && deviation !== undefined) {
      if (activeRow > 0) {
        const updatedDeviations = [...deviation];
        const temp = updatedDeviations[activeRow];
        updatedDeviations[activeRow] = updatedDeviations[activeRow - 1];
        updatedDeviations[activeRow - 1] = temp;
        setDeviation(updatedDeviations);
        dataGlobal.Nodes = nodes;
        setActiveRow(activeRow - 1);
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };
  const moveDown = () => {
    if (activeRow !== null && deviation !== undefined) {
      if (activeRow < nodes.length - 1) {
        const updatedDeviations = [...deviation];
        const temp = updatedDeviations[activeRow];
        updatedDeviations[activeRow] = updatedDeviations[activeRow + 1];
        updatedDeviations[activeRow + 1] = temp;
        setDeviation(updatedDeviations);
        dataGlobal.Nodes = nodes;
        setActiveRow(activeRow + 1);
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };
  const handleDeviationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let updatedDeviations = [];
    if (deviation !== undefined) {
      updatedDeviations = [...deviation];
      updatedDeviations[index].Deviation = e.target.value;
      setDeviation(updatedDeviations);
      if (selectedNode !== null) {
        const index = nodes.findIndex((node) => node.ID === selectedNode.ID);
        const datas = dataGlobal;
        datas.Nodes[index].Deviations = updatedDeviations;
        updateDataGlobal(datas);
      }
    }
  };
  const handleGuideWordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let updatedDeviations = [];
    if (deviation !== undefined) {
      updatedDeviations = [...deviation];
      updatedDeviations[index].Guide_Word = e.target.value;
      setDeviation(updatedDeviations);
      if (selectedNode !== null) {
        const index = nodes.findIndex((node) => node.ID === selectedNode.ID);
        const datas = dataGlobal;
        datas.Nodes[index].Deviations = updatedDeviations;
        updateDataGlobal(datas);
      }
    }
  };
  const handleParameterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let updatedDeviations = [];
    if (deviation !== undefined) {
      updatedDeviations = [...deviation];
      updatedDeviations[index].Parameter = e.target.value;
      setDeviation(updatedDeviations);
      if (selectedNode !== null) {
        const index = nodes.findIndex((node) => node.ID === selectedNode.ID);
        const datas = dataGlobal;
        datas.Nodes[index].Deviations = updatedDeviations;
        updateDataGlobal(datas);
      }
    }
  };
  const handleDesignIntenChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let updatedDeviations = [];
    if (deviation !== undefined) {
      updatedDeviations = [...deviation];
      updatedDeviations[index].Design_Intent = e.target.value;
      setDeviation(updatedDeviations);
      if (selectedNode !== null) {
        const index = nodes.findIndex((node) => node.ID === selectedNode.ID);
        const datas = dataGlobal;
        datas.Nodes[index].Deviations = updatedDeviations;
        updateDataGlobal(datas);
      }
    }
  };
  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    let updatedDeviations = [];
    if (deviation !== undefined) {
      updatedDeviations = [...deviation];
      updatedDeviations[index].Deviation_Comments = e.target.value;
      setDeviation(updatedDeviations);
    }
    const data = dataGlobal;
    data.Nodes = nodes;
    updateDataGlobal(data);
  };
  const handleTypeChange = (value: string) => {
    const selectedNode = nodes.find((node) => node.ID === value);
    const getIndex = nodes.findIndex((node) => node.ID === value);
    if (selectedNode) {
      setSelectedNode(selectedNode);
      setDeviation(selectedNode?.Deviations);
      setFirstIndex(getIndex + 1);
    }
  };
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <h1>Guide Word</h1>
            <div>
              <button
                className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={handleAddRow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
              <button
                className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={handleRemoveActiveRow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              <button
                className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={moveUp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                </svg>
              </button>
              <button
                className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={moveDown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16" >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </div>
            {showError && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">
                  Tidak ada row yang dipilih!
                </strong>
                <span className="block sm:inline">
                  {" "}
                  Pilih Row terlebih dahulu
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}{" "}
            {/* Pesan error */}
            <div>
              <select
                className=" bg-transparent w-full leading-tight focus:outline-none"
                value={selectedNode?.ID}
                onChange={(e) => handleTypeChange(e.target.value)}
              >
                {nodes.map((data, index) => (
                  <option key={data.ID} value={data.ID}>
                    {index + 1} {data.Node_Description}
                  </option>
                ))}
              </select>
            </div>
            <table className="table-auto">
              <thead className="bg-slate-300">
                <tr>
                  <td className="border px-4 py-2" colSpan={2}>
                    Deviation
                  </td>
                  <td className="border px-4 py-2">Guide Word</td>
                  <td className="border px-4 py-2">Parameter</td>
                  <td className="border px-4 py-2">Design Intent</td>
                  <td className="border px-4 py-2">Comments</td>
                </tr>
              </thead>
              <tbody>
                {deviation.map((data, index) => (
                  <tr
                    key={data.ID}
                    className={activeRow === index ? "active-row" : ""}
                  >
                    <td className="border-t border-b border-l">
                      {firstIndex}.{index + 1}
                    </td>
                    <td className="border-t border-b border-r">
                      <input
                        type="text"
                        className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                        value={data.Deviation}
                        onChange={(e) => handleDeviationChange(e, index)}
                        onFocus={(e) => handleActiveRow(e, index)}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                        value={data.Guide_Word}
                        onChange={(e) => handleGuideWordChange(e, index)}
                        onFocus={(e) => handleActiveRow(e, index)}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                        value={data.Parameter}
                        onChange={(e) => handleParameterChange(e, index)}
                        onFocus={(e) => handleActiveRow(e, index)}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                        value={data.Design_Intent}
                        onChange={(e) => handleDesignIntenChange(e, index)}
                        onFocus={(e) => handleActiveRow(e, index)}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                        value={data.Deviation_Comments}
                        onChange={(e) => handleCommentChange(e, index)}
                        onFocus={(e) => handleActiveRow(e, index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default NodesPage;
