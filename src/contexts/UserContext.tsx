import { createContext, useContext, useState } from "react"

export type User = {
  name: string
}

export const UserContext = createContext<{
  user: User | null
  setUser: (user: User | null) => void
}>({
  user: null,
  setUser: () => {},
})

export function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User | null>({ name: 'Fiorella' })

  return (
    <UserContext value={{ user, setUser }}>
      {children}
    </UserContext>
  )
}

export function useAuth() {
  const context = useContext(UserContext)
  return context
}
