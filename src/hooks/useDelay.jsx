import { useState, useEffect } from "react";

export default function useDelay ({delay}) {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true)
        })

        return () => clearTimeout(timer)
    }, [delay])

    return isReady
}