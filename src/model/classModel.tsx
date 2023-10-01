import { v4 as uuidv4 } from 'uuid';
export class DataGlobal {
  constructor(
    public Overview : Overview,
    // public Settings: Settings, 
    public Team_Members: Team_Members[] = [],
    public Sessions: Sessions[] = [],
    public Team_Members_Sessions : Team_Members_Sessions[] =[],
    public Revalidation_History : Revalidation_History[] = [],
    public Nodes : Nodes[] = [],
    public Safeguards : Safeguards[] = [],
    public Pha_Recommendations : Pha_Recommendations[]=[],
    public Pha_Comments : Pha_Comments[]=[],
    public Lopa_Recommendations : Lopa_Recommendations[]=[],
    public Lopa_Comments : Pha_Comments[]=[],
    public Parking_Lot : Parking_Lot[]=[],
    public Drawings : Drawings[] = [],
    public Risk_Criteria : Risk_Criteria,
    // public Check_Lists : Check_Lists[]=[],
    public Check_List_Recommendations : Check_List_Recommendations[]=[],
  ) {}
}

export class Check_Lists{
  constructor(
    public ID:string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Check_List_Description:string = "",
    public Check_List_Comments:string = "",
    public Check_List_Questions:Check_List_Questions
  ){}
}
export class Check_List_Questions{
  constructor( 
    public ID: string = "",
    public Check_List_Question: string = "",
    public Check_List_Answer: string = "",
    public Check_List_Justification: string = "",
    public Check_List_Recommendation_IDs: Check_List_Recommendation_IDs,
    public Safeguard_IDs: Safeguard_IDs,
  ){}
}

export class Check_List_Recommendation_IDs{
  constructor(
    public ID : string = ""
){}
}
export class Check_List_Recommendations{
  constructor( 
  public ID : string = uuidv4().toLowerCase().replace(/-/g, ''),
  public Check_List_Recommendation : string = "",
  public Check_List_Recommendation_Priority : string = "",
  public Check_List_Recommendation_Responsible_Party : string = "",
  public Check_List_Recommendation_Status : string = "",
  public Check_List_Recommendation_Comments : string = ""
  ){}   
}
export class Pha_Recommendations{
  constructor( 
  public ID : string = uuidv4().toLowerCase().replace(/-/g, ''),
  public Pha_Recommendation : string = "",
  public Pha_Recommendation_Priority : string = "",
  public Pha_Recommendation_Responsible_Party : string = "",
  public Pha_Recommendation_Status : string = "",
  public Pha_Recommendation_Comments : string = ""
  ){}   
}
export class Pha_Comments{
  constructor( 
    public ID : string = "",
    public Pha_Comment : string = ""
  ){}
}
export class Lopa_Recommendations{
  constructor( 
  public ID : string = uuidv4().toLowerCase().replace(/-/g, ''),
  public Lopa_Recommendation : string = "",
  public Lopa_Recommendation_Priority : string = "",
  public Lopa_Recommendation_Responsible_Party : string = "",
  public Lopa_Recommendation_Status : string = "",
  public Lopa_Recommendation_Comments : string = ""
  ){}   
}
export class Lopa_Comments{
  constructor( 
    public ID : string = "",
    public Pha_Comment : string = ""
  ){}
}
export class Settings {
  constructor(
  public Ds_Rev : number,
  public Analysis_Mode : string = "",
  public Lopa_Mode : string = "",
  public Column_Widths :  Column_Widths,
  public Encrypt : boolean = false,
  public Numbering : Numbering,
  public Study_Library_Id : string = "",
  public Column_Visibility : Column_Visibility,
  public Tab_Visibility : Tab_Visibility,
  public Presenter_Mode : boolean,
  public Column_Header : Column_Headers
  ){}
}
export class Column_Headers{
  constructor(
    public Overview :string = "",
    public Settings :string = "",
    public Team_Members :string = "",
    public Sessions :string = "",
    public Team_Members_Sessions :string = "",
    public Revalidation_History :string = "",
    public Nodes :string = "",
    public Safeguards :string = "",
    public Pha_Recommendations :string = "",
    public Pha_Comments :string = "",
    public Lopa_Recommendations :string = "",
    public Lopa_Comments :string = "",
    public Parking_Lot :string = "",
    public Drawings :string = "",
    public Risk_Criteria :string = "",
    public Check_Lists :string = "",
    public Check_List_Recommendations :string = "",
    public Overview_Children : Overview_ChildrenString,
    public Team_Members_Children : Team_Members_ChildrenString,
    public Sessions_Children : Sessions_ChildrenString,
    public Revalidation_History_Children : Revalidation_History_ChildrenString,
    public Nodes_Children : Nodes_ChildrenString,
    public Safeguards_Children : Safeguards_ChildrenString,
    public Pha_Recommendations_Children : Pha_Recommendations_ChildrenString,
    public Pha_Comments_Children : Pha_Comments_ChildrenString,
    public Lopa_Recommendations_Children : Lopa_Recommendations_ChildrenString,
    public Lopa_Comments_Children : Lopa_Comments_ChildrenString,
    public Parking_Lot_Children : Parking_Lot_ChildrenString,
    public Drawings_Children : Drawings_ChildrenString,
    public Check_Lists_Children : Check_Lists_ChildrenString,
    public Check_List_Recommendations_Children : Check_List_Recommendations_ChildreString
  ){}
}

