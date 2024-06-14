import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>< Link to="/">Home</Link></li>
                    <li>< Link to="/Information">information</Link></li>
                    <li>< Link to="/BmiCalculator">BMI Calculator</Link></li>
                    <li>< Link to="/Products-Calories">Products Calories</Link></li>
                    <li>< Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header