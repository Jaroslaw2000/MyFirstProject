import React from 'react';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Header from "./Header.jsx";
import Information from "./Information.jsx";
import BmiCalculator  from "./BmiCalculator.jsx";

const App = () => {
    return (
            <HashRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Information />} />
                        <Route path='Information' element={<Information />} />
                        <Route path='BmiCalculator' element={<BmiCalculator />} />
                    </Routes>
            </HashRouter>

    );
}

export default App;
