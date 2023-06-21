import { PromoResults } from "../../types/Sapphire/promo-type";
import styles from '../../styles/sapphire/Promo.module.css';

type Props = {

    allPromo: PromoResults;
    
    }
    
    const PromoComponent = ({allPromo}:Props) =>{
        const promo= allPromo.results[0];
    return (
        <section className="started_section layout_padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
               {promo.promotitle}
              </h2>
              <p>
               {promo.promodescription}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 offset-md-1">
          <div className="btn-box">
            <a href="">
           {promo.promobuttontext}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
  }
  export default PromoComponent