
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Elements = (props) => {
   

   
    

    return (
        <div>
            {props.name}
            {props.icon ==="true"? (
                <FontAwesomeIcon icon={faAngleDown} />
            ) : (
                console.log('icon show:false')
            )}
        </div>
    );
};

export default Elements;
