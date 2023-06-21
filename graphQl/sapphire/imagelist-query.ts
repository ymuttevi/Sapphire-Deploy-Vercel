import {MEDIA_QUERY} from '../Common/media-query'

export const IMAGELIST_QUERY = ` 

id
name
primaryimage {
  
    results {
      ${MEDIA_QUERY}
    }
}
secondaryimage  {
    
     results {
       ${MEDIA_QUERY}
     }
 }


terinaryimage  {
  
     results {
       ${MEDIA_QUERY}
     }
 }
quadrupleimage  {
    
     results {
       ${MEDIA_QUERY}
     }
 }
`;

export const ALL_IMAGELIST_QUERY = `{ 
    data: allImagelist  {
        total
        results {
          ${IMAGELIST_QUERY}
        }
      }
  `;
  export default ALL_IMAGELIST_QUERY