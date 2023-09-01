import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import "./categories.css"
import Elements from './categories_elements'


const Categories =()=>{

    return(
        <>
           <section className='container mt-2'>
                
                <nav class="navbar navbar-expand-lg p-0 m-0">
                <div class="container-fluid ">
    
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                 </button>

                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav m-0 p-0">

                <Elements
                   name="All Categories"
                   icon="true"
                  
                   />
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
        <a class="nav-link active" aria-current="page" href="#">Home</a>


   
      </div>
    </div>
  </div>
</nav>
                   
                   

            
           </section>
        </>
    )
}
export default Categories