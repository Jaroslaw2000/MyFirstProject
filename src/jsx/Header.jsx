import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header >
            <nav className="nav">
                <ul>
                    <li>< Link to="/">Home</Link></li>
                    <li>< Link to="/Information">Information</Link></li>
                    <li>< Link to="/BmiCalculator">BMI Calculator</Link></li>
                    <li>< Link to="/ProductCalories">Products Calories</Link></li>
                    <li>< Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header