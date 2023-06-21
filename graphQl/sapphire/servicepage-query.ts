import { SERVICETABS_QUERY} from "./servicetabs-query";
import { HEADER_QUERY } from "./header-query";

export const SERVICEPAGE_QUERY = ` 
  id
  name
  header {
   results {
      __typename
      ... on Header {
      ${HEADER_QUERY}
      }
    }
  }
  
services{
  results
    {
      __typename
      ... on Servicetabs{
      ${SERVICETABS_QUERY}
    }
  }
}

  `;

  export const ALL_SERVICEPAGE_QUERY = `{ 
    data: allServicepage{
      results{
        ${SERVICEPAGE_QUERY }
      }
    }
  }
  `;
  
  export default ALL_SERVICEPAGE_QUERY 
  