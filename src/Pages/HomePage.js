import React from "react";
import './HomePage.css';
import Header from '../Components/Header/Header';
import SearchBar from "../Components/SearchBar";
import WebsiteLinks from "../Components/WebsiteLinks/WebsiteLinks";


const HomePage = () => {
    return(
        <div className="background">
            <Header />
            <SearchBar/>
            <WebsiteLinks/>

        </div>
    );
};

export default HomePage;
