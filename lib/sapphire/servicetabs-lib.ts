import ServiceTabs, {ServiceTabsResults} from "../../types/Sapphire/servicetabs";
import {fetchAPI} from "../Common/api"
import {SERVICETABS_QUERY, ALL_SERVICETABS_QUERY} from "../../graphQl/sapphire/servicetabs-query";




export async function getAllServiceTabs(preview: boolean): Promise<ServiceTabs[]> {
    const data = await fetchAPI(`${ALL_SERVICETABS_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: ServiceTabsResults }) {
    return data.results.map((post: ServiceTabs) => {
      return post;
    });
}
