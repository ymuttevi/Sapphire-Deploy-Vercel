import Custompage, {CustompageResults} from "../../types/Sapphire/custompage-type";
import {fetchAPI} from "../Common/api"
import {ALL_CUSTOMPAGE_QUERY,CUSTOMPAGE_QUERY} from "../../graphQl/sapphire/custompage-query";



export async function getAllCustompage(preview: boolean): Promise<Custompage[]> {
  const data = await fetchAPI(`${ALL_CUSTOMPAGE_QUERY}`);
  

  return extractPosts(data.data);

}

 export async function getCustompageById(id: string): Promise<Custompage> {

const queryCustompage= `{ 
  data: custompage(id: "${id}")
  {
      ${CUSTOMPAGE_QUERY}
  }
}`;

const data = await fetchAPI(queryCustompage);
return data.data.data;
}

 export async function getAllCustompageWithIds(): Promise<Custompage[]> {
const  query = `{ 
  data: allCustompage
  {
    __typename
    total
    results {
     ${CUSTOMPAGE_QUERY}
    }
  }
}`;

const data = await fetchAPI(query);
 return extractPosts(data.data);
}  
function extractPosts({ data }: { data: CustompageResults }) {

  return data.results.map((post: Custompage) => {
    return post;
  });
}
 function extractPost({ data }: { data: Custompage }) {
return data;
}
 