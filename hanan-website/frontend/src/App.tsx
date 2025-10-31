import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail"; // Placeholder for now
import Order from "./pages/Order";
import Shop from "./pages/Shop";
// import ProductDetail from "./pages/ProductDetail"; // Placeholder for now
import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost"; // Placeholder for now
// import Ads from "./pages/Ads"; // Placeholder for now
// import Affiliate from "./pages/Affiliate"; // Placeholder for now
// import Account from "./pages/Account"; // Placeholder for now
// import Admin from "./pages/Admin"; // Placeholder for now

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/product/:slug" element={<ProductDetail />} /> */}
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
        {/* <Route path="/ads" element={<Ads />} /> */}
        {/* <Route path="/affiliate" element={<Affiliate />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
