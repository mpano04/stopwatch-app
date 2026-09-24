

function Stopwatch(){


    function start(){

    }
    function reset(){

    }
    function stop(){

    }
    function stopwatchFormat(){
        return `00:00:00`
    }
    return(
        <>
        <div className="display">{stopwatchFormat()}</div>
        <div className="buttons">
            <button onClick={start} className="start-btn">Start</button>
            <button onClick={reset} className="reset-btn">Reset</button>
            <button onClick={stop} className="stop-btn">Stop</button>
        </div>
        </>
    );
}

export default Stopwatch