import React from 'react';
import XLSX from 'xlsx';

function ExcelExportButton({ data }) {
  const handleExportClick = () => {
    const wb = XLSX.utils.book_new();
    const wsData = data.map((item) => [
      item.Name,
      item.Company,
      item.Title,
      item.Departement,
      item.Expertise,
      item.Experience,
      item.Phone_Number,
      item.E__Mail_Address,
      item.Team_Member_Comments,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([
      ['Name', 'Company', 'Title', 'Department', 'Expertise', 'Experience', 'Phone Number', 'Email', 'Comment'],
      ...wsData,
    ]);

    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    XLSX.writeFile(wb, 'data.xlsx');
  };

  return (
    <button onClick={handleExportClick}>Export to Excel</button>
  );
}

export default ExcelExportButton;
