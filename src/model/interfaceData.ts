/* Types */
export interface appDataSliceState {
    appData: ModeData,
    status: 'idle' | 'loading' | 'failed'
  }
  
  export interface ModeData {
    Overview : Overview
  }
  
  
  export interface Overview {
    Study_Name: string ,
    Study_Coordinator: string,
    Study_Coordinator_Contact_Info: string,
    Facility: string,
    Facility_Location: string,
    Facility_Owner: string,
    Overview_Company: string,
    Site: string,
    Plant: string,
    Unit__Group: string,
    Unit: string,
    Sub__Unit: string,
    Report_Number: string,
    Project_Number: string,
    Project_Description:string,
    General_Notes:string
  }