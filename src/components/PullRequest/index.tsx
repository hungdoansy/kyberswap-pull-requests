import { Globe, GitHub } from "react-feather"

import { getPreviewURLByID, getPullRequestURLByID, getShortPreviewURLByID } from "../../utils"
import ClipboardAction from "../ClipboardAction"
import ExternalLink from "../Link"

type Props = {
    id: number
    title: string
}

const PullRequest: React.FC<Props> = ({ id, title }) => {
    return (
        <div className="border-2 border-solid border-slate-700 rounded-md flex flex-col w-full p-4 gap-y-2">
            <div className="w-full inline-flex items-center gap-x-2">
                <span className="flex-0 text-slate-400">#{id}</span>
                <span className="flex-0">-</span>
                <span className="flex-auto font-bold">{title}</span>
            </div>

            <div className="border-t" />

            <div className="w-full flex gap-x-4 justify-between">
                <div className="flex items-center gap-x-2">
                    <span>PR</span>
                    <ExternalLink href={getPullRequestURLByID(id)}>
                        <GitHub className="w-4 h-4" />
                    </ExternalLink>
                    <ClipboardAction text={getPullRequestURLByID(id)} />
                </div>

                <div className="flex items-center gap-x-2">
                    <span>Preview</span>
                    <ExternalLink href={getPreviewURLByID(id)}>
                        <Globe className="w-4 h-4" />
                    </ExternalLink>
                    <ClipboardAction text={getShortPreviewURLByID(id)} />
                </div>
            </div>
        </div>
    )
}

export default PullRequest
