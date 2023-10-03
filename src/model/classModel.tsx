import { v4 as uuidv4 } from 'uuid';
export class DataGlobal {
  constructor(
    public Overview : Overview,
    public Settings: Settings,
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
    public Check_List_Recommendations : Check_List_Recommendations[]=[]
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
    public Ds_Rev : number = 0,
    public Analysis_Mode : string = "",
    public Lopa_Mode : string = "",
    public Column_Widths :  Column_Widths | null = null,
    public Encrypt : boolean = false,
    public Numbering : Numbering | null = null,
    public Study_Library_Id : string = "",
    public Column_Visibility : Column_Visibility | null = null,
    public Tab_Visibility : Tab_Visibility | null = null,
    public Presenter_Mode : boolean=true,
    public Column_Header : Column_Headers | null = null
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
    public NodesTab :boolean=true,
    public DeviationsTab :boolean=true,
    public PhaWorksheetsTab :boolean=true,
    public LopaWorksheetsTab :boolean=true,
    public CheckListsTab :boolean=true,
    public RecommendationsTab :boolean=true,
    public SafeguardsTab :boolean=true,
    public ParkingLotTab :boolean=true,
    public RiskCriteriaTab :boolean
  ){}
}

export class Numbering{
  constructor(
    public Nodes : boolean=true,
    public Deviations : boolean=true,
    public Consequences : boolean=true,
    public Causes : boolean=true,
    public Safeguards : boolean=true,
    public Pha_Recommendations : boolean=true,
    public Lopa_Recommendations : boolean=true,
    public Parking_Lot : boolean=true
  ){}
}

