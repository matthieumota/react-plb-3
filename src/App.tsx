import { NavLink, Outlet } from "react-router"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-blue-500 text-white' : ''}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-blue-500 text-white' : ''}`
            }
          >
            A propos
          </NavLink>
        </nav>

        <Outlet />
      </div>
    </div>
  )
}

export default App
