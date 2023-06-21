import MENU_QUERY from "./menu-query";
import MEDIA_QUERY from "../Common/media-query";

export const HEADER_QUERY = ` 
  id
  name
  logo {
    results {
        ${MEDIA_QUERY}
    }
  }
  menuItems {
        results {
      __typename
      ... on Menu {
        ${MENU_QUERY}
      }
    }
  }
`;


export const ALL_HEADER_QUERY = `{ 
    data: allHeader {
        total
        results {
          ${HEADER_QUERY}
        }
      }
  `;

export default ALL_HEADER_QUERY