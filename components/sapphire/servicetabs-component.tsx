import { ServiceTabsResults } from "../../types/Sapphire/servicetabs";
import Image from 'next/image'


type Props = {

allServiceTabs: ServiceTabsResults

}
const ServiceTabsComponent = ({allServiceTabs}:Props) =>{
  const service = allServiceTabs.results[0];
return (

  <section className="service_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>
{service.servicetitle}
      </h2>
      <p>
        {service.servicedescription}
       
      </p>
    </div>
    <div className="row">
      <div className="col-lg-6 ">
        <div className="img-container tab-content">
          <div className="img-box tab-pane fade show active" id="img1" role="tabpanel">
          <Image src={service.tabs.results[0].image.results[0].fileUrl} alt={''} width={"1000"} height={"400"}/>
          </div>
          <div className="img-box tab-pane fade  " id="img2" role="tabpanel">
          <Image src={service.tabs.results[1].image.results[0].fileUrl} alt={''} width={"1000"} height={"400"}/>
          </div>
          <div className="img-box tab-pane fade  " id="img3" role="tabpanel">
          <Image src={service.tabs.results[2].image.results[0].fileUrl} alt={''} width={"1000"} height={"400"}/>
          </div>
          <div className="img-box tab-pane fade  " id="img4" role="tabpanel">
          <Image src={service.tabs.results[3].image.results[0].fileUrl} alt={''} width={"1000"} height={"400"}/>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="detail-container nav nav-tabs" id="myTab" role="tablist">
          <a className="detail-box active" id="img1-tab" data-toggle="tab" href="#img1" role="tab" aria-selected="true">
            <h4>
            {service.tabs.results[0].description}
            </h4>
          </a>
          <a className="detail-box" id="img2-tab" data-toggle="tab" href="#img2" role="tab" aria-selected="false">
            <h4>
            {service.tabs.results[1].description}
            </h4>
          </a>
          <a className="detail-box" id="img2-tab" data-toggle="tab"  href="#img3" role="tab" aria-selected="false">
            <h4>
            {service.tabs.results[2].description}
            </h4>
          </a>
          <a className="detail-box" id="img2-tab" data-toggle="tab"  href="#img4" role="tab" aria-selected="false">
            <h4>
            {service.tabs.results[3].description}
            </h4>
          </a>
        </div>
      </div>
    </div>
    <div className="btn-box">
      <a href="">
        Read More
      </a>
    </div>
  </div>
</section>
)
}
export default ServiceTabsComponent