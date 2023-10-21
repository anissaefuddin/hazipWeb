"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useDataGlobal } from "../model/DataGlobalContext";
import { Sessions, Settings, Column_Visibility } from "../model/classModel";
import Sidebar from "../components/Sidebar";

const Teammember: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [settings, setSettings] = useState<Settings>(dataGlobal.Settings);
  const [columnVisibility, setColumnVisibility] =useState<Column_Visibility | null>(dataGlobal.Settings.Column_Visibility);
  const [studyName, setStudyName] = useState(columnVisibility?.Overview_Children.Study_Name);
  const [studyCoordinator, setStudyCoordinator] = useState(columnVisibility?.Overview_Children.Study_Coordinator);
  const [studyCoordinatorContactInfo, setStudyCoordinatorContactInfo] = useState(columnVisibility?.Overview_Children.Study_Coordinator_Contact_Info);
  const [facility, setFacility] = useState(columnVisibility?.Overview_Children.Facility);
  const [facilityLocation, setFacilityLocation] = useState(columnVisibility?.Overview_Children.Facility_Location);
  const [facilityOwner, setFacilityOwner] = useState(columnVisibility?.Overview_Children.Facility_Owner);
  const [overviewCompany, setOverviewCompany] = useState(columnVisibility?.Overview_Children.Overview_Company);
  const [site, setSite] = useState(columnVisibility?.Overview_Children.Site);
  const [plant, setPlant] = useState(columnVisibility?.Overview_Children.Plant);
  const [unitGroup, setUnitGroup] = useState(columnVisibility?.Overview_Children.Unit__Group);
  const [unit, setUnit] = useState(columnVisibility?.Overview_Children.Unit);
  const [subUnit, setSubUnit] = useState(columnVisibility?.Overview_Children.Sub__Unit);
  const [reportNumber, setReportNumber] = useState(columnVisibility?.Overview_Children.Report_Number);
  const [projectNumber, setProjectNumber] = useState(columnVisibility?.Overview_Children.Project_Number);
  const [projectDescription, setProjectDescription] = useState(columnVisibility?.Overview_Children.Project_Description);
  const [generalNotes, setGeneralNotes] = useState(columnVisibility?.Overview_Children.General_Notes);
  const [name, setName] = useState(columnVisibility?.Team_Members_Children.Name);
  const [company, setCompany] = useState(columnVisibility?.Team_Members_Children.Company);
  const [title, setTitle] = useState(columnVisibility?.Team_Members_Children.Title);
  const [department, setDepartment] = useState(columnVisibility?.Team_Members_Children.Department);
  const [expertise, setExpertise] = useState(columnVisibility?.Team_Members_Children.Expertise);
  const [experience, setExperience] = useState(columnVisibility?.Team_Members_Children.Experience);
  const [phone_Number, setPhone_Number] = useState(columnVisibility?.Team_Members_Children.Phone_Number);
  const [e__Mail_Address, setE__Mail_Address] = useState(columnVisibility?.Team_Members_Children.E__Mail_Address);
  const [team_Member_Comments, setTeam_Member_Comments] = useState(columnVisibility?.Team_Members_Children.Team_Member_Comments);
  const [date, setDate] = useState(columnVisibility?.Sessions_Children.Date);
  const [duration, setDuration] = useState(columnVisibility?.Sessions_Children.Duration);
  const [session, setSession] = useState(columnVisibility?.Sessions_Children.Session);
  const [facilitatorID, setFacilitatorID] = useState(columnVisibility?.Sessions_Children.Facilitator_ID);
  const [scribeID, setScribeID] = useState(columnVisibility?.Sessions_Children.Scribe_ID);
  const [sessionComments, setSessionComments] = useState(columnVisibility?.Sessions_Children.Session_Comments);
  //Revalidation_History_Children
  const [startDate, setStartDate] = useState(columnVisibility?.Revalidation_History_Children.Start_Date);
  const [endDate, setEndDate] = useState(columnVisibility?.Revalidation_History_Children.End_Date);
  const [revalidationComments, setRevalidationComments] = useState(columnVisibility?.Revalidation_History_Children.Revalidation_Comments);
  //Node
  const [nodeDescription, setNodeDescription] = useState(columnVisibility?.Nodes_Children.Node_Description);
  const [intention, setIntention] = useState(columnVisibility?.Nodes_Children.Intention);
  const [boundary, setBoundary] = useState(columnVisibility?.Nodes_Children.Boundary);
  const [designConditions, setDesignConditions] = useState(columnVisibility?.Nodes_Children.Design_Conditions);
  const [operatingConditions, setOperatingConditions] = useState(columnVisibility?.Nodes_Children.Operating_Conditions);
  const [nodeColor, setNodeColor] = useState(columnVisibility?.Nodes_Children.Node_Color);
  const [hazardousMaterials, setHazardousMaterials] = useState(columnVisibility?.Nodes_Children.Hazardous_Materials);
  const [equipmentTags, setEquipmentTags] = useState(columnVisibility?.Nodes_Children.Equipment_Tags);
  const [location, setLocation] = useState(columnVisibility?.Nodes_Children.Location);
  const [nodeComments, setNodeComments] = useState(columnVisibility?.Nodes_Children.Node_Comments);
  const [sessionIDs, setSessionIDs] = useState(columnVisibility?.Nodes_Children.Session_IDs);
  const [drawingIDs, setDrawingIDs] = useState(columnVisibility?.Nodes_Children.Drawing_IDs);
  //deviation child
  const [guideWord, setGuideWord ]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Guide_Word);
  const [parameter, setParameter ]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Parameter);
  const [designIntent, setDesignIntent ]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Design_Intent);
  const [deviationComments, setDeviationComments ]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Deviation_Comments);
  //causes child
  const [causeType, setCauseType]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Cause_Type);
  const [enablingEvents, setEnablingEvents]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Enabling_Events);
  const [causeHackable, setCauseHackable]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Cause_Hackable);
  const [frequency, setFrequency]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Frequency);
  //concequences child
  const [consequences,setConsequences]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence);
  const [likelihoodIDBeforeSafeguards,setLikelihoodIDBeforeSafeguards]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID_Before_Safeguards);
  const [riskRankIDBeforeSafeguards,setRiskRankIDBeforeSafeguards]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID_Before_Safeguards);
  const [likelihoodID,setLikelihoodID]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID);
  const [riskRankID,setRiskRankID]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID);
  const [lopaRequired,setLopaRequired]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Required);
  const [recommendedSil,setRecommendedSil]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Recommended_Sil);
  const [phaRecommendationIDs,setPhaRecommendationIDs]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Pha_Recommendation_IDs);
  const [likelihoodIDAfterRecommendations,setLikelihoodIDAfterRecommendations]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID_After_Recommendations);
  const [riskRankIDAfterRecommendations,setRiskRankIDAfterRecommendations]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID_After_Recommendations);
  const [phaCommentIDs,setPhaCommentIDs]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Pha_Comment_IDs);
  const [lopaRecommendationIDs,setLopaRecommendationIDs]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Recommendation_IDs);
  const [lopaCommentIDs,setLopaCommentIDs]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Comment_IDs);
  const [consequenceTypeID,setConsequenceTypeID]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Type_ID);
  const [consequenceSeverityIDBeforeSafeguards,setConsequenceSeverityIDBeforeSafeguards]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID_Before_Safeguards);
  const [consequenceSeverityID,setConsequenceSeverityID]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID);
  const [consequenceSeverityIDAfterRecommendations,setConsequenceSeverityIDAfterRecommendations]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID_After_Recommendations);
  const [lopaRiskRankID,setLopaRiskRankID]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Risk_Rank_ID);
  const [conditionalModifiers,setConditionalModifiers]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers);
  const [safeguardIDs,setSafeguardIDs]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Safeguard_IDs);
  const [tmel,setTmel]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Tmel);
  const [mel,setMel]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Mel);
  const [lopaRatio,setLopaRatio]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Ratio);
  const [rrf,setRrf]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Rrf);
  const [scenarioHackable,setScenarioHackable]= useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Scenario_Hackable);
  //Conditional_Modifiers child
  const [cMLibrary_Id, setCMLibraryId] = useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Library_Id);
  const [cMDescription, setCMDescription] = useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Description);
  const [cMProbability, setCMProbability] = useState(columnVisibility?.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Probability);
  //safeguard
  const [safeguard,setSafeguard] = useState(columnVisibility?.Safeguards_Children.Safeguard);
  const [safeguardType,setSafeguardType] = useState(columnVisibility?.Safeguards_Children.Safeguard_Type);
  const [safeguardIndependent,setSafeguardIndependent] = useState(columnVisibility?.Safeguards_Children.Safeguard_Independent);
  const [safeguardAuditable,setSafeguardAuditable] = useState(columnVisibility?.Safeguards_Children.Safeguard_Auditable);
  const [safeguardEffective,setSafeguardEffective] = useState(columnVisibility?.Safeguards_Children.Safeguard_Effective);
  const [safeguardHackable,setSafeguardHackable] = useState(columnVisibility?.Safeguards_Children.Safeguard_Hackable);
  const [isSafeguard,setIsSafeguard] = useState(columnVisibility?.Safeguards_Children.Is_Safeguard);
  const [isIpl,setIsIpl] = useState(columnVisibility?.Safeguards_Children.Is_Ipl);
  const [iplTag,setIplTag] = useState(columnVisibility?.Safeguards_Children.Ipl_Tag);
  const [safetyCritical,setSafetyCritical] = useState(columnVisibility?.Safeguards_Children.Safety_Critical);
  const [selectedSil,setSelectedSil] = useState(columnVisibility?.Safeguards_Children.Selected_Sil);
  const [requiredResponseTime,setRequiredResponseTime] = useState(columnVisibility?.Safeguards_Children.Required_Response_Time);
  const [testInterval,setTestInterval] = useState(columnVisibility?.Safeguards_Children.Test_Interval);
  const [safeguardLibraryId,setSafeguardLibraryId] = useState(columnVisibility?.Safeguards_Children.Safeguard_Library_Id);
  const [safeguardCategory,setSafeguardCategory] = useState(columnVisibility?.Safeguards_Children.Safeguard_Category);
  const [safeguardComments,setSafeguardComments] = useState(columnVisibility?.Safeguards_Children.Safeguard_Comments);
  const [pfd,setPfd] = useState(columnVisibility?.Safeguards_Children.Pfd);
  //PHA Recommendations
  const [phaRecommendation,setPhaRecommendation] = useState(columnVisibility?.Pha_Recommendations_Children.Pha_Recommendation);
  const [phaRecommendationPriority,setPhaRecommendationPriority] = useState(columnVisibility?.Pha_Recommendations_Children.Pha_Recommendation_Priority);
  const [phaRecommendationResponsibleParty,setPhaRecommendationResponsibleParty] = useState(columnVisibility?.Pha_Recommendations_Children.Pha_Recommendation_Responsible_Party);
  const [phaRecommendationStatus,setPhaRecommendationStatus] = useState(columnVisibility?.Pha_Recommendations_Children.Pha_Recommendation_Status);
  const [phaRecommendationComments,setPhaRecommendationComments] = useState(columnVisibility?.Pha_Recommendations_Children.Pha_Recommendation_Comments);
  //LOPA Recommendations
  const [lopaRecommendation,setLopaRecommendation] = useState(columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation);
  const [lopaRecommendationPriority,setLopaRecommendationPriority] = useState(columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Priority);
  const [lopaRecommendationResponsibleParty,setLopaRecommendationResponsibleParty] = useState(columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Responsible_Party);
  const [lopaRecommendationStatus,setLopaRecommendationStatus] = useState(columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Status);
  const [lopaRecommendationComments,setLopaRecommendationComments] = useState(columnVisibility?.Lopa_Recommendations_Children.Lopa_Recommendation_Comments);
  //LOPA Recommendations
  const [checkListRecommendation,setCheckListRecommendation] = useState(columnVisibility?.Check_List_Recommendations_Children.Check_List_Recommendation);
  const [checkListRecommendationPriority,setCheckListRecommendationPriority] = useState(columnVisibility?.Check_List_Recommendations_Children.Check_List_Recommendation_Priority);
  const [checkListRecommendationResponsibleParty,setCheckListRecommendationResponsibleParty] = useState(columnVisibility?.Check_List_Recommendations_Children.Check_List_Recommendation_Responsible_Party);
  const [checkListRecommendationStatus,setCheckListRecommendationStatus] = useState(columnVisibility?.Check_List_Recommendations_Children.Check_List_Recommendation_Status);
  const [checkListRecommendationComments,setCheckListRecommendationComments] = useState(columnVisibility?.Check_List_Recommendations_Children.Check_List_Recommendation_Comments);
  //parking_lot
  const [parkingLotIssue,setParkingLotIssue] = useState(columnVisibility?.Parking_Lot_Children.Parking_Lot_Issue);
  const [response,setResponse] = useState(columnVisibility?.Parking_Lot_Children.Response);
  const [responsibleParty,setResponsibleParty] = useState(columnVisibility?.Parking_Lot_Children.Responsible_Party);
  const [startDateParkingLot,setStartDateParkingLot] = useState(columnVisibility?.Parking_Lot_Children.Start_Date);
  const [endDateParkingLot,setEndDateParkingLot] = useState(columnVisibility?.Parking_Lot_Children.End_Date);
  //Drawings
  const [drawing,setDrawing] = useState(columnVisibility?.Drawings_Children.Drawing);
  const [revision,setRevision] = useState(columnVisibility?.Drawings_Children.Revision);
  const [documentType,setDocumentType] = useState(columnVisibility?.Drawings_Children.Document_Type);
  const [drawingDescription,setDrawingDescription] = useState(columnVisibility?.Drawings_Children.Drawing_Description);
  const [link,setLink] = useState(columnVisibility?.Drawings_Children.Link);
  //check list
  const [checkListDescription,setCheckListDescription]= useState(columnVisibility?.Check_Lists_Children.Check_List_Description);
  const [checkListComments,setCheckListComments]= useState(columnVisibility?.Check_Lists_Children.Check_List_Comments);
  //checklist answer
  const [checkListQuestion,setCheckListQuestion]= useState(columnVisibility?.Check_Lists_Children.Check_List_Questions_Children.Check_List_Question);
  const [checkListAnswer,setCheckListAnswer]= useState(columnVisibility?.Check_Lists_Children.Check_List_Questions_Children.Check_List_Answer);
  const [checkListJustification,setCheckListJustification]= useState(columnVisibility?.Check_Lists_Children.Check_List_Questions_Children.Check_List_Justification);
  const [checkListRecommendationIDs,setCheckListRecommendationIDs]= useState(columnVisibility?.Check_Lists_Children.Check_List_Questions_Children.Check_List_Recommendation_IDs);
  const [safeguardIDschecklist,setSafeguardIDschecklist]= useState(columnVisibility?.Check_Lists_Children.Check_List_Questions_Children.Safeguard_IDs);
  
  useEffect(() => {
    if(columnVisibility !=  null){
    }
  });
  // Overview
  const handleCheckboxChangeStudyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudyName(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Study_Name = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangestudyCoordinator = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setStudyCoordinator(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Study_Coordinator = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangestudyCoordinatorContactInfo = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setStudyCoordinatorContactInfo(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Study_Coordinator_Contact_Info = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangefacility = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setFacility(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Facility = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangefacilityLocation = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setFacilityLocation(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Facility_Location = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangefacilityOwner = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setFacilityOwner(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Facility_Owner = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeoverviewCompany = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setOverviewCompany(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Overview_Company = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangesite = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setSite(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Site = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeplant = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setPlant(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Plant = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeunitGroup = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setUnitGroup(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Unit__Group = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeunit = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setUnit(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Unit = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangesubUnit = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setSubUnit(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Sub__Unit = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangereportNumber = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setReportNumber(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Report_Number = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeprojectNumber = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setProjectNumber(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Project_Number = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeprojectDescription = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setProjectDescription(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.Project_Description = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangegeneralNotes = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
    setGeneralNotes(e.target.checked);
    const data  = dataGlobal;
    if(data.Settings.Column_Visibility !=  null)
      data.Settings.Column_Visibility.Overview_Children.General_Notes = e.target.checked;
    updateDataGlobal(data);
  };
  // Team Members
  const handleCheckboxChangeName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Name = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeCompany =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setCompany(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Company = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeTitle =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Title = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeDepartment =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setDepartment(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Department = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeExpertise =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setExpertise(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Expertise = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeExperience =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setExperience(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Experience = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangePhone_Number =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPhone_Number(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Phone_Number = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeE__Mail_Address =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setE__Mail_Address(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.E__Mail_Address = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeTeam_Member_Comments =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTeam_Member_Comments(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Team_Members_Children.Team_Member_Comments = e.target.checked;
    updateDataGlobal(data);
  };
  // Sessions
  const handleCheckboxChangeDate= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setDate(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Sessions_Children.Date = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeDuration= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setDuration(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Sessions_Children.Duration = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeSession= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setSession(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Sessions_Children.Session = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeFacilitatorID= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setFacilitatorID(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Sessions_Children.Facilitator_ID = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeScribeID= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setScribeID(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Sessions_Children.Scribe_ID = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeSessionComments= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setSessionComments(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Sessions_Children.Session_Comments = e.target.checked;
    updateDataGlobal(data);
  };
  //revalidations
  const handleCheckboxChangeStartDate= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setStartDate(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Revalidation_History_Children.Start_Date = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeEndDate= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setEndDate(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Revalidation_History_Children.End_Date = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeRevalidationComments= (e:React.ChangeEvent<HTMLInputElement>)=>{ 
    setRevalidationComments(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Revalidation_History_Children.Revalidation_Comments = e.target.checked;
    updateDataGlobal(data);
  };
  //Nodes
  const handleCheckboxChangeNodeDescription= (e : React.ChangeEvent<HTMLInputElement>) => {
    setNodeDescription(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeIntention= (e : React.ChangeEvent<HTMLInputElement>) => {
    setIntention(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeBoundary= (e : React.ChangeEvent<HTMLInputElement>) => {
    setBoundary(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeDesignConditions= (e : React.ChangeEvent<HTMLInputElement>) => {
    setDesignConditions(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeOperatingConditions= (e : React.ChangeEvent<HTMLInputElement>) => {
    setOperatingConditions(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeNodeColor= (e : React.ChangeEvent<HTMLInputElement>) => {
    setNodeColor(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeHazardousMaterials= (e : React.ChangeEvent<HTMLInputElement>) => {
    setHazardousMaterials(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeEquipmentTags= (e : React.ChangeEvent<HTMLInputElement>) => {
    setEquipmentTags(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeLocation= (e : React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeNodeComments= (e : React.ChangeEvent<HTMLInputElement>) => {
    setNodeComments(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeSessionIDs= (e : React.ChangeEvent<HTMLInputElement>) => {
    setSessionIDs(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeDrawingIDs= (e : React.ChangeEvent<HTMLInputElement>) => {
    setDrawingIDs(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Boundary = e.target.checked;
    updateDataGlobal(data);
  };
  //deviation
  const handleCheckboxChangeGuideWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuideWord(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Guide_Word = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeParameter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParameter(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Parameter = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeDesignIntent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesignIntent(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Design_Intent = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeDeviationComments = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeviationComments(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Deviation_Comments = e.target.checked;
    updateDataGlobal(data);
  };
  //causes child
  const handleCheckboxChangeCauseType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCauseType(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Cause_Type = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeEnablingEvents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnablingEvents(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Enabling_Events  = e.target.checked;
    updateDataGlobal(data);
  };
  const handleCheckboxChangeCauseHackable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCauseHackable(e.target.checked);
    const data = dataGlobal;
    if(data.Settings.Column_Visibility != null)
      data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Cause_Hackable = e.target.checked;
    updateDataGlobal(data);
  };
 //concequences child
 const handleCheckboxChangeConsequences= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setConsequences(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLikelihoodIDBeforeSafeguards= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLikelihoodIDBeforeSafeguards(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID_Before_Safeguards = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeRiskRankIDBeforeSafeguards= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setRiskRankIDBeforeSafeguards(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID_Before_Safeguards = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLikelihoodID= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLikelihoodID(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeRiskRankID= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setRiskRankID(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLopaRequired= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLopaRequired(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Required = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeRecommendedSil= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setRecommendedSil(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Recommended_Sil = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangePhaRecommendationIDs= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setPhaRecommendationIDs(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Pha_Recommendation_IDs = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLikelihoodIDAfterRecommendations= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLikelihoodIDAfterRecommendations(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID_After_Recommendations = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeRiskRankIDAfterRecommendations= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setRiskRankIDAfterRecommendations(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID_After_Recommendations = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangePhaCommentIDs= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setPhaCommentIDs(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Pha_Comment_IDs = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLopaRecommendationIDs= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLopaRecommendationIDs(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Comment_IDs = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLopaCommentIDs= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLopaCommentIDs(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Comment_IDs = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeConsequenceTypeID= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setConsequenceTypeID(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Type_ID = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeConsequenceSeverityIDBeforeSafeguards= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setConsequenceSeverityIDBeforeSafeguards(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID_Before_Safeguards = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeConsequenceSeverityID= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setConsequenceSeverityID(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeConsequenceSeverityIDAfterRecommendations= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setConsequenceSeverityIDAfterRecommendations(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID_After_Recommendations = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLopaRiskRankID= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLopaRiskRankID(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Risk_Rank_ID = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeConditionalModifiers= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setConditionalModifiers(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeSafeguardIDs= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setSafeguardIDs(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Safeguard_IDs = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeTmel= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setTmel(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Tmel = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeMel= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setMel(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Mel = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeLopaRatio =  (e:React.ChangeEvent<HTMLInputElement>) => { 
  setLopaRatio(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Ratio = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeRrf =  (e:React.ChangeEvent<HTMLInputElement>) => { 
  setRrf(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Rrf = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeScenarioHackable= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setScenarioHackable(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Scenario_Hackable = e.target.checked;
  updateDataGlobal(data);
 };
 // modifier child
 const handleCheckboxChangeCMDescription= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setCMDescription(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Description = e.target.checked;
  updateDataGlobal(data);
 };
 const handleCheckboxChangeProbability= (e:React.ChangeEvent<HTMLInputElement>) => { 
  setCMProbability(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Probability = e.target.checked;
  updateDataGlobal(data);
 };
 //safeguard
 const handleCheckboxChangeSafeguard = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguard(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Pfd = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardType = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardType(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Type = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardIndependent = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardIndependent(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Independent = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardAuditable = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardAuditable(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Auditable = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardEffective = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardEffective(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Effective = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardHackable = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardHackable(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Hackable = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeIsSafeguard = (e:React.ChangeEvent<HTMLInputElement>) => {
  setIsSafeguard(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Is_Safeguard = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeIsIpl = (e:React.ChangeEvent<HTMLInputElement>) => {
  setIsIpl(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Is_Ipl = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeIplTag = (e:React.ChangeEvent<HTMLInputElement>) => {
  setIplTag(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Ipl_Tag = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafetyCritical = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafetyCritical(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safety_Critical = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSelectedSil = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSelectedSil(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Selected_Sil = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeRequiredResponseTime = (e:React.ChangeEvent<HTMLInputElement>) => {
  setRequiredResponseTime(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Required_Response_Time = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeTestInterval = (e:React.ChangeEvent<HTMLInputElement>) => {
  setTestInterval(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Test_Interval = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardLibraryId = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardLibraryId(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Library_Id = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardCategory = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardCategory(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Category = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangeSafeguardComments = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSafeguardComments(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Safeguard_Comments = e.target.checked;
  updateDataGlobal(data)
 }
 const handleCheckboxChangePfd = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPfd(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Safeguards_Children.Pfd = e.target.checked;
  updateDataGlobal(data)
 }
 //pha recommendation
 const handleCheckboxChangePhaRecommendation = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPhaRecommendation(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Pha_Recommendations_Children.Pha_Recommendation = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangePhaRecommendationPriority = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPhaRecommendationPriority(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Pha_Recommendations_Children.Pha_Recommendation_Priority = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangePhaRecommendationResponsibleParty = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPhaRecommendationResponsibleParty(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Pha_Recommendations_Children.Pha_Recommendation_Responsible_Party = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangePhaRecommendationStatus = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPhaRecommendationStatus(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Pha_Recommendations_Children.Pha_Recommendation_Status = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangePhaRecommendationComments = (e:React.ChangeEvent<HTMLInputElement>) => {
  setPhaRecommendationComments(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Pha_Recommendations_Children.Pha_Recommendation_Comments = e.target.checked;
  updateDataGlobal(data);
 }
 //lopa recommendation
 const handleCheckboxChangeLopaRecommendation = (e:React.ChangeEvent<HTMLInputElement>) => {
  setLopaRecommendation(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Lopa_Recommendations_Children.Lopa_Recommendation = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeLopaRecommendationPriority = (e:React.ChangeEvent<HTMLInputElement>) => {
  setLopaRecommendationPriority(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Lopa_Recommendations_Children.Lopa_Recommendation_Priority = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeLopaRecommendationResponsibleParty = (e:React.ChangeEvent<HTMLInputElement>) => {
  setLopaRecommendationResponsibleParty(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Lopa_Recommendations_Children.Lopa_Recommendation_Responsible_Party = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeLopaRecommendationStatus = (e:React.ChangeEvent<HTMLInputElement>) => {
  setLopaRecommendationStatus(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Lopa_Recommendations_Children.Lopa_Recommendation_Status = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeLopaRecommendationComments = (e:React.ChangeEvent<HTMLInputElement>) => {
  setLopaRecommendationComments(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Lopa_Recommendations_Children.Lopa_Recommendation_Comments = e.target.checked;
  updateDataGlobal(data);
 }
 //lopa recommendation
 const handleCheckboxChangeCheckListRecommendation = (e:React.ChangeEvent<HTMLInputElement>) => {
  setCheckListRecommendation(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Check_List_Recommendations_Children.Check_List_Recommendation = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeCheckListRecommendationPriority = (e:React.ChangeEvent<HTMLInputElement>) => {
  setCheckListRecommendationPriority(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Check_List_Recommendations_Children.Check_List_Recommendation_Priority = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeCheckListRecommendationResponsibleParty = (e:React.ChangeEvent<HTMLInputElement>) => {
  setCheckListRecommendationResponsibleParty(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Check_List_Recommendations_Children.Check_List_Recommendation_Responsible_Party = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeCheckListRecommendationStatus = (e:React.ChangeEvent<HTMLInputElement>) => {
  setCheckListRecommendationStatus(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Check_List_Recommendations_Children.Check_List_Recommendation_Status = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeCheckListRecommendationComments = (e:React.ChangeEvent<HTMLInputElement>) => {
  setCheckListRecommendationComments(e.target.checked);
  const data =dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Check_List_Recommendations_Children.Check_List_Recommendation_Comments = e.target.checked;
  updateDataGlobal(data);
 }
//drawing
 const handleCheckboxChangeDrawing = (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setDrawing(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Drawings_Children.Drawing = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeRevision = (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setRevision(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Drawings_Children.Revision = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeDocumentType = (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setDocumentType(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Drawings_Children.Document_Type = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeDrawingDescription = (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setDrawingDescription(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Drawings_Children.Drawing_Description = e.target.checked;
  updateDataGlobal(data);
 }
 const handleCheckboxChangeLink = (e:React.ChangeEvent<HTMLInputElement>) =>{ 
  setLink(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility != null)
    data.Settings.Column_Visibility.Drawings_Children.Link = e.target.checked;
  updateDataGlobal(data);
 }



const handleCheckboxChangecheckListComments = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setCheckListComments(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility!= null)
    data.Settings.Column_Visibility.Check_Lists_Children.Check_List_Comments = e.target.checked;
  updateDataGlobal(data);
}
const handleCheckboxChangecheckListQuestion = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setCheckListQuestion(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility!= null)
    data.Settings.Column_Visibility.Check_Lists_Children.Check_List_Questions = e.target.checked;
  updateDataGlobal(data);
}
const handleCheckboxChangecheckListAnswer = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setCheckListAnswer(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility!= null)
    data.Settings.Column_Visibility.Check_Lists_Children.Check_List_Questions_Children.Check_List_Answer = e.target.checked;
  updateDataGlobal(data);
}
const handleCheckboxChangecheckListJustification = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setCheckListJustification(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility!= null)
    data.Settings.Column_Visibility.Check_Lists_Children.Check_List_Questions_Children.Check_List_Justification = e.target.checked;
  updateDataGlobal(data);
}
const handleCheckboxChangecheckListRecommendationIDs = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setCheckListRecommendationIDs(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility!= null)
    data.Settings.Column_Visibility.Check_Lists_Children.Check_List_Questions_Children.Check_List_Recommendation_IDs = e.target.checked;
  updateDataGlobal(data);
}
const handleCheckboxChangesafeguardIDschecklist = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setSafeguardIDschecklist(e.target.checked);
  const data = dataGlobal;
  if(data.Settings.Column_Visibility!= null)
    data.Settings.Column_Visibility.Check_Lists_Children.Check_List_Questions_Children.Safeguard_IDs = e.target.checked;
  updateDataGlobal(data);
}

  return (
    <>
      <div className="grid grid-cols-3"></div>
      
        <div className="container">
          <div className="row">
            <div className="w-1/6">
            <ul className="mt-4 overflow-x-hidden">
              <Sidebar index={0} />
            </ul>
            </div>
            <div className="w-5/6 relative h-screen overflow-auto">
              <h3>Setting Column</h3>
              <br></br>
              <div className="sm:flex sm:justify-center">
                {/* Overview */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Overview</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={studyName} onChange={handleCheckboxChangeStudyName}></input> Study Name
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm"> 
                    <input type="checkbox" checked={studyCoordinator} onChange={handleCheckboxChangestudyCoordinator}></input> Study Coordinator
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm"> 
                    <input type="checkbox" checked={studyCoordinatorContactInfo} onChange={handleCheckboxChangestudyCoordinatorContactInfo}></input> Study Coordinator Contact Info
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm"> 
                    <input type="checkbox" checked={facility} onChange={handleCheckboxChangefacility}></input> Facility
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={facilityLocation} onChange={handleCheckboxChangefacilityLocation}></input> Facility Location
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={facilityOwner} onChange={handleCheckboxChangefacilityOwner}></input> Facility Owner
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={overviewCompany} onChange={handleCheckboxChangeoverviewCompany}></input> Overview Company
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={site} onChange={handleCheckboxChangesite}></input> Site
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={plant} onChange={handleCheckboxChangeplant}></input> Plant
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={unitGroup} onChange={handleCheckboxChangeunitGroup}></input> Unit Group
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={unit} onChange={handleCheckboxChangeunit}></input> Unit
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={subUnit} onChange={handleCheckboxChangesubUnit}></input> Sub Unit
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={reportNumber} onChange={handleCheckboxChangereportNumber}></input> Report Number
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={projectNumber} onChange={handleCheckboxChangeprojectNumber}></input> Project Number
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={projectDescription} onChange={handleCheckboxChangeprojectDescription}></input> Project Description
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={generalNotes} onChange={handleCheckboxChangegeneralNotes}></input> General Notes
                    </li>
                </ul>
                {/* Team Members */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Team Members</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={name} onChange={handleCheckboxChangeName}></input> Name
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={company} onChange={handleCheckboxChangeCompany}></input> Company
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={title} onChange={handleCheckboxChangeTitle}></input> Title
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={department} onChange={handleCheckboxChangeDepartment}></input> Department
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={expertise} onChange={handleCheckboxChangeExpertise}></input> Expertise
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={experience} onChange={handleCheckboxChangeExperience}></input> Experience
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={phone_Number} onChange={handleCheckboxChangePhone_Number}></input> Phone Number
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={e__Mail_Address} onChange={handleCheckboxChangeE__Mail_Address}></input> EMail Address
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={team_Member_Comments} onChange={handleCheckboxChangeTeam_Member_Comments}></input> Team Member Comments
                    </li>
                </ul>
                {/* Sessions */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Sessions</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={date} onChange={handleCheckboxChangeDate}></input> Date
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={duration} onChange={handleCheckboxChangeDuration}></input> Duration
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={session} onChange={handleCheckboxChangeSession}></input> Session
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={facilitatorID} onChange={handleCheckboxChangeFacilitatorID}></input> Facilitator ID
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={scribeID} onChange={handleCheckboxChangeScribeID}></input> Scribe ID
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={sessionComments} onChange={handleCheckboxChangeSessionComments}></input> Session Comments
                    </li>
                </ul>
                {/* Revalidation History */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Revalidation History</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={startDate} onChange={handleCheckboxChangeStartDate} ></input> Start Date
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={endDate} onChange={handleCheckboxChangeEndDate} ></input> End Date
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={revalidationComments} onChange={handleCheckboxChangeRevalidationComments} ></input> Revalidation Comments
                    </li>
                </ul>
              </div>
              <div className="sm:flex sm:justify-center">
                {/* Node */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Hazard Type / Nodes</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={nodeDescription} onChange={handleCheckboxChangeNodeDescription} ></input>  Description
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={intention} onChange={handleCheckboxChangeIntention} ></input>  Intention
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={boundary} onChange={handleCheckboxChangeBoundary} ></input>  Boundary
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={designConditions} onChange={handleCheckboxChangeDesignConditions} ></input>  Design Conditions
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={operatingConditions} onChange={handleCheckboxChangeOperatingConditions} ></input>  Operating Conditions
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={nodeColor} onChange={handleCheckboxChangeNodeColor} ></input>  Color
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={hazardousMaterials} onChange={handleCheckboxChangeHazardousMaterials} ></input>  Hazardous Materials
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={equipmentTags} onChange={handleCheckboxChangeEquipmentTags} ></input>  Equipment Tags
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={location} onChange={handleCheckboxChangeLocation} ></input>  Location
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={nodeComments} onChange={handleCheckboxChangeNodeComments} ></input>  Node Comments
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={sessionIDs} onChange={handleCheckboxChangeSessionIDs} ></input>  Session
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={drawingIDs} onChange={handleCheckboxChangeDrawingIDs} ></input>  Drawing
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <b>Deviations</b>
                    </li>
                    <ul className="pl-4">
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={guideWord} onChange={handleCheckboxChangeGuideWord} ></input>  Guide Word
                      </li>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={parameter} onChange={handleCheckboxChangeParameter} ></input>  Parameter
                      </li>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={designIntent} onChange={handleCheckboxChangeDesignIntent} ></input>  Design Intent
                      </li>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={deviationComments} onChange={handleCheckboxChangeDeviationComments} ></input>  Deviation Comments
                      </li>
                      {/* Causes */}
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                           <b>Causes</b>
                      </li>
                      {/* Concequences */}
                      <ul className="pl-4">
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={causeType} onChange={handleCheckboxChangeCauseType} ></input>  Cause Type
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={enablingEvents} onChange={handleCheckboxChangeEnablingEvents} ></input>  Enabling Events
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={causeHackable} onChange={handleCheckboxChangeCauseHackable} ></input>  Cause Hackable
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                           <b>Enabling Events</b>
                        </li>
                      <ul className="pl-4">
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={causeType} onChange={handleCheckboxChangeCauseHackable} ></input>  Description
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={causeType} onChange={handleCheckboxChangeCauseType} ></input>  EE Credit
                        </li>
                        </ul>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                           <b>Concequences</b>
                        </li>
                        <ul className="pl-4">
                          <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={likelihoodIDBeforeSafeguards} onChange={handleCheckboxChangeLikelihoodIDBeforeSafeguards} ></input> Likelihood Before Safeguards
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={riskRankIDBeforeSafeguards} onChange={handleCheckboxChangeRiskRankIDBeforeSafeguards} ></input> Risk Rank Before Safeguards
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={likelihoodID} onChange={handleCheckboxChangeLikelihoodID} ></input> Likelihood
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={riskRankID} onChange={handleCheckboxChangeRiskRankID} ></input> Risk Rank
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={lopaRequired} onChange={handleCheckboxChangeLopaRequired} ></input> Lopa Required
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={recommendedSil} onChange={handleCheckboxChangeRecommendedSil} ></input> Recommended Sil
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={phaRecommendationIDs} onChange={handleCheckboxChangePhaRecommendationIDs} ></input> Pha Recommendation
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={likelihoodIDAfterRecommendations} onChange={handleCheckboxChangeLikelihoodIDAfterRecommendations} ></input> Likelihood After Recommendations
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={riskRankIDAfterRecommendations} onChange={handleCheckboxChangeRiskRankIDAfterRecommendations} ></input> Risk Rank After Recommendations
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={phaCommentIDs} onChange={handleCheckboxChangePhaCommentIDs} ></input> Pha Comment
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={lopaRecommendationIDs} onChange={handleCheckboxChangeLopaRecommendationIDs} ></input> Lopa Recommendation
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={lopaCommentIDs} onChange={handleCheckboxChangeLopaCommentIDs} ></input> Lopa Comment
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={consequenceTypeID} onChange={handleCheckboxChangeConsequenceTypeID} ></input> Consequence Type
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={consequenceSeverityIDBeforeSafeguards} onChange={handleCheckboxChangeConsequenceSeverityIDBeforeSafeguards} ></input> Severity Before Safeguards
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={consequenceSeverityID} onChange={handleCheckboxChangeConsequenceSeverityID} ></input> Severity
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={consequenceSeverityIDAfterRecommendations} onChange={handleCheckboxChangeConsequenceSeverityIDAfterRecommendations} ></input> Severity After Recommendations
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={lopaRiskRankID} onChange={handleCheckboxChangeLopaRiskRankID} ></input> Lopa Risk RankID
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={safeguardIDs} onChange={handleCheckboxChangeSafeguardIDs} ></input> SafeguardIDs
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={tmel} onChange={handleCheckboxChangeTmel} ></input> Tmel
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={mel} onChange={handleCheckboxChangeMel} ></input> Mel
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={lopaRatio} onChange={handleCheckboxChangeLopaRatio} ></input> LopaRatio
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={rrf} onChange={handleCheckboxChangeRrf} ></input> Rrf
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={scenarioHackable} onChange={handleCheckboxChangeScenarioHackable} ></input> Scenario Hackable
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <b>Conditional Modifiers</b>
                        <ul className="pl-4">
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={cMDescription} onChange={handleCheckboxChangeCMDescription} ></input> Description
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input type="checkbox" checked={cMProbability} onChange={handleCheckboxChangeProbability} ></input> CM Probability
                        </li>
                        </ul>
                        </li>
                        </ul>
                    </ul>
                    </ul>
                </ul>
                {/* Safeguards */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Safeguards</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguard} onChange={handleCheckboxChangeSafeguard}></input> Safeguard
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardType} onChange={handleCheckboxChangeSafeguardType}></input> Type
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardIndependent} onChange={handleCheckboxChangeSafeguardIndependent}></input> Independent
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardAuditable} onChange={handleCheckboxChangeSafeguardAuditable}></input> Auditable
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardEffective} onChange={handleCheckboxChangeSafeguardEffective}></input> Effective
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardHackable} onChange={handleCheckboxChangeSafeguardHackable}></input> Hackable
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={isSafeguard} onChange={handleCheckboxChangeIsSafeguard}></input> Is Safeguard
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={isIpl} onChange={handleCheckboxChangeIsIpl}></input> Is Ipl
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={iplTag} onChange={handleCheckboxChangeIplTag}></input> Ipl Tag
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safetyCritical} onChange={handleCheckboxChangeSafetyCritical}></input> Safety Critical
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={selectedSil} onChange={handleCheckboxChangeSelectedSil}></input> Selected Sil
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={requiredResponseTime} onChange={handleCheckboxChangeRequiredResponseTime}></input> Required Response Time
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={testInterval} onChange={handleCheckboxChangeTestInterval}></input> Test Interval
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardLibraryId} onChange={handleCheckboxChangeSafeguardLibraryId}></input> Library
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardCategory} onChange={handleCheckboxChangeSafeguardCategory}></input>  Category
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardComments} onChange={handleCheckboxChangeSafeguardComments}></input> Comments
                    </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={pfd} onChange={handleCheckboxChangePfd}></input> Pfd
                    </li>
                </ul>
                {/* Pha Recommendations */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Pha Recommendations</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={phaRecommendation} onChange={handleCheckboxChangePhaRecommendation} ></input> Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={phaRecommendationPriority} onChange={handleCheckboxChangePhaRecommendationPriority} ></input> Priority
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={phaRecommendationResponsibleParty} onChange={handleCheckboxChangePhaRecommendationResponsibleParty} ></input>  Responsible Party
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={phaRecommendationStatus} onChange={handleCheckboxChangePhaRecommendationStatus} ></input>  Status
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={phaRecommendationComments} onChange={handleCheckboxChangePhaRecommendationComments} ></input> Comments
                  </li>
                </ul>
                {/* Lopa Recommendations */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Lopa Recommendations</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={lopaRecommendation} onChange={handleCheckboxChangeLopaRecommendation} ></input> Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={lopaRecommendationPriority} onChange={handleCheckboxChangeLopaRecommendationPriority} ></input> Priority
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={lopaRecommendationResponsibleParty} onChange={handleCheckboxChangeLopaRecommendationResponsibleParty} ></input> Responsible Party
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={lopaRecommendationStatus} onChange={handleCheckboxChangeLopaRecommendationStatus} ></input> Status
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={lopaRecommendationComments} onChange={handleCheckboxChangeLopaRecommendationComments} ></input> Comments
                  </li>
                </ul>
              </div>
              
              <div className="sm:flex sm:justify-center">
                {/* Check List Recommendations */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Check List Recommendations</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListRecommendation} onChange={handleCheckboxChangeCheckListRecommendation} ></input> Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListRecommendationPriority} onChange={handleCheckboxChangeCheckListRecommendationPriority} ></input> Priority
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListRecommendationResponsibleParty} onChange={handleCheckboxChangeCheckListRecommendationResponsibleParty} ></input> Responsible Party
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListRecommendationStatus} onChange={handleCheckboxChangeCheckListRecommendationStatus} ></input> Status
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListRecommendationComments} onChange={handleCheckboxChangeCheckListRecommendationComments} ></input> Comments
                  </li>
                </ul>
                {/* Drawing */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Drawing</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={drawing} onChange={handleCheckboxChangeDrawing} ></input> Drawing
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={revision} onChange={handleCheckboxChangeRevision} ></input> Revision
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={documentType} onChange={handleCheckboxChangeDocumentType} ></input> Document Type
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={drawingDescription} onChange={handleCheckboxChangeDrawingDescription} ></input> Drawing Description
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={link} onChange={handleCheckboxChangeLink} ></input> Link
                  </li>
                </ul>
                {/* Check List */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Check List</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListComments} onChange={handleCheckboxChangecheckListComments} ></input> Comments
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListQuestion} onChange={handleCheckboxChangecheckListQuestion} ></input> Question
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <b>Check List Question</b>
                  </li>
                  <ul className="pl-4">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListAnswer} onChange={handleCheckboxChangecheckListAnswer} ></input> Answer
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListJustification} onChange={handleCheckboxChangecheckListJustification} ></input> Justification
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={checkListRecommendationIDs} onChange={handleCheckboxChangecheckListRecommendationIDs} ></input> Check List Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input type="checkbox" checked={safeguardIDschecklist} onChange={handleCheckboxChangesafeguardIDschecklist} ></input> Safeguard
                  </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Teammember;
