import { useState, useCallback } from "react"

function useBoolean(initVal) {
    const [bolean, setBolean] = useState(initVal)

    const toggleVisbility = useCallback(() => {
        setBolean(prev => !prev)
    }, [])
    
    return [bolean, toggleVisbility]
}

function HookBoleanComp() {

    const [visible, toggleVisbility] = useBoolean(false)

    return (
        <>
            <p style={{fontWeight: 'bold', color: 'blue', marginTop: '30px'}}>HOOK-BOLEAN TASK</p>
            <button onClick={toggleVisbility}>Toggle Visibility</button>
            {visible && <p>Text is Visible</p>}
        </>
    )
}

export default HookBoleanComp