export class DataGlobal {
  constructor(
    public Overview : Overview, 
    public Team_Members: Team_Members[] = [],
    public Sessions: Sessions[] = [],
    public Team_Members_Sessions : Team_Members_Sessions[] =[],
    public Revalidation_History : Revalidation_History[] = [],
    public Nodes : Nodes[] = [],
    public Safeguards : Safeguards[] = [],
    public Parking_Lot : Parking_Lot[]=[],
    public Drawings : Drawings[] = [],
    public Risk_Criteria : Risk_Criteria,
  ) {}
}
export class Nodes{
  constructor(
    public ID ?: string,
    public Node_Description ? : string,
    public Intention ? : string,
    public Boundary ? : string,
    public Design_Conditions ? : string,
    public Operating_Conditions ? : string,
    public Node_Color ? : string,
    public Hazardous_Materials ? : string,
    public Equipment_Tags ? : string,
    public Location ? : string,
    public Node_Comments ? : string,
    public Session_IDs  : Session_IDs  [] = [],
    public Drawing_IDs  : Drawing_IDs [] = [],
    public Deviations  : Deviations [] = []
  ){}
}

export class Drawing_IDs{
  constructor(
    public ID ? : string
  ){}
}
export class Session_IDs{
  constructor(
    public ID ? : string
  ){}
}
export class Deviations{
  constructor(
    public ID : string,
    public Deviation ? : string,
    public Guide_Word ? : string,
    public Parameter ? : string,
    public Design_Intent ? : string,
    public Deviation_Comments ? : string,
    public Causes : Causes[] = []
  ){}
}
export class Causes{
  constructor(
    public ID : string,
    public Cause ?: string,
    public Cause_Type ?: string,
    public Enabling_Events : Enabling_Events[]=[],
    public Cause_Hackable ?: string,
    public Likelihood_ID? : string,
    public Consequences : Consequences[]=[]
  ){}
}
export class Enabling_Events{
  constructor(
    public ID : string,
    public EE_Description ? : string,
    public EE_Library_Id ? : string,
    public EE_Credit ? : string
  ){}
}
export class Consequences {
  constructor(
    public ID  : string,
    public Consequence ? : string,
    public Likelihood_ID_Before_Safeguards ? : string,
    public Risk_Rank_ID_Before_Safeguards ? : string,
    public Likelihood_ID ? : string,
    public Risk_Rank_ID ? : string,
    public Lopa_Required ? : string,
    public Recommended_Sil ? : string,
    public Pha_Recommendation_IDs : Pha_Recommendation_IDs[] = [] ,
    public Likelihood_ID_After_Recommendations ? : string,
    public Risk_Rank_ID_After_Recommendations ? : string,
    public Pha_Comment_IDs  : Pha_Comment_IDs[] = [],
    public Lopa_Recommendation_IDs  :Lopa_Recommendation_IDs[] = [] ,
    public Lopa_Comment_IDs : Lopa_Comment_IDs[] = [],
    public Consequence_Type_ID ? : string,
    public Consequence_Severity_ID_Before_Safeguards ? : string,
    public Consequence_Severity_ID ? : string,
    public Consequence_Severity_ID_After_Recommendations ? : string,
    public Lopa_Risk_Rank_ID ? : string,
    public Conditional_Modifiers : Conditional_Modifiers[] = [] ,
    public Safeguard_IDs : Safeguard_IDs[] = [],
    public Lopa_Gap ? : string,
    public Scenario_Hackable ? : string
  ) {}
}
export class Conditional_Modifiers {
  constructor(
    public ID : string,
    public CM_Library_Id ? : string,
    public CM_Description ? : string,
    public CM_Credit ? : string
  ){}
}
export class Safeguard_IDs{
  constructor(
    public ID ? : string
  ){}
}
export class Pha_Recommendation_IDs{
  constructor(
    public ID ? : string
  ){}
}
export class Pha_Comment_IDs{
  constructor(
    public ID ? : string
  ){}
}
export class Lopa_Recommendation_IDs{
  constructor(
    public ID ? : string
  ){}
}
export class Lopa_Comment_IDs{
  constructor(
    public ID ? : string
  ){}
}