export class Overview_ChildrenString{
  constructor(
    public Study_Name:string = "" ,
    public Study_Coordinator:string = "" ,
    public Study_Coordinator_Contact_Info:string = "" ,
    public Facility:string = "" ,
    public Facility_Location:string = "" ,
    public Facility_Owner:string = "",
    public Overview_Company:string = "",
    public Site:string = "",
    public Plant:string = "",
    public Unit__Group:string = "",
    public Unit:string = "",
    public Sub__Unit:string = "",
    public Report_Number:string = "" ,
    public Project_Number:string = "" ,
    public Project_Description:string = "" ,
    public General_Notes:string = "" 
  ){}
}
export class Team_Members_ChildrenString{
  constructor(
    public Name: string = "" ,
    public Company: string = "" ,
    public Title: string = "" ,
    public Department: string = "" ,
    public Expertise: string = "" ,
    public Experience: string = "" ,
    public Phone_Number: string = "" ,
    public E__Mail_Address: string = "" ,
    public Team_Member_Comments: string = "" 
  ){}
}
export class Sessions_ChildrenString{
  constructor(
    public Date:string = "" ,
    public Duration:string = "" ,
    public Session:string = "" ,
    public Facilitator_ID:string = "" ,
    public Scribe_ID:string = "" ,
    public Session_Comments:string = "" 
  ){}
}
export class Revalidation_History_ChildrenString{
  constructor(
    public Start_Date: string = "" ,
    public End_Date: string = "" ,
    public Revalidation_Comments: string = "" 
  ){}
}
export class Nodes_ChildrenString{
  constructor(
    public Node_Description: string = "" ,
    public Intention: string = "" ,
    public Boundary: string = "" ,
    public Design_Conditions: string = "" ,
    public Operating_Conditions: string = "" ,
    public Node_Color: string = "" ,
    public Hazardous_Materials: string = "" ,
    public Equipment_Tags: string = "" ,
    public Location: string = "" ,
    public Node_Comments: string = "" ,
    public Session_IDs: string = "" ,
    public Drawing_IDs: string = "" ,
    public Deviations: string = "" ,
    public Deviations_Children: Deviations_ChildrenString
  ){}
}
export class Deviations_ChildrenString{
  constructor(
    public Deviation:string = "",
    public Guide_Word:string = "",
    public Parameter:string = "",
    public Design_Intent:string = "",
    public Deviation_Comments:string = "",
    public Causes:string = "",
    public Causes_Children:Causes_ChildrenString
  ){}
}
export class Causes_ChildrenString{
  constructor(
    public Cause:string = "",
    public Cause_Type:string = "",
    public Enabling_Events:string = "",
    public Cause_Hackable:string = "",
    public Frequency:string = "",
    public Consequences:string = "",
    public Enabling_Events_Children:Enabling_Events_ChildrenString,
    public Consequences_Children: Consequences_ChildrenString,
  ){}
}
export class Enabling_Events_ChildrenString{
  constructor(
    public EE_Description:string = "",
    public EE_Library_Id:string = "",
    public EE_Probability:string = ""    
  ){}
}
export class Consequences_ChildrenString{
  constructor(
    public Consequence:string = "",
    public Likelihood_ID_Before_Safeguards:string = "",
    public Risk_Rank_ID_Before_Safeguards:string = "",
    public Likelihood_ID:string = "",
    public Risk_Rank_ID:string = "",
    public Lopa_Required:string = "",
    public Recommended_Sil:string = "",
    public Pha_Recommendation_IDs:string = "",
    public Likelihood_ID_After_Recommendations:string = "",
    public Risk_Rank_ID_After_Recommendations:string = "",
    public Pha_Comment_IDs:string = "",
    public Lopa_Recommendation_IDs:string = "",
    public Lopa_Comment_IDs:string = "",
    public Consequence_Type_ID:string = "",
    public Consequence_Severity_ID_Before_Safeguards:string = "",
    public Consequence_Severity_ID:string = "",
    public Consequence_Severity_ID_After_Recommendations:string = "",
    public Lopa_Risk_Rank_ID:string = "",
    public Conditional_Modifiers:string = "",
    public Safeguard_IDs:string = "",
    public Tmel:string = "",
    public Mel:string = "",
    public Lopa_Ratio:string = "",
    public Rrf:string = "",
    public Scenario_Hackable:string = "",
    public Conditional_Modifiers_Children:Conditional_Modifiers_ChildrenString
  ){}
}
export class Conditional_Modifiers_ChildrenString{
  constructor(
    public CM_Library_Id:string = "",
    public CM_Description:string = "",
    public CM_Probability:string = ""
  ){}
}
export class Safeguards_ChildrenString{
  constructor(
    public Safeguard:string = "" ,
    public Safeguard_Type:string = "" ,
    public Safeguard_Independent:string = "" ,
    public Safeguard_Auditable:string = "" ,
    public Safeguard_Effective:string = "" ,
    public Safeguard_Hackable:string = "" ,
    public Is_Safeguard:string = "" ,
    public Is_Ipl:string = "" ,
    public Ipl_Tag:string = "" ,
    public Safety_Critical:string = "" ,
    public Selected_Sil:string = "" ,
    public Required_Response_Time:string = "" ,
    public Test_Interval:string = "" ,
    public Safeguard_Library_Id:string = "" ,
    public Safeguard_Category:string = "" ,
    public Safeguard_Comments:string = "" ,
    public Pfd:string = "" 
  ){}
}
export class Pha_Recommendations_ChildrenString{
  constructor(
    public Pha_Recommendation: string = "" ,
    public Pha_Recommendation_Priority: string = "" ,
    public Pha_Recommendation_Responsible_Party: string = "" ,
    public Pha_Recommendation_Status: string = "" ,
    public Pha_Recommendation_Comments: string = "" 
  ){}
}
export class Pha_Comments_ChildrenString{
  constructor(
    public Pha_Comment: string = ""  
  ){}
}
export class Lopa_Recommendations_ChildrenString{
  constructor(
    public Lopa_Recommendation: string = "" ,
    public Lopa_Recommendation_Priority: string = "" ,
    public Lopa_Recommendation_Responsible_Party: string = "" ,
    public Lopa_Recommendation_Status: string = "" ,
    public Lopa_Recommendation_Comments: string = "" 
  ){}
}
export class Lopa_Comments_ChildrenString{
  constructor(
    public Pha_Comment: string = ""
  ){}
}
export class Parking_Lot_ChildrenString{
  constructor(
    public Parking_Lot_Issue :string = "" ,
    public Response :string = "" ,
    public Responsible_Party :string = "" ,
    public Start_Date :string = "" ,
    public End_Date :string = "" 
  ){}
}
export class Drawings_ChildrenString{
  constructor(
    public Drawing: string = "" ,
    public Revision: string = "" ,
    public Document_Type: string = "" ,
    public Drawing_Description: string = "" ,
    public Link: string = "" 
  ){}
}
export class Check_Lists_ChildrenString{
  constructor(
    public Check_List_Description:string = "" ,
    public Check_List_Comments:string = "" ,
    public Check_List_Questions:string = "" ,
    public Check_List_Questions_Children:Check_List_Questions_ChildrenString 
  ){}
}
export class Check_List_Questions_ChildrenString{
  constructor(
    public Check_List_Question:string = "",
    public Check_List_Answer:string = "",
    public Check_List_Justification:string = "",
    public Check_List_Recommendation_IDs:string = "",
    public Safeguard_IDs:string = ""
  ){}
}
export class Check_List_Recommendations_ChildreString{
  constructor(
    public Check_List_Recommendation: string = "" ,
    public Check_List_Recommendation_Priority: string = "" ,
    public Check_List_Recommendation_Responsible_Party: string = "" ,
    public Check_List_Recommendation_Status: string = "" ,
    public Check_List_Recommendation_Comments: string = "" 
  ){}
}
export class Tab_Visibility{
  constructor(
    public NodesTab :boolean,
    public DeviationsTab :boolean,
    public PhaWorksheetsTab :boolean,
    public LopaWorksheetsTab :boolean,
    public CheckListsTab :boolean,
    public RecommendationsTab :boolean,
    public SafeguardsTab :boolean,
    public ParkingLotTab :boolean,
    public RiskCriteriaTab :boolean
  ){}
}

