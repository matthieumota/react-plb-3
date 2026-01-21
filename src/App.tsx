import { NavLink, Outlet } from "react-router"
import { useAuth } from "./contexts/UserContext"
import { useThemeStore } from "./stores/useThemeStore"
import Button from "./Button"

function App() {
  const { user, setUser } = useAuth()
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
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

          {user && (
            <div>
              <h1>Bonjour {user.name}</h1>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => setUser(null)}
              >
                Logout
              </button>
            </div>
          ) || (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => setUser({ name: 'Fiorella' })}
            >
              Login
            </button>
          )}

          <Button onClick={toggleTheme}>
            {theme === 'light' ? 'dark' : 'light'} theme
          </Button>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default App
