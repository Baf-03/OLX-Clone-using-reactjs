import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import "./categories.css"
import Elements from './categories_elements'


const Categories =()=>{

    return(
        <>
           <section className='parent_categories'>
                <section className='mycategories_container'>
                    
                   <Elements
                   name="All Categories"
                   icon="true"
                  
                   />
                    <Elements
                   name="Mobile Phones"
                   icon="false"
                   />
                    <Elements
                   name="Cars"
                   icon="false"
                   />
                    <Elements
                   name="Motorcycles"
                   icon="false"
                   />
                    <Elements
                   name="Houses"
                   icon="false"
                   />
                   <Elements
                   name="TV-Video-Audio"
                   icon="false"
                   />
                    <Elements
                   name="Lands & Plots"
                   icon="false"
                   />

                </section>
           </section>
        </>
    )
}
export default Categories