export class Numbering{
  constructor(
    public Nodes : boolean,
    public Deviations : boolean,
    public Consequences : boolean,
    public Causes : boolean,
    public Safeguards : boolean,
    public Pha_Recommendations : boolean,
    public Lopa_Recommendations : boolean,
    public Parking_Lot : boolean
  ){}
}

export class Column_Widths {
  constructor(
    public Deviation: number,
    public Cause: number,
    public Consequence: number,
    public Consequence_Type_ID: number,
    public Consequence_Severity_ID_Before_Safeguards: number,
    public Likelihood_ID_Before_Safeguards: number,
    public Risk_Rank_ID_Before_Safeguards: number,
    public Safeguard: number,
    public Is_Ipl: number,
    public Consequence_Severity_ID: number,
    public Likelihood_ID: number,
    public Risk_Rank_ID: number,
    public Lopa_Required: number,
    public Pha_Recommendation: number,
    public Consequence_Severity_ID_After_Recommendations: number,
    public Likelihood_ID_After_Recommendations: number,
    public Risk_Rank_ID_After_Recommendations: number,
    public Pha_Comment: number,
    public Guide_Word: number,
    public Parameter: number,
    public Design_Intent: number,
    public Deviation_Comments: number,
    public Pha_Recommendation_Priority: number,
    public Pha_Recommendation_Responsible_Party: number,
    public Pha_Recommendation_Status: number,
    public Pha_Recommendation_Comments: number,
    public Safeguard_Independent: number,
    public Safeguard_Auditable: number,
    public Safeguard_Effective: number,
    public Pfd: number,
    public Code: number,
    public RM_Description: number,
    public Frequency: number,
    public RM_Tmel: number,
    public Color: number,
    public Priority: number,
    public Node_Description: number,
    public Intention: number,
    public Boundary: number,
    public Design_Conditions: number,
    public Operating_Conditions: number,
    public Node_Color: number,
    public Session: number,
    public Drawing: number,
    public Node_Comments: number,
    public Parking_Lot_Issue: number,
    public Response: number,
    public Responsible_Party: number,
    public Start_Date: number,
    public End_Date: number
  ){}
}
export class Column_Visibility{
  constructor(
    public Overview: boolean,
    public Settings: boolean,
    public Team_Members: boolean,
    public Sessions: boolean,
    public Team_Members_Sessions: boolean,
    public Revalidation_History: boolean,
    public Nodes: boolean,
    public Safeguards: boolean,
    public Pha_Recommendations: boolean,
    public Pha_Comments: boolean,
    public Lopa_Recommendations: boolean,
    public Lopa_Comments: boolean,
    public Parking_Lot: boolean,
    public Drawings: boolean,
    public Risk_Criteria: boolean,
    public Check_Lists: boolean,
    public Check_List_Recommendations: boolean,
    public Overview_Children: Overview_Children,
    public Team_Members_Children: Team_Members_Children,
    public Sessions_Children: Sessions_Children,
    public Revalidation_History_Children: Revalidation_History_Children,
    public Nodes_Children: Nodes_Children,
    public Safeguards_Children:Safeguards_Children,
    public Pha_Recommendations_Children: Pha_Recommendations_Children,
    public Pha_Comments_Children: Pha_Comments_Children,
    public Lopa_Recommendations_Children: Lopa_Recommendations_Children,
    public Lopa_Comments_Children:Lopa_Comments_Children,
    public Parking_Lot_Children: Parking_Lot_Children,
    public Drawings_Children: Drawings_Children,
    public Check_Lists_Children: Check_Lists_Children,
    public Check_List_Recommendations_Children: Check_List_Recommendations_Children
  ){}
}
export class Nodes_Children{
  constructor(
    public Node_Description: boolean,
    public Intention: boolean,
    public Boundary: boolean,
    public Design_Conditions: boolean,
    public Operating_Conditions: boolean,
    public Node_Color: boolean,
    public Hazardous_Materials: boolean,
    public Equipment_Tags: boolean,
    public Location: boolean,
    public Node_Comments: boolean,
    public Session_IDs: boolean,
    public Drawing_IDs: boolean,
    public Deviations: boolean,
    public Deviations_Children:Deviations_Children
  ){}
}
export class Deviations_Children{
  constructor(
    public Deviation: boolean,
    public Guide_Word: boolean,
    public Parameter: boolean,
    public Design_Intent: boolean,
    public Deviation_Comments: boolean,
    public Causes: boolean,
    public Causes_Children:Causes_Children,
  ){}
}
export class Causes_Children{
  constructor(
    public Cause: boolean,
    public Cause_Type: boolean,
    public Enabling_Events: boolean,
    public Cause_Hackable: boolean,
    public Frequency: boolean,
    public Consequences: boolean,
    public Enabling_Events_Children:Enabling_Events_Children,
    public Consequences_Children: Consequences_Children,
  ){}
}
export class Enabling_Events_Children{
  constructor(
    public EE_Description: boolean,
    public EE_Library_Id: boolean,
    public EE_Probability: boolean
  ){}
}
export class Consequences_Children{
  constructor(
    public Consequence: boolean,
    public Likelihood_ID_Before_Safeguards: boolean,
    public Risk_Rank_ID_Before_Safeguards: boolean,
    public Likelihood_ID: boolean,
    public Risk_Rank_ID: boolean,
    public Lopa_Required: boolean,
    public Recommended_Sil: boolean,
    public Pha_Recommendation_IDs: boolean,
    public Likelihood_ID_After_Recommendations: boolean,
    public Risk_Rank_ID_After_Recommendations: boolean,
    public Pha_Comment_IDs: boolean,
    public Lopa_Recommendation_IDs: boolean,
    public Lopa_Comment_IDs: boolean,
    public Consequence_Type_ID: boolean,
    public Consequence_Severity_ID_Before_Safeguards: boolean,
    public Consequence_Severity_ID: boolean,
    public Consequence_Severity_ID_After_Recommendations: boolean,
    public Lopa_Risk_Rank_ID: boolean,
    public Conditional_Modifiers: boolean,
    public Safeguard_IDs: boolean,
    public Tmel: boolean,
    public Mel: boolean,
    public Lopa_Ratio: boolean,
    public Rrf: boolean,
    public Scenario_Hackable: boolean,
    public Conditional_Modifiers_Children:Conditional_Modifiers_Children
  ){}
}
export class Conditional_Modifiers_Children{
  constructor(
    public CM_Library_Id: boolean,
    public CM_Description: boolean,
    public CM_Probability: boolean
  ){}
}
export class Safeguards_Children{
  constructor(
    public Safeguard: boolean,
    public Safeguard_Type: boolean,
    public Safeguard_Independent: boolean,
    public Safeguard_Auditable: boolean,
    public Safeguard_Effective: boolean,
    public Safeguard_Hackable: boolean,
    public Is_Safeguard: boolean,
    public Is_Ipl: boolean,
    public Ipl_Tag: boolean,
    public Safety_Critical: boolean,
    public Selected_Sil: boolean,
    public Required_Response_Time: boolean,
    public Test_Interval: boolean,
    public Safeguard_Library_Id: boolean,
    public Safeguard_Category: boolean,
    public Safeguard_Comments: boolean,
    public Pfd: boolean
  ){}
}
export class Pha_Recommendations_Children{
  constructor(
    public Pha_Recommendation: boolean,
    public Pha_Recommendation_Priority: boolean,
    public Pha_Recommendation_Responsible_Party: boolean,
    public Pha_Recommendation_Status: boolean,
    public Pha_Recommendation_Comments: boolean
  ){}
}
export class Pha_Comments_Children{
  constructor(
    public Pha_Comment: boolean
  ){}
}
export class Lopa_Recommendations_Children{
  constructor(
    public Lopa_Recommendation: boolean,
    public Lopa_Recommendation_Priority: boolean,
    public Lopa_Recommendation_Responsible_Party: boolean,
    public Lopa_Recommendation_Status: boolean,
    public Lopa_Recommendation_Comments: boolean
  ){}
}
export class Lopa_Comments_Children{
  constructor(
    public Lopa_Comment: boolean 
  ){}
}
export class Parking_Lot_Children{
  constructor(
    public Parking_Lot_Issue: boolean,
    public Response: boolean,
    public Responsible_Party: boolean,
    public Start_Date: boolean,
    public End_Date: boolean
  ){}
}
export class Drawings_Children{
  constructor(
    public Drawing: boolean,
    public Revision: boolean,
    public Document_Type: boolean,
    public Drawing_Description: boolean,
    public Link: boolean
  ){}
}
export class Check_Lists_Children{
  constructor(
    public Check_List_Description: boolean,
    public Check_List_Comments: boolean,
    public Check_List_Questions: boolean,
    public Check_List_Questions_Children: Check_List_Questions_Children,
  ){}
}
export class Check_List_Questions_Children{
  constructor(
    public Check_List_Question: boolean,
    public Check_List_Answer: boolean,
    public Check_List_Justification: boolean,
    public Check_List_Recommendation_IDs: boolean,
    public Safeguard_IDs: boolean
  ){}
}
export class Check_List_Recommendations_Children{
  constructor(
    public Check_List_Recommendation: boolean,
    public Check_List_Recommendation_Priority: boolean,
    public Check_List_Recommendation_Responsible_Party: boolean,
    public Check_List_Recommendation_Status: boolean,
    public Check_List_Recommendation_Comments: boolean
  ){}
}
export class Revalidation_History_Children{
  constructor(
    public Start_Date: boolean,
    public End_Date: boolean,
    public Revalidation_Comments: boolean
  ){}
}

