import React, { useState, useEffect} from 'react';
import '../Timer/Timer.css';

const Timer = () => {

// The following code creates a counter that counts down from 20    
const [timer, setTimer] = useState(20);

useEffect(() => {
    const counter = 
        timer > 0  && setInterval(() => setTimer(timer -1), 1000);
        return () => clearInterval(counter);
}, [timer]);


//Return contains the html element that are shown in the app. 
//The p element shows the decreasing value gained from the functionality above
    return (
        <div className="timerContainer">
            <p>{timer}</p>
        </div>
    );
};

export default Timer;
