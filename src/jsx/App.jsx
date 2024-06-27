import {
    HashRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Header from "./Header.jsx";
import Information from "./Information.jsx";
import BmiCalculator  from "./BmiCalculator.jsx";
import ProductCalories from "./ProductCalories.jsx";
import Home from "./Home.jsx";

const App = () => {
    return (
            <HashRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='Information' element={<Information />} />
                        <Route path='BmiCalculator' element={<BmiCalculator />} />
                        <Route path='/ProductCalories' element={<ProductCalories />} />
                    </Routes>
            </HashRouter>

    );
}

export default App;
