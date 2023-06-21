import Header, {HeaderResults} from "../../types/Sapphire/header-type";
import {fetchAPI} from "../Common/api"
import {ALL_HEADER_QUERY} from "../../graphQl/sapphire/header-query";


export async function getAllHeader(preview: boolean): Promise<Header[]> {
    const data = await fetchAPI(`${ALL_HEADER_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: HeaderResults }) {
    return data.results.map((post: Header) => {
      return post;
    });
}
