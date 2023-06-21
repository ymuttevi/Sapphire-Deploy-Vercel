import { MediaResults } from "../Common/media-type";
import { CardResults } from "./card-type";



type Partner = {

id:string
name:string
partnertitle:string
partnerdescription:string
partnercards: CardResults
}
export default Partner

export type PartnerResults = { 

  total: string;
  results: Partner[];

}