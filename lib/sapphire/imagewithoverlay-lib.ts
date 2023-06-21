import ImagewithOverlay, {ImagewithOverlayResults } from "../../types/Sapphire/imagewithoverlay-type";
import {fetchAPI} from "../Common/api"
import {IMAGEWITHOVERLAY_QUERY,ALL_IMAGEWITHOVERLAY_QUERY} from "../../graphQl/sapphire/imagewithovelay-query";





export async function getAllImagewithOverlay(preview: boolean): Promise<ImagewithOverlay[]> {
    const data = await fetchAPI(`${ALL_IMAGEWITHOVERLAY_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ImagewithOverlayResults }) {
    return data.results.map((post: ImagewithOverlay) => {
      return post;
    });
}
