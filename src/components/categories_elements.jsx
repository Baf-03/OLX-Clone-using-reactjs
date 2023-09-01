import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Elements = (props) => {
  return (
    <div className="nav-link active">
      {props.name}
      {props.icon === "true" ? (
        <FontAwesomeIcon icon={faAngleDown} />
      ) : (
        console.log("icon show:false")
      )}
    </div>
  );
};

export default Elements;
