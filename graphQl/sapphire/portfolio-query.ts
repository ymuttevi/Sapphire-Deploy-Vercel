import { IMAGELIST_QUERY } from './imagelist-query';

export const PORTFOLIO_QUERY = ` 
id
name
text
description
imageslist {
  
        results{
          __typename 
          ... on Imagelist{  
${IMAGELIST_QUERY}
}
}
}

`;

export const ALL_PORTFOLIO_QUERY = `{ 
    data: allPortfolio {
        total
        results {
            ${PORTFOLIO_QUERY}
         }    
      }
  `;
  export default ALL_PORTFOLIO_QUERY

