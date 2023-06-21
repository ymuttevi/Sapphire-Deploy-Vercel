
import { ImagewithOverlayResults } from "../../types/Sapphire/imagewithoverlay-type"
import Image from 'next/image'

type Props = {

  allImagewithOverlay: ImagewithOverlayResults
  
  }
  
  const ImagewithOverlayComponent = ({allImagewithOverlay}:Props) =>{
      const imageOverlay= allImagewithOverlay.results[0];
  return ( 

<section className="agency_section layout_padding-bottom">
<div className="agency_container ">
  <div className="box ">
    <div className="detail-box">
      <div className="heading_container">
        <h2>
         {imageOverlay.imagetext}
        </h2>
      </div>
      <p>
       {imageOverlay.description}
      </p>
      <a href="">
 {imageOverlay.buttontext}
      </a>
    </div>
  </div>
</div>
</section>
  )
  }
  export default ImagewithOverlayComponent