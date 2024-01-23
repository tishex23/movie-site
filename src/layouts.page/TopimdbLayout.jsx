import { Outlet } from "react-router-dom"

function TopimdbLayout() {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default TopimdbLayout