export class Sessions_Children{
  constructor(
    public Date: boolean,
    public Duration: boolean,
    public Session: boolean,
    public Facilitator_ID: boolean,
    public Scribe_ID: boolean,
    public Session_Comments: boolean
  ){}
}

export class Team_Members_Children{
  constructor(
    public Name: boolean,
    public Company: boolean,
    public Title: boolean,
    public Department: boolean,
    public Expertise: boolean,
    public Experience: boolean,
    public Phone_Number: boolean,
    public E__Mail_Address: boolean,
    public Team_Member_Comments: boolean
  ){}
}

export class Overview_Children{
  constructor(
    public Study_Name: boolean,
    public Study_Coordinator: boolean,
    public Study_Coordinator_Contact_Info: boolean,
    public Facility: boolean,
    public Facility_Location: boolean,
    public Facility_Owner: boolean,
    public Overview_Company: boolean,
    public Site: boolean,
    public Plant: boolean,
    public Unit__Group: boolean,
    public Unit: boolean,
    public Sub__Unit: boolean,
    public Report_Number: boolean,
    public Project_Number: boolean,
    public Project_Description: boolean,
    public General_Notes: boolean
  ){}
}
export class Nodes{
  constructor(
    public ID : string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Node_Description  : string = "",
    public Intention  : string = "",
    public Boundary  : string = "",
    public Design_Conditions  : string = "",
    public Operating_Conditions  : string = "",
    public Node_Color  : string = "",
    public Hazardous_Materials  : string = "",
    public Equipment_Tags  : string = "",
    public Location  : string = "",
    public Node_Comments  : string = "",
    public Session_IDs  : Session_IDs [] = [],
    public Drawing_IDs  : Drawing_IDs [] = [],
    public Deviations  : Deviations [] = []
  ){}
}

