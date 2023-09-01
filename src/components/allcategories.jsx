import chicken from '../assets/chicken.png';
import kaka from '../assets/OLX-Symbol.png'
import "./allcategories.css"
const Allcategories =(props)=>{
    const [imageSrc] = props.imageSrc
    console.log("namecat")
  
    return(
                <div className='pubg'>
                    <img src={props.imageSrc} className='img_allcategories' alt="Example" />
                    <div>{props.namecat}</div>
                </div>
          
    )
}
export default Allcategories