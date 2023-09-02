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
import product2 from "./assets/product2.png";
import product3 from "./assets/products3.png";
import product4 from "./assets/product3.png";
import OlxMarketing from "./components/olxmarketing";
import Footer from "./components/footer";




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
      {/* ------------------------------------lands and plots Section----------------------------------- */}

      <div className="container mt-5">
        <h1>Products Section</h1>
      </div>

      <section className="container mt-3">
        <div className="productssection ">
          
          <div>
            {" "}
            <Products name="https://venturebeat.com/wp-content/uploads/2023/05/AdobeStock_573239156-1.jpeg?fit=1208%2C691&strip=all" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://www.publicissapient.com/content/dam/ps-rebrand/insights/2023/ret-insights-chatgpt/Hero-2880.jpg" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://scanbot.io/wp-content/uploads/2023/04/AdobeStock_576347326-scaled.jpeg" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/Interviews/2023/June/amadeus%20ai%20insights.jpeg?tr=w-1200%2Cfo-auto" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://venturebeat.com/wp-content/uploads/2023/05/AdobeStock_573239156-1.jpeg?fit=1208%2C691&strip=all" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://www.publicissapient.com/content/dam/ps-rebrand/insights/2023/ret-insights-chatgpt/Hero-2880.jpg" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://scanbot.io/wp-content/uploads/2023/04/AdobeStock_576347326-scaled.jpeg" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/Interviews/2023/June/amadeus%20ai%20insights.jpeg?tr=w-1200%2Cfo-auto" title="title" about="props pass howe hain yahan pr" />
          </div>
          
        </div>
      </section>



        {/* ------------------------------------products Section----------------------------------- */}

        <div className="container mt-5">
        <h1>Lands and Plots</h1>
      </div>

      <section className="container mt-3">
        <div className="productssection ">
          
          <div>
            {" "}
            <Products name="https://img.freepik.com/premium-photo/3d-land-with-mountain-isolated-piece-earth-land-green-field-generate-ai_39665-1054.jpg?w=2000" title="title" about="props pass howe hain yahan pr" />
          </div>
          <div>
            {" "}
            <Products name="https://img.freepik.com/premium-photo/3d-land-with-mountain-isolated-piece-earth-land-green-field-generate-ai_39665-1054.jpg?w=2000" title="title" about="props pass howe hain yahan pr" />
          </div>

          <div>
            {" "}
            <Products name="https://img.freepik.com/premium-photo/3d-land-with-mountain-isolated-piece-earth-land-green-field-generate-ai_39665-1054.jpg?w=2000" title="title" about="props pass howe hain yahan pr" />
          </div>
          <div>
            {" "}
            <Products name="https://img.freepik.com/premium-photo/3d-land-with-mountain-isolated-piece-earth-land-green-field-generate-ai_39665-1054.jpg?w=2000" title="title" about="props pass howe hain yahan pr" />
          </div>

          
          
        </div>
      </section>

      <section className="mt-5">
        <OlxMarketing/>
      </section>
    <h1>footer</h1>
      <section>
        <Footer/>
      </section>
    </>
  );
}

export default App;
