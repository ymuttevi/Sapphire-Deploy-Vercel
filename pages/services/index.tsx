import Servicepage,{ServicepageResults} from '../../types/Sapphire/servicespage-type';
import Image from 'next/image';
import Head from 'next/head';
import CustomFooterComponent from "../../components/sapphire/footer-component";
import HeaderComponent from "../../components/sapphire/header-component";
import { getAllServicepage} from '../../lib/sapphire/servicepage-lib'; 
import ServiceTabsComponent from '../../components/sapphire/servicetabs-component';


export async function getStaticProps({ preview = false}){
    const allServicepage = await getAllServicepage(preview);
    return{
        props: {allServicepage,  preview},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, //in seconds
    }
    
  }
  
  type Props = {
    allServicepage: Servicepage[];
  }
  
  const Servicepage = ({allServicepage}: Props) => {
    const servicepage = allServicepage[0];
  return (
    
<div className="container">   
    
     <Head>
    <title> Services page</title>
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
  
 <div className="hero area"><HeaderComponent allHeaders={servicepage.header} /> </div>
 <div><ServiceTabsComponent allServiceTabs={servicepage.services} /> </div>
  
  <CustomFooterComponent />
</main>
</div>

  )
  }
  export default Servicepage;
