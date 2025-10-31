import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Order from './pages/Order'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Ads from './pages/Ads'
import Affiliate from './pages/Affiliate'
import Account from './pages/Account'
import AdminPage from './pages/AdminPage'

function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container-r flex items-center justify-between h-16">
        <Link to="/" className="font-bold">HANAN</Link>
        <nav className="flex gap-4 text-sm">
          <Link to="/services">خدمات</Link>
          <Link to="/shop">محصولات</Link>
          <Link to="/blog">بلاگ</Link>
          <Link to="/ads">تبلیغات</Link>
          <Link to="/affiliate">افیلیت</Link>
          <Link to="/order" className="bg-gray-900 text-white px-3 py-1 rounded">ثبت سفارش رایگان</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-10 py-10 text-sm text-gray-500">
      <div className="container-r flex items-center justify-between">
        <span>© {new Date().getFullYear()} HANAN</span>
        <div className="flex gap-3">
          <Link to="/about">درباره ما</Link>
          <Link to="/admin">مدیریت</Link>
          <Link to="/account">حساب کاربری</Link>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="container-r flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
