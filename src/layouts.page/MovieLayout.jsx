import { Outlet } from "react-router-dom"

function MovieLayout() {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MovieLayout