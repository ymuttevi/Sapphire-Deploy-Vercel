import ImageList, {ImageListResults} from "../../types/Sapphire/imagelist-type"; 
import {fetchAPI} from "../Common/api"
import { IMAGELIST_QUERY,ALL_IMAGELIST_QUERY } from "../../graphQl/sapphire/imagelist-query";




export async function getAllImageList(preview: boolean): Promise<ImageList[]> {
    const data = await fetchAPI(`${ALL_IMAGELIST_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ImageListResults }) {
    return data.results.map((post: ImageList) => {
      return post;
    });
}
