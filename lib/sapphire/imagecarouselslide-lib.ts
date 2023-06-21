import ImageCarouselSlide,{ImageCarouselSlideResults} from "../../types/Sapphire/imagecarouselslide-type"; 
import {fetchAPI} from "../Common/api"
import { IMAGECAROUSELSLIDE_QUERY,ALL_IMAGECAROUSELSLIDE_QUERY } from "../../graphQl/sapphire/imagecarouselslide-query";





export async function getAllImageCarouselSlide(preview: boolean): Promise<ImageCarouselSlide[]> {
    const data = await fetchAPI(`${ALL_IMAGECAROUSELSLIDE_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ImageCarouselSlideResults }) {
    return data.results.map((post: ImageCarouselSlide) => {
      return post;
    });
}
