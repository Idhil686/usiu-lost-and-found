import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Services from './Components/services';
import Footer from './Components/footer';
import Login from './Components/login';
import ContactUs from './Components/ContactUs';
import Dashboard from './Components/Dashboard';
import ReportItem from './Components/ReportItem';
import LostItems from './Components/LostItems';

function App() {
  return (
    <div className="appLayout">
      <Navbar />

      <main className="pageContent">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/AboutUs" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/report" element={<ReportItem />} />
          <Route path="/items" element={<LostItems />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App