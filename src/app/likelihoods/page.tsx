'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';

import { useDataGlobal } from '../../model/DataGlobalContext';
import { Likelihoods } from '@/model/classModel';
const LikelihoodCategories: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialLikelihood: Likelihoods[] = [{"ID":"bl1v8u4tw3mzxagfltoay","RM_Description":"VeryLow","Frequency":"1E-4","Code":"VL"},{"ID":"drp6qkyi1tsddx3l49vown","RM_Description":"Low","Frequency":"1E-3","Code":"L"},{"ID":"y677s2k2osdgyhbq2879vg","RM_Description":"Medium","Frequency":"1E-2","Code":"M"},{"ID":"67kvjl76oxevh1kwp3v1uo","RM_Description":"High","Frequency":"1E-1","Code":"H"},{"ID":"qkefftnb5udhdb6nj3q6g","RM_Description":"VeryHigh","Frequency":"1E+0","Code":"VH"}];
  dataGlobal.Risk_Criteria.Likelihoods;
  const [likelihoods, setLikelihoods] = useState<Likelihoods[]>(initialLikelihood);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    const newData = { ID: uuidv4()};
    setLikelihoods([...likelihoods, newData]);
    const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
  };
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleRemoveActiveRow = () => {
    if (activeRow !== null) {
      const updatedData = [...likelihoods];
      updatedData.splice(activeRow, 1);
      setLikelihoods(updatedData);
      const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
      setActiveRow(null);
      setShowError(false);
    }else{
      setShowError(true);
    }
  };
  const handleActiveRow = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
   setActiveRow(index)
  };
  const moveUp = () => {
    if (activeRow !== null) {
      if(activeRow>0){
      const updatedData = [...likelihoods];
      const temp = updatedData[activeRow];
      updatedData[activeRow] =updatedData[activeRow-1];
      updatedData[activeRow-1]= temp;
      setLikelihoods(updatedData);
      const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
      setActiveRow(activeRow-1);
      setShowError(false);
      }
    }else{
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRow !== null) {
      if(activeRow< likelihoods.length - 1){
      const updatedData = [...likelihoods];
      const temp = updatedData[activeRow];
      updatedData[activeRow] =updatedData[activeRow+1];
      updatedData[activeRow+1]= temp;
      setLikelihoods(updatedData);
      const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
      setActiveRow(activeRow+1);
      setShowError(false);
      }
    }else{
      setShowError(true);
    }
  };
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...likelihoods];
    updatedData[index].Code = e.target.value;
    setLikelihoods(updatedData);
      const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...likelihoods];
    updatedData[index].RM_Description = e.target.value;
    setLikelihoods(updatedData);
    const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
  };
  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...likelihoods];
    updatedData[index].Frequency = e.target.value;
    setLikelihoods(updatedData);
    const dataApa = dataGlobal;
    dataApa.Risk_Criteria.Likelihoods = likelihoods;
    updateDataGlobal(dataApa);
  };
  return (
    <>
    <PageHeader title="Likelihood Categorys" />
      <section className="section-sm">
        <div className="container">
        <div className="row">
            <div className="w-1/6">
              <ul>
                <li className="mb-4 lg:mb-2"><a href="/risk-matrix" className="block hover:text-gray-900 font-medium text-gray-600">Risk Matrix</a></li>
                <li className="mb-4 lg:mb-2"><a href="/likelihoods" className="block hover:text-gray-900 font-medium text-lg text-black">Likelihood Categories</a></li>
                <li className="mb-4 lg:mb-2"><a href="/concequences" className="block hover:text-gray-900 font-medium text-gray-600">Concequences Categorys</a></li>
                <li className="mb-4 lg:mb-2"><a href="/risk-rankings" className="block hover:text-gray-900 font-medium text-gray-600">Risk Ranking</a></li>
                </ul>
                </div>
            <div className="w-5/6">
      <h1>Likelihood Categorys</h1>
      <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleAddRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleRemoveActiveRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveUp}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveDown}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/></svg></button>
      {showError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Tidak ada row yang dipilih!</strong>
  <span className="block sm:inline"> Pilih Row terlebih dahulu</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>} {/* Pesan error */}
      <table className='table-auto'>
        <thead className='bg-slate-300'>
          <tr>
            <td className="border px-4 py-2">Code</td>
            <td className="border px-4 py-2">Description</td>
            <td className="border px-4 py-2">Frequency</td>
          </tr>
        </thead>
        <tbody>
          {likelihoods.map((data,index) => (
           <tr key={data.ID} className={activeRow === index ? 'active-row' : ''}>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Code} onChange={(e) => handleCodeChange(e, index)}  onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.RM_Description} onChange={(e) => handleDescriptionChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none' 
                value={data.Frequency} onChange={(e) => handleFrequencyChange(e, index)} onFocus={(e) => handleActiveRow(e,index)}/>
              </td>
           </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
  </div>
</section>
    </>
  );
};

export default LikelihoodCategories;

