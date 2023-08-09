import { useState, useEffect, useRef} from "react"

function Incrementer() {
    const [count, setCount] = useState(0)
    const [countN, setCountN] = useState(0)
    const [timer, setTimer] = useState('')
    const [timerFlag, setTimerFlag] = useState(false)

    function increment() {
        setCount(count+1)
    }

    function decrement() {
        setCount(count-1)
    }

    function timerStart() {
        setTimerFlag(!timerFlag)
    }

    useEffect(() => {
        if (timerFlag) {
            setTimer(setInterval(() => {
                setCountN(prev => prev+1)
            }, 1000))
        } else {
            clearInterval(timer)
        }

    }, [timerFlag])


    return (
        <>
            <p style={{fontWeight: 'bold', color: 'blue', marginTop: '30px'}}>INCREMENTER TASK</p>
            <div>{countN}</div>
            <button onClick={timerStart}>timerStart</button>
            <div>{count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}

export default Incrementer