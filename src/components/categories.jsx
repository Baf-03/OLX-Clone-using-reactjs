import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./categories.css";
import Elements from "./categories_elements";

const Categories = () => {
  return (
    <>
      <section className="container mt-2">
        <nav className="navbar navbar-expand-lg p-0 m-0">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav m-0 p-0">
                <Elements name="All Categories" icon="true" />
                <Elements name="All Categories" icon="true" />
                <Elements name="Mobile Phones" icon="false" />
                <Elements name="Cars" icon="false" />
                <Elements name="Motorcycles" icon="false" />
                <Elements name="Houses" icon="false" />
                <Elements name="TV-Video-Audio" icon="false" />
                <Elements name="Lands & Plots" icon="false" />
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Categories;
