const ExternalLink: React.FC<{ children: React.ReactNode; href: string }> = ({ href, children }) => {
    return (
        <a
            target="_blank"
            className="flex items-center justify-center flex items-center border border-solid border-slate-300 px-2 py-1 rounded-md gap-x-2 transition-colors [@media(any-hover:hover){&:hover}]:bg-indigo-100 active:bg-indigo-200"
            href={href}
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

export default ExternalLink
