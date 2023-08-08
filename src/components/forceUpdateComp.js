import { useEffect, useState, useRef, useCallback } from "react"
import ForceUpdateNested from "./forceUpdateNested"

function ForceComp() {
    const [upd, setUpd] = useState(false)
    const updFlagRef = useRef(false)
    const updCountRef = useRef(0)

    const forceUpdateN = useCallback(() => {
        setUpd(prev => !prev)
    }, [])

    // const forceUpdateN = useCallback(() => {
    //     updFlag.current = !updFlag.current
    //     setUpd(!updFlag.current)
    // }, [])

    useEffect(() => {
        console.log('Updated')
        updCountRef.current = updCountRef.current + 1
    })

    return (
        <>
            <p style={{fontWeight: 'bold', color: 'blue'}}>FORCE UPDATE TASK</p>
            <p>Amount of updates: {updCountRef.current}</p>
            <button onClick={forceUpdateN}>Update</button>
            <ForceUpdateNested forceUpdateN={forceUpdateN}/>
        </>
    )
}

export default ForceComp