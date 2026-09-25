import { useEffect, useState, useRef } from "react";


function Stopwatch(){

    const [isRunning, setIsRunnung] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
    
        if(isRunning){
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return () => {
            clearInterval(intervalIDRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunnung(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function reset(){
        setElapsedTime(0);
        setIsRunnung(false);
    }
    function stop(){
        setIsRunnung(false);
    }
    function stopwatchFormat(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }
    return(
        <div className="stopwatch-container">
            <div className="display">{stopwatchFormat()}</div>
            <div className="buttons">
                <button onClick={start} className="start-btn">Start</button>
                <button onClick={reset} className="reset-btn">Reset</button>
                <button onClick={stop} className="stop-btn">Stop</button>
            </div>
        </div>
        
    );
}

export default Stopwatch