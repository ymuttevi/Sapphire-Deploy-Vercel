export const PROMO_QUERY = `
id
name
promotitle
promodescription
promobuttontext

`;

export const ALL_PROMO_QUERY = `{ 
    data: allPromo {
        total
        results {
          ${PROMO_QUERY}
        }
      }
  `;

export default ALL_PROMO_QUERY