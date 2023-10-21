"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useDataGlobal } from "../model/DataGlobalContext";
import { Sessions, Settings, Column_Headers } from "../model/classModel";
import Sidebar from "../components/Sidebar";

const Settingheader: React.FC = () => {
  const { dataGlobal, updateDataGlobal } = useDataGlobal();
  const [settings, setSettings] = useState<Settings>(dataGlobal.Settings);
  const [columnHeader, setColumnHeader] = useState<Column_Headers | null>(
    dataGlobal.Settings.Column_Header,
  );
  const [studyName, setStudyName] = useState(
    columnHeader?.Overview_Children.Study_Name,
  );
  const [studyCoordinator, setStudyCoordinator] = useState(
    columnHeader?.Overview_Children.Study_Coordinator,
  );
  const [studyCoordinatorContactInfo, setStudyCoordinatorContactInfo] =
    useState(columnHeader?.Overview_Children.Study_Coordinator_Contact_Info);
  const [facility, setFacility] = useState(
    columnHeader?.Overview_Children.Facility,
  );
  const [facilityLocation, setFacilityLocation] = useState(
    columnHeader?.Overview_Children.Facility_Location,
  );
  const [facilityOwner, setFacilityOwner] = useState(
    columnHeader?.Overview_Children.Facility_Owner,
  );
  const [overviewCompany, setOverviewCompany] = useState(
    columnHeader?.Overview_Children.Overview_Company,
  );
  const [site, setSite] = useState(columnHeader?.Overview_Children.Site);
  const [plant, setPlant] = useState(columnHeader?.Overview_Children.Plant);
  const [unitGroup, setUnitGroup] = useState(
    columnHeader?.Overview_Children.Unit__Group,
  );
  const [unit, setUnit] = useState(columnHeader?.Overview_Children.Unit);
  const [subUnit, setSubUnit] = useState(
    columnHeader?.Overview_Children.Sub__Unit,
  );
  const [reportNumber, setReportNumber] = useState(
    columnHeader?.Overview_Children.Report_Number,
  );
  const [projectNumber, setProjectNumber] = useState(
    columnHeader?.Overview_Children.Project_Number,
  );
  const [projectDescription, setProjectDescription] = useState(
    columnHeader?.Overview_Children.Project_Description,
  );
  const [generalNotes, setGeneralNotes] = useState(
    columnHeader?.Overview_Children.General_Notes,
  );
  const [name, setName] = useState(columnHeader?.Team_Members_Children.Name);
  const [company, setCompany] = useState(
    columnHeader?.Team_Members_Children.Company,
  );
  const [title, setTitle] = useState(columnHeader?.Team_Members_Children.Title);
  const [department, setDepartment] = useState(
    columnHeader?.Team_Members_Children.Department,
  );
  const [expertise, setExpertise] = useState(
    columnHeader?.Team_Members_Children.Expertise,
  );
  const [experience, setExperience] = useState(
    columnHeader?.Team_Members_Children.Experience,
  );
  const [phone_Number, setPhone_Number] = useState(
    columnHeader?.Team_Members_Children.Phone_Number,
  );
  const [e__Mail_Address, setE__Mail_Address] = useState(
    columnHeader?.Team_Members_Children.E__Mail_Address,
  );
  const [team_Member_Comments, setTeam_Member_Comments] = useState(
    columnHeader?.Team_Members_Children.Team_Member_Comments,
  );
  const [date, setDate] = useState(columnHeader?.Sessions_Children.Date);
  const [duration, setDuration] = useState(
    columnHeader?.Sessions_Children.Duration,
  );
  const [session, setSession] = useState(
    columnHeader?.Sessions_Children.Session,
  );
  const [facilitatorID, setFacilitatorID] = useState(
    columnHeader?.Sessions_Children.Facilitator_ID,
  );
  const [scribeID, setScribeID] = useState(
    columnHeader?.Sessions_Children.Scribe_ID,
  );
  const [sessionComments, setSessionComments] = useState(
    columnHeader?.Sessions_Children.Session_Comments,
  );
  //Revalidation_History_Children
  const [startDate, setStartDate] = useState(
    columnHeader?.Revalidation_History_Children.Start_Date,
  );
  const [endDate, setEndDate] = useState(
    columnHeader?.Revalidation_History_Children.End_Date,
  );
  const [revalidationComments, setRevalidationComments] = useState(
    columnHeader?.Revalidation_History_Children.Revalidation_Comments,
  );
  //Node
  const [nodeDescription, setNodeDescription] = useState(
    columnHeader?.Nodes_Children.Node_Description,
  );
  const [intention, setIntention] = useState(
    columnHeader?.Nodes_Children.Intention,
  );
  const [boundary, setBoundary] = useState(
    columnHeader?.Nodes_Children.Boundary,
  );
  const [designConditions, setDesignConditions] = useState(
    columnHeader?.Nodes_Children.Design_Conditions,
  );
  const [operatingConditions, setOperatingConditions] = useState(
    columnHeader?.Nodes_Children.Operating_Conditions,
  );
  const [nodeColor, setNodeColor] = useState(
    columnHeader?.Nodes_Children.Node_Color,
  );
  const [hazardousMaterials, setHazardousMaterials] = useState(
    columnHeader?.Nodes_Children.Hazardous_Materials,
  );
  const [equipmentTags, setEquipmentTags] = useState(
    columnHeader?.Nodes_Children.Equipment_Tags,
  );
  const [location, setLocation] = useState(
    columnHeader?.Nodes_Children.Location,
  );
  const [nodeComments, setNodeComments] = useState(
    columnHeader?.Nodes_Children.Node_Comments,
  );
  const [sessionIDs, setSessionIDs] = useState(
    columnHeader?.Nodes_Children.Session_IDs,
  );
  const [drawingIDs, setDrawingIDs] = useState(
    columnHeader?.Nodes_Children.Drawing_IDs,
  );
  //deviation child
  const [guideWord, setGuideWord] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Guide_Word,
  );
  const [parameter, setParameter] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Parameter,
  );
  const [designIntent, setDesignIntent] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Design_Intent,
  );
  const [deviationComments, setDeviationComments] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Deviation_Comments,
  );
  //causes child
  const [causeType, setCauseType] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children.Cause_Type,
  );
  const [enablingEvents, setEnablingEvents] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Enabling_Events,
  );
  const [causeHackable, setCauseHackable] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Cause_Hackable,
  );
  const [frequency, setFrequency] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children.Frequency,
  );
  //concequences child
  const [consequences, setConsequences] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Consequence,
  );
  const [likelihoodIDBeforeSafeguards, setLikelihoodIDBeforeSafeguards] =
    useState(
      columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
        .Consequences_Children.Likelihood_ID_Before_Safeguards,
    );
  const [riskRankIDBeforeSafeguards, setRiskRankIDBeforeSafeguards] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Risk_Rank_ID_Before_Safeguards,
  );
  const [likelihoodID, setLikelihoodID] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Likelihood_ID,
  );
  const [riskRankID, setRiskRankID] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Risk_Rank_ID,
  );
  const [lopaRequired, setLopaRequired] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Lopa_Required,
  );
  const [recommendedSil, setRecommendedSil] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Recommended_Sil,
  );
  const [phaRecommendationIDs, setPhaRecommendationIDs] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Pha_Recommendation_IDs,
  );
  const [
    likelihoodIDAfterRecommendations,
    setLikelihoodIDAfterRecommendations,
  ] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Likelihood_ID_After_Recommendations,
  );
  const [riskRankIDAfterRecommendations, setRiskRankIDAfterRecommendations] =
    useState(
      columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
        .Consequences_Children.Risk_Rank_ID_After_Recommendations,
    );
  const [phaCommentIDs, setPhaCommentIDs] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Pha_Comment_IDs,
  );
  const [lopaRecommendationIDs, setLopaRecommendationIDs] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Lopa_Recommendation_IDs,
  );
  const [lopaCommentIDs, setLopaCommentIDs] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Lopa_Comment_IDs,
  );
  const [consequenceTypeID, setConsequenceTypeID] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Consequence_Type_ID,
  );
  const [
    consequenceSeverityIDBeforeSafeguards,
    setConsequenceSeverityIDBeforeSafeguards,
  ] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Consequence_Severity_ID_Before_Safeguards,
  );
  const [consequenceSeverityID, setConsequenceSeverityID] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Consequence_Severity_ID,
  );
  const [
    consequenceSeverityIDAfterRecommendations,
    setConsequenceSeverityIDAfterRecommendations,
  ] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Consequence_Severity_ID_After_Recommendations,
  );
  const [lopaRiskRankID, setLopaRiskRankID] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Lopa_Risk_Rank_ID,
  );
  const [conditionalModifiers, setConditionalModifiers] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Conditional_Modifiers,
  );
  const [safeguardIDs, setSafeguardIDs] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Safeguard_IDs,
  );
  const [tmel, setTmel] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Tmel,
  );
  const [mel, setMel] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Mel,
  );
  const [lopaRatio, setLopaRatio] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Lopa_Ratio,
  );
  const [rrf, setRrf] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Rrf,
  );
  const [scenarioHackable, setScenarioHackable] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Scenario_Hackable,
  );
  //Conditional_Modifiers child
  const [cMLibrary_Id, setCMLibraryId] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Conditional_Modifiers_Children.CM_Library_Id,
  );
  const [cMDescription, setCMDescription] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Conditional_Modifiers_Children.CM_Description,
  );
  const [cMProbability, setCMProbability] = useState(
    columnHeader?.Nodes_Children.Deviations_Children.Causes_Children
      .Consequences_Children.Conditional_Modifiers_Children.CM_Probability,
  );
  //safeguard
  const [safeguard, setSafeguard] = useState(
    columnHeader?.Safeguards_Children.Safeguard,
  );
  const [safeguardType, setSafeguardType] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Type,
  );
  const [safeguardIndependent, setSafeguardIndependent] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Independent,
  );
  const [safeguardAuditable, setSafeguardAuditable] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Auditable,
  );
  const [safeguardEffective, setSafeguardEffective] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Effective,
  );
  const [safeguardHackable, setSafeguardHackable] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Hackable,
  );
  const [isSafeguard, setIsSafeguard] = useState(
    columnHeader?.Safeguards_Children.Is_Safeguard,
  );
  const [isIpl, setIsIpl] = useState(columnHeader?.Safeguards_Children.Is_Ipl);
  const [iplTag, setIplTag] = useState(
    columnHeader?.Safeguards_Children.Ipl_Tag,
  );
  const [safetyCritical, setSafetyCritical] = useState(
    columnHeader?.Safeguards_Children.Safety_Critical,
  );
  const [selectedSil, setSelectedSil] = useState(
    columnHeader?.Safeguards_Children.Selected_Sil,
  );
  const [requiredResponseTime, setRequiredResponseTime] = useState(
    columnHeader?.Safeguards_Children.Required_Response_Time,
  );
  const [testInterval, setTestInterval] = useState(
    columnHeader?.Safeguards_Children.Test_Interval,
  );
  const [safeguardLibraryId, setSafeguardLibraryId] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Library_Id,
  );
  const [safeguardCategory, setSafeguardCategory] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Category,
  );
  const [safeguardComments, setSafeguardComments] = useState(
    columnHeader?.Safeguards_Children.Safeguard_Comments,
  );
  const [pfd, setPfd] = useState(columnHeader?.Safeguards_Children.Pfd);
  //PHA Recommendations
  const [phaRecommendation, setPhaRecommendation] = useState(
    columnHeader?.Pha_Recommendations_Children.Pha_Recommendation,
  );
  const [phaRecommendationPriority, setPhaRecommendationPriority] = useState(
    columnHeader?.Pha_Recommendations_Children.Pha_Recommendation_Priority,
  );
  const [
    phaRecommendationResponsibleParty,
    setPhaRecommendationResponsibleParty,
  ] = useState(
    columnHeader?.Pha_Recommendations_Children
      .Pha_Recommendation_Responsible_Party,
  );
  const [phaRecommendationStatus, setPhaRecommendationStatus] = useState(
    columnHeader?.Pha_Recommendations_Children.Pha_Recommendation_Status,
  );
  const [phaRecommendationComments, setPhaRecommendationComments] = useState(
    columnHeader?.Pha_Recommendations_Children.Pha_Recommendation_Comments,
  );
  //LOPA Recommendations
  const [lopaRecommendation, setLopaRecommendation] = useState(
    columnHeader?.Lopa_Recommendations_Children.Lopa_Recommendation,
  );
  const [lopaRecommendationPriority, setLopaRecommendationPriority] = useState(
    columnHeader?.Lopa_Recommendations_Children.Lopa_Recommendation_Priority,
  );
  const [
    lopaRecommendationResponsibleParty,
    setLopaRecommendationResponsibleParty,
  ] = useState(
    columnHeader?.Lopa_Recommendations_Children
      .Lopa_Recommendation_Responsible_Party,
  );
  const [lopaRecommendationStatus, setLopaRecommendationStatus] = useState(
    columnHeader?.Lopa_Recommendations_Children.Lopa_Recommendation_Status,
  );
  const [lopaRecommendationComments, setLopaRecommendationComments] = useState(
    columnHeader?.Lopa_Recommendations_Children.Lopa_Recommendation_Comments,
  );
  //LOPA Recommendations
  const [checkListRecommendation, setCheckListRecommendation] = useState(
    columnHeader?.Check_List_Recommendations_Children.Check_List_Recommendation,
  );
  const [checkListRecommendationPriority, setCheckListRecommendationPriority] =
    useState(
      columnHeader?.Check_List_Recommendations_Children
        .Check_List_Recommendation_Priority,
    );
  const [
    checkListRecommendationResponsibleParty,
    setCheckListRecommendationResponsibleParty,
  ] = useState(
    columnHeader?.Check_List_Recommendations_Children
      .Check_List_Recommendation_Responsible_Party,
  );
  const [checkListRecommendationStatus, setCheckListRecommendationStatus] =
    useState(
      columnHeader?.Check_List_Recommendations_Children
        .Check_List_Recommendation_Status,
    );
  const [checkListRecommendationComments, setCheckListRecommendationComments] =
    useState(
      columnHeader?.Check_List_Recommendations_Children
        .Check_List_Recommendation_Comments,
    );
  //parking_lot
  const [parkingLotIssue, setParkingLotIssue] = useState(
    columnHeader?.Parking_Lot_Children.Parking_Lot_Issue,
  );
  const [response, setResponse] = useState(
    columnHeader?.Parking_Lot_Children.Response,
  );
  const [responsibleParty, setResponsibleParty] = useState(
    columnHeader?.Parking_Lot_Children.Responsible_Party,
  );
  const [startDateParkingLot, setStartDateParkingLot] = useState(
    columnHeader?.Parking_Lot_Children.Start_Date,
  );
  const [endDateParkingLot, setEndDateParkingLot] = useState(
    columnHeader?.Parking_Lot_Children.End_Date,
  );
  //Drawings
  const [drawing, setDrawing] = useState(
    columnHeader?.Drawings_Children.Drawing,
  );
  const [revision, setRevision] = useState(
    columnHeader?.Drawings_Children.Revision,
  );
  const [documentType, setDocumentType] = useState(
    columnHeader?.Drawings_Children.Document_Type,
  );
  const [drawingDescription, setDrawingDescription] = useState(
    columnHeader?.Drawings_Children.Drawing_Description,
  );
  const [link, setLink] = useState(columnHeader?.Drawings_Children.Link);
  //check list
  const [checkListDescription, setCheckListDescription] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Description,
  );
  const [checkListComments, setCheckListComments] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Comments,
  );
  //checklist answer
  const [checkListQuestion, setCheckListQuestion] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Questions_Children
      .Check_List_Question,
  );
  const [checkListAnswer, setCheckListAnswer] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Questions_Children
      .Check_List_Answer,
  );
  const [checkListJustification, setCheckListJustification] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Questions_Children
      .Check_List_Justification,
  );
  const [checkListRecommendationIDs, setCheckListRecommendationIDs] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Questions_Children
      .Check_List_Recommendation_IDs,
  );
  const [safeguardIDschecklist, setSafeguardIDschecklist] = useState(
    columnHeader?.Check_Lists_Children.Check_List_Questions_Children
      .Safeguard_IDs,
  );

  useEffect(() => {
    if (columnHeader != null) {
    }
  });
  // Overview
  const handleChangeStudyName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStudyName(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Study_Name = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangestudyCoordinator = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStudyCoordinator(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Study_Coordinator =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangestudyCoordinatorContactInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStudyCoordinatorContactInfo(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Study_Coordinator_Contact_Info =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangefacility = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFacility(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Facility = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangefacilityLocation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFacilityLocation(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Facility_Location =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangefacilityOwner = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFacilityOwner(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Facility_Owner =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeoverviewCompany = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOverviewCompany(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Overview_Company =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangesite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSite(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Site = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeplant = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlant(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Plant = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeunitGroup = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUnitGroup(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Unit__Group =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeunit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Unit = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangesubUnit = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSubUnit(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Sub__Unit = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangereportNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setReportNumber(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Report_Number =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeprojectNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProjectNumber(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Project_Number =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeprojectDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProjectDescription(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.Project_Description =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangegeneralNotes = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGeneralNotes(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Overview_Children.General_Notes =
        e.target.value;
    updateDataGlobal(data);
  };
  // Team Members
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Name = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeCompany = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCompany(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Company =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTitle(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Title = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDepartment = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDepartment(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Department =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeExpertise = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setExpertise(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Expertise =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeExperience = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setExperience(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Experience =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhone_Number = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhone_Number(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Phone_Number =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeE__Mail_Address = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setE__Mail_Address(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.E__Mail_Address =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeTeam_Member_Comments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTeam_Member_Comments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Team_Members_Children.Team_Member_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  // Sessions
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Sessions_Children.Date = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDuration = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDuration(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Sessions_Children.Duration = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSession = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSession(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Sessions_Children.Session = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeFacilitatorID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFacilitatorID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Sessions_Children.Facilitator_ID =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeScribeID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setScribeID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Sessions_Children.Scribe_ID = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSessionComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSessionComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Sessions_Children.Session_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  //revalidations
  const handleChangeStartDate = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStartDate(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Revalidation_History_Children.Start_Date =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeEndDate = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEndDate(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Revalidation_History_Children.End_Date =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRevalidationComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRevalidationComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Revalidation_History_Children.Revalidation_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  //Nodes
  const handleChangeNodeDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNodeDescription(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeIntention = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIntention(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeBoundary = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBoundary(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDesignConditions = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDesignConditions(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeOperatingConditions = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOperatingConditions(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeNodeColor = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNodeColor(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeHazardousMaterials = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHazardousMaterials(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeEquipmentTags = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEquipmentTags(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLocation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLocation(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeNodeComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNodeComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSessionIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSessionIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDrawingIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDrawingIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Boundary = e.target.value;
    updateDataGlobal(data);
  };
  //deviation
  const handleChangeGuideWord = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuideWord(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Guide_Word =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeParameter = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setParameter(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Parameter =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDesignIntent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDesignIntent(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Design_Intent =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDeviationComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDeviationComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Deviation_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  //causes child
  const handleChangeCauseType = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCauseType(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Cause_Type =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeEnablingEvents = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEnablingEvents(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Enabling_Events =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeCauseHackable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCauseHackable(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Cause_Hackable =
        e.target.value;
    updateDataGlobal(data);
  };
  //concequences child
  const handleChangeConsequences = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConsequences(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLikelihoodIDBeforeSafeguards = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLikelihoodIDBeforeSafeguards(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID_Before_Safeguards =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRiskRankIDBeforeSafeguards = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRiskRankIDBeforeSafeguards(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID_Before_Safeguards =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLikelihoodID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLikelihoodID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRiskRankID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRiskRankID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRequired = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRequired(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Required =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRecommendedSil = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRecommendedSil(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Recommended_Sil =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhaRecommendationIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaRecommendationIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Pha_Recommendation_IDs =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLikelihoodIDAfterRecommendations = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLikelihoodIDAfterRecommendations(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Likelihood_ID_After_Recommendations =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRiskRankIDAfterRecommendations = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRiskRankIDAfterRecommendations(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Risk_Rank_ID_After_Recommendations =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhaCommentIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaCommentIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Pha_Comment_IDs =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRecommendationIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRecommendationIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Comment_IDs =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaCommentIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaCommentIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Comment_IDs =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeConsequenceTypeID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConsequenceTypeID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Type_ID =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeConsequenceSeverityIDBeforeSafeguards = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConsequenceSeverityIDBeforeSafeguards(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID_Before_Safeguards =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeConsequenceSeverityID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConsequenceSeverityID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeConsequenceSeverityIDAfterRecommendations = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConsequenceSeverityIDAfterRecommendations(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Consequence_Severity_ID_After_Recommendations =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRiskRankID = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRiskRankID(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Risk_Rank_ID =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeConditionalModifiers = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConditionalModifiers(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Safeguard_IDs =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeTmel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmel(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Tmel =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeMel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMel(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Mel =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRatio = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRatio(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Lopa_Ratio =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRrf = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRrf(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Rrf =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeScenarioHackable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setScenarioHackable(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Scenario_Hackable =
        e.target.value;
    updateDataGlobal(data);
  };
  // modifier child
  const handleChangeCMDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCMDescription(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Description =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeProbability = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCMProbability(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Nodes_Children.Deviations_Children.Causes_Children.Consequences_Children.Conditional_Modifiers_Children.CM_Probability =
        e.target.value;
    updateDataGlobal(data);
  };
  //safeguard
  const handleChangeSafeguard = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguard(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Pfd = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardType = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardType(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Type =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardIndependent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardIndependent(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Independent =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardAuditable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardAuditable(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Auditable =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardEffective = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardEffective(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Effective =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardHackable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardHackable(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Hackable =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeIsSafeguard = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsSafeguard(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Is_Safeguard =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeIsIpl = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsIpl(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Is_Ipl = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeIplTag = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIplTag(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Ipl_Tag = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafetyCritical = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafetyCritical(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safety_Critical =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSelectedSil = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedSil(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Selected_Sil =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRequiredResponseTime = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRequiredResponseTime(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Required_Response_Time =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeTestInterval = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTestInterval(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Test_Interval =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardLibraryId = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardLibraryId(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Library_Id =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardCategory = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardCategory(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Category =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeSafeguardComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Safeguard_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePfd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPfd(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Safeguards_Children.Pfd = e.target.value;
    updateDataGlobal(data);
  };
  //pha recommendation
  const handleChangePhaRecommendation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaRecommendation(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Pha_Recommendations_Children.Pha_Recommendation =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhaRecommendationPriority = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaRecommendationPriority(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Pha_Recommendations_Children.Pha_Recommendation_Priority =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhaRecommendationResponsibleParty = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaRecommendationResponsibleParty(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Pha_Recommendations_Children.Pha_Recommendation_Responsible_Party =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhaRecommendationStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaRecommendationStatus(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Pha_Recommendations_Children.Pha_Recommendation_Status =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangePhaRecommendationComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhaRecommendationComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Pha_Recommendations_Children.Pha_Recommendation_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  //lopa recommendation
  const handleChangeLopaRecommendation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRecommendation(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Lopa_Recommendations_Children.Lopa_Recommendation =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRecommendationPriority = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRecommendationPriority(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Lopa_Recommendations_Children.Lopa_Recommendation_Priority =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRecommendationResponsibleParty = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRecommendationResponsibleParty(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Lopa_Recommendations_Children.Lopa_Recommendation_Responsible_Party =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRecommendationStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRecommendationStatus(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Lopa_Recommendations_Children.Lopa_Recommendation_Status =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLopaRecommendationComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLopaRecommendationComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Lopa_Recommendations_Children.Lopa_Recommendation_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  //lopa recommendation
  const handleChangeCheckListRecommendation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListRecommendation(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_List_Recommendations_Children.Check_List_Recommendation =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeCheckListRecommendationPriority = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListRecommendationPriority(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_List_Recommendations_Children.Check_List_Recommendation_Priority =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeCheckListRecommendationResponsibleParty = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListRecommendationResponsibleParty(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_List_Recommendations_Children.Check_List_Recommendation_Responsible_Party =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeCheckListRecommendationStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListRecommendationStatus(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_List_Recommendations_Children.Check_List_Recommendation_Status =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeCheckListRecommendationComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListRecommendationComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_List_Recommendations_Children.Check_List_Recommendation_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  //drawing
  const handleChangeDrawing = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDrawing(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Drawings_Children.Drawing = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeRevision = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRevision(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Drawings_Children.Revision = e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDocumentType = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDocumentType(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Drawings_Children.Document_Type =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeDrawingDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDrawingDescription(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Drawings_Children.Drawing_Description =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Drawings_Children.Link = e.target.value;
    updateDataGlobal(data);
  };

  const handleChangecheckListComments = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListComments(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_Lists_Children.Check_List_Comments =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangecheckListQuestion = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListQuestion(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_Lists_Children.Check_List_Questions =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangecheckListAnswer = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListAnswer(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_Lists_Children.Check_List_Questions_Children.Check_List_Answer =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangecheckListJustification = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListJustification(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_Lists_Children.Check_List_Questions_Children.Check_List_Justification =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangecheckListRecommendationIDs = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckListRecommendationIDs(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_Lists_Children.Check_List_Questions_Children.Check_List_Recommendation_IDs =
        e.target.value;
    updateDataGlobal(data);
  };
  const handleChangesafeguardIDschecklist = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSafeguardIDschecklist(e.target.value);
    const data = dataGlobal;
    if (data.Settings.Column_Header != null)
      data.Settings.Column_Header.Check_Lists_Children.Check_List_Questions_Children.Safeguard_IDs =
        e.target.value;
    updateDataGlobal(data);
  };

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
              <h3>Setting Header Column</h3>
              <br></br>
              <div className="sm:flex sm:justify-center">
                {/* Overview */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Overview</b>
                  </li>
                  <li className="w-full p-2">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={studyName}
                        onChange={handleChangeStudyName}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Study Name
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={studyCoordinator}
                        onChange={handleChangestudyCoordinator}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Study Coordinator
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={studyCoordinatorContactInfo}
                        onChange={handleChangestudyCoordinatorContactInfo}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Study Coordinator Contact Info
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={facility}
                        onChange={handleChangefacility}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Facility
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={facilityLocation}
                        onChange={handleChangefacilityLocation}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Facility Location
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={facilityOwner}
                        onChange={handleChangefacilityOwner}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Facility Owner
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={overviewCompany}
                        onChange={handleChangeoverviewCompany}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Overview Company
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={site}
                        onChange={handleChangesite}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Site
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={plant}
                        onChange={handleChangeplant}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Plant
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={plant}
                        onChange={handleChangeunitGroup}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      unitGroup
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={unit}
                        onChange={handleChangeunit}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Unit
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={subUnit}
                        onChange={handleChangesubUnit}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Sub Unit
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={reportNumber}
                        onChange={handleChangereportNumber}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Report Number
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={projectNumber}
                        onChange={handleChangeprojectNumber}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Project Number
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={projectDescription}
                        onChange={handleChangeprojectDescription}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Project Description
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                  <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        value={generalNotes}
                        onChange={handleChangegeneralNotes}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      General Notes
                      </label>
                    </div>
                  </li>
                </ul>
                {/* Team Members */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Team Members</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={name}
                      onChange={handleChangeName}
                    ></input>{" "}
                    Name
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={company}
                      onChange={handleChangeCompany}
                    ></input>{" "}
                    Company
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={title}
                      onChange={handleChangeTitle}
                    ></input>{" "}
                    Title
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={department}
                      onChange={handleChangeDepartment}
                    ></input>{" "}
                    Department
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={expertise}
                      onChange={handleChangeExpertise}
                    ></input>{" "}
                    Expertise
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={experience}
                      onChange={handleChangeExperience}
                    ></input>{" "}
                    Experience
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={phone_Number}
                      onChange={handleChangePhone_Number}
                    ></input>{" "}
                    Phone Number
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={e__Mail_Address}
                      onChange={handleChangeE__Mail_Address}
                    ></input>{" "}
                    EMail Address
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={team_Member_Comments}
                      onChange={handleChangeTeam_Member_Comments}
                    ></input>{" "}
                    Team Member Comments
                  </li>
                </ul>
                {/* Sessions */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Sessions</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={date}
                      onChange={handleChangeDate}
                    ></input>{" "}
                    Date
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={duration}
                      onChange={handleChangeDuration}
                    ></input>{" "}
                    Duration
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={session}
                      onChange={handleChangeSession}
                    ></input>{" "}
                    Session
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={facilitatorID}
                      onChange={handleChangeFacilitatorID}
                    ></input>{" "}
                    Facilitator ID
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={scribeID}
                      onChange={handleChangeScribeID}
                    ></input>{" "}
                    Scribe ID
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={sessionComments}
                      onChange={handleChangeSessionComments}
                    ></input>{" "}
                    Session Comments
                  </li>
                </ul>
                {/* Revalidation History */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Revalidation History</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={startDate}
                      onChange={handleChangeStartDate}
                    ></input>{" "}
                    Start Date
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={endDate}
                      onChange={handleChangeEndDate}
                    ></input>{" "}
                    End Date
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={revalidationComments}
                      onChange={handleChangeRevalidationComments}
                    ></input>{" "}
                    Revalidation Comments
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
                    <input
                      type="text"
                      value={nodeDescription}
                      onChange={handleChangeNodeDescription}
                    ></input>{" "}
                    Description
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={intention}
                      onChange={handleChangeIntention}
                    ></input>{" "}
                    Intention
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={boundary}
                      onChange={handleChangeBoundary}
                    ></input>{" "}
                    Boundary
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={designConditions}
                      onChange={handleChangeDesignConditions}
                    ></input>{" "}
                    Design Conditions
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={operatingConditions}
                      onChange={handleChangeOperatingConditions}
                    ></input>{" "}
                    Operating Conditions
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={nodeColor}
                      onChange={handleChangeNodeColor}
                    ></input>{" "}
                    Color
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={hazardousMaterials}
                      onChange={handleChangeHazardousMaterials}
                    ></input>{" "}
                    Hazardous Materials
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={equipmentTags}
                      onChange={handleChangeEquipmentTags}
                    ></input>{" "}
                    Equipment Tags
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={location}
                      onChange={handleChangeLocation}
                    ></input>{" "}
                    Location
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={nodeComments}
                      onChange={handleChangeNodeComments}
                    ></input>{" "}
                    Node Comments
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={sessionIDs}
                      onChange={handleChangeSessionIDs}
                    ></input>{" "}
                    Session
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={drawingIDs}
                      onChange={handleChangeDrawingIDs}
                    ></input>{" "}
                    Drawing
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <b>Deviations</b>
                  </li>
                  <ul className="pl-4">
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={guideWord}
                        onChange={handleChangeGuideWord}
                      ></input>{" "}
                      Guide Word
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={parameter}
                        onChange={handleChangeParameter}
                      ></input>{" "}
                      Parameter
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={designIntent}
                        onChange={handleChangeDesignIntent}
                      ></input>{" "}
                      Design Intent
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={deviationComments}
                        onChange={handleChangeDeviationComments}
                      ></input>{" "}
                      Deviation Comments
                    </li>
                    {/* Causes */}
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <b>Causes</b>
                    </li>
                    {/* Concequences */}
                    <ul className="pl-4">
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input
                          type="text"
                          value={causeType}
                          onChange={handleChangeCauseType}
                        ></input>{" "}
                        Cause Type
                      </li>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input
                          type="text"
                          value={enablingEvents}
                          onChange={handleChangeEnablingEvents}
                        ></input>{" "}
                        Enabling Events
                      </li>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <input
                          type="text"
                          value={causeHackable}
                          onChange={handleChangeCauseHackable}
                        ></input>{" "}
                        Cause Hackable
                      </li>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <b>Enabling Events</b>
                      </li>
                      <ul className="pl-4">
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={causeType}
                            onChange={handleChangeCauseHackable}
                          ></input>{" "}
                          Description
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={causeType}
                            onChange={handleChangeCauseType}
                          ></input>{" "}
                          EE Credit
                        </li>
                      </ul>
                      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                        <b>Concequences</b>
                      </li>
                      <ul className="pl-4">
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={likelihoodIDBeforeSafeguards}
                            onChange={
                              handleChangeLikelihoodIDBeforeSafeguards
                            }
                          ></input>{" "}
                          Likelihood Before Safeguards
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={riskRankIDBeforeSafeguards}
                            onChange={
                              handleChangeRiskRankIDBeforeSafeguards
                            }
                          ></input>{" "}
                          Risk Rank Before Safeguards
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={likelihoodID}
                            onChange={handleChangeLikelihoodID}
                          ></input>{" "}
                          Likelihood
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={riskRankID}
                            onChange={handleChangeRiskRankID}
                          ></input>{" "}
                          Risk Rank
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={lopaRequired}
                            onChange={handleChangeLopaRequired}
                          ></input>{" "}
                          Lopa Required
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={recommendedSil}
                            onChange={handleChangeRecommendedSil}
                          ></input>{" "}
                          Recommended Sil
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={phaRecommendationIDs}
                            onChange={handleChangePhaRecommendationIDs}
                          ></input>{" "}
                          Pha Recommendation
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={likelihoodIDAfterRecommendations}
                            onChange={
                              handleChangeLikelihoodIDAfterRecommendations
                            }
                          ></input>{" "}
                          Likelihood After Recommendations
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={riskRankIDAfterRecommendations}
                            onChange={
                              handleChangeRiskRankIDAfterRecommendations
                            }
                          ></input>{" "}
                          Risk Rank After Recommendations
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={phaCommentIDs}
                            onChange={handleChangePhaCommentIDs}
                          ></input>{" "}
                          Pha Comment
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={lopaRecommendationIDs}
                            onChange={handleChangeLopaRecommendationIDs}
                          ></input>{" "}
                          Lopa Recommendation
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={lopaCommentIDs}
                            onChange={handleChangeLopaCommentIDs}
                          ></input>{" "}
                          Lopa Comment
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={consequenceTypeID}
                            onChange={handleChangeConsequenceTypeID}
                          ></input>{" "}
                          Consequence Type
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={consequenceSeverityIDBeforeSafeguards}
                            onChange={
                              handleChangeConsequenceSeverityIDBeforeSafeguards
                            }
                          ></input>{" "}
                          Severity Before Safeguards
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={consequenceSeverityID}
                            onChange={handleChangeConsequenceSeverityID}
                          ></input>{" "}
                          Severity
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={consequenceSeverityIDAfterRecommendations}
                            onChange={
                              handleChangeConsequenceSeverityIDAfterRecommendations
                            }
                          ></input>{" "}
                          Severity After Recommendations
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={lopaRiskRankID}
                            onChange={handleChangeLopaRiskRankID}
                          ></input>{" "}
                          Lopa Risk RankID
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={safeguardIDs}
                            onChange={handleChangeSafeguardIDs}
                          ></input>{" "}
                          SafeguardIDs
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={tmel}
                            onChange={handleChangeTmel}
                          ></input>{" "}
                          Tmel
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={mel}
                            onChange={handleChangeMel}
                          ></input>{" "}
                          Mel
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={lopaRatio}
                            onChange={handleChangeLopaRatio}
                          ></input>{" "}
                          LopaRatio
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={rrf}
                            onChange={handleChangeRrf}
                          ></input>{" "}
                          Rrf
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <input
                            type="text"
                            value={scenarioHackable}
                            onChange={handleChangeScenarioHackable}
                          ></input>{" "}
                          Scenario Hackable
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                          <b>Conditional Modifiers</b>
                          <ul className="pl-4">
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                              <input
                                type="text"
                                value={cMDescription}
                                onChange={handleChangeCMDescription}
                              ></input>{" "}
                              Description
                            </li>
                            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                              <input
                                type="text"
                                value={cMProbability}
                                onChange={handleChangeProbability}
                              ></input>{" "}
                              CM Probability
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
                    <input
                      type="text"
                      value={safeguard}
                      onChange={handleChangeSafeguard}
                    ></input>{" "}
                    Safeguard
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardType}
                      onChange={handleChangeSafeguardType}
                    ></input>{" "}
                    Type
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardIndependent}
                      onChange={handleChangeSafeguardIndependent}
                    ></input>{" "}
                    Independent
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardAuditable}
                      onChange={handleChangeSafeguardAuditable}
                    ></input>{" "}
                    Auditable
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardEffective}
                      onChange={handleChangeSafeguardEffective}
                    ></input>{" "}
                    Effective
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardHackable}
                      onChange={handleChangeSafeguardHackable}
                    ></input>{" "}
                    Hackable
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={isSafeguard}
                      onChange={handleChangeIsSafeguard}
                    ></input>{" "}
                    Is Safeguard
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={isIpl}
                      onChange={handleChangeIsIpl}
                    ></input>{" "}
                    Is Ipl
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={iplTag}
                      onChange={handleChangeIplTag}
                    ></input>{" "}
                    Ipl Tag
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safetyCritical}
                      onChange={handleChangeSafetyCritical}
                    ></input>{" "}
                    Safety Critical
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={selectedSil}
                      onChange={handleChangeSelectedSil}
                    ></input>{" "}
                    Selected Sil
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={requiredResponseTime}
                      onChange={handleChangeRequiredResponseTime}
                    ></input>{" "}
                    Required Response Time
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={testInterval}
                      onChange={handleChangeTestInterval}
                    ></input>{" "}
                    Test Interval
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardLibraryId}
                      onChange={handleChangeSafeguardLibraryId}
                    ></input>{" "}
                    Library
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardCategory}
                      onChange={handleChangeSafeguardCategory}
                    ></input>{" "}
                    Category
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={safeguardComments}
                      onChange={handleChangeSafeguardComments}
                    ></input>{" "}
                    Comments
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={pfd}
                      onChange={handleChangePfd}
                    ></input>{" "}
                    Pfd
                  </li>
                </ul>
                {/* Pha Recommendations */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Pha Recommendations</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={phaRecommendation}
                      onChange={handleChangePhaRecommendation}
                    ></input>{" "}
                    Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={phaRecommendationPriority}
                      onChange={handleChangePhaRecommendationPriority}
                    ></input>{" "}
                    Priority
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={phaRecommendationResponsibleParty}
                      onChange={
                        handleChangePhaRecommendationResponsibleParty
                      }
                    ></input>{" "}
                    Responsible Party
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={phaRecommendationStatus}
                      onChange={handleChangePhaRecommendationStatus}
                    ></input>{" "}
                    Status
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={phaRecommendationComments}
                      onChange={handleChangePhaRecommendationComments}
                    ></input>{" "}
                    Comments
                  </li>
                </ul>
                {/* Lopa Recommendations */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Lopa Recommendations</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={lopaRecommendation}
                      onChange={handleChangeLopaRecommendation}
                    ></input>{" "}
                    Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={lopaRecommendationPriority}
                      onChange={handleChangeLopaRecommendationPriority}
                    ></input>{" "}
                    Priority
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={lopaRecommendationResponsibleParty}
                      onChange={
                        handleChangeLopaRecommendationResponsibleParty
                      }
                    ></input>{" "}
                    Responsible Party
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={lopaRecommendationStatus}
                      onChange={handleChangeLopaRecommendationStatus}
                    ></input>{" "}
                    Status
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={lopaRecommendationComments}
                      onChange={handleChangeLopaRecommendationComments}
                    ></input>{" "}
                    Comments
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
                    <input
                      type="text"
                      value={checkListRecommendation}
                      onChange={handleChangeCheckListRecommendation}
                    ></input>{" "}
                    Recommendation
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={checkListRecommendationPriority}
                      onChange={
                        handleChangeCheckListRecommendationPriority
                      }
                    ></input>{" "}
                    Priority
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={checkListRecommendationResponsibleParty}
                      onChange={
                        handleChangeCheckListRecommendationResponsibleParty
                      }
                    ></input>{" "}
                    Responsible Party
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={checkListRecommendationStatus}
                      onChange={
                        handleChangeCheckListRecommendationStatus
                      }
                    ></input>{" "}
                    Status
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={checkListRecommendationComments}
                      onChange={
                        handleChangeCheckListRecommendationComments
                      }
                    ></input>{" "}
                    Comments
                  </li>
                </ul>
                {/* Drawing */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Drawing</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={drawing}
                      onChange={handleChangeDrawing}
                    ></input>{" "}
                    Drawing
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={revision}
                      onChange={handleChangeRevision}
                    ></input>{" "}
                    Revision
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={documentType}
                      onChange={handleChangeDocumentType}
                    ></input>{" "}
                    Document Type
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={drawingDescription}
                      onChange={handleChangeDrawingDescription}
                    ></input>{" "}
                    Drawing Description
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={link}
                      onChange={handleChangeLink}
                    ></input>{" "}
                    Link
                  </li>
                </ul>
                {/* Check List */}
                <ul className="m-1 w-1/3 max-w-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <b>Check List</b>
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={checkListComments}
                      onChange={handleChangecheckListComments}
                    ></input>{" "}
                    Comments
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <input
                      type="text"
                      value={checkListQuestion}
                      onChange={handleChangecheckListQuestion}
                    ></input>{" "}
                    Question
                  </li>
                  <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                    <b>Check List Question</b>
                  </li>
                  <ul className="pl-4">
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={checkListAnswer}
                        onChange={handleChangecheckListAnswer}
                      ></input>{" "}
                      Answer
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={checkListJustification}
                        onChange={handleChangecheckListJustification}
                      ></input>{" "}
                      Justification
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={checkListRecommendationIDs}
                        onChange={
                          handleChangecheckListRecommendationIDs
                        }
                      ></input>{" "}
                      Check List Recommendation
                    </li>
                    <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-2 dark:border-opacity-50 text-sm">
                      <input
                        type="text"
                        value={safeguardIDschecklist}
                        onChange={handleChangesafeguardIDschecklist}
                      ></input>{" "}
                      Safeguard
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

export default Settingheader;
