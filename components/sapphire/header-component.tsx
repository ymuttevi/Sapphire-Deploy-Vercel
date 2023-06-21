
import {HeaderResults} from '../../types/Sapphire/header-type'
import Image from 'next/image';
import NavigationComponent from '../sapphire/navigation-component';

type Props = {
    allHeaders: HeaderResults;
}

const HeaderComponent= ({allHeaders}: Props) => {
    const header = allHeaders.results[0];

return (
    
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="/">
            <Image src={header.logo.results[0].fileUrl}  alt={''} width={"100"} height={"100"}/>
          </a>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
            
                  <NavigationComponent 
                        menuResults  = {header.menuItems}
                    />
        
                
             
             
             
            </div>
          </div>
        </nav>
      </div>
    </header>
)
}
export default HeaderComponent