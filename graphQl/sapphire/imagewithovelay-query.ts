import MEDIA_QUERY from "../Common/media-query";

export const IMAGEWITHOVERLAY_QUERY = `
id
name
backgroundimage{
  results {
   ${MEDIA_QUERY}
  }
}
imagetext
description
buttontext

`;

export const ALL_IMAGEWITHOVERLAY_QUERY = `{ 
    data: allImagewithOverlay {
        total
        results {
          ${IMAGEWITHOVERLAY_QUERY}
        }
      }
  `;

export default ALL_IMAGEWITHOVERLAY_QUERY