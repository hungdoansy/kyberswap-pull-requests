export const getPullRequestURLByID = (id: number | string) => {
    return `https://github.com/KyberNetwork/kyberswap-interface/pull/${id}`
}

export const getPreviewURLByID = (id: number | string) => {
    return `https://kyberswap-interface-${id}.pr.kyberengineering.io/`
}
