import TeamMembers from '@/components/TeamMembers';
import { DataGlobal,Drawings,Nodes,Overview, Sessions,Parking_Lot, Revalidation_History,Team_Members, Risk_Criteria, Safeguards, Team_Members_Sessions } from './classModel'; // Pastikan Anda mengganti path sesuai struktur proyek Anda
// DataGlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Session from '@/app/sessions/page';

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
    new DataGlobal(new Overview(),[new Team_Members()], [new Sessions()], [new Team_Members_Sessions()], [new Revalidation_History()], [new Nodes()], [new Safeguards()], [new Parking_Lot()], [new Drawings()], new Risk_Criteria())
  );

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
