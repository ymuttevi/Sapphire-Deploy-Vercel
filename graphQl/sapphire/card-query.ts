import MEDIA_QUERY from "../Common/media-query";

export const CARD_QUERY = ` 
id
name
image {
    results {
      ${MEDIA_QUERY}
  }
}
cardtitle
carddescription
`;

export const ALL_CARD_QUERY = `{ 
    data: allCard {
        results {
            ${CARD_QUERY}
         }    
      }
  `;
  export default ALL_CARD_QUERY