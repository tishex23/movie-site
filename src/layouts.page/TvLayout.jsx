import { Outlet } from "react-router-dom"

function TvLayout() {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default TvLayout