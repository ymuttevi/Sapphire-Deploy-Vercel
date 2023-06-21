import { CardResults } from "../../types/Sapphire/card-type"
import Image from 'next/image'

type Props = {

allCards: CardResults;

}

const CardComponent = ({allCards}:Props) =>{
    const card= allCards.results[1];
return (

<div className="row">
<div className="col-md-4">
   <div className="feature-box card">
   <Image 
            src={card.image.results[0].fileUrl}
            alt={card.cardtitle}
            width={400}
            height={400}
            />
      <div className="card-body">
         <h5 className="card-title border-bottom pb-3"> {card.cardtitle} <a href="#" className="float-right btn btn-sm btn-info d-inline-flex share"><i className="fas fa-share-alt"></i></a></h5>
         <p className="card-text">{card.carddescription}</p>
         <a href="#" className="btn btn-sm btn-info float-right">Read more <i className="fas fa-angle-double-right"></i></a>
      </div>
   </div>
</div>



</div>
)
}
export default CardComponent