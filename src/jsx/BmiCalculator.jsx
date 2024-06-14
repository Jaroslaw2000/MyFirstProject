import React, { useState, useEffect } from 'react';

const BmiCalculator = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);


        const calculateBmi = () => {
            if (height > 0 && weight > 0) {
                const heightInMeter = height / 100
                const bmiValue = weight / heightInMeter * heightInMeter;
                return bmiValue.toFixed(2)
            }
        }


    useEffect(() => {
        setBmi(calculateBmi);
    },[height,weight]);


    const handleHeightChange = (e) => {
            setHeight(parseFloat(e.target.value))
    }

    const handleWeightChange = (e) => {
        setWeight(parseFloat(e.target.value))
    }

    return (
        <div className="bmi-calculator">
            <h2>BMI Calculator</h2>
            <div>
                <label>Weight (kg): </label>
                <input type="number" value={weight} onChange={handleWeightChange} />
            </div>
            <div>
                <label>Height (cm): </label>
                <input type="number" value={height} onChange={handleHeightChange} />
            </div>
            <div>
                <label>BMI: </label>
                <span>{bmi}</span>
            </div>
        </div>
    );
};

export default BmiCalculator;
