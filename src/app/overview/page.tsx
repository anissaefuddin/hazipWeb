'use client'
import { useState } from 'react'
import PageHeader from "@/partials/PageHeader";
import { useDataGlobal } from '../../model/DataGlobalContext';
import { Overview } from '@/model/classModel';

const Overviews: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const initialOverview: Overview = dataGlobal.overview;
  const [overview, setOverview] = useState<Overview>(initialOverview);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Study_Name = e.target.value;
    setOverview(updatedOverview);
    const dataApa = dataGlobal;
    dataApa.overview = overview;
    updateDataGlobal(dataApa);
  };
  const handleCoordinatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Study_Coordinator = e.target.value;
    setOverview(updatedOverview);
  };
  const handleCoordinatorContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Study_Coordinator_Contact_Info = e.target.value;
    setOverview(updatedOverview);
  };
  const handleFacilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Facility = e.target.value;
    setOverview(updatedOverview);
  };
  const handleFacilityLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Facility_Location = e.target.value;
    setOverview(updatedOverview);
  };
  const handleFacilityOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Facility_Owner = e.target.value;
    setOverview(updatedOverview);
  };
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Overview_Company = e.target.value;
    setOverview(updatedOverview);
  };
  const handleSiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Site = e.target.value;
    setOverview(updatedOverview);
  };
  const handlePlantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Plant = e.target.value;
    setOverview(updatedOverview);
  };
  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Unit = e.target.value;
    setOverview(updatedOverview);
  };
  const handleUnitGrupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Unit__Group = e.target.value;
    setOverview(updatedOverview);
  };
  const handleSubUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Sub__Unit = e.target.value;
    setOverview(updatedOverview);
  };
  const handleReportNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Report_Number = e.target.value;
    setOverview(updatedOverview);
  };
  const handleProjectNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Project_Number = e.target.value;
    setOverview(updatedOverview);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.Project_Description = e.target.value;
    setOverview(updatedOverview);
  };
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedOverview = { ...overview };
    updatedOverview.General_Notes = e.target.value;
    setOverview(updatedOverview);
  };
  console.log("testOV")
  console.log(dataGlobal)
  return (
    <>
    <PageHeader title="Overview" />
      <section className="section-sm">
        <div className="container">
            <div className="row">
            <div className="w-1/6 sticky">
              <ul className="mt-4 overflow-x-hidden">
                <li className="mb-4 lg:mb-2"><a href="/overview" className="block hover:text-gray-900 font-medium text-lg text-black">Overview</a></li>
                <li className="mb-4 lg:mb-2"><a href="/team-members" className="block hover:text-gray-900 font-medium text-gray-600">Team Member</a></li>
                <li className="mb-4 lg:mb-2"><a href="/sessions" className="block hover:text-gray-900 font-medium text-gray-600">Sessions</a></li>
                <li className="mb-4 lg:mb-2"><a href="/attendances" className="block hover:text-gray-900 font-medium text-gray-600">Attendances</a></li>
                <li className="mb-4 lg:mb-2"><a href="/documents" className="block hover:text-gray-900 font-medium text-gray-600">Documents</a></li>
                <li className="mb-4 lg:mb-2"><a href="/setting-columns" className="block hover:text-gray-900 font-medium text-gray-600">Setting Column</a></li>
                </ul>
                </div>
            <div className="w-5/6">
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
                    value={overview.Study_Name}
                    onChange={(e) => handleNameChange(e)}
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
                    value={overview.Study_Coordinator}
                    onChange={(e) => handleCoordinatorChange(e)}
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
                    value={overview.Study_Coordinator_Contact_Info}
                    onChange={(e) => handleCoordinatorContactChange(e)}
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
                  <input id="Facility" name="Facility" value={overview.Facility} onChange={(e) => handleFacilityChange(e)} className="form-input" placeholder='Facility' type="text"
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
                    value={overview.Facility_Location}
                    onChange={(e) => handleFacilityLocationChange(e) }
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
                    value={overview.Facility_Owner}
                    onChange={(e) => handleFacilityOwnerChange(e)}
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
                    value={overview.Overview_Company}
                    onChange={(e) => handleCompanyChange(e)}
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
                    value={overview.Site}
                    onChange={(e) => handleSiteChange(e)}
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
                    value={overview.Facility_Owner}
                    onChange={(e) => handlePlantChange(e)}
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
                    value={overview.Unit__Group}
                    onChange={(e) => handleUnitGrupChange(e)}
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
                    value={overview.Unit}
                    onChange={(e) => handleUnitChange(e)}
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
                    value={overview.Report_Number}
                    onChange={(e) => handleReportNumberChange(e)}
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
                    value={overview.Project_Number}
                    onChange={(e) => handleProjectNumberChange(e)}
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
                    value={overview.Project_Description}
                    onChange={(e) => handleDescriptionChange(e)}
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
                    value={overview.General_Notes}
                    onChange={(e) => handleNotesChange(e)}
                    rows={8}
                  ></textarea>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overviews;