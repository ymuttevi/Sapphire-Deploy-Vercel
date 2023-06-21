import { PartnerResults } from "../../types/Sapphire/partner-type";
import Image from 'next/image';

type Props = {

  allPartner: PartnerResults
  }
  
  const PartnerComponent = ({allPartner}:Props) =>{
      const partner= allPartner.results[0];
  return (
  <section className="logo_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>
       {partner.partnertitle}
      </h2>
      <p>
    {partner.partnerdescription}
      </p>
    </div>
  </div>
  <div className="logo_container layout_padding">
    <div className="carousel-wrap">
      <div className="owl-carousel">
        <div className="item">
          <div className="box  b1">
            <div className="img-box">
             <Image src={partner.partnercards.results[0].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
            {partner.partnercards.results[0].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box b2">
            <div className="img-box">
            <Image src={partner.partnercards.results[1].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[1].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box  b1">
            <div className="img-box">
            <Image src={partner.partnercards.results[2].image.results[0].fileUrl} alt={''} width={"180"} height={"163"}  />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[2].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box b2">
            <div className="img-box">
            <Image src={partner.partnercards.results[3].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[3].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box  b1">
            <div className="img-box">
            <Image src={partner.partnercards.results[4].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[4].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box b2">
            <div className="img-box">
            <Image src={partner.partnercards.results[5].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[5].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box  b1">
            <div className="img-box">
            <Image src={partner.partnercards.results[0].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[0].cardtitle}
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="box b2">
            <div className="img-box">
            <Image src={partner.partnercards.results[1].image.results[0].fileUrl} alt={''} width={"180"} height={"163"} />
            </div>
            <div className="detail-box">
              <h4>
              {partner.partnercards.results[1].cardtitle}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}
export default PartnerComponent