export class Column_Widths {
  constructor(
    public Deviation: number =0,
    public Cause: number =0,
    public Consequence: number =0,
    public Consequence_Type_ID: number =0,
    public Consequence_Severity_ID_Before_Safeguards: number =0,
    public Likelihood_ID_Before_Safeguards: number =0,
    public Risk_Rank_ID_Before_Safeguards: number =0,
    public Safeguard: number =0,
    public Is_Ipl: number =0,
    public Consequence_Severity_ID: number =0,
    public Likelihood_ID: number =0,
    public Risk_Rank_ID: number =0,
    public Lopa_Required: number =0,
    public Pha_Recommendation: number =0,
    public Consequence_Severity_ID_After_Recommendations: number =0,
    public Likelihood_ID_After_Recommendations: number =0,
    public Risk_Rank_ID_After_Recommendations: number =0,
    public Pha_Comment: number =0,
    public Guide_Word: number =0,
    public Parameter: number =0,
    public Design_Intent: number =0,
    public Deviation_Comments: number =0,
    public Pha_Recommendation_Priority: number =0,
    public Pha_Recommendation_Responsible_Party: number =0,
    public Pha_Recommendation_Status: number =0,
    public Pha_Recommendation_Comments: number =0,
    public Safeguard_Independent: number =0,
    public Safeguard_Auditable: number =0,
    public Safeguard_Effective: number =0,
    public Pfd: number = 0,
    public Code: number = 0,
    public RM_Description: number =0,
    public Frequency: number =0,
    public RM_Tmel: number =0,
    public Color: number =0,
    public Priority: number =0,
    public Node_Description: number =0,
    public Intention: number =0,
    public Boundary: number =0,
    public Design_Conditions: number =0,
    public Operating_Conditions: number =0,
    public Node_Color: number =0,
    public Session: number =0,
    public Drawing: number =0,
    public Node_Comments: number =0,
    public Parking_Lot_Issue: number =0,
    public Response: number =0,
    public Responsible_Party: number =0,
    public Start_Date: number =0,
    public End_Date: number =0
  ){}
}
export class Column_Visibility{
  constructor(
    public Overview: boolean=true,
    public Settings: boolean=true,
    public Team_Members: boolean=true,
    public Sessions: boolean=true,
    public Team_Members_Sessions: boolean=true,
    public Revalidation_History: boolean=true,
    public Nodes: boolean=true,
    public Safeguards: boolean=true,
    public Pha_Recommendations: boolean=true,
    public Pha_Comments: boolean=true,
    public Lopa_Recommendations: boolean=true,
    public Lopa_Comments: boolean=true,
    public Parking_Lot: boolean=true,
    public Drawings: boolean=true,
    public Risk_Criteria: boolean=true,
    public Check_Lists: boolean=true,
    public Check_List_Recommendations: boolean=true,
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
    public Node_Description: boolean=true,
    public Intention: boolean=true,
    public Boundary: boolean=true,
    public Design_Conditions: boolean=true,
    public Operating_Conditions: boolean=true,
    public Node_Color: boolean=true,
    public Hazardous_Materials: boolean=true,
    public Equipment_Tags: boolean=true,
    public Location: boolean=true,
    public Node_Comments: boolean=true,
    public Session_IDs: boolean=true,
    public Drawing_IDs: boolean=true,
    public Deviations: boolean=true,
    public Deviations_Children:Deviations_Children
  ){}
}
export class Deviations_Children{
  constructor(
    public Deviation: boolean=true,
    public Guide_Word: boolean=true,
    public Parameter: boolean=true,
    public Design_Intent: boolean=true,
    public Deviation_Comments: boolean=true,
    public Causes: boolean=true,
    public Causes_Children:Causes_Children,
  ){}
}
export class Causes_Children{
  constructor(
    public Cause: boolean=true,
    public Cause_Type: boolean=true,
    public Enabling_Events: boolean=true,
    public Cause_Hackable: boolean=true,
    public Frequency: boolean=true,
    public Consequences: boolean=true,
    public Enabling_Events_Children:Enabling_Events_Children,
    public Consequences_Children: Consequences_Children,
  ){}
}
export class Enabling_Events_Children{
  constructor(
    public EE_Description: boolean=true,
    public EE_Library_Id: boolean=true,
    public EE_Probability: boolean=true
  ){}
}
export class Consequences_Children{
  constructor(
    public Consequence: boolean=true,
    public Likelihood_ID_Before_Safeguards: boolean=true,
    public Risk_Rank_ID_Before_Safeguards: boolean=true,
    public Likelihood_ID: boolean=true,
    public Risk_Rank_ID: boolean=true,
    public Lopa_Required: boolean=true,
    public Recommended_Sil: boolean=true,
    public Pha_Recommendation_IDs: boolean=true,
    public Likelihood_ID_After_Recommendations: boolean=true,
    public Risk_Rank_ID_After_Recommendations: boolean=true,
    public Pha_Comment_IDs: boolean=true,
    public Lopa_Recommendation_IDs: boolean=true,
    public Lopa_Comment_IDs: boolean=true,
    public Consequence_Type_ID: boolean=true,
    public Consequence_Severity_ID_Before_Safeguards: boolean=true,
    public Consequence_Severity_ID: boolean=true,
    public Consequence_Severity_ID_After_Recommendations: boolean=true,
    public Lopa_Risk_Rank_ID: boolean=true,
    public Conditional_Modifiers: boolean=true,
    public Safeguard_IDs: boolean=true,
    public Tmel: boolean=true,
    public Mel: boolean=true,
    public Lopa_Ratio: boolean=true,
    public Rrf: boolean=true,
    public Scenario_Hackable: boolean=true,
    public Conditional_Modifiers_Children:Conditional_Modifiers_Children
  ){}
}
export class Conditional_Modifiers_Children{
  constructor(
    public CM_Library_Id: boolean=true,
    public CM_Description: boolean=true,
    public CM_Probability: boolean=true
  ){}
}
export class Safeguards_Children{
  constructor(
    public Safeguard: boolean=true,
    public Safeguard_Type: boolean=true,
    public Safeguard_Independent: boolean=true,
    public Safeguard_Auditable: boolean=true,
    public Safeguard_Effective: boolean=true,
    public Safeguard_Hackable: boolean=true,
    public Is_Safeguard: boolean=true,
    public Is_Ipl: boolean=true,
    public Ipl_Tag: boolean=true,
    public Safety_Critical: boolean=true,
    public Selected_Sil: boolean=true,
    public Required_Response_Time: boolean=true,
    public Test_Interval: boolean=true,
    public Safeguard_Library_Id: boolean=true,
    public Safeguard_Category: boolean=true,
    public Safeguard_Comments: boolean=true,
    public Pfd: boolean=true
  ){}
}
export class Pha_Recommendations_Children{
  constructor(
    public Pha_Recommendation: boolean=true,
    public Pha_Recommendation_Priority: boolean=true,
    public Pha_Recommendation_Responsible_Party: boolean=true,
    public Pha_Recommendation_Status: boolean=true,
    public Pha_Recommendation_Comments: boolean=true
  ){}
}
export class Pha_Comments_Children{
  constructor(
    public Pha_Comment: boolean=true
  ){}
}
export class Lopa_Recommendations_Children{
  constructor(
    public Lopa_Recommendation: boolean=true,
    public Lopa_Recommendation_Priority: boolean=true,
    public Lopa_Recommendation_Responsible_Party: boolean=true,
    public Lopa_Recommendation_Status: boolean=true,
    public Lopa_Recommendation_Comments: boolean=true
  ){}
}
export class Lopa_Comments_Children{
  constructor(
    public Lopa_Comment: boolean =true
  ){}
}
export class Parking_Lot_Children{
  constructor(
    public Parking_Lot_Issue: boolean=true,
    public Response: boolean=true,
    public Responsible_Party: boolean=true,
    public Start_Date: boolean=true,
    public End_Date: boolean=true
  ){}
}
export class Drawings_Children{
  constructor(
    public Drawing: boolean=true,
    public Revision: boolean=true,
    public Document_Type: boolean=true,
    public Drawing_Description: boolean=true,
    public Link: boolean=true
  ){}
}
export class Check_Lists_Children{
  constructor(
    public Check_List_Description: boolean=true,
    public Check_List_Comments: boolean=true,
    public Check_List_Questions: boolean=true,
    public Check_List_Questions_Children: Check_List_Questions_Children,
  ){}
}
export class Check_List_Questions_Children{
  constructor(
    public Check_List_Question: boolean=true,
    public Check_List_Answer: boolean=true,
    public Check_List_Justification: boolean=true,
    public Check_List_Recommendation_IDs: boolean=true,
    public Safeguard_IDs: boolean=true
  ){}
}
export class Check_List_Recommendations_Children{
  constructor(
    public Check_List_Recommendation: boolean=true,
    public Check_List_Recommendation_Priority: boolean=true,
    public Check_List_Recommendation_Responsible_Party: boolean=true,
    public Check_List_Recommendation_Status: boolean=true,
    public Check_List_Recommendation_Comments: boolean=true
  ){}
}
export class Revalidation_History_Children{
  constructor(
    public Start_Date: boolean=true,
    public End_Date: boolean=true,
    public Revalidation_Comments: boolean=true
  ){}
}

export class Sessions_Children{
  constructor(
    public Date: boolean=true,
    public Duration: boolean=true,
    public Session: boolean=true,
    public Facilitator_ID: boolean=true,
    public Scribe_ID: boolean=true,
    public Session_Comments: boolean=true
  ){}
}

export class Team_Members_Children{
  constructor(
    public Name: boolean=true,
    public Company: boolean=true,
    public Title: boolean=true,
    public Department: boolean=true,
    public Expertise: boolean=true,
    public Experience: boolean=true,
    public Phone_Number: boolean=true,
    public E__Mail_Address: boolean=true,
    public Team_Member_Comments: boolean=true
  ){}
}

export class Overview_Children{
  constructor(
    public Study_Name: boolean=true,
    public Study_Coordinator: boolean=true,
    public Study_Coordinator_Contact_Info: boolean=true,
    public Facility: boolean=true,
    public Facility_Location: boolean=true,
    public Facility_Owner: boolean=true,
    public Overview_Company: boolean=true,
    public Site: boolean=true,
    public Plant: boolean=true,
    public Unit__Group: boolean=true,
    public Unit: boolean=true,
    public Sub__Unit: boolean=true,
    public Report_Number: boolean=true,
    public Project_Number: boolean=true,
    public Project_Description: boolean=true,
    public General_Notes: boolean =true
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
    public ID	 : string =  uuidv4().toLowerCase().replace(/-/g, ''),
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
