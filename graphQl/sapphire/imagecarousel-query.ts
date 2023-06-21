import { IMAGECAROUSELSLIDE_QUERY } from "./imagecarouselslide-query";
export const IMAGECAROUSEL_QUERY = ` 
id
name
carouselslides {
  
        results{
          __typename 
          ... on Imagecarouselslide{  
${IMAGECAROUSELSLIDE_QUERY}
}
}
}

`;

export const ALL_IMAGECAROUSEL_QUERY = `{ 
    data: allImagecarousel {
        total
        results {
            ${IMAGECAROUSEL_QUERY}
         }    
      }
  `;
  export default ALL_IMAGECAROUSEL_QUERY

