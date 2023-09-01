import "./sellitbuyit.css"
import sell from '../assets/buyitsellit.jpeg';
import ad from '../assets/ad.png';

const Sell =()=>{


    return(
        <section className="container  container_sell">
            <div className="sub_Sell_container">
                <img src={sell} alt="Sell It Buy It" className="imgbuysell"/>
            </div>
            <div className="ad">
            <img src={ad} alt="Sell It Buy It" className="imgbuysellad"/>
            </div>
        </section>
    )
}
export default Sell