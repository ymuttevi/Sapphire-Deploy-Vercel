import Aboutpage, {AboutpageResults} from "../../types/Sapphire/aboutpage-type";
import {fetchAPI} from "../Common/api"
import {ALL_ABOUTPAGE_QUERY,ABOUTPAGE_QUERY} from "../../graphQl/sapphire/aboutpage-query";



export async function getAllAboutpage(preview: boolean): Promise<Aboutpage[]> {
  const data = await fetchAPI(`${ALL_ABOUTPAGE_QUERY}`);
  

  return extractPosts(data.data);

}

 export async function getAboutpageById(id: string): Promise<Aboutpage> {

const queryAboutpage= `{ 
  data: aboutpage(id: "${id}")
  {
      ${ABOUTPAGE_QUERY}
  }
}`;

const data = await fetchAPI(queryAboutpage);
return data.data.data;
}

 export async function getAllAboutpageWithIds(): Promise<Aboutpage[]> {
const  query = `{ 
  data: allAboutpage
  {
    __typename
    total
    results {
     ${ABOUTPAGE_QUERY}
    }
  }
}`;

const data = await fetchAPI(query);
 return extractPosts(data.data);
}  
function extractPosts({ data }: { data: AboutpageResults }) {

  return data.results.map((post: Aboutpage) => {
    return post;
  });
}
 function extractPost({ data }: { data: Aboutpage }) {
return data;
}
 