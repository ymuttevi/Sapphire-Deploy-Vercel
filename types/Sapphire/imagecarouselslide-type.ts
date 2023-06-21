import { MediaResults } from "../Common/media-type"

type ImageCarouselSlide = 
{

id:string
name:string
slideimage:MediaResults
caption:string
description:string

}
export default ImageCarouselSlide

export type ImageCarouselSlideResults ={
total:string;
results:ImageCarouselSlide[];

}