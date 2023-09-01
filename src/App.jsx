//---------------------------------import components-----------------------------------------
import "./App.css";
import Allcategories from "./components/allcategories";
import Categories from "./components/categories";
import Navbar from "./components/navbar";
import Sell from "./components/sellitbuyit";
import Products from "./components/products";

//------------------------------------import-images---------------------------------------------
import chicken from "./assets/chicken.png";
import camera from "./assets/camera.png";
import truck from "./assets/truck.png";
import clothes from "./assets/blueClothes.png";
import paint from "./assets/paint.png";
import chair from "./assets/chair.png";
import car from "./assets/car.png";
import job from "./assets/jobs.png";
import key from "./assets/key.png";
import property from "./assets/property.png";
import books from "./assets/books.png";
import logoblocks from "./assets/logoblocks.png";
import bike from "./assets/bike.png";

function App() {
  const pubgValue = "Some Value";

  return (
    <>
      <section>
        <Navbar />
      </section>

      {/* ------------------------------------categories Section----------------------------------- */}

      <section>
        {" "}
        <Categories />
      </section>

      {/* ------------------------------------sell image Section----------------------------------- */}

      <Sell />

      {/* ------------------------------------all-categories Section----------------------------------- */}

      <div className="container mt-5">
        <h1>All Categories</h1>
      </div>

      <section className="container d-flex justify-content-center p-0">
        <div className="subcontainer_allcategories ">
          <div className="mycls">
            <Allcategories imageSrc={chicken} namecat="chicken" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={camera} namecat="camera" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={clothes} namecat="clothes" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={paint} namecat="paint" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={car} namecat="car" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={truck} namecat="truck" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={chair} namecat="chair" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={job} namecat="job" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={key} namecat="key" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={property} namecat="property" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={books} namecat="books" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={logoblocks} namecat="logoblocks" />
          </div>

          <div className="mycls">
            <Allcategories imageSrc={bike} namecat="bike" />
          </div>
        </div>
      </section>
      {/* ------------------------------------products Section----------------------------------- */}

      <section className="container mt-5">
        <div className="productssection ">
          <div>
            {" "}
            <Products name={chair} title="naya ghar" about="naram naram" />
          </div>

          <div>
            {" "}
            <Products name={chair} title="naya ghar" about="naram naram" />
          </div>

          <div>
            {" "}
            <Products name={chair} title="naya ghar" about="naram naram" />
          </div>

          <div>
            {" "}
            <Products name={chair} title="naya ghar" about="naram naram" />
          </div>

          <div>
            {" "}
            <Products name={chair} title="naya ghar" about="naram naram" />
          </div>

          <div>
            {" "}
            <Products name={chair} title="naya ghar" about="naram naram" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
