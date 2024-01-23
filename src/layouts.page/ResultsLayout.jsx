import { Outlet } from "react-router-dom"

function ResultsLayout() {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default ResultsLayout