import {TestimonialResults } from "../../types/Sapphire/testimonial-type";
import Image from 'next/image'


type Props = {

allTestimonial: TestimonialResults

}
const TestimonialComponent = ({allTestimonial}:Props) =>{
  const  testimonial = allTestimonial.results[0];
return (

  
  
  <section className="client_section layout_padding-bottom">
  <div className="container">
    <div className="heading_container">
      <h2>
      {testimonial.text}
      </h2>
    </div>
    <div className="box">
      <div className="client_id">
        <div className="name">
          <h4>
    
        {testimonial.clientname}  
          </h4>
        </div>
        <div className="img-box">
      <Image src={testimonial.clientimage.results[0].fileUrl} alt={''} width={"200"} height={"200"}/>
        </div>
      </div>
      <div className="detail-box">
        {testimonial.description}
        <p>
        <Image src="/images/quote.png" alt ={''}  width={"50"} height={"50"}/>
        </p>
    
      </div>
    </div>
  </div>
</section>
)
}
export default TestimonialComponent