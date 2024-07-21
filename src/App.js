// import logo from './logo.svg';
import './App.css';
import './Blog.css';
import './Pages.css';
import './Shop.css';
import BlogDetails from './component/BlogDetails';
import BlogGridOne from './component/BlogGridOne';
import BlogGridTwo from './component/BlogGridTwo';
import BlogStandard from './component/BlogStandard';
// import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Home2 from './component/Home2';
import Home3 from './component/Home3';
import { Route, Routes } from 'react-router-dom';
import PagesAbout from './component/PagesAbout';
import PageChefs from './component/PageChefs';
import PageReservation  from './component/pageReservation';

import PageFaq from './component/PageFaq';
import FoodMenu1 from './component/FoodMenu1';
import FoodMenu2 from './component/FoodMenu2';
import Contactone from './component/Contactone';
import ContactTwo from './component/ContactTwo';
import PizzaHome from './component/PizzaHome';
import CoffeeHome from './component/CoffeeHome';
import ShopHome from './component/ShopHome';
import ShopDetails from './component/ShopDetails';
import ShopDetailsCoffee from './component/ShopDetailsCoffee';
import ShopCart from './component/ShopCart';
import ShopCheckout from './component/ShopCheckout';


function App() {
  return (
    <>
      <Header />
    
      <Routes>
        <Route path='/' element={<PizzaHome/>}></Route>
        <Route path='/CoffeeHome' element={<CoffeeHome/>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Home2' element={<Home2 />}></Route>
        <Route path='/Home3' element={<Home3 />}></Route>
        <Route path='/ShopHome' element={<ShopHome  mainTitle={`Shop`} />}></Route>
        <Route path='/ShopDetails' element={<ShopDetails mainTitle={`Shop Details`}/>}></Route>
        <Route path='/ShopDetailsCoffee' element={<ShopDetailsCoffee  mainTitle={`Shop Details`}/>}></Route>
        <Route path='/ShopCart' element={<ShopCart mainTitle={`Cart`}/>}></Route>
        <Route path='/ShopCheckout' element={<ShopCheckout mainTitle={`Checkout`}/>}></Route>
        <Route path='/BlogGridOne' element={<BlogGridOne  mainTitle={`Blog`} />}></Route>
        <Route path='/BlogGridTwo' element={<BlogGridTwo mainTitle={`Blog`} />}></Route>
        <Route path='/BlogStandard' element={<BlogStandard mainTitle={`Food Blog Standard`} />}></Route>
        <Route path='/BlogDetails' element={<BlogDetails mainTitle={`Blog Details`} />}></Route>
        <Route path='/PagesAbout' element={<PagesAbout mainTitle={`Abuot Us`} />}></Route>
        <Route path='/PageChefs' element={<PageChefs mainTitle={`Chefs`} />}></Route>
        <Route path='/PageFaq' element={<PageFaq mainTitle={`FAQ`} />}></Route>
        <Route path='/PageReservation' element={<PageReservation mainTitle={`Reservation`}/>}></Route>
        <Route path='/FoodMenu1' element={<FoodMenu1 mainTitle={`FoodMenu 01`}/>}></Route>
        <Route path='/FoodMenu2' element={<FoodMenu2 mainTitle={`FoodMenu 02`}/>}></Route>
        <Route path='/Contactone' element={<Contactone mainTitle={`Contact Us`} />}></Route>
        <Route path='/ContactTwo' element={<ContactTwo mainTitle={`Contact Us`} />}></Route>
      
      </Routes>
    </>
  );
}

export default App;
