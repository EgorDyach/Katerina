import './App.css'
import Header from "./blocks/Header/Header.jsx";
import Main from "./components/Main.jsx";
import Hero from "./blocks/Hero/Hero.jsx";
import AboutUs from "./blocks/AboutUs/AboutUs.jsx";
import Advantages from "./blocks/Advantages/Advantages.jsx";
import Catalog from "./blocks/Catalog/Catalog.jsx";
import Reviews from "./blocks/Reviews/Reviews.jsx";
import {RouterProvider} from "react-router-dom";
import {strOfGoods} from "./goodsContext.js";
import Contacts from "./blocks/Contacts/Contacts.jsx";
function App() {
    
  return (
      <>
        <Header />
          <Main>
              <Hero />
              <AboutUs />
              <Advantages />
              <Catalog />
              <Reviews />
              <Contacts />
          </Main>
      </>
  )
}

export default App
