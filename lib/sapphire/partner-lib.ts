import Partner, {PartnerResults } from "../../types/Sapphire/partner-type";
import {fetchAPI} from "../Common/api"
import {PARTNER_QUERY,ALL_PARTNER_QUERY} from "../../graphQl/sapphire/partners-query";





export async function getAllPartner(preview: boolean): Promise<Partner[]> {
    const data = await fetchAPI(`${ALL_PARTNER_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: PartnerResults }) {
    return data.results.map((post: Partner) => {
      return post;
    });
}
