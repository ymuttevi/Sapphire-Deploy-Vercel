import {MEDIA_QUERY} from '../Common/media-query'

export const IMAGECAROUSELSLIDE_QUERY = ` 

id
name
slideimage {
  
    results {
      ${MEDIA_QUERY}
    }
}
caption
description
`;

export const ALL_IMAGECAROUSELSLIDE_QUERY = `{ 
    data: allImagecarouselslide {
        total
        results {
          ${IMAGECAROUSELSLIDE_QUERY}
        }
      }
  `;
  export default ALL_IMAGECAROUSELSLIDE_QUERY