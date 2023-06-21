import { ImageListResults } from "./imagelist-type"


type Portfolio = {

id:string
name:string
text:string
description:string
imageslist: ImageListResults

}
export default Portfolio

export type PortfolioResults = { 

  total: string;
  results: Portfolio[];

}