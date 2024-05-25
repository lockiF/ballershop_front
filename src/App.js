// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from './pages/Catalogue';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout';
import { ShopContextProvider } from './context/ShopContext';
import { FilterProvider } from './FilterContext';
import { AuthProvider } from './AuthContext';
import { SearchProvider } from './SearchContext';
import Help from './components/Help';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import WorkWithUs from './components/WorkWithUs.js';
import About from './components/About.js';
const App = () => {
  return (
    <ShopContextProvider>
      <SearchProvider>
       <FilterProvider>
       <AuthProvider>
      <Routes>
        
        <Route path="/" element={<Layout/>}>
        <Route index element={<Catalogue/>}></Route>
        <Route path="/catalogue" element={<Catalogue/>} ></Route>
        <Route path="/Help" element={<Help/>} ></Route>
        <Route path="/privacy" element={<PrivacyPolicy/>} ></Route>
        <Route path="/work" element={<WorkWithUs/>} ></Route>
        <Route path="/terms" element={<About/>} ></Route>
        <Route path="/product/:productName"  element={<ProductDetail/>} exact >
        </Route>
        </Route>
      </Routes>
      </AuthProvider>
      </FilterProvider>
      </SearchProvider>
      </ShopContextProvider>
  );
};

export default App;