export class Drawing_IDs{
  constructor(
    public ID  : string = ""
  ){}
}
export class Session_IDs{
  constructor(
    public ID  : string = ""
  ){}
}
export class Deviations{
  constructor(
    public ID : string =uuidv4().toLowerCase().replace(/-/g, ''),
    public Deviation  : string = "",
    public Guide_Word  : string = "",
    public Parameter  : string = "",
    public Design_Intent  : string = "",
    public Deviation_Comments  : string = "",
    public Causes : Causes[] = []
  ){}
}
export class Causes{
  constructor(
    public ID : string =uuidv4().toLowerCase().replace(/-/g, ''),
    public Cause : string = "",
    public Cause_Type : string = "",
    public Enabling_Events : Enabling_Events[]=[],
    public Cause_Hackable : string = "",
    public Likelihood_ID : string = "",
    public Frequency  :string = "",
    public Consequences : Consequences[]=[]
  ){}
}
export class Enabling_Events{
  constructor(
    public ID : string = "",
    public EE_Description  : string = "",
    public EE_Probability  : string = "",
    public EE_Library_Id  : string = "",
    public EE_Credit  : string = ""
  ){}
}
export class Consequences {
  constructor(
    public ID  : string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Consequence  : string = "",
    public Likelihood_ID_Before_Safeguards  : string = "",
    public Risk_Rank_ID_Before_Safeguards  : string = "",
    public Likelihood_ID  : string = "",
    public Risk_Rank_ID  : string = "",
    public Lopa_Required  : string = "",
    public Recommended_Sil  : string = "",
    public Pha_Recommendation_IDs : Pha_Recommendation_IDs[] = [] ,
    public Likelihood_ID_After_Recommendations  : string = "",
    public Risk_Rank_ID_After_Recommendations  : string = "",
    public Pha_Comment_IDs  : Pha_Comment_IDs[] = [],
    public Lopa_Recommendation_IDs  :Lopa_Recommendation_IDs[] = [] ,
    public Lopa_Comment_IDs : Lopa_Comment_IDs[] = [],
    public Consequence_Type_ID  : string = "",
    public Consequence_Severity_ID_Before_Safeguards  : string = "",
    public Consequence_Severity_ID  : string = "",
    public Consequence_Severity_ID_After_Recommendations  : string = "",
    public Lopa_Risk_Rank_ID  : string = "",
    public Conditional_Modifiers : Conditional_Modifiers[] = [] ,
    public Safeguard_IDs : Safeguard_IDs[] = [],
    public Lopa_Gap  : string = "",
    public Scenario_Hackable  : string = "",
    public Tmel  : string = "",
    public Mel  : string = "",
    public Lopa_Ratio  : string = "",
    public Rrf  :string = ""
  ) {}
}
export class Conditional_Modifiers {
  constructor(
    public ID : string = "",
    public CM_Library_Id  : string = "",
    public CM_Description  : string = "",
    public CM_Probability  :string = "",
    public CM_Credit  : string = ""
  ){}
}
export class Safeguard_IDs{
  constructor(
    public ID  : string = ""
  ){}
}
export class Pha_Recommendation_IDs{
  constructor(
    public ID  : string = ""
  ){}
}
export class Pha_Comment_IDs{
  constructor(
    public ID  : string = ""
  ){}
}
export class Lopa_Recommendation_IDs{
  constructor(
    public ID  : string = ""
  ){}
}
export class Lopa_Comment_IDs{
  constructor(
    public ID  : string = ""
  ){}
}

