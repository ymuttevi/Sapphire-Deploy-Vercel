import { MediaResults } from "../Common/media-type";

type Card = {

id:string
name:string
image:MediaResults
cardtitle: string
carddescription:string
}
export default Card

export type CardResults = { 

  total: string;
  results: Card[];

}