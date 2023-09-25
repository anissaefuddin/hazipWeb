export class DataGlobal {
  constructor(
    public overview : Overview, 
    public team_members: Team_Members[] = [],
    public sessions: Sessions[] = [],
  ) {}
}
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
    public ID:	string,
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
    public ID?	:string,
    public Date?	:string,
    public Duration?	:string,
    public Session?	:string,
    public Facilitator_ID?	:string,
    public Scribe_ID?	:string,
    public Session_Comments?	:string) {}
}

export class Department {
  constructor(public id: number, public name: string) {}
}

export class Employee {
  constructor(public id: number, public name: string, public departmentId: number) {}
}