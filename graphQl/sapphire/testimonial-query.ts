import MEDIA_QUERY from "../Common/media-query";

export const TESTIMONIAL_QUERY = `
id
name
text
clientname
clientimage{
    results
    {
        ${MEDIA_QUERY}
    }
}
description

`;

export const ALL_TESTIMONIAL_QUERY = `{ 
    data: alltestimonial {
        total
        results {
          ${TESTIMONIAL_QUERY}
        }
      }
  `;

export default ALL_TESTIMONIAL_QUERY