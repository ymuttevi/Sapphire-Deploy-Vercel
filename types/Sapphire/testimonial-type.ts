import { MediaResults } from "../Common/media-type"

type Testimonial=
{

id:string
name:string
text:string
clientname:string
clientimage:MediaResults
description:string
}
export default Testimonial

export type TestimonialResults ={
total:string;
results:Testimonial[];

}