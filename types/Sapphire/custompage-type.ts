import { ImageCarouselResults } from "./imagecarousel-type";
import { ImagewithOverlayResults } from "./imagewithoverlay-type";
import { PortfolioResults } from "./portfolio-type";
import { PromoResults } from "./promo-type";
import { PartnerResults } from "./partner-type";
import { ServiceTabsResults } from "./servicetabs";
import { FormResults } from "./form-type";
import { TestimonialResults } from "./testimonial-type";
import { HeaderResults } from "./header-type";

type Custompage ={

    id:string
    name:string
    header:HeaderResults
    carousel: ImageCarouselResults
    promo:PromoResults
    portfolio:PortfolioResults
    partners : PartnerResults
    aboutsection:ImagewithOverlayResults
    services: ServiceTabsResults 
    form:FormResults
    feedback:TestimonialResults
}
export default Custompage

export type CustompageResults = {
    total: string;
    results: Custompage[];
  }