import {
    HashRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Header from "./Header.jsx";
import Information from "./Information.jsx";
import BmiCalculator  from "./BmiCalculator.jsx";
import ProductCalories from "./ProductCalories.jsx";

const App = () => {
    return (
            <HashRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Information />} />
                        <Route path='Information' element={<Information />} />
                        <Route path='BmiCalculator' element={<BmiCalculator />} />
                        <Route path='/ProductCalories' element={<ProductCalories />} />
                    </Routes>
            </HashRouter>

    );
}

export default App;