export class Revalidation_History {
  constructor(
  public ID 	: string = "",
  public Start_Date 	: string = "",
  public End_Date 	: string = "",
  public Revalidation_Comments 	: string = ""
  ){}}
export class Overview {
  constructor(
    public Study_Name : string = "", 
    public Study_Coordinator : string = "", 
    public Study_Coordinator_Contact_Info : string = "",
    public Facility : string = "",
    public Facility_Location : string = "",
    public Facility_Owner : string = "",
    public Overview_Company : string = "",
    public Site : string = "",
    public Plant : string = "",
    public Unit__Group : string = "",
    public Unit : string = "",
    public Sub__Unit : string = "",
    public Report_Number : string = "",
    public Project_Number : string = "",
    public Project_Description : string = "",
    public General_Notes : string = ""
    ) {}
}
export class Team_Members {
  constructor(
    public ID  :	string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Name	:	string = "",
    public Company	:	string = "",
    public Title	:	string = "",
    public Departement	:	string = "",
    public Expertise	:	string = "",
    public Experience	:string = "",
    public Phone_Number	:	string = "",
    public E__Mail_Address	:	string = "",
    public Team_Member_Comments	:string = "",
    ) {}
}
export class Sessions {
  constructor(
    public ID :string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Date	:string = "",
    public Duration	:string = "",
    public Session	:string = "",
    public Facilitator_ID	:string = "",
    public Scribe_ID	:string = "",
    public Session_Comments	:string = "") {}
}

