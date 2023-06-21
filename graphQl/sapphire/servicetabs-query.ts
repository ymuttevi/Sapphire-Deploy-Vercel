import {SERVICETAB_QUERY} from "../sapphire/servicetab-query";

export const SERVICETABS_QUERY = `
id
name
servicetitle
servicedescription
tabs{
     results{
    __typename 
    ... on Servicetab{  
${SERVICETAB_QUERY}
}
}
}
`;


export const ALL_SERVICETABS_QUERY = `{ 
    data: allServiceTabs{
        total
        results {
          ${SERVICETABS_QUERY}
        }
      }
  `;

export default ALL_SERVICETABS_QUERY