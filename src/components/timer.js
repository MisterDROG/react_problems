import { useState } from 'react';
// import { useEffect } from 'react';

function Timer() {
    const [sec, setSec] = useState(0)
    const [timer, setTimer] = useState()

    // useEffect(() => {
    //     setInterval(() => {
    //         // setSec((prev) => prev+=0.5)
    //         setSec(sec+1)
    //     }, 1000)
    // },[])

    function timerHandlerStart() {
        setTimer(setInterval(() => {
            setSec((prev) => prev+=1)
        }, 1000))
    }

    function timerHandlerEnd() {
        clearInterval(timer)
    }

    return (
        <div>
            <p style={{fontWeight: 'bold', color: 'blue'}}>TIMER TASK</p>
            <p>{sec}</p>
            <button onClick={timerHandlerStart}>Start</button>
            <button onClick={timerHandlerEnd}>End</button>
        </div>
    )
}

export default Timer