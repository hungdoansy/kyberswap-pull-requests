import { useState } from "react"
import { Clipboard, Check } from "react-feather"

type Props = {
    text: string
}

const ClipboardAction: React.FC<Props> = ({ text }) => {
    const [copied, setCopied] = useState(false)

    const handleClick = () => {
        if (copied) {
            return
        }

        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 5_00)
    }

    return (
        <div
            role="button"
            onClick={handleClick}
            className="flex items-center justify-center flex items-center border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200 transition-all"
        >
            {copied ? <Check className="w-4 h-4 text-lime-600" /> : <Clipboard className="w-4 h-4" />}
        </div>
    )
}

export default ClipboardAction
