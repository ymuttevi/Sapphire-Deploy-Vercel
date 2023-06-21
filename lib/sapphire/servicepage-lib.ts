import Servicepage, {ServicepageResults} from "../../types/Sapphire/servicespage-type";
import {fetchAPI} from "../Common/api"
import {ALL_SERVICEPAGE_QUERY,SERVICEPAGE_QUERY} from "../../graphQl/sapphire/servicepage-query";



export async function getAllServicepage(preview: boolean): Promise<Servicepage[]> {
  const data = await fetchAPI(`${ALL_SERVICEPAGE_QUERY}`);
  

  return extractPosts(data.data);

}

 export async function getServicepageById(id: string): Promise<Servicepage> {

const queryServicepage= `{ 
  data: servicepage(id: "${id}")
  {
      ${SERVICEPAGE_QUERY}
  }
}`;

const data = await fetchAPI(queryServicepage);
return data.data.data;
}

 export async function getAllServicepageWithIds(): Promise<Servicepage[]> {
const  query = `{ 
  data: allServicepage
  {
    __typename
    total
    results {
     ${SERVICEPAGE_QUERY}
    }
  }
}`;

const data = await fetchAPI(query);
 return extractPosts(data.data);
}  
function extractPosts({ data }: { data: ServicepageResults }) {

  return data.results.map((post: Servicepage) => {
    return post;
  });
}
 function extractPost({ data }: { data: Servicepage }) {
return data;
}
 