export interface Subject {
    id:string;
    name: String
}

export interface Dept{
    id: string;
    deptName: string;
    subjects: Subject[]
  }

  export const deptSubject : Dept[] = [
    {id:"dept01", deptName:"前端開發", subjects:[
        {id:"U2347", name: "新世代Web前端Angular開發實戰Part 1"}, 
        {id:"U2348", name: "新世代Web前端Angular開發實戰Part 2"}, 
        {id:"BOOTS5", name: "Bootstrap 5響應式網頁程式設計"}, 
        {id:"U2754", name: "TypeScript程式語言"}
    ]}, 
    {id:"dept02", deptName:"asp.net 系列", subjects:[
        {id:"UAC296", name: "跨平台ASP.NET Core MVC網站開發框架Part 1"}, 
        {id:"UAC297", name: "跨平台ASP.NET Core MVC網站開發框架Part 2"}, 
        {id:"U2342", name: ".NET Framework核心程式設計-Visual C#"}, 
        {id:"U2341", name: "Visual C# 程式語言與Visual Studio開發工具"}
    ]}
  ]