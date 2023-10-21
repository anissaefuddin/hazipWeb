import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from 'xlsx';
import { Team_Member_Type } from '../model/typeData';

export function ButtonExportExcelTeamMember({DataJson, NameFile}) {
 
  const [pres, setPres] = useState(DataJson);
  const exportFile = useCallback(() => {
    const modifiedUsers: Team_Member_Type[] = DataJson.map(({ ID, ...rest }) => rest);
    const ws = utils.json_to_sheet(modifiedUsers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, NameFile+".xlsx");
  }, [DataJson]);

  return (<button className=" hover:bg-slate-100 py-2 px-2 rounded inline-flex items-center" onClick={exportFile}>Export Excel</button>);
}