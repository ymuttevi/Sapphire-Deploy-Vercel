import { PortfolioResults } from "../../types/Sapphire/portfolio-type";
import ImageListComponent from "./imagelist-component";

type Props = {

  allPortfolio:PortfolioResults;
  
  }
  
  const PortfolioComponent = ({allPortfolio}:Props) =>{
      const portfolio= allPortfolio.results[0];
  return (
<section className="portfolio_section">
<div className="heading_container">
  <h2>
   {portfolio.text}
  </h2>
  <p>
  {portfolio.description}
  </p>
</div>
<div className="portfolio_container layout_padding">
<ImageListComponent allImageslist={portfolio.imageslist}

/>
</div>
</section>
)
}
export default PortfolioComponent