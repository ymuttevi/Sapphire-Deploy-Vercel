import { MediaResults } from "../Common/media-type";



type ImagewithOverlay = {

id:string
name:string
backgroundimage:MediaResults
imagetext: string
description:string
buttontext: string


}
export default ImagewithOverlay

export type ImagewithOverlayResults = { 

  total: string;
  results: ImagewithOverlay[];

}