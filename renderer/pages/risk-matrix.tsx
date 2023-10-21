"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDataGlobal } from "../model/DataGlobalContext";
import {Likelihoods,Severities,Risk_Rankings,Intersections} from "../model/classModel";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

const Riskmatrics: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [intersections, setIntersections] = useState<Intersections[]>(
    dataGlobal.Risk_Criteria.Intersections,
  );
  const [severities, setseverities] = useState<Severities[]>(
    dataGlobal.Risk_Criteria.Severities,
  );
  const [likelihoods, setLikelihoods] = useState<Likelihoods[]>(
    dataGlobal.Risk_Criteria.Likelihoods,
  );
  const [riskRankings, setriskRankings] = useState<Risk_Rankings[]>(
    dataGlobal.Risk_Criteria.Risk_Rankings,
  );
  const [filteredSeveritys, setFilteredSeveritys] = useState(severities);
  const [severityType, setSeverityType] = useState("Safety");

  useEffect(() => {
    handleTypeChange("Safety");
  }, []);
  const handleTypeChange = (value: string) => {
    setSeverityType(value);
    const filteredDataSaverity = severities.filter(
      (severity) => severity.Severity_Type === value,
    );
    setFilteredSeveritys(filteredDataSaverity);
  };
  const handleDataChange = (
    severityID: string,
    likelihoodID: string,
    newValue: string,
  ) => {
    // Update the attendanceData state based on user selection
    const updatedData = intersections.map((intersection) => {
      if (
        intersection.Severity_ID === severityID &&
        intersection.Likelihood_ID === likelihoodID
      ) {
        return { ...intersection, Risk_Rank_ID: newValue };
      }
      return intersection;
    });
    setIntersections(updatedData);
  };
  const getBackgroundColor = (severityID: string, likelihoodID: string) => {
    const data = intersections.find(
      (intersection) =>
        intersection.Severity_ID === severityID &&
        intersection.Likelihood_ID === likelihoodID,
    )?.Risk_Rank_ID;
    const result = riskRankings.find(
      (riskRangking) => riskRangking.ID === data,
    );
    return result?.Color;
  };
  return (
    <>
      
        <div className="container">
          <div className="row">
            <div className="w-1/6">
            <ul className="mt-4 overflow-x-hidden">
              <Sidebar index={6} />
            </ul>
            </div>
            <div className="w-5/6">
              <h3>Risk Matrix</h3>
              <div>
                <select
                  className=" bg-transparent w-full leading-tight focus:outline-none"
                  value={severityType}
                  onChange={(e) => handleTypeChange(e.target.value)}
                >
                  <option value="Safety">Safety</option>
                  <option value="Environment">Environment</option>
                  <option value="Asset">Asset</option>
                  <option value="Community">Community</option>
                  <option value="Reputation">Reputation</option>
                </select>
              </div>
              <table className="table-auto">
                {filteredSeveritys.map((severity, index) => (
                  <tr key={severity.ID}>
                    {index === 0 ? (
                      <td rowSpan={filteredSeveritys.length} className="rotate">
                        <b>Concequences</b>
                      </td>) : ("")}
                    <td className="border">{severity.RM_Description}</td>
                    {likelihoods.map((likelihood) => (
                      <td
                        key={likelihood.ID}
                        className="border px-2 py-2"
                        style={{backgroundColor: getBackgroundColor(severity.ID,likelihood.ID,),}}>
                        <select
                          className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
                          value={
                            intersections.find(
                              (intersection) =>
                                intersection.Severity_ID === severity.ID &&
                                intersection.Likelihood_ID === likelihood.ID,
                            )?.Risk_Rank_ID
                          }
                          onChange={(e) =>handleDataChange(severity.ID,likelihood.ID,e.target.value,)}>
                          {riskRankings.map((riskRangking) => (
                            <option
                              key={riskRangking.ID}
                              value={riskRangking.ID}
                            >
                              {riskRangking.Priority}
                            </option>
                          ))}
                        </select>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  {likelihoods.map((likelihood) => (
                    <td key={likelihood.ID} className="border">
                      {likelihood.RM_Description}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td colSpan={likelihoods.length + 1} className="text-center">
                    <b>Likelihoods</b>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Riskmatrics;
