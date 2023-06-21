import ServiceTab, {ServiceTabResults} from "../../types/Sapphire/servicetab-type";
import {fetchAPI} from "../Common/api"
import {SERVICETAB_QUERY, ALL_SERVICETAB_QUERY} from "../../graphQl/sapphire/servicetab-query";




export async function getAllServiceTab(preview: boolean): Promise<ServiceTab[]> {
    const data = await fetchAPI(`${ALL_SERVICETAB_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ServiceTabResults }) {
    return data.results.map((post: ServiceTab) => {
      return post;
    });
}
