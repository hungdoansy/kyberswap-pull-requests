import { Book, ExternalLink } from "react-feather"
import { getPreviewURLByID, getPullRequestURLByID } from "../../utils"

type Props = {
    id: number
    title: string
}

const Link: React.FC<{ children: React.ReactNode; href: string }> = ({ href, children }) => {
    return (
        <a
            target="_blank"
            className="flex items-center justify-center flex items-center border border-solid border-slate-300 px-4 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200"
            href={href}
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

const PullRequest: React.FC<Props> = ({ id, title }) => {
    return (
        <div className="border-2 border-solid border-slate-700 rounded-md flex flex-col w-full p-4 gap-y-2">
            <div className="w-full inline-flex items-center gap-x-2">
                <span className="flex-0 text-slate-400">#{id}</span>
                <span className="flex-0">-</span>
                <span className="flex-auto truncate font-bold">{title}</span>
            </div>

            <div className="border-t" />

            <div className="w-full flex gap-x-4">
                <Link href={getPullRequestURLByID(id)}>
                    <Book className="w-4 h-4" />
                    <span>To PR</span>
                </Link>

                <Link href={getPreviewURLByID(id)}>
                    <ExternalLink className="w-4 h-4" />
                    <span>To Preview</span>
                </Link>
            </div>
        </div>
    )
}

export default PullRequest
