import "./products.css";

const Products = (props) => {
  console.log(props.name);
  const { name, title, about } = props;
 
  return (
    <>
      <div className="card">
        <img src={name} className="card-img-top imgsrc" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{about}</p>
        </div>
      </div>
    </>
  );
};
export default Products;
