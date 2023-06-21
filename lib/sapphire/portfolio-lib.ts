import Portfolio, {PortfolioResults } from "../../types/Sapphire/portfolio-type"; 
import {fetchAPI} from "../Common/api"
import {PORTFOLIO_QUERY,ALL_PORTFOLIO_QUERY} from "../../graphQl/sapphire/portfolio-query";




export async function getAllPortfolio(preview: boolean): Promise<Portfolio[]> {
    const data = await fetchAPI(`${ALL_PORTFOLIO_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: PortfolioResults }) {
    return data.results.map((post: Portfolio) => {
      return post;
    });
}
