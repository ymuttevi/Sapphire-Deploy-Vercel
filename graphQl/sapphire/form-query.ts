

export const FORM_QUERY = ` 
id
name
namelabel
emaillabel
phonelabel
messagetext
buttontext
`;

export const ALL_FORM_QUERY = `{ 
    data: allForm{
        results {
            ${FORM_QUERY}
         }    
      }
  `;
  export default ALL_FORM_QUERY