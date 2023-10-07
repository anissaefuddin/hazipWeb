import React from 'react';

interface CSVExportProps {
  styleClassName: string;
  data: Array<any>;
  filename: string;
}

class CSVExport extends React.Component<CSVExportProps> {
  exportToCSV = () => {
    const { styleClassName, data, filename } = this.props;

    // Membuat header untuk file CSV (kolom)
    const csvHeader = Object.keys(data[0]).join(',');

    // Membuat baris data CSV
    const csvData = data.map((item) => {
      return Object.values(item).join(',');
    });

    // Menggabungkan header dan data
    const csvContent = [csvHeader, ...csvData].join('\n');

    // Membuat file CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    // Membuat tautan untuk mengunduh file CSV
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  render() {
    return (
      <button className={this.props.styleClassName} onClick={this.exportToCSV}>Export to CSV</button>
    );
  }
}

export default CSVExport;
