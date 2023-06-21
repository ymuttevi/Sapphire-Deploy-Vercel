import { IMAGEWITHOVERLAY_QUERY } from "./imagewithovelay-query";
import { HEADER_QUERY } from "./header-query";

export const ABOUTPAGE_QUERY = ` 
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
  
aboutsection{
  results
    {
      __typename
      ... on Imagewithoverlay{
      ${IMAGEWITHOVERLAY_QUERY}
    }
  }
}

  `;

  export const ALL_ABOUTPAGE_QUERY = `{ 
    data: allAboutpage {
      results{
        ${ABOUTPAGE_QUERY}
      }
    }
  }
  `;
  
  export default ALL_ABOUTPAGE_QUERY
  
  