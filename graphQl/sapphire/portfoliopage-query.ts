
import { HEADER_QUERY } from "./header-query";
import { PORTFOLIO_QUERY } from "./portfolio-query";

export const PORTFOLIOPAGE_QUERY = ` 
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
  
portfolio{
  results
    {
      __typename
      ... on Portfolio{
      ${PORTFOLIO_QUERY}
    }
  }
}

  `;

  export const ALL_PORTFOLIOPAGE_QUERY = `{ 
    data: allPortfoliopage{
      results{
        ${PORTFOLIOPAGE_QUERY}
      }
    }
  }
  `;
  
  export default ALL_PORTFOLIOPAGE_QUERY