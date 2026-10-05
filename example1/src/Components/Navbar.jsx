
import logo from '../assets/logo.png';
import{Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navigationBar">
            <div>
                <img src={logo} alt="logo image" className="logoTop"/>  
            </div>

                <ul className="Menu">
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/Aboutus">About us</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/report">Report Item</Link></li>
                   
                    
                    
                </ul>

        </nav>
    );
}