
import { HeaderResults } from "./header-type";
import { ServiceTabsResults } from "./servicetabs";

type Servicepage ={

    id:string
    name:string
    header:HeaderResults
    services:ServiceTabsResults
}
export default Servicepage

export type ServicepageResults = {
    total: string;
    results: Servicepage[];
  }