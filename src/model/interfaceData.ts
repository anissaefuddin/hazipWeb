/* Types */
export interface appDataSliceState {
    appData: ModeData,
    status: 'idle' | 'loading' | 'failed'
  }
  
  export interface ModeData {
    Overview : Overview,
    Team_Members : Team_Members
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

  export interface Team_Members {
    ID	:	string,
    Name	:	string,
    Company	:	string,
    Title	:	string,
    Department	:	string,
    Expertise	:	string,
    Experience	:string,	
    Phone_Number	:	string,
    E__Mail_Address	:	string,
    Team_Member_Comments	:string
  }

  export interface TeamMembersState {
    data: Team_Members[],
    status: 'idle' | 'loading' | 'failed'
  }
  