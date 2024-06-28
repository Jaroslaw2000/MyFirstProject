import  { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header>
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Information">Information</Link></li>
                    <li><Link to="/BmiCalculator">BMI Calculator</Link></li>
                    <li><Link to="/ProductCalories">Products Calories</Link></li>
                </ul>
                <button className="menu-btn" onClick={toggleSidebar}>
                    Menu
                </button>
                <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <h1 className="menu-btn" onClick={toggleSidebar}>Menu</h1>
                    <ul className="sidebar-menu-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Information">Information</Link></li>
                        <li><Link to="/BmiCalculator">BMI Calculator</Link></li>
                        <li><Link to="/ProductCalories">Products Calories</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Header;
