
import { HeaderResults } from "./header-type";
import { FormResults } from "../Sapphire/form-type";
import { TestimonialResults } from "./testimonial-type";

type Contactuspage ={

    id:string
    name:string
    header:HeaderResults
    formsection: FormResults
    testimonial: TestimonialResults
}
export default  Contactuspage

export type ContactuspageResults = {
    total: string;
    results: Contactuspage[];
  }