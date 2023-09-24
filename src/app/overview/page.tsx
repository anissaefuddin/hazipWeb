'use client'
import { useState } from 'react'
import PageHeader from "@/partials/PageHeader";
/* Instruments */
import {
  dataAppSlice,
  useSelector,
  useDispatch,
  selectDataApp,
  addDataOverViewAsync,
} from '@/lib/redux'



const Overview = () => {
  const dispatch = useDispatch()
  const store = useSelector(selectDataApp)
  const [Study_Nama, setStudyNama] = useState("")
  const [Study_Coordinator, setStudyCoordinator] = useState("")
  const [Study_Coordinator_Contact_Info, setStudy_Coordinator_Contact_Info] = useState("")
  const [Facility, setFacility] = useState("")
  const [Facility_Location, setFacility_Location] = useState("")
  const [Facility_Owner, setFacility_Owner] = useState("")
  const [Overview_Company, setOverview_Company] = useState("")
  const [Site, setSite] = useState("")
  const [Plant, setPlant] = useState("")
  const [Unit__Group, setUnit__Group] = useState("")
  const [Unit, setUnit] = useState("")
  const [Sub__Unit, setSub__Unit] = useState("")
  const [Report_Number, setReport_Number] = useState("")
  const [Project_Number, setProject_Number] = useState("")
  const [Project_Description, setProject_Description] = useState("")
  const [General_Notes, setGeneral_Notes] = useState("")

  return (
    <>
    <PageHeader title="Overview" />
      <section className="section-sm">
        <div className="container">
          
          <div className="row">
            <div className="">
              <form method="POST">
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="name" className="form-label">
                    Study Name <span className="text-red-500">*</span>
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="name"
                    name="name"
                    value={Study_Nama}
                    onChange={(e) => setStudyNama(e.target.value)}
                    className="form-input"
                    placeholder="Study Name"
                    type="text"
                  />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="coordinator" className="form-label">
                    Study Coordinator 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="study-coordinator"
                    name="study-coordinator"
                    value={Study_Coordinator}
                    onChange={(e) => setStudyCoordinator(e.target.value)}
                    className="form-input"
                    placeholder='Study Coordinator'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Study_Coordinator_Contact_Info" className="form-label">
                    Study Coordinator Contact Info 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Study_Coordinator_Contact_Info"
                    name="Study_Coordinator_Contact_Info"
                    value={Study_Coordinator_Contact_Info}
                    onChange={(e) => setStudy_Coordinator_Contact_Info(e.target.value)}
                    className="form-input"
                    placeholder='Study Coordinator Contact Info'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Facility" className="form-label">
                    Facility 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Facility"
                    name="Facility"
                    value={Facility}
                    onChange={(e) => setFacility(e.target.value)}
                    className="form-input"
                    placeholder='Facility'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Facility_Location" className="form-label">
                    Facility Location 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Facility_Location"
                    name="Facility_Location"
                    value={Facility_Location}
                    onChange={(e) => setFacility_Location(e.target.value)}
                    className="form-input"
                    placeholder='Facility Location'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Facility_Owner" className="form-label">
                    Facility Owner 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Facility_Owner"
                    name="Facility_Owner"
                    value={Facility_Owner}
                    onChange={(e) => setFacility_Owner(e.target.value)}
                    className="form-input"
                    placeholder='Facility Owner'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Overview_Company" className="form-label">
                    Overview Company 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Overview_Company"
                    name="Overview_Company"
                    value={Overview_Company}
                    onChange={(e) => setOverview_Company(e.target.value)}
                    className="form-input"
                    placeholder='Overview Company'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Site" className="form-label">
                    Site 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Site"
                    name="Site"
                    value={Site}
                    onChange={(e) => setSite(e.target.value)}
                    className="form-input"
                    placeholder='Site'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Plant" className="form-label">
                    Plant 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Plant"
                    name="Plant"
                    value={Facility_Owner}
                    onChange={(e) => setPlant(e.target.value)}
                    className="form-input"
                    placeholder='Plant'
                    type="text"
                  />
                </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Unit__Group" className="form-label">
                    Unit Group 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Unit__Group"
                    name="Unit__Group"
                    value={Unit__Group}
                    onChange={(e) => setUnit__Group(e.target.value)}
                    className="form-input"
                    placeholder='Unit Group'
                    type="text"
                  />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Unit" className="form-label">
                    Unit 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Unit"
                    name="Unit"
                    value={Unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="form-input"
                    placeholder='Unit'
                    type="text"
                  />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Report_Number" className="form-label">
                    Report Number 
                  </label>
                  </div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Report_Number"
                    name="Report_Number"
                    value={Report_Number}
                    onChange={(e) => setReport_Number(e.target.value)}
                    className="form-input"
                    placeholder='Report Number'
                    type="text"
                  /></div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="Project_Number" className="form-label">
                    Project Number
                  </label></div>
                  <div className="w-3/4 h-12">
                  <input
                    id="Project_Number"
                    name="Project_Number"
                    value={Project_Number}
                    onChange={(e) => setProject_Number(e.target.value)}
                    className="form-input"
                    placeholder='Project Number'
                    type="text"
                  />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label></div>
                  <div className="w-3/4">
                  <textarea
                    id="description"
                    name="description"
                    className="form-input"
                    placeholder="Description goes here..."
                    value={Project_Description}
                    onChange={(e) => setStudyNama(e.target.value)}
                    rows={8}
                  ></textarea>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/4 h-12">
                  <label htmlFor="general-notes" className="form-label">
                    Gneral Notes 
                  </label></div>
                  <div className="w-3/4">
                  <textarea
                    id="General_Notes"
                    name="General_Notes"
                    className="form-input"
                    placeholder="General Notes goes here..."
                    value={General_Notes}
                    onChange={(e) => setGeneral_Notes(e.target.value)}
                    rows={8}
                  ></textarea>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={() =>
                    dispatch(dataAppSlice.actions.addDataOverview({
                      Study_Name: Study_Nama,
                      Study_Coordinator: Study_Coordinator,
                      Study_Coordinator_Contact_Info:Study_Coordinator_Contact_Info,
                      Facility:Facility,
                      Facility_Location:Facility_Location,
                      Facility_Owner:Facility_Owner,
                      Overview_Company:Overview_Company,
                      Site:Site,
                      Plant:Plant,
                      Unit__Group:Unit__Group,
                      Unit:Unit,
                      Sub__Unit:Sub__Unit,
                      Report_Number:Report_Number,
                      Project_Number:Project_Number,
                      Project_Description:Project_Description,
                      General_Notes:General_Notes
                    }))
                  }
                  >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;