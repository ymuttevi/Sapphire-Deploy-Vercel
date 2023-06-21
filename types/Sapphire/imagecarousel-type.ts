import { ImageCarouselSlideResults } from "./imagecarouselslide-type"



type ImageCarousel = {

id:string
name:string
carouselslides: ImageCarouselSlideResults

}
export default ImageCarousel

export type ImageCarouselResults = { 

  total: string;
  results: ImageCarousel[];

}