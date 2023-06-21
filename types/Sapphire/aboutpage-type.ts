
import { HeaderResults } from "./header-type";
import { ImagewithOverlayResults } from "./imagewithoverlay-type";

type Aboutpage ={

    id:string
    name:string
    header:HeaderResults
    aboutsection:ImagewithOverlayResults
}
export default Aboutpage

export type AboutpageResults = {
    total: string;
    results: Aboutpage[];
  }