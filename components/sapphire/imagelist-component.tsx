import { ImageListResults } from "../../types/Sapphire/imagelist-type";
import Image from 'next/image'

type Props = {

  allImageslist: ImageListResults
  
  }
  
  const ImageListComponent = ({allImageslist}:Props) =>{
      const imageList= allImageslist.results[0];
  return (
 <section>
    <div className="box-1">
   <div className="img-box b-1">  <Image src={imageList.primaryimage.results[0].fileUrl} alt={''} width={"380"} height={"100"}/>

 <div className="btn-box">
   <a href="" className="btn-1">

   </a>
   <a href="" className="btn-2">

   </a>
 </div>
 </div>
<div className="img-box b-2">
<Image src={imageList.secondaryimage.results[0].fileUrl} alt={''} width={'380'} height={'100'} />
      <div className="btn-box">
        <a href="" className="btn-1">

        </a>
        <a href="" className="btn-2">

        </a>
      </div>
    </div>
</div>

   <div className="box-2">
   <div className="img-box b-3">
   <Image src={imageList.terinaryimage.results[0].fileUrl} alt={''} width={'380'} height={'100'} />
     <div className="btn-box">
       <a href="" className="btn-1">

       </a>
       <a href="" className="btn-2">

       </a>
     </div>
   </div>
   <div className="img-box b-4">
   <Image src={imageList.quadrupleimage.results[0].fileUrl} alt={''} width={'380'} height={'100'} />
     <div className="btn-box">
       <a href="" className="btn-1">

       </a>
       <a href="" className="btn-2">

       </a>
     </div>
   </div>
 </div>
</section>
  )
  }
  export default ImageListComponent
