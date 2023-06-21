import ImageCarousel, {ImageCarouselResults} from "../../types/Sapphire/imagecarousel-type"; 
import {fetchAPI} from "../Common/api"
import { IMAGECAROUSEL_QUERY,ALL_IMAGECAROUSEL_QUERY } from "../../graphQl/sapphire/imagecarousel-query";





export async function getAllImageCarousel(preview: boolean): Promise<ImageCarousel[]> {
    const data = await fetchAPI(`${ALL_IMAGECAROUSEL_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ImageCarouselResults }) {
    return data.results.map((post: ImageCarousel) => {
      return post;
    });
}
