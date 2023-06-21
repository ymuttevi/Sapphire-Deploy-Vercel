import Contactuspage,{ContactuspageResults} from '../../types/Sapphire/contactuspage-type';
import Image from 'next/image';
import Head from 'next/head';
import CustomFooterComponent from "../../components/sapphire/footer-component";
import HeaderComponent from "../../components/sapphire/header-component";
import { getAllContactuspage } from '../../lib/sapphire/contactuspage-lib';
import FormComponent from '../../components/sapphire/Form-component';
import TestimonialComponent from '../../components/sapphire/testimonial-component';


export async function getStaticProps({ preview = false}){
    const allContactuspage = await getAllContactuspage(preview);
    return{
        props: {allContactuspage,  preview},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, //in seconds
    }
    
  }
  
  type Props = {
    allContactuspage: Contactuspage[];
  }
  
  const Contactuspage = ({allContactuspage}: Props) => {
    const contactuspage = allContactuspage[0];
  return (
    
<div className="container">   
    
     <Head>
    <title> ContactUs page</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700|Raleway:400,700&display=swap" rel="stylesheet" />
    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />

  <link href="../../styles/sapphire/Sapphirepage.module.css" rel="stylesheet" />
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  


</Head>

<main className="container">
  
 <div className="hero area"><HeaderComponent allHeaders={contactuspage.header} /> </div>
 <div> <FormComponent allForm={contactuspage.formsection} />
       <TestimonialComponent allTestimonial={contactuspage.testimonial} />
 </div>
  
  <CustomFooterComponent />
</main>
</div>

  )
  }
  export default Contactuspage;
