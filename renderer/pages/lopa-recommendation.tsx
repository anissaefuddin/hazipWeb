"use client";
import React, { useState, } from "react";
import { useDataGlobal } from "../model/DataGlobalContext";
import { Lopa_Recommendations,Column_Visibility } from "../model/classModel";
import Sidebar from "../components/Sidebar";

const LopaRecommendation: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialLopa_Recommendation: Lopa_Recommendations[] = dataGlobal.Lopa_Recommendations;
  const [columnVisibility] =useState<Column_Visibility | null>(dataGlobal.Settings.Column_Visibility);
  const [lopas, setLopa] = useState<Lopa_Recommendations[]>(initialLopa_Recommendation,);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    const newData = new Lopa_Recommendations();
    setLopa([...lopas, newData]);
    const dataApa = dataGlobal;
    dataApa.Lopa_Recommendations = lopas;
    updateDataGlobal(dataApa);
  };
  const handleCloseError = () => {
    setShowError(false);
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null) {
      const updatedData = [...lopas];
      updatedData.splice(activeRow, 1);
      setLopa(updatedData);
      const dataApa = dataGlobal;
      dataApa.Lopa_Recommendations = lopas;
      updateDataGlobal(dataApa);
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
    if (activeRow !== null) {
      if (activeRow > 0) {
        const updatedData = [...lopas];
        const temp = updatedData[activeRow];
        updatedData[activeRow] = updatedData[activeRow - 1];
        updatedData[activeRow - 1] = temp;
        setLopa(updatedData);
        const dataApa = dataGlobal;
        dataApa.Lopa_Recommendations = lopas;
        updateDataGlobal(dataApa);
        setActiveRow(activeRow - 1);
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRow !== null) {
      if (activeRow < lopas.length - 1) {
        const updatedData = [...lopas];
        const temp = updatedData[activeRow];
        updatedData[activeRow] = updatedData[activeRow + 1];
        updatedData[activeRow + 1] = temp;
        setLopa(updatedData);
        const dataApa = dataGlobal;
        dataApa.Lopa_Recommendations = lopas;
        updateDataGlobal(dataApa);
        setActiveRow(activeRow + 1);
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };
  const handleRecommendationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedData = [...lopas];
    updatedData[index].Lopa_Recommendation = e.target.value;
    setLopa(updatedData);
    const dataApa = dataGlobal;
    dataApa.Lopa_Recommendations = lopas;
    updateDataGlobal(dataApa);
  };
  const handlePriorityChange = (e: string, index: number) => {
    const updatedData = [...lopas];
    updatedData[index].Lopa_Recommendation_Priority = e;
    setLopa(updatedData);
    const dataApa = dataGlobal;
    dataApa.Lopa_Recommendations = lopas;
    updateDataGlobal(dataApa);
  };
  const handlePartyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedData = [...lopas];
    updatedData[index].Lopa_Recommendation_Responsible_Party = e.target.value;
    setLopa(updatedData);
    const dataApa = dataGlobal;
    dataApa.Lopa_Recommendations = lopas;
    updateDataGlobal(dataApa);
  };
  const handleStatusChange = (e: string, index: number) => {
    const updatedData = [...lopas];
    updatedData[index].Lopa_Recommendation_Status = e;
    setLopa(updatedData);
    const dataApa = dataGlobal;
    dataApa.Lopa_Recommendations = lopas;
    updateDataGlobal(dataApa);
  };

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedData = [...lopas];
    updatedData[index].Lopa_Recommendation_Comments = e.target.value;
    setLopa(updatedData);
    const dataApa = dataGlobal;
    dataApa.Lopa_Recommendations = lopas;
    updateDataGlobal(dataApa);
  };

  return (
    <>
      
        <div className="container">
          <div className="row">
            <div className="w-1/6">
            <ul className="mt-4 overflow-x-hidden">
              <Sidebar index={4} />
            </ul>
            </div>
            <div className="w-5/6">
              <h3>LOPA Recommendation</h3>
              <button
                className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={handleAddRow}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16" >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
              </button>
              <button
                className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={handleRemoveActiveRow}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"
             >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h30a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              <button
                className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={moveUp}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16" >
                  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                </svg>
              </button>
              <button
                className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center"
                onClick={moveDown}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16" >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
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
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              )}{" "}
              {/* Pesan error */}
              <table className="table-auto">
                <thead className="bg-slate-300">
                  <tr>
                  {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation ? (
                  <td className="border px-4 py-2 text-center" colSpan={2} rowSpan={2} >Recommendation</td>
                  ) : null}
                  {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Priority ? (
                    <td className="border px-4 py-2 text-center" rowSpan={2}>Priority</td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Responsible_Party ? (
                    <td className="border px-4 py-2 text-center" rowSpan={2}>Responsible Party</td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Status ? (
                    <td className="border px-4 py-2 text-center" rowSpan={2}>Status</td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Comments ? (  
                    <td className="border px-4 py-2 text-center" rowSpan={2}>Comments</td>
                    ) : null}
                    <td className="border px-4 py-2 text-center" colSpan={5}>Referenced Location</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">Reference</td>
                    <td className="border px-4 py-2 text-center">CAT</td>
                    <td className="border px-4 py-2 text-center">S</td>
                    <td className="border px-4 py-2 text-center">LOPA RR</td>
                    <td className="border px-4 py-2 text-center">LOPA GAP</td>
                  </tr>
                </thead>
                <tbody>
                  {lopas.map((data, index) => (
                    <tr
                      key={data.ID}
                      className={activeRow === index ? "active-row" : ""} >
                        {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation ? (
                      <td className="border-t border-b border-l">
                        {index + 1}
                      </td>
                      ) : null}
                      {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation ? (
                      <td className="border-t border-b border-r">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Lopa_Recommendation}
                          onChange={(e) => handleRecommendationChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Priority ? (
                      <td className="border">
                        <select
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Lopa_Recommendation_Priority}
                          onChange={(e) =>handlePriorityChange(e.target.value, index)}>
                          <option></option>
                          <option value={"High"}>High</option>
                          <option value={"Medium"}>Medium</option>
                          <option value={"Low"}>Low</option>
                        </select>
                      </td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Responsible_Party ? (
                      <td className="border">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Lopa_Recommendation_Responsible_Party}
                          onChange={(e) => handlePartyChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Status ? (  
                      <td className="border">
                        <select
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Lopa_Recommendation_Status}
                          onChange={(e) =>handleStatusChange(e.target.value, index)}
                        >
                          <option value={""}></option>
                          <option value={"Proposed"}>Proposed</option>
                          <option value={"Pending"}>Pending</option>
                          <option value={"Under"}>Under Review</option>
                          <option value={"In Progress"}>In Progress</option>
                          <option value={"Completed"}>Completed</option>
                          <option value={"Implemented"}>Implemented</option>
                          <option value={"Closed"}>Closed</option>
                          <option value={"Removed"}>Removed</option>
                          <option value={"Not Progress"}>Not Progress</option>
                        </select>
                      </td>
                    ) : null}
                    {columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Comments ? (  
                      <td className="border">
                        <input
                          type="text"
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={data.Lopa_Recommendation_Comments}
                          onChange={(e) => handleCommentChange(e, index)}
                          onFocus={(e) => handleActiveRow(e, index)}
                        />
                      </td>
                    ) : null}
                      <td className="border"></td>
                      <td className="border"></td>
                      <td className="border"></td>
                      <td className="border"></td>
                      <td className="border"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default LopaRecommendation;
