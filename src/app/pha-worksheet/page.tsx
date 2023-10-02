'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeader from "@/partials/PageHeader";
import { v4 as uuidv4 } from 'uuid';
import { useDataGlobal } from '../../model/DataGlobalContext';
import { Pha_Recommendations,Nodes, Deviations, Causes, Consequences, Safeguard_IDs,Intersections, Severities, Risk_Rankings, Likelihoods, Safeguards, Pha_Recommendation_IDs } from '@/model/classModel';
import Link from 'next/link';
import { stat } from 'fs';

const PhaWerksheet: React.FC  = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [nodes, setNode] = useState<Nodes[]>(dataGlobal.Nodes);
  const [intersections, setIntersections] = useState<Intersections[]>(dataGlobal.Risk_Criteria.Intersections);
  const [severities, setseverities] = useState<Severities[]>(dataGlobal.Risk_Criteria.Severities);
  const [likelihoods, setLikelihoods] = useState<Likelihoods[]>(dataGlobal.Risk_Criteria.Likelihoods);
  const [riskRankings, setriskRankings] = useState<Risk_Rankings[]>(dataGlobal.Risk_Criteria.Risk_Rankings);
  const [safeguards, setSafeguards] = useState<Safeguards[]>(dataGlobal.Safeguards);
  const [recommendations, setRecommendation] = useState<Pha_Recommendations[]>(dataGlobal.Pha_Recommendations);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [idDeviation, setIdDeviation] = useState<string | "">("");
  const [idCause, setIdCause] = useState<string | "">("");
  const [idConcequence, setIdConcequence] = useState<string | "">("");
  const [idSafeguard, setIdSafeguard] = useState<string | "">("");
  const [idRecommendation, setIdRecommendation] = useState<string | "">("");
  const [indexNode, setIndexNode] = useState<number|null>(null);
  const [indexDeviation, setIndexDeviation] = useState<number|null>(null);
  const [indexCause, setIndexCause] = useState<number|null>(null);
  const [indexConcequence, setIndexConcequence] = useState<number|null>(null);
  const [indexSafeguard, setIndexSafeguard] = useState<number|null>(null);
  const [indexRecommendation, setIndexRecommendation] = useState<number|null>(null);
  const [activeRowSelected, setActiveRowSelected ]= useState<string | "">("");
  const [maxRowPerDeviation, setMaxRowPerDeviation] = useState<number[]>([]);
  const [showError, setShowError] = useState(false);
  const handleAddRow = () => {
    if(activeRowSelected != ""){
        if(activeRowSelected =="node" && activeRow != null){
            const newNodes = new Nodes();
            newNodes.Deviations = [new Deviations()];
            const updatedNodes = [...nodes];
            updatedNodes.splice(activeRow + 1, 0, newNodes);
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes = updatedNodes;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="deviation" && indexDeviation != null && indexNode != null){
            const newData = new Deviations();
            const updatedDeviation = [...nodes[indexNode].Deviations];
            const updatedNodes = [...nodes];
            updatedDeviation.splice(indexDeviation + 1, 0, newData);
            updatedNodes[indexNode].Deviations = updatedDeviation;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations = updatedDeviation;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="cause" && indexDeviation != null && indexNode != null && indexCause != null){
            const newData = new Causes();
            newData.Consequences = [new Consequences()];
            newData.Consequences[0].Safeguard_IDs=[new Safeguard_IDs()];
            newData.Consequences[0].Pha_Recommendation_IDs=[new Pha_Recommendation_IDs()];
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const updatedNodes = [...nodes];
            updatedCause.splice(indexDeviation + 1, 0, newData);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="consequence" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null){
            const newData = new Consequences();
            const updatedConsequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const updatedNodes = [...nodes];
            updatedConsequence.splice(indexConcequence + 1, 0, newData);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
            updateDataGlobal(data);            
        }else if(activeRowSelected =="safeguard" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null && indexSafeguard != null){
          const newData = new Safeguard_IDs();
          const updatedSafeguard = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Safeguard_IDs];
          const updatedNodes = [...nodes];
          updatedSafeguard.splice(indexSafeguard + 1, 0, newData);
          updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Safeguard_IDs = updatedSafeguard;
          setNode(updatedNodes);
          const data = dataGlobal;
          data.Nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Safeguard_IDs = updatedSafeguard;
          updateDataGlobal(data);            
      }else if(activeRowSelected =="recommendation" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null && indexRecommendation != null){
        const newData = new Pha_Recommendation_IDs();
        const updatedRecommendation = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Pha_Recommendation_IDs];
        const updatedNodes = [...nodes];
        updatedRecommendation.splice(indexRecommendation + 1, 0, newData);
        updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Pha_Recommendation_IDs = updatedRecommendation;
        setNode(updatedNodes);
        const data = dataGlobal;
        data.Nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Pha_Recommendation_IDs = updatedRecommendation;
        updateDataGlobal(data);            
      }else{
            setShowError(true);
        }
    }else{
        setShowError(true);
    }
  };
  const handleCloseError = () => {
    setShowError(false)
  };
  const handleRemoveActiveRow = () => {
    if (activeRowSelected != "") {
        if(activeRowSelected =="node" && activeRow != null && nodes.length > 1){
            const updatedNodes = [...nodes];
            updatedNodes.splice(activeRow, 1);
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes = updatedNodes;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="deviation" && indexDeviation != null && indexNode != null && nodes[indexNode].Deviations.length > 1){
            const updatedDeviation = [...nodes[indexNode].Deviations];
            const updatedNodes = [...nodes];
            updatedDeviation.splice(indexDeviation, 1);
            updatedNodes[indexNode].Deviations = updatedDeviation;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations = updatedDeviation;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="cause" && indexDeviation != null && indexNode != null && indexCause != null && nodes[indexNode].Deviations[indexDeviation].Causes.length > 1){
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const updatedNodes = [...nodes];
            updatedCause.splice(indexCause, 1);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="consequence" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null && nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences.length > 1){
            const updatedConcequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const updatedNodes = [...nodes];
            updatedConcequence.splice(indexConcequence, 1);
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConcequence;
            setNode(updatedNodes);
            const data = dataGlobal;
            data.Nodes = updatedNodes;
            updateDataGlobal(data);  
            setActiveRow(null);
            setShowError(false);          
        }else if(activeRowSelected =="safeguard" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null && indexSafeguard != null && nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Safeguard_IDs.length > 1){
          const updatedSafeguard = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Safeguard_IDs];
          const updatedNodes = [...nodes];
          updatedSafeguard.splice(indexSafeguard, 1);
          updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Safeguard_IDs = updatedSafeguard;
          setNode(updatedNodes);
          const data = dataGlobal;
          data.Nodes = updatedNodes;
          updateDataGlobal(data);  
          setActiveRow(null);
          setShowError(false);          
      }else if(activeRowSelected =="recommendation" && indexDeviation != null && indexNode != null && indexCause != null && indexConcequence != null && indexRecommendation != null && nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Pha_Recommendation_IDs.length > 1){
        const updatedRecommendation = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Pha_Recommendation_IDs];
        const updatedNodes = [...nodes];
        updatedRecommendation.splice(indexRecommendation, 1);
        updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConcequence].Pha_Recommendation_IDs = updatedRecommendation;
        setNode(updatedNodes);
        const data = dataGlobal;
        data.Nodes = updatedNodes;
        updateDataGlobal(data);  
        setActiveRow(null);
        setShowError(false);          
    }
    }else{
      setShowError(true);
    }
  };
  const handleActiveRowNode = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
   setActiveRow(index);
   setIndexNode(index);
   setActiveRowSelected("node");
  };
  const countConcequencePerDeviation = (indexNod : number,indexDev : number)=>{
    let result = 0;
    let countSafeguard = 0;
    let countRecommendation = 0;
    nodes[indexNod].Deviations[indexDev].Causes.map((cause) => {
      cause.Consequences.map((concequence)=>{
        countSafeguard = countSafeguard + concequence.Safeguard_IDs.length;
        countRecommendation = countRecommendation + concequence.Pha_Recommendation_IDs.length;
      });
    });
    if(countSafeguard>=countRecommendation)result=countSafeguard;
    else result=countRecommendation;
    
    return result;
  };
  const getMaxRecommendationSafeguard = (indexNod : number,indexDev : number, indexCau : number,indexCon : number)=>{
    let result = 0;
    const safeguard = nodes[indexNod].Deviations[indexDev].Causes[indexCau].Consequences[indexCon].Safeguard_IDs.length;
    const recommendation = nodes[indexNod].Deviations[indexDev].Causes[indexCau].Consequences[indexCon].Pha_Recommendation_IDs.length;
    if(safeguard>=recommendation)result=safeguard;
    else result=recommendation;
    return result;
  };
  const handleActiveRowDeviation = (e: React.ChangeEvent<HTMLInputElement>, id: string,  indexDeviation:number,indexNode:number) => {
    setActiveRow(null);
    setIdDeviation(id);
    setIdCause("");
    setIdConcequence("");
    setIndexDeviation(indexDeviation);
    setIdSafeguard("");
    setIdRecommendation("");
    setIndexNode(indexNode);
    setActiveRowSelected("deviation");
   };
   const handleActiveRowCause = (e: React.ChangeEvent<HTMLInputElement>, id: string,  indexDeviation:number,indexNode:number, indexCause:number) => {
    setActiveRow(null);
    setIdDeviation("");
    setIdCause(id);
    setIdConcequence("");
    setIdSafeguard("");
    setIdRecommendation("");
    setIndexNode(indexNode);
    setIndexDeviation(indexDeviation);
    setIndexCause(indexCause);
    setActiveRowSelected("cause");
   };
   const handleActiveRowConsequence = (e: React.ChangeEvent<HTMLInputElement>, id: string,indexNode:number,  indexDeviation:number, indexCause:number, indexConcequence:number) => {
    console.log(dataGlobal)
    setActiveRow(null);
    setIdDeviation("");
    setIdCause("");
    setIdConcequence(id);
    setIdSafeguard("");
    setIdRecommendation("");
    setIndexNode(indexNode);
    setIndexDeviation(indexDeviation);
    setIndexCause(indexCause);
    setIndexConcequence(indexConcequence);
    setActiveRowSelected("consequence");
   };
   const handleActiveRowSafeguard = (id: string,indexNode:number,  indexDeviation:number, indexCause:number, indexConcequence:number,indexSafeguard:number) => {
    console.log(dataGlobal)
    setActiveRow(null);
    setIdDeviation("");
    setIdCause("");
    setIdConcequence("");
    setIdSafeguard(id);
    setIdRecommendation("");
    setIndexNode(indexNode);
    setIndexDeviation(indexDeviation);
    setIndexCause(indexCause);
    setIndexConcequence(indexConcequence);
    setIndexSafeguard(indexSafeguard);
    setActiveRowSelected("safeguard");
   };
   const handleActiveRowRecommendation = (id: string,indexNode:number,  indexDeviation:number, indexCause:number, indexConcequence:number,indexRecommendation:number) => {
    console.log(dataGlobal)
    setActiveRow(null);
    setIdDeviation("");
    setIdCause("");
    setIdConcequence("");
    setIdSafeguard("");
    setIdRecommendation(id);
    setIndexNode(indexNode);
    setIndexDeviation(indexDeviation);
    setIndexCause(indexCause);
    setIndexConcequence(indexConcequence);
    setIndexRecommendation(indexRecommendation);
    setActiveRowSelected("recommendation");
   };

  const moveUp = () => {
    if (activeRowSelected != "") {
        if(activeRowSelected =="node" && (indexNode !==null && indexNode>0)){
            const updatedNodes = [...nodes];
            const temp = updatedNodes[indexNode];
            updatedNodes[indexNode] =updatedNodes[indexNode-1];
            updatedNodes[indexNode-1]= temp;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setActiveRow(indexNode-1);
            setIndexNode(indexNode-1);
            setShowError(false);
        }else if(activeRowSelected =="deviation"  && indexDeviation != null && indexNode != null && indexDeviation>0){
            const updatedDeviations = [...nodes[indexNode].Deviations];
            const temp = updatedDeviations[indexDeviation];
            updatedDeviations[indexDeviation] =updatedDeviations[indexDeviation-1];
            updatedDeviations[indexDeviation-1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations = updatedDeviations;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexDeviation(indexDeviation-1);
            setShowError(false);
        }else if(activeRowSelected =="cause"  && indexDeviation != null && indexNode != null && indexCause!== null && indexCause>0){
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const temp = updatedCause[indexCause];
            updatedCause[indexCause] =updatedCause[indexCause-1];
            updatedCause[indexCause-1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexCause(indexCause-1);
            setShowError(false);
        }else if(activeRowSelected =="consequence"  && indexDeviation != null && indexNode != null && indexCause!== null && indexConcequence !== null && indexConcequence>0){
            const updatedConcequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const temp = updatedConcequence[indexDeviation];
            updatedConcequence[indexConcequence] =updatedConcequence[indexConcequence-1];
            updatedConcequence[indexConcequence-1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConcequence;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexConcequence(indexConcequence-1);
            setShowError(false);
        }else{
            console.log("error")
        }
    }else{
      setShowError(true);
    }
  };

  const moveDown = () => {
    if (activeRowSelected != "") {
        if(activeRowSelected =="node" && (indexNode !==null && indexNode< nodes.length - 1)){
            const updatedNodes = [...nodes];
            const temp = updatedNodes[indexNode];
            updatedNodes[indexNode] =updatedNodes[indexNode+1];
            updatedNodes[indexNode+1]= temp;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setActiveRow(indexNode+1);
            setIndexNode(indexNode+1);
            setShowError(false);
        }else if(activeRowSelected =="deviation"  && indexDeviation != null && indexNode != null && indexDeviation<nodes[indexNode].Deviations.length -1){
            const updatedDeviations = [...nodes[indexNode].Deviations];
            const temp = updatedDeviations[indexDeviation];
            updatedDeviations[indexDeviation] =updatedDeviations[indexDeviation+1];
            updatedDeviations[indexDeviation+1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations = updatedDeviations;
            setNode(updatedNodes);            
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexDeviation(indexDeviation+1);
            setShowError(false);
        }else if(activeRowSelected =="cause"  && indexDeviation != null && indexNode != null && indexCause!== null && indexCause< nodes[indexNode].Deviations[indexDeviation].Causes.length-1){
            const updatedCause = [...nodes[indexNode].Deviations[indexDeviation].Causes];
            const temp = updatedCause[indexCause];
            updatedCause[indexCause] =updatedCause[indexCause+1];
            updatedCause[indexCause+1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes = updatedCause;
            setNode(updatedNodes);            
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexCause(indexCause+1);
            setShowError(false);
        }else if(activeRowSelected =="consequence"  && indexDeviation != null && indexNode != null && indexCause!== null && indexConcequence !== null && indexConcequence< nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences.length-1){
            const updatedConcequence = [...nodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences];
            const temp = updatedConcequence[indexDeviation];
            updatedConcequence[indexConcequence] =updatedConcequence[indexConcequence+1];
            updatedConcequence[indexConcequence+1]= temp;
            const updatedNodes = [...nodes];
            updatedNodes[indexNode].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConcequence;
            setNode(updatedNodes);
            const datas = dataGlobal;
            datas.Nodes = nodes;
            updateDataGlobal(datas);
            setIndexConcequence(indexConcequence+1);
            setShowError(false);
        }else{
            console.log("error")
        }
    }else{
      setShowError(true);
    }
  };
  const handleNodesChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...nodes];
    updatedData[index].Node_Description = e.target.value;
    setNode(updatedData);
    const dataApa = dataGlobal;
    dataApa.Nodes = nodes;
    updateDataGlobal(dataApa);
  };
  const handleDeviationChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number) => {
    const deviation = nodes[nodeIndex].Deviations;
    if (deviation !== undefined) {
        const updatedDeviation = [...deviation];
        const updatedNodes = [...nodes];
        updatedDeviation[indexDeviation].Deviation = e.target.value;
        updatedNodes[nodeIndex].Deviations = updatedDeviation;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleGuideWordChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number) => {
    const deviation = nodes[nodeIndex].Deviations;
    if (deviation !== undefined) {
        const updatedDeviation = [...deviation];
        const updatedNodes = [...nodes];
        updatedDeviation[indexDeviation].Guide_Word = e.target.value;
        updatedNodes[nodeIndex].Deviations = updatedDeviation;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleCauseChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number, indexCause: number) => {
    const cause = nodes[nodeIndex].Deviations[indexDeviation].Causes;
    if (cause !== undefined) {
        const updatedCause = [...cause];
        const updatedNodes = [...nodes];
        updatedCause[indexCause].Cause = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes = updatedCause;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleConcequenceChange = (e: React.ChangeEvent<HTMLInputElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number) => {
    const consequence = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences;
    if (consequence !== undefined) {
        const updatedConsequence = [...consequence];
        const updatedNodes = [...nodes];
        updatedConsequence[indexConsequence].Consequence = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleTypeConcequenceChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number) => {
    const consequence = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences;
    if (consequence !== undefined) {
        const updatedConsequence = [...consequence];
        const updatedNodes = [...nodes];
        updatedConsequence[indexConsequence].Consequence_Type_ID = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleSaverityChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number,state :string) => {
    const consequence = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences;
    if (consequence !== undefined) {
        const updatedConsequence = [...consequence];
        const updatedNodes = [...nodes];
        if(state === "before"){
          updatedConsequence[indexConsequence].Consequence_Severity_ID_Before_Safeguards = e.target.value;
          if(updatedConsequence[indexConsequence].Likelihood_ID_Before_Safeguards !== "" ){
            updatedConsequence[indexConsequence].Risk_Rank_ID_Before_Safeguards = intersections.find(
              (intersection) =>
              intersection.Severity_ID === updatedConsequence[indexConsequence].Consequence_Severity_ID_Before_Safeguards &&
              intersection.Likelihood_ID === updatedConsequence[indexConsequence].Likelihood_ID_Before_Safeguards
            )?.Risk_Rank_ID ?? "";
          }
        }else if(state === "on"){
          updatedConsequence[indexConsequence].Consequence_Severity_ID = e.target.value;
          if(updatedConsequence[indexConsequence].Likelihood_ID !== "" ){
            updatedConsequence[indexConsequence].Risk_Rank_ID = intersections.find(
              (intersection) =>
              intersection.Severity_ID === updatedConsequence[indexConsequence].Consequence_Severity_ID &&
              intersection.Likelihood_ID === updatedConsequence[indexConsequence].Likelihood_ID
              )?.Risk_Rank_ID ?? "";
            }
        }else if(state === "after"){
          updatedConsequence[indexConsequence].Consequence_Severity_ID_After_Recommendations = e.target.value;
          if(updatedConsequence[indexConsequence].Likelihood_ID_After_Recommendations !== "" ){
            updatedConsequence[indexConsequence].Risk_Rank_ID_After_Recommendations = intersections.find(
              (intersection) =>
              intersection.Severity_ID === updatedConsequence[indexConsequence].Consequence_Severity_ID_After_Recommendations &&
              intersection.Likelihood_ID === updatedConsequence[indexConsequence].Likelihood_ID_After_Recommendations
              )?.Risk_Rank_ID ?? "";
            }
        }
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleLikelyhoodChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number,state :string) => {
    const consequence = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences;
    if (consequence !== undefined) {
        const updatedConsequence = [...consequence];
        const updatedNodes = [...nodes];
        if(state === "before"){
          updatedConsequence[indexConsequence].Likelihood_ID_Before_Safeguards = e.target.value;
          if(updatedConsequence[indexConsequence].Consequence_Severity_ID_Before_Safeguards !== "" ){
            updatedConsequence[indexConsequence].Risk_Rank_ID_Before_Safeguards = intersections.find(
              (intersection) =>
              intersection.Severity_ID === updatedConsequence[indexConsequence].Consequence_Severity_ID_Before_Safeguards &&
              intersection.Likelihood_ID === updatedConsequence[indexConsequence].Likelihood_ID_Before_Safeguards
            )?.Risk_Rank_ID ?? "";
          }
        }else if(state === "on"){
          updatedConsequence[indexConsequence].Likelihood_ID = e.target.value;
          if(updatedConsequence[indexConsequence].Consequence_Severity_ID !== "" ){
            updatedConsequence[indexConsequence].Risk_Rank_ID = intersections.find(
              (intersection) =>
              intersection.Severity_ID === updatedConsequence[indexConsequence].Consequence_Severity_ID &&
              intersection.Likelihood_ID === updatedConsequence[indexConsequence].Likelihood_ID
            )?.Risk_Rank_ID ?? "";
          }
        }else if(state === "after"){
          updatedConsequence[indexConsequence].Likelihood_ID_After_Recommendations = e.target.value;
          if(updatedConsequence[indexConsequence].Consequence_Severity_ID_After_Recommendations !== "" ){
            updatedConsequence[indexConsequence].Risk_Rank_ID_After_Recommendations = intersections.find(
              (intersection) =>
              intersection.Severity_ID === updatedConsequence[indexConsequence].Consequence_Severity_ID_After_Recommendations &&
              intersection.Likelihood_ID === updatedConsequence[indexConsequence].Likelihood_ID_After_Recommendations
            )?.Risk_Rank_ID ?? "";
          }
        }
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences = updatedConsequence;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleSafeguardChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number,indexSafeguard:number) => {
    const safeguard = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConsequence].Safeguard_IDs;
    if (safeguard !== undefined) {
        const updatedSafeguard = [...safeguard];
        const updatedNodes = [...nodes];
        updatedSafeguard[indexSafeguard].ID = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConsequence].Safeguard_IDs = updatedSafeguard;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const handleRecommendationChange = (e: React.ChangeEvent<HTMLSelectElement>, nodeIndex: number, indexDeviation: number, indexCause: number, indexConsequence:number,indexRecommendation:number) => {
    const recommendation = nodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConsequence].Pha_Recommendation_IDs;
    if (recommendation !== undefined) {
        const updatedRecommendation = [...recommendation];
        const updatedNodes = [...nodes];
        updatedRecommendation[indexRecommendation].ID = e.target.value;
        updatedNodes[nodeIndex].Deviations[indexDeviation].Causes[indexCause].Consequences[indexConsequence].Safeguard_IDs = updatedRecommendation;
        setNode(updatedNodes);
        const datas = dataGlobal;
        datas.Nodes = updatedNodes;
        updateDataGlobal(datas);
    }
  };
  const getBackgroundColor= (severityID: string, likelihoodID: string ) => {
    const data =  intersections.find(
      (intersection) =>
      intersection.Severity_ID === severityID &&
      intersection.Likelihood_ID === likelihoodID
    )?.Risk_Rank_ID;
    const result = riskRankings.find((riskRangking) => riskRangking.ID === data );
    return result?.Color;
  };
  const getValueColor= (severityID: string, likelihoodID: string ) => {
    const data =  intersections.find(
      (intersection) =>
      intersection.Severity_ID === severityID &&
      intersection.Likelihood_ID === likelihoodID
    )?.Risk_Rank_ID;
    const result = riskRankings.find((riskRangking) => riskRangking.ID === data );
    return result?.Code;
  };
  return (
    <>
    <PageHeader title="PHA Worksheet" />
      <section className="section-sm">
        <div className="container">
        <div className="row">
      <h1>PHA Worksheet</h1>
      <div>
      <button className="hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleAddRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={handleRemoveActiveRow}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveUp}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/></svg></button>
      <button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={moveDown}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/></svg></button>
      </div>
      {showError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Tidak ada row yang dipilih!</strong>
  <span className="block sm:inline"> Pilih Row terlebih dahulu</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handleCloseError}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>} {/* Pesan error */}
<div className="table-wrp block min-h-96 overflow-x-auto">
      <table className='w-full h-max'>
        <thead className='bg-slate-300 sticky top-0'>
          <tr >
            <td className="border px-4 py-2 text-center text-sm">Hazard Type</td>
            <td className="border px-4 py-2 text-center text-sm">GUIDE WORD<br/>CATEGORY</td>
            <td className="border px-4 py-2 text-center text-sm">GUIDE WORD</td>
            <td className="border px-4 py-2 text-center text-sm">POSSIBLE <br/>HAZARD</td>
            <td className="border px-4 py-2 text-center text-sm">CONCEQUENCES</td>
            <td className="border px-4 py-2 text-center text-sm">CONCEQUENCES <br/>CATEGORY</td>
            <td className="border px-4 py-2 text-center text-sm">SAVERITY</td>
            <td className="border px-4 py-2 text-center text-sm">LIKELY<br/>HOOD</td>
            <td className="border px-4 py-2 text-center text-sm">RISK BEFORE<br/>SAFEGUARD</td>
            <td className="border px-4 py-2 text-center text-sm">SAFEGUARD</td>
            <td className="border px-4 py-2 text-center text-sm">SAVERITY</td>
            <td className="border px-4 py-2 text-center text-sm">LIKELY<br/>HOOD</td>
            <td className="border px-4 py-2 text-center text-sm">INITIAL<br/>RISK</td>
            <td className="border px-4 py-2 text-center text-sm">RECOMMENDATION</td>
            <td className="border px-4 py-2 text-center text-sm">ACTION<br/>PARTY</td>
            <td className="border px-4 py-2 text-center text-sm">STATUS</td>
            <td className="border px-4 py-2 text-center text-sm">SAVERITY</td>
            <td className="border px-4 py-2 text-center text-sm">LIKELY<br/>HOOD</td>
            <td className="border px-4 py-2 text-center text-sm">RESIDUAL<br/>RISK</td>
            <td className="border px-4 py-2 text-center text-sm">REMARK</td>
          </tr>
        </thead>
        <tbody>
          {nodes.map((node,indexNode) => (
           <tr key={node.ID}  align-top> 
           
           {/* Hazard Type */}
              <td className={'border-t border-b border-r  align-top '+ (activeRow === indexNode  ? 'active-row' : '')}>
                <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                value={node.Node_Description} onChange={(e) => handleNodesChange(e, indexNode)}  onFocus={(e) => handleActiveRowNode(e,indexNode)}/>
                
              </td>
              {/* GUIDE WORD CATEGORY */}
              <td className='p-0 align-top'>
                <table className='w-full'>
                {node.Deviations.map((deviation,indexDeviation) => (
                    <tr key={deviation.ID} className={idDeviation === deviation.ID  ? 'active-row' : ''}>
                        <td className={'border  align-top'} height={countConcequencePerDeviation(indexNode,indexDeviation) * 36.500}>
                        <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                        value={deviation.Deviation} onChange={(e) => handleDeviationChange(e,indexNode, indexDeviation)} onFocus={(e) => handleActiveRowDeviation(e,deviation.ID, indexDeviation,indexNode)}  />
                        </td>
                    </tr>
                ))}
                </table>
              </td>
              {/* GUIDE WORD */}
              <td className='p-0 align-top'>
                <table className='w-full h-full'>
                {node.Deviations.map((deviation,indexDeviation) => (
                    <tr key={deviation.ID} className={idDeviation === deviation.ID  ? 'active-row' : ''}>
                        <td className={'border-t border-b border-l  align-top '} height={countConcequencePerDeviation(indexNode,indexDeviation) * 36.500}>{indexDeviation+1}</td>
                        <td className={'border-t border-b border-r  align-top '} height={countConcequencePerDeviation(indexNode,indexDeviation) * 36.500}>
                        <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                        value={deviation.Guide_Word} onChange={(e) => handleGuideWordChange(e,indexNode, indexDeviation)} onFocus={(e) => handleActiveRowDeviation(e,deviation.ID, indexDeviation,indexNode)}  />
                        
                        </td>
                    </tr>
                ))}
                </table>
              </td>
              {/* POSSIBLE HAZARD */}
              <td className='p-0 align-top'>
              {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <tr  key={cause.ID} className={idCause === cause.ID  ? 'active-row' : ''}>
                    <td className={'border-t border-b border-l align-top'} height={countConcequencePerDeviation(indexNode,indexDeviation) * 36.500}>{indexDeviation+1}.{indexCause+1}</td>
                   <td className={'border-t border-b border-r align-top'} height={countConcequencePerDeviation(indexNode,indexDeviation) * 36.500}> 
                   <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                   value={cause.Cause} onChange={(e) => handleCauseChange(e, indexNode, indexDeviation, indexCause)} 
                   onFocus={(e) => handleActiveRowCause(e,cause.ID, indexDeviation,indexNode,indexCause)}  />
                   </td>
               </tr>
                 ))}
                </table>
                ))}
              </td>
              {/* CONCEQUENCES */}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID} className={idConcequence === concequence.ID  ? 'active-row' : ''} >
                            <td className={'border-t border-b border-l align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}>{indexDeviation+1}.{indexCause+1}.{indexConsequence+1}</td>
                           <td className={'border-t border-b border-r  align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500} > 
                           <input type="text" className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm' 
                           value={concequence.Consequence} onChange={(e) => handleConcequenceChange(e, indexNode, indexDeviation, indexCause,indexConsequence)} 
                           onFocus={(e) => handleActiveRowConsequence(e,concequence.ID,indexNode, indexDeviation,indexCause,indexConsequence)}  />
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))}
            </td>
            {/* CONCEQUENCES CATEGORY */}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}> 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none p-1'  
                           onChange={ (e) =>  handleTypeConcequenceChange(e, indexNode, indexDeviation, indexCause,indexConsequence)} >
                            <option value=""></option>
                           <option value="Safety">Safety</option>
                           <option value="Asset">Asset</option>
                           <option value="Environmental">Environmental</option>
                           <option value="Community">Community</option>
                           <option value="Reputation">Reputation</option>
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            
            </td>
            {/* SAVERITY BEFORE*/}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}> 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleSaverityChange(e, indexNode, indexDeviation, indexCause,indexConsequence,"before")}
                             value={concequence.Consequence_Severity_ID_Before_Safeguards}
                           >
                            <option value={''}></option>
                            {severities.filter((severity) => severity.Severity_Type === concequence.Consequence_Type_ID).map((severity)=>(
                            <option key={severity.ID} value={severity.ID}>{severity.Code}-{severity.RM_Description}</option>
                            ))}
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
            {/* LIKELY HOOD BEFORE */}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500} > 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleLikelyhoodChange(e, indexNode, indexDeviation, indexCause,indexConsequence,"before")}
                             value={concequence.Likelihood_ID_Before_Safeguards}
                           >
                            <option value={''}></option>
                            {likelihoods.map((likelihood)=>(
                            <option key={likelihood.ID} value={likelihood.ID}>{likelihood.Code}-{likelihood.RM_Description}</option>
                            ))}
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
             {/* RISK BEFORE SAFEGUARD */}
             <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top text-center'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500} style={{ backgroundColor: getBackgroundColor(concequence.Consequence_Severity_ID_Before_Safeguards,concequence.Likelihood_ID_Before_Safeguards) }}> 
                           {getValueColor(concequence.Consequence_Severity_ID_Before_Safeguards,concequence.Likelihood_ID_Before_Safeguards) }
                           </td>
                       </tr>
                        ))}
                    </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
            {/* SAFEGUARDS */}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
                <React.Fragment  key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                  <table className='w-full' key={cause.ID}>
                    {cause.Consequences.map((concequence,indexConsequence)=>(
                      <React.Fragment  key={concequence.ID}>
                        {concequence.Safeguard_IDs.map((safeguard,indexSafeguard)=>(
                          <tr key={safeguard.ID} className={idSafeguard === safeguard.ID  ? 'active-row' : ''}>
                          <td className={'border align-top'} > 
                          <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleSafeguardChange(e, indexNode, indexDeviation, indexCause,indexConsequence,indexSafeguard)}
                             value={safeguard.ID} 
                             onFocus={(e) => handleActiveRowSafeguard(safeguard.ID,indexNode, indexDeviation,indexCause,indexConsequence,indexSafeguard)}  
                           >
                            <option value={''}></option>
                            {safeguards.map((dataSafeguard,indexDataSafeguard)=>(
                            <option key={dataSafeguard.ID} value={dataSafeguard.ID}>{indexDataSafeguard+1}-{dataSafeguard.Safeguard}</option>
                            ))}
                           </select>
                          </td>
                      </tr>
                        ))}
                      </React.Fragment>
                    ))}
                    </table>
                 ))}
                </React.Fragment>
                ))} 
            </td>
             {/* SAVERITY */}
             <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500} > 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleSaverityChange(e, indexNode, indexDeviation, indexCause,indexConsequence,"on")}
                             value={concequence.Consequence_Severity_ID}
                           >
                            <option value={''}></option>
                            {severities.filter((severity) => severity.Severity_Type === concequence.Consequence_Type_ID).map((severity)=>(
                            <option key={severity.ID} value={severity.ID}>{severity.Code}-{severity.RM_Description}</option>
                            ))}
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
            {/* LIKELY HOOD  */}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}> 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleLikelyhoodChange(e, indexNode, indexDeviation, indexCause,indexConsequence,"on")}
                             value={concequence.Likelihood_ID}
                           >
                            <option value={''}></option>
                            {likelihoods.map((likelihood)=>(
                            <option key={likelihood.ID} value={likelihood.ID}>{likelihood.Code}-{likelihood.RM_Description}</option>
                            ))}
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
             {/* INITIAL RISK	 */}
             <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top  text-center'}  height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}  style={{ backgroundColor: getBackgroundColor(concequence.Consequence_Severity_ID,concequence.Likelihood_ID) }}> 
                           {getValueColor(concequence.Consequence_Severity_ID,concequence.Likelihood_ID) }
                           </td>
                       </tr>
                        ))}
                    </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
             {/* RECOMMENDATION */}
             <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
                <React.Fragment  key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                  <table className='w-full' key={cause.ID}>
                    {cause.Consequences.map((concequence,indexConsequence)=>(
                      <React.Fragment  key={concequence.ID}>
                        {concequence.Pha_Recommendation_IDs.map((recommendation,indexRecommendation)=>(
                          <tr key={recommendation.ID} className={idSafeguard === recommendation.ID  ? 'active-row' : ''}>
                          <td className={'border'}  > 
                          <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleRecommendationChange(e, indexNode, indexDeviation, indexCause,indexConsequence,indexRecommendation)}
                             value={recommendation.ID}
                             onFocus={(e) => handleActiveRowRecommendation(recommendation.ID,indexNode, indexDeviation,indexCause,indexConsequence,indexRecommendation)}  
                           >
                            <option value={''}></option>
                            {recommendations.map((dataRecommendation,indexDataRecommendation)=>(
                            <option key={dataRecommendation.ID} value={dataRecommendation.ID}>{indexDataRecommendation+1}-{dataRecommendation.Pha_Recommendation}</option>
                            ))}
                           </select>
                          </td>
                      </tr>
                        ))}
                      </React.Fragment>
                    ))}
                    </table>
                 ))}
                </React.Fragment>
                ))} 
            </td>     
             {/* ACTION PARTY	 */}
             <td className='p-0 align-top'></td>
             {/* STATUS		 */}
             <td className='p-0 align-top'></td>
             {/* SAVERITY AFTER*/}
             <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}> 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleSaverityChange(e, indexNode, indexDeviation, indexCause,indexConsequence,"after")}
                             value={concequence.Consequence_Severity_ID_After_Recommendations}
                           >
                            <option value={''}></option>
                            {severities.filter((severity) => severity.Severity_Type === concequence.Consequence_Type_ID).map((severity)=>(
                            <option key={severity.ID} value={severity.ID}>{severity.Code}-{severity.RM_Description}</option>
                            ))}
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
            {/* LIKELY HOOD  AFTER*/}
            <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border align-top'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}> 
                           <select className='appearance-none bg-transparent border-none w-full leading-tight focus:outline-none text-sm'
                             onChange={(e) => handleLikelyhoodChange(e, indexNode, indexDeviation, indexCause,indexConsequence,"after")}
                             value={concequence.Likelihood_ID_After_Recommendations}
                           >
                            <option value={''}></option>
                            {likelihoods.map((likelihood)=>(
                            <option key={likelihood.ID} value={likelihood.ID}>{likelihood.Code}-{likelihood.RM_Description}</option>
                            ))}
                           </select>
                           </td>
                       </tr>
                        ))}
               </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
             {/* Residual RISK	 */}
             <td className='p-0 align-top'>
            {node.Deviations.map((deviation,indexDeviation) => (
              <table className='w-full' key={deviation.ID}>
                 {deviation.Causes.map((cause,indexCause) => (
                    <React.Fragment  key={cause.ID}>
                        {cause.Consequences.map((concequence,indexConsequence)=>(
                            <tr key={concequence.ID}>
                           <td className={'border  text-center'} height={getMaxRecommendationSafeguard(indexNode, indexDeviation, indexCause,indexConsequence) * 36.500}  style={{ backgroundColor: getBackgroundColor(concequence.Consequence_Severity_ID_After_Recommendations,concequence.Likelihood_ID_After_Recommendations) }}> 
                           {getValueColor(concequence.Consequence_Severity_ID_After_Recommendations,concequence.Likelihood_ID_After_Recommendations) }
                           </td>
                       </tr>
                        ))}
                    </React.Fragment>
                 ))}
                </table>
                ))} 
            </td>
            {/* REMARKS	 */}
            <td className='p-0 align-top'>
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

export default PhaWerksheet;