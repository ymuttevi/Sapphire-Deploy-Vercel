import { CARD_QUERY } from './card-query';

export const PARTNER_QUERY = ` 
id
name
partnertitle
partnerdescription
partnercards {
        results{
          __typename 
          ... on Card{  
${CARD_QUERY}
}
}
}

`;

export const ALL_PARTNER_QUERY = `{ 
    data: allPartner {
        total
        results {
            ${PARTNER_QUERY}
         }    
      }
  `;
  export default ALL_PARTNER_QUERY

