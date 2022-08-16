import { useEffect, useRef, useState } from "react"

type Pull = {
    id: number
    title: string
}

const useKyberPullRequests = () => {
    const [pulls, setPulls] = useState<Pull[]>([])
    const [isLoading, setLoading] = useState(false)
    const intervalRef = useRef<number>()
    const isLoadingRef = useRef(isLoading)

    isLoadingRef.current = isLoading
    useEffect(() => {
        const runner = async () => {
            if (isLoadingRef.current) {
                return
            }

            setLoading(true)

            try {
                const resp = await fetch(
                    "https://api.github.com/repos/KyberNetwork/kyberswap-interface/pulls?state=open"
                ).then((resp) => resp.json())

                setPulls(
                    resp.map((pull: any) => ({
                        id: pull.number,
                        title: pull.title,
                    }))
                )
            } catch (e) {
                setPulls([])
            }

            setLoading(false)
        }

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        runner()
        intervalRef.current = setInterval(runner, 60_000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return {
        pulls,
        isLoading,
    }
}

export default useKyberPullRequests
