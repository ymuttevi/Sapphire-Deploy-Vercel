import Contactuspage, {ContactuspageResults} from "../../types/Sapphire/contactuspage-type";
import {fetchAPI} from "../Common/api"
import {ALL_CONTACTUSPAGE_QUERY,CONTACTUSPAGE_QUERY} from "../../graphQl/sapphire/contactuspage-query";



export async function getAllContactuspage(preview: boolean): Promise<Contactuspage[]> {
  const data = await fetchAPI(`${ALL_CONTACTUSPAGE_QUERY}`);
  

  return extractPosts(data.data);

}

 export async function getContactuspageById(id: string): Promise<Contactuspage> {

const queryContactuspage= `{ 
  data: contactuspage(id: "${id}")
  {
      ${CONTACTUSPAGE_QUERY}
  }
}`;

const data = await fetchAPI(queryContactuspage);
return data.data.data;
}

 export async function getAllContactuspageWithIds(): Promise<Contactuspage[]> {
const  query = `{ 
  data: allContactuspage
  {
    __typename
    total
    results {
     ${CONTACTUSPAGE_QUERY}
    }
  }
}`;

const data = await fetchAPI(query);
 return extractPosts(data.data);
}  
function extractPosts({ data }: { data: ContactuspageResults }) {

  return data.results.map((post: Contactuspage) => {
    return post;
  });
}
 function extractPost({ data }: { data: Contactuspage}) {
return data;
}
 