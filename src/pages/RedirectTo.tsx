import { useRef } from "react"
import { useParams, Navigate } from "react-router-dom"
import { getPreviewURLByID, getPullRequestURLByID } from "../utils"

type Props = {
    toPreview?: boolean
}

const RedirectTo: React.FC<Props> = ({ toPreview }) => {
    const params = useParams()
    const timeOutRef = useRef<ReturnType<typeof setTimeout>>()
    const prID = params.prID

    if (!prID) {
        return <Navigate to="/" />
    }

    const url = toPreview ? getPreviewURLByID(prID) : getPullRequestURLByID(prID)
    if (!timeOutRef.current) {
        timeOutRef.current = setTimeout(() => {
            window.location.href = url
        }, 1_000)
    }

    return (
        <div className="w-full flex flex-col gap-5 p-4">
            <div className="text-center text-2xl">
                Redirecting to{" "}
                <a className="text-blue-600 visited:text-purple-600" href={url} target="_blank" rel="noreferrer">
                    {url}
                </a>
                <span className="ml-4 inline-flex relative h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                </span>
            </div>
        </div>
    )
}

export default RedirectTo
