import "./App.css";
import Header from "./assets/Header.jpg";
import Car from "./assets/CarLogo.png";
import Bus from "./assets/BusLogo.png";
import Train from "./assets/TrainLogo.png";
import Airplane from "./assets/PlaneLogo.png";
import Hotel from "./assets/Hotel.jpg";
import Restaurant from "./assets/Restaurant.jpg";
import SearchBar from "./components/SearchBar.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={Header} alt="Header" />
      </header>
      <h1>Hop Hop Travel</h1>
      <SearchBar />

      <div className="activities">
        <h2>Activities That You May Like</h2>
      </div>

      <div className="hotels">
        <h2>Need a place to stay ?</h2>
        <img src={Hotel} alt="Hotel" />
        <p>
          We offers you some discounts when you choose our partner hotels. Click
          here to browse our offers availability.
        </p>
      </div>

      <div className="transportation">
        <h2>Find Way To Your Destination !</h2>

        <div className="car-rental">
          <img src={Car} alt="Car Rental" />
          <h3>Car Rental</h3>
        </div>

        <div className="bus">
          <img src={Bus} alt="Bus" />
          <h3>Bus</h3>
        </div>

        <div className="train">
          <img src={Train} alt="Train" />
          <h3>Train</h3>
        </div>

        <div className="plane">
          <img src={Airplane} alt="Plane" />
          <h3>Airplane</h3>
        </div>
      </div>

      <div className="restaurants">
        <h2>Hungry ? Let's Look For Something To Eat !</h2>
        <img src={Restaurant} alt="Restaurant" />
        <p>Click here to see the most popular restaurants around the world !</p>
      </div>

      <div className="footer">
        <p>© Hop Hop Travel 2022</p>
      </div>
    </div>
  );
}

export default App;
