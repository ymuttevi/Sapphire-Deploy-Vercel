import Card, {CardResults} from "../../types/Sapphire/card-type";
import {fetchAPI} from "../Common/api"
import {CARD_QUERY, ALL_CARD_QUERY} from "../../graphQl/sapphire/card-query";



export async function getAllCard(preview: boolean): Promise<Card[]> {
    const data = await fetchAPI(`${ALL_CARD_QUERY}`);
    
  
    return extractPosts(data.data);
  
  }
  
   export async function getCardById(id: string): Promise<Card> {
  
  const queryCard= `{ 
    data: card(id: "${id}")
    {
        ${CARD_QUERY}
    }
  }`;
  
  const data = await fetchAPI(queryCard);
  return data.data.data;
  }
  
  export async function getAllCardWithIds(): Promise<Card[]> {
  const  query = `{ 
    data: allCard
    {
      __typename
      total
      results {
        ${CARD_QUERY}
      }
    }
  }`;
  
  const data = await fetchAPI(query);
   return extractPosts(data.data);
  } 
  
  function extractPosts({ data }: { data: CardResults }) {
  
    return data.results.map((post: Card) => {
      return post;
    });
  }
  
  function extractPost({ data }: { data: Card }) {
  return data;
  }
  