export class Team_Members_Sessions{
  constructor(
    public ID :string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Team_Member_ID 	:string = "",
    public Session_ID 	:string = "",
    public Value 	:string = ""
  ){}
}

export class Safeguards{
  constructor(
    public ID : string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Safeguard 	: string = "",
    public Safeguard_Type 	: string = "",
    public Safeguard_Independent 	: string = "",
    public Safeguard_Auditable 	: string = "",
    public Safeguard_Effective 	: string = "",
    public Safeguard_Hackable 	: string = "",
    public Is_Safeguard 	: string = "",
    public Is_Ipl 	: string = "",
    public Ipl_Tag 	: string = "",
    public Safety_Critical 	: string = "",
    public Selected_Sil 	: string = "",
    public Required_Response_Time 	: string = "",
    public Test_Interval 	: string = "",
    public Safeguard_Library_Id 	: string = "",
    public Ipl_Credit 	: string = "",
    public Safeguard_Category 	: string = "",
    public Safeguard_Comments 	:string = ""
  ){}
}

export class Risk_Criteria{
  constructor(
    public Likelihoods : Likelihoods[] = [],
    public Intersections : Intersections[] = [],
    public Severities : Severities[] = [],
    public Risk_Rankings : Risk_Rankings[] = [],
  ){}
}
export class Parking_Lot{
  constructor(
    public ID 	:string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Parking_Lot_Issue 	:string = "",
    public Response 	:string = "",
    public Responsible_Party 	:string = "",
    public Start_Date 	:string = "",
    public End_Date 	: string = ""
){}
}
export class Drawings{
  constructor(
    public ID 	: string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Drawing 	: string = "",
    public Revision 	: string = "",
    public Document_Type 	: string = "",
    public Drawing_Description 	: string = "",
    public Link 	: string = ""
  ){}
}
export class Intersections{
  constructor(
    public ID	 : string = uuidv4().toLowerCase().replace(/-/g, ''),
    public Severity_ID	 : string = "",
    public Likelihood_ID	 : string = "",
    public Risk_Rank_ID	 : string = ""
  ){}
}
export class Likelihoods{
  constructor(
    public ID	 : string = uuidv4().toLowerCase().replace(/-/g, ''),
    public RM_Description	 : string = "",
    public Frequency	 : string = "",
    public Code	 : string = ""
  ){}
}
export class Severities{
  constructor(
    public ID	 : string = "",
    public Severity_Type	 : string = "",
    public RM_Description	 : string = "",
    public RM_Tmel	 : string = "",
    public Code  : string = ""
  ){}
}
export class Risk_Rankings{
  constructor(
    public ID	 : string = uuidv4().toLowerCase().replace(/-/g, ''),
    public RM_Description	 : string = "",
    public Code	 : string = "",
    public Color	 : string = "",
    public Priority  : string = "",
    public Required_Lopa_Credits  : string = ""
  ){}
}
