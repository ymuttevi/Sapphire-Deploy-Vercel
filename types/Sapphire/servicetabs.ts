import { ServiceTabResults } from "./servicetab-type"

type ServiceTabs =
{

id:string
name:string
servicetitle:string
servicedescription:string
tabs: ServiceTabResults

}
export default ServiceTabs

export type ServiceTabsResults ={
total:string;
results:ServiceTabs[];

}