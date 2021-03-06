import React, { useEffect, useState } from "react";
import { getPosts } from "../../../services/userService";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";
import Posts from "../posts/Posts";
import Search from "../search/Search";
import Spinner from "../Spinner";
import LocationDiv from "./LocationDiv";
import LocationHeadline from "./LocationHeadline";
import Sort from "./Sort";


const Home = (props) => {
  const location = ["ראשי", 'נדל"ן למכירה'];
  const [showSpinner, setShowSpinner] = useState(false);
  const currentLocation = props.location.pathname;
  return (
    <>
      <Header />
      <SubHeader />
      {showSpinner && <Spinner />}
      <div className="home-page">
        <LocationDiv location={location} />
        <Search />
        <LocationHeadline headline={location[location.length - 1]} />
        <Sort />
        <Posts setShowSpinner={setShowSpinner} currentLocation={currentLocation} />
      </div>
    </>
  );
};

export default Home;
