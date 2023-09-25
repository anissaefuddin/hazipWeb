import { DataGlobal,Overview } from './classModel'; // Pastikan Anda mengganti path sesuai struktur proyek Anda
// DataGlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    new DataGlobal(new Overview())
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
