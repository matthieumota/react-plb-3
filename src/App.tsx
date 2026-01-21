import { NavLink, Outlet } from "react-router"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <nav className="flex gap-4">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">A propos</NavLink>
        </nav>

        <Outlet />
      </div>
    </div>
  )
}

export default App
