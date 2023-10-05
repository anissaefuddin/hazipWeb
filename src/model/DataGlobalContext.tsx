import { DataGlobal,Settings,Drawings,Nodes,Overview, Pha_Recommendations,Lopa_Recommendations,Files,Check_List_Recommendations,Pha_Comments,Lopa_Comments,Sessions,Parking_Lot, Revalidation_History,Team_Members, Risk_Criteria, Safeguards, Team_Members_Sessions } from './classModel'; // Pastikan Anda mengganti path sesuai struktur proyek Anda
// DataGlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getListPage } from "@/lib/contentParser";
interface DataGlobalContextProps {
  dataGlobal: DataGlobal;
  updateDataGlobal: (updatedDataGlobal: DataGlobal) => void;
}

const DataGlobalContext = createContext<DataGlobalContextProps | undefined>(undefined);

interface DataGlobalProviderProps {
  children: ReactNode;
}

export const DataGlobalProvider: React.FC<DataGlobalProviderProps> = ({ children }) => {
  const [dataGlobal, setDataGlobal] = useState<DataGlobal>(
    new DataGlobal(new Overview(),new Settings(),[new Team_Members()], [new Sessions()], [new Team_Members_Sessions()], [new Revalidation_History()], [new Nodes()], [new Safeguards()], 
    [new Pha_Recommendations()],[new Pha_Comments()],[new Lopa_Recommendations()],[new Lopa_Comments()],[new Parking_Lot()], [new Drawings()], new Risk_Criteria(), [new Check_List_Recommendations()], [new Files()])
  );
  useEffect(() => {
    // Lakukan pemanggilan asinkron ke file JSON di sini
    fetch('/initialData.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // Set data dari JSON ke dalam state Data Context
        setDataGlobal(jsonData);
      })
      .catch((error) => {
        console.error('Error loading initial data:', error);
      });
  }, []);
  const updateDataGlobal = (updatedDataGlobal: DataGlobal) => {
    setDataGlobal(updatedDataGlobal);
  };

  return (
    <DataGlobalContext.Provider value={{ dataGlobal, updateDataGlobal }}>
      {children}
    </DataGlobalContext.Provider>
  );
};

export const useDataGlobal = () => {
  const context = useContext(DataGlobalContext);
  if (!context) {
    throw new Error('useDataGlobal must be used within a DataGlobalProvider');
  }
  return context;
};
