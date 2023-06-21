import Image from "next/image"

const CustomFooterComponent = () =>{
    return (
<section className="info_section  layout_padding2-top">
    <div className="social_container">
      <div className="social_box">
        <a href="">
         <Image src="/images/fb.png" alt={''}  width={"30"} height={"30"}/> 
        </a>
        <a href="">
          <Image src="/images/twitter.png" alt=""  width={"30"} height={"30"}/>
        </a>
        <a href="">
          <Image src="/images/linkedin.png" alt=""   width={"30"} height={"30"}/>
        </a>
        <a href="">
          <Image src="/images/youtube.png" alt=""  width={"30"} height={"30"}/>
        </a>
      </div>
    </div>
    <div className="info_container ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h6>
              ABOUT US
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              Instagram
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi
              scing elit, sed doLorem ipsum dolor sit
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              NEED HELP
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6>
              CONTACT US
            </h6>
            <div className="info_link-box">
              <a href="">
                <Image src="/images/location.png" alt=""  width={"40"} height={"40"}/>
                <span>#1600, San Francisco, USA
 </span>
              </a>
              <a href="">
                <Image src="/images/call.png" alt=""  width={"40"} height={"40"}/>
                <span>+01 12345678901</span>
              </a>
              <a href="">
                <Image src="/images/mail.png" alt=""  width={"40"} height={"40"}/>
                <span> demo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear">2023</span> All Rights Reserved By
          Sapphire
        </p>
      </div>
    </section>

  </section>
  
  )
}
export default CustomFooterComponent