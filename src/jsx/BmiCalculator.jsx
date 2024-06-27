import { useState, useEffect } from 'react';

const BmiCalculator = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [interpretation, setInterpretation] = useState("");


        const calculateBmi = () => {
            if (height > 0 && weight > 0) {
                const heightInMeter = height / 100
                const bmiValue = weight / (heightInMeter * heightInMeter);
                return bmiValue.toFixed(2)
            }
            return 0;
        }

    const calculateBmiInterpretation = (bmi) => {
        if (bmi === 0) {
            return "Podaj poprawne dane";
        }else if (bmi < 18.5) {
            return "Niedowaga";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Waga prawidłowa";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "Nadwaga";
        } else if (bmi >= 30 && bmi <= 34.9) {
            return "Otyłość I stopnia";
        } else if (bmi >= 35 && bmi <= 39.9) {
            return "Otyłość II stopnia";
        } else if (bmi >= 40) {
            return "Otyłość III stopnia";
        }

    };

    useEffect(() => {
        const newBmi = calculateBmi();
        setBmi(calculateBmi());
        setInterpretation(calculateBmiInterpretation(newBmi))
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
            <div>
                <label>Interpretacja: </label>
                <br />
                <span>{interpretation} </span>

            </div>
        </div>
    );
};

export default BmiCalculator;
