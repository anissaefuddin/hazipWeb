import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from 'xlsx';
import { Team_Member_Type, Session_Type } from '../model/typeData';

export function ButtonExportExcelTeamMember({DataJson, NameFile}) {
 
  const [pres, setPres] = useState(DataJson);
  const exportFile = useCallback(() => {
    const modifiedUsers: Team_Member_Type[] = DataJson.map(({ ID, ...rest }) => rest); // ID adalah atribut yang tidak dibawa saat export ke excel
    const ws = utils.json_to_sheet(modifiedUsers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, NameFile+".xlsx");
  }, [DataJson]);

  return ( <button disabled={DataJson.length === 0} className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={exportFile}>Export Excel</button>);
}

export function ButtonExportExcelSession({DataJson, RelasiDataJson, NameFile}) {
 
  const [pres, setPres] = useState(DataJson);
  const exportFile = useCallback(() => {
    const modifiedUsers: Session_Type[] = DataJson.map(({ ID, ...rest }) => rest); // ID adalah atribut yang tidak dibawa saat export ke excel
    modifiedUsers.map((item) => {
      item.Facilitator_ID =  findNameById(item.Facilitator_ID, RelasiDataJson);
      item.Scribe_ID =  findNameById(item.Scribe_ID, RelasiDataJson);
    })
    const ws = utils.json_to_sheet(modifiedUsers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, NameFile+".xlsx");
  }, [DataJson]);
  return ( <button disabled={DataJson.length === 0} className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={exportFile}>Export Excel</button>);
}

const findNameById = (id, data) => {
  const result = data.find(item => item.ID === id);
  return result ? result.Name : 'Data not found';
}

