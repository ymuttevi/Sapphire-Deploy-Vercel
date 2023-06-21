import Promo, {PromoResults} from "../../types/Sapphire/promo-type";
import {fetchAPI} from "../Common/api"
import {PROMO_QUERY, ALL_PROMO_QUERY} from "../../graphQl/sapphire/promo-query";




export async function getAllPromo(preview: boolean): Promise<Promo[]> {
    const data = await fetchAPI(`${ALL_PROMO_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: PromoResults }) {
    return data.results.map((post: Promo) => {
      return post;
    });
}
