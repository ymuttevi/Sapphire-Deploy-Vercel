

import { FormResults } from "../../types/Sapphire/form-type";
import Image from 'next/image'


type Props = {

allForm: FormResults

}
const FormComponent = ({allForm}:Props) =>{
  const form = allForm.results[0];
return (

  <section className="contact_section layout_padding">
  <div className="container px-0">
    <div className="heading_container">
      <h2 className="">
        Con<span>ta</span>ct Us
      </h2>
    </div>

  </div>
  <div className="container container-bg">
    <div className="row">
      <div className="col-lg-8 col-md-7 px-0">
        <div className="map_container">
          <div className="map-responsive">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8772444588435!2d-122.3975074!3d37.7929165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085854963a98f95%3A0xdd4e3dabf2a5d74b!2sSitecore!5e0!3m2!1sen!2sin!4v1676876267143!5m2!1sen!2sin" width="600" height="450"  loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-lg-4 px-0">
        <form action="">
          <div>
            <input type="text" placeholder={form.namelabel} />
          </div>
          <div>
            <input type="email" placeholder={form.emaillabel} />
          </div>
          <div>
            <input type="text" placeholder={form.phonelabel} />
          </div>
          <div>
            <input type="text" className="message-box" placeholder={form.messagetext} />
          </div>
          <div className="d-flex ">
            <button>
         {form.buttontext}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
)
}
export default FormComponent