export class Revalidation_History {
  constructor(
  public ID ?	: string,
  public Start_Date ?	: string,
  public End_Date ?	: string,
  public Revalidation_Comments ?	: string
  ){}}
export class Overview {
  constructor(
    public Study_Name ?: string, 
    public Study_Coordinator ?: string, 
    public Study_Coordinator_Contact_Info ?: string,
    public Facility ?: string,
    public Facility_Location ?: string,
    public Facility_Owner ?: string,
    public Overview_Company ?: string,
    public Site ?: string,
    public Plant ?: string,
    public Unit__Group ?: string,
    public Unit ?: string,
    public Sub__Unit ?: string,
    public Report_Number ?: string,
    public Project_Number ?: string,
    public Project_Description ?: string,
    public General_Notes ?: string
    ) {}
}
export class Team_Members {
  constructor(
    public ID ? :	string,
    public Name?	:	string,
    public Company?	:	string,
    public Title?	:	string,
    public Departement?	:	string,
    public Expertise?	:	string,
    public Experience?	:string,
    public Phone_Number?	:	string,
    public E__Mail_Address?	:	string,
    public Team_Member_Comments?	:string,
    ) {}
}
export class Sessions {
  constructor(
    public ID ? :string,
    public Date?	:string,
    public Duration?	:string,
    public Session?	:string,
    public Facilitator_ID?	:string,
    public Scribe_ID?	:string,
    public Session_Comments?	:string) {}
}

export class Team_Members_Sessions{
  constructor(
    public ID ?:string,
    public Team_Member_ID ?	:string,
    public Session_ID ?	:string,
    public Value ?	:string
  ){}
}

export class Safeguards{
  constructor(
    public ID ?: string,
    public Safeguard ?	: string,
    public Safeguard_Type ?	: string,
    public Safeguard_Independent ?	: string,
    public Safeguard_Auditable ?	: string,
    public Safeguard_Effective ?	: string,
    public Safeguard_Hackable ?	: string,
    public Is_Safeguard ?	: string,
    public Is_Ipl ?	: string,
    public Ipl_Tag ?	: string,
    public Safety_Critical ?	: string,
    public Selected_Sil ?	: string,
    public Required_Response_Time ?	: string,
    public Test_Interval ?	: string,
    public Safeguard_Library_Id ?	: string,
    public Ipl_Credit ?	: string,
    public Safeguard_Category ?	: string,
    public Safeguard_Comments ?	:string
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
    public ID ?	:string,
    public Parking_Lot_Issue ?	:string,
    public Response ?	:string,
    public Responsible_Party ?	:string,
    public Start_Date ?	:string,
    public End_Date ?	: string
){}
}
export class Drawings{
  constructor(
    public ID ?	: string,
    public Drawing ?	: string,
    public Revision ?	: string,
    public Document_Type ?	: string,
    public Drawing_Description ?	: string,
    public Link ?	: string
  ){}
}
export class Intersections{
  constructor(
    public ID	 : string,
    public Severity_ID	? : string,
    public Likelihood_ID	? : string,
    public Risk_Rank_ID	? : string
  ){}
}
export class Likelihoods{
  constructor(
    public ID	 : string,
    public RM_Description	? : string,
    public Frequency	? : string,
    public Code	? : string
  ){}
}
export class Severities{
  constructor(
    public ID	 : string,
    public Severity_Type	? : string,
    public RM_Description	? : string,
    public RM_Tmel	? : string,
    public Code ? : string
  ){}
}
export class Risk_Rankings{
  constructor(
    public ID	 : string,
    public RM_Description	? : string,
    public Code	? : string,
    public Color	? : string,
    public Priority ? : string,
    public Required_Lopa_Credits ? : string
  ){}
}
