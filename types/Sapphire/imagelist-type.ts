import { MediaResults } from "../Common/media-type"


type ImageList= {

id:string
name:string
primaryimage:MediaResults
secondaryimage:MediaResults
terinaryimage:MediaResults
quadrupleimage:MediaResults
}
export default ImageList

export type ImageListResults = { 

  total: string;
  results: ImageList[];

}