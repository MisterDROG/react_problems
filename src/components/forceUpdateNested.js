import {useEffect, memo} from "react"

function ForceUpdateNested(forceUpdateN) {

    useEffect(() => {
        console.log('Nested Update')
    })

    return(
        <>
            <p>Nested Component</p>
        </>
    )
}

export default memo(ForceUpdateNested)
// export default ForceUpdateNested