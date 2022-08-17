import { ExternalLink } from "react-feather"

const Link: React.FC<{ href: string; text: string }> = ({ href, text }) => {
    return (
        <a
            target="_blank"
            className="flex items-center justify-center flex items-center border border-solid border-slate-300 px-4 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200"
            href={href}
            rel="noreferrer"
        >
            <ExternalLink className="w-4 h-4" />
            <span>
                To <span className="font-bold uppercase">{text}</span>
            </span>
        </a>
    )
}

const configs = [
    {
        href: "https://kyberswap.dev.kyberengineering.io",
        text: "DEV",
    },
    {
        href: "https://kyberswap.stg.kyberengineering.io/",
        text: "STAGING",
    },
    {
        href: "https://kyberswap.com/",
        text: "PROD",
    },
]

const SubHeader = () => {
    return (
        <div className="w-full flex items-center justify-center gap-x-2">
            {configs.map((config) => (
                <Link key={config.text} href={config.href} text={config.text} />
            ))}
        </div>
    )
}

export default SubHeader
