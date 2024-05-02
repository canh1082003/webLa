import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import pizaa from "../../img/product/pizzaproduct.png";
import BannerImage from "../../img/main/pizza.jpg";
import coca from "../../img/product/coca.png";
import pizzafooter from "../../img/product/pizafooter.png";
function HomePage() {
  const renderImgHome = () => {
    return (
      <div
        className="home relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start text-white font-sans"
        style={{ backgroundImage: `url(${BannerImage})`, height: "90vh" }}
      >
        <div className="headerContainer ml-12">
          <h1 className="text-9xl h-15 font-light text-teal-200">
            La's demo Pizza
          </h1>
          <p className="text-4xl font-light">PIZZA TO FIT ANY TASTE</p>
          <Link to="/danhsach">
            <button className="bg-teal-200 text-teal-800 text-lg px-8 py-2.5 rounded-md">
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    );
  };

  const renderProductHome = () => {
    return (
      <div className="header-product mx-20 my-5 flex text-white">
        <div className="product-details bg-teal-800 text-center flex-1 m-3 p-5 rounded-lg">
          <img src={pizaa} className="w-full h-50%" alt="Pizza"></img>
          <div className="header-pizza-heading">
            <div className="header-pizza-size flex items-center justify-center mt-4">
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                29
              </p>
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                30
              </p>
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                31
              </p>
            </div>
            <h5 className="text-3xl font-bold mt-2">Pizza</h5>
            <h5 className="text-3xl font-bold my-4">$200</h5>
            <Link to="/danhsach">
              <button className="bg-white text-teal-800 text-xl font-bold py-1 px-2.5 rounded-lg mb-2.5">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="product-details bg-teal-800 text-center flex-1 m-3 p-5 rounded-lg">
          <img src={coca} className="w-full h-50%" alt="Pizza"></img>
          <div className="header-pizza-heading">
            <div className="header-pizza-size flex items-center justify-center mt-4">
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                29
              </p>
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                30
              </p>
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                31
              </p>
            </div>
            <h5 className="text-3xl font-bold mt-2">Pizza</h5>
            <h5 className="text-3xl font-bold my-4">$200</h5>
            <Link to="/danhsach">
              <button className="bg-white text-teal-800 text-xl font-bold py-1 px-2.5 rounded-lg mb-2.5">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="product-details bg-teal-800 text-center flex-1 m-3 p-5 rounded-lg">
          <img src={pizaa} className="w-full h-50%" alt="Pizza"></img>
          <div className="header-pizza-heading">
            <div className="header-pizza-size flex items-center justify-center mt-4">
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                29
              </p>
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                30
              </p>
              <p className="flex-1 mx-5 p-2.5 bg-white text-teal-800 rounded-full">
                31
              </p>
            </div>
            <h5 className="text-3xl font-bold mt-2">Pizza</h5>
            <h5 className="text-3xl font-bold my-4">$200</h5>
            <Link to="/danhsach">
              <button className="bg-white text-teal-800 text-xl font-bold py-1 px-2.5 rounded-lg mb-2.5">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderIntroduceHome = () => {
    return (
      <div className="introduce-home bg-teal-800 py-20 px-40 flex">
        <div className="home-contact flex-1 w-40% text-white">
          <h3 className="text-4xl m-0">Contact Information</h3>
          <div className="mt-4">
            <EnvelopeIcon className="w-10 h-10" />
            <p>Email</p>
            <p>Hello@hospital.com</p>
          </div>
          <div className="mt-4">
            <PhoneIcon className="w-10 h-10" />
            <p>Call us for assistance</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <img src={pizzafooter} className="flex" alt="Pizza Footer"></img>
      </div>
    );
  };

  return (
    <div>
      {renderImgHome()}
      {renderProductHome()}
      {renderIntroduceHome()}
    </div>
  );
}

export default HomePage;
