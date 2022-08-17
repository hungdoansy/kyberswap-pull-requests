import PullRequest from "./components/PullRequest"
import SubHeader from "./components/SubHeader"
import useKyberPullRequests from "./useKyberPullRequests"

function App() {
    const { pulls, isLoading } = useKyberPullRequests()

    return (
        <div className="w-full sm:w-120 flex flex-col gap-5 p-4">
            <span className="text-center text-2xl">KyberSwap Interface Open Pulls</span>

            <SubHeader />

            {isLoading ? (
                <span className="text-center">is loading...</span>
            ) : (
                pulls.map((pull) => <PullRequest key={pull.id} id={pull.id} title={pull.title} />)
            )}
        </div>
    )
}

export default App
