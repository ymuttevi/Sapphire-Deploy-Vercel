import { ImageCarouselResults } from '../../types/Sapphire/imagecarousel-type';
import Image from 'next/image'


type Props = {

allImageCarousel: ImageCarouselResults;

}
const ImageCarouselComponent = ({allImageCarousel}:Props) =>{
  const carousel = allImageCarousel.results[0];
return (

    <section className="slider_section">
    <div className="slider_container">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
            
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
            
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">
            
          </li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 px-0">
                  <div className="img-box">
                    <Image src={carousel.carouselslides.results[0].slideimage.results[0].fileUrl} alt={''} width={"400"} height={"400"}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                     {carousel.carouselslides.results[0].caption}
                    </h1>
                    <p>
                    {carousel.carouselslides.results[0].description}
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 px-0">
                  <div className="img-box">
                  <Image src={carousel.carouselslides.results[1].slideimage.results[0].fileUrl} alt={''} width={"400"} height={"400"}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                    {carousel.carouselslides.results[1].caption}
                    </h1>
                    <p>
                    {carousel.carouselslides.results[1].description}
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 px-0">
                  <div className="img-box">
                  <Image src={carousel.carouselslides.results[2].slideimage.results[0].fileUrl} alt={''} width={"400"} height={"400"}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                    {carousel.carouselslides.results[2].caption}
                    </h1>
                    <p>
                    {carousel.carouselslides.results[2].description}
                    </p>
                    <a href="">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <img src="images/line.png" alt="" />
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)
}
export default ImageCarouselComponent