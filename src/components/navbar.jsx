import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding ,faCar,faMagnifyingGlass,faAngleDown,faPlus} from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"

// import bike from '../../assets/bike.png';
import xd from '../assets/bike.png';
import olx from '../assets/OLX-Logo.png';
import olxlogo from '../assets/OLX-Symbol.png';






const Navbar =()=>{
    
    return(
        <>
            <header>
            <nav className='container'>
                <section className='prenavbar'>
                    <div ><img src={olx} alt="My Image" className='navlogo'/></div>
                    <div className='preNav_elements'><FontAwesomeIcon icon={faCar} className="icon"/> Motors</div>
                    <div className='preNav_elements'> <FontAwesomeIcon icon={faBuilding} className="icon"/> property</div>
                    
                </section>
                <section className='navbar1'>
                   <section><img src={olxlogo} alt="My Image" className='navlogomain'/></section>
                   <section className='location_search'>
                        <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <div><input className="p-0 country_search" placeholder='Pakistan'></input ></div>
                        <div> <FontAwesomeIcon icon={faAngleDown} /> </div>
                   </section>
                   <section className='product_search'>
                        <div className='product_search_input'><input className="p-0 product_search_input" placeholder='Find Cars,Mobile Phones and more...'></input ></div>
                        <div className='black_search'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                   </section>

                   <section>login</section>
                   <section className='sell'>
                        <div className='parentsell'><img src='https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg'/>
                        <div className='childsell'><FontAwesomeIcon icon={faPlus} />SELL</div>
                        </div>
                        
                    </section>

                </section>
            </nav>
            </header>
           
        </>
    )
}
export default Navbar