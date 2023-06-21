
import { HEADER_QUERY } from "./header-query";
import { FORM_QUERY } from "./form-query";
import { TESTIMONIAL_QUERY } from "./testimonial-query";

export const CONTACTUSPAGE_QUERY = ` 
  id
  name
  header {
   results {
      __typename
      ... on Header {
      ${HEADER_QUERY}
      }
    }
  }
  
formsection {
  results
    {
      __typename
      ... on Form{
      ${FORM_QUERY}
    }
  }
}
testimonial{
  results{

    __typename
    ... on Testimonial{
      ${TESTIMONIAL_QUERY}
    }
  }
}

  `;

  export const ALL_CONTACTUSPAGE_QUERY = `{ 
    data: allContactuspage{
      results{
        ${CONTACTUSPAGE_QUERY}
      }
    }
  }
  `;
  
  export default ALL_CONTACTUSPAGE_QUERY