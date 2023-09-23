import { Overview  } from '../interfaceData';

export const fetchIdentityDataApp = async (
  data = {
    Study_Name: "",
      Study_Coordinator:"",
      Study_Coordinator_Contact_Info:"",
      Facility:"",
      Facility_Location:"",
      Facility_Owner:"",
      Overview_Company:"",
      Site:"",
      Plant:"",
      Unit__Group:"",
      Unit:"",
      Sub__Unit:"",
      Report_Number:"",
      Project_Number:"",
      Project_Description:"",
      General_Notes: ""
  }
): Promise<{ data: Overview }> => {
  const response = await fetch('http://localhost:3000/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  })
  const result = await response.json()

  return result
}
