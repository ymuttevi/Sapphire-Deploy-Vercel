import {PROMO_QUERY} from "../sapphire/promo-query"
import { IMAGELIST_QUERY } from "../sapphire/imagelist-query";
import {MEDIA_QUERY} from "../Common/media-query"
import { PORTFOLIO_QUERY } from "./portfolio-query";
import { IMAGEWITHOVERLAY_QUERY } from "./imagewithovelay-query";
import { IMAGECAROUSEL_QUERY } from "./imagecarousel-query";
import { PARTNER_QUERY } from "./partners-query";
import { SERVICETABS_QUERY } from "./servicetabs-query";
import {FORM_QUERY} from "../sapphire/form-query";
import { TESTIMONIAL_QUERY } from "./testimonial-query";
import {MENU_QUERY} from "./menu-query";
import { HEADER_QUERY } from "./header-query";

export const CUSTOMPAGE_QUERY = ` 
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
  carousel {
    results {
      __typename
      ... on Imagecarousel {
        ${IMAGECAROUSEL_QUERY}
      } 
  }
  }

  promo{
  results {
    __typename
    ... on Promo {
      ${PROMO_QUERY}
    } 
}
}
 portfolio{
  results
    {
      __typename
      ... on Portfolio{
      ${PORTFOLIO_QUERY}
    }
  }
}
partners{
  results{
    __typename
    ... on Partners{
      ${PARTNER_QUERY}
    }
  }

}
aboutsection{
  results
    {
      __typename
      ... on Imagewithoverlay{
      ${IMAGEWITHOVERLAY_QUERY}
    }
  }
}
services{
  results
    {
      __typename
      ... on Servicetabs {
      ${SERVICETABS_QUERY}
    }
  }
}
form{
  results
    {
      __typename
      ... on Form {
      ${FORM_QUERY}
    }
  }

}
feedback{
  results
    {
      __typename
      ... on Testimonial {
      ${TESTIMONIAL_QUERY}
    }
  }

}
  `;

  export const ALL_CUSTOMPAGE_QUERY = `{ 
    data: allCustompage {
      results{
        ${CUSTOMPAGE_QUERY}
      }
    }
  }
  `;
  
  export default ALL_CUSTOMPAGE_QUERY
  
  