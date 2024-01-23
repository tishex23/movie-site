import { Outlet } from "react-router-dom"

export default function GenreLayout() {
  return (
    <div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

