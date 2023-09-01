import "./products.css";
import product from "../assets/product1.png";
const Products = (props) => {
  console.log(props.name);
  const { name, title, about } = props;
  console.log(name);

  return (
    <>
      <div className="card">
        <img src={product} className="card-img-top imgsrc" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{about}</p>
        </div>
      </div>
    </>
  );
};
export default Products;
