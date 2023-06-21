import Portfoliopage, {PortfoliopageResults} from "../../types/Sapphire/portfoliopage-type";
import {fetchAPI} from "../Common/api"
import {ALL_PORTFOLIOPAGE_QUERY,PORTFOLIOPAGE_QUERY} from "../../graphQl/sapphire/portfoliopage-query";



export async function getAllPortfoliopage(preview: boolean): Promise<Portfoliopage[]> {
  const data = await fetchAPI(`${ALL_PORTFOLIOPAGE_QUERY}`);
  

  return extractPosts(data.data);

}

 export async function getPortfoliopageById(id: string): Promise<Portfoliopage> {

const queryPortfoliopage= `{ 
  data: portfoliopage(id: "${id}")
  {
      ${PORTFOLIOPAGE_QUERY}
  }
}`;

const data = await fetchAPI(queryPortfoliopage);
return data.data.data;
}

 export async function getAllPortfoliopageWithIds(): Promise<Portfoliopage[]> {
const  query = `{ 
  data: allPortfoliopage
  {
    __typename
    total
    results {
     ${PORTFOLIOPAGE_QUERY}
    }
  }
}`;

const data = await fetchAPI(query);
 return extractPosts(data.data);
}  
function extractPosts({ data }: { data: PortfoliopageResults }) {

  return data.results.map((post: Portfoliopage) => {
    return post;
  });
}
 function extractPost({ data }: { data: Portfoliopage }) {
return data;
}
 