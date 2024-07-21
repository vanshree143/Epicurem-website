import React from 'react';
import Cta from './Cta';
import AboutArea from './AboutArea';
import FoodMenu from './FoodMenu';
import Chefs from './Chefs';
import Reservation from './Reservation';
import BlogArea from './BlogArea';
import Footer from './Footer';
import Banner from './Banner';
import Trending from './Trending';
import InfoArea from './InfoArea';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
     <Banner />
     <Cta />
     <AboutArea />
     <Trending />
     <FoodMenu />
     <Chefs/>
     <InfoArea />
     <Testimonial />
     <Reservation />
     <BlogArea />
    <Footer />


    </div>
  )
}

export default Home
