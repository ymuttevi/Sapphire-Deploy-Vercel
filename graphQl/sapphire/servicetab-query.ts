import {MEDIA_QUERY} from "../Common/media-query";

export const SERVICETAB_QUERY = `
id
name
description
image{
results {
    ${MEDIA_QUERY}
  }
}
`;

export const ALL_SERVICETAB_QUERY = `{ 
    data: allServiceTab{
        total
        results {
          ${SERVICETAB_QUERY}
        }
      }
  `;

export default ALL_SERVICETAB_QUERY