import { useEffect, useState, useRef, useCallback } from "react"
import ForceUpdateNested from "./forceUpdateNested"

function ForceComp() {
    const [upd, setUpd] = useState(false)
    const updFlag = useRef(false)
    const updRef = useRef(0)

    // const forceUpdateN = useCallback(() => {
    //     setUpd(prev => !prev)
    // }, [])

    const forceUpdateN = useCallback(() => {
        updFlag.current = !updFlag.current
        setUpd(!updFlag.current)
    }, [])

    useEffect(() => {
        console.log('Updated')
        updRef.current = updRef.current + 1
    })

    return (
        <>
        <p>Amount of upDates: {updRef.current}</p>
        <button onClick={forceUpdateN}>Update</button>
        <ForceUpdateNested forceUpdateN={forceUpdateN}/>
        </>
    )
}

export default ForceComp