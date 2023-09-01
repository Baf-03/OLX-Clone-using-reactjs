
import "./allcategories.css";

const Allcategories = (props) => {

  return (
    <div className="pubg">
      <img src={props.imageSrc} className="img_allcategories" alt="Example" />
      <div>{props.namecat}</div>
    </div>
  );
};
export default Allcategories;
