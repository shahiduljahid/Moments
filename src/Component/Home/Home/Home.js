import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Protfolio from '../Protfolio/Protfolio';
import Reviews from '../Reviews/Reviews/Reviews';
import Services from '../Service/Services/Services';

const Home = () => {
    
    return (
        <div>
            <Header></Header>

            <Protfolio></Protfolio>

            <Services showbtn={false}></Services>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;