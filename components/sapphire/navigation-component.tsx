import Menu, { MenuResults } from '../../types/Sapphire/menu-type';
import Link from 'next/link';
import { useRouter } from "next/router";


type Props = {
    menuResults: MenuResults;
}

const NavigationComponent = ({menuResults}: Props) => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return(
        <ul className="navbar-nav">
        {menuResults.results.map((menu: Menu) => (
        
<li className="nav-item nav-link"><Link className={currentRoute === menu.link ? "active" : " " + "nav-link"} href={menu.link}>{menu.label}</Link>
     </li>
   
        ))}
    
        </ul>
    )

} 

export default NavigationComponent;