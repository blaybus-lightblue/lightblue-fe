'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  userName: string | null
  login: (name: string) => void
  logout: () => void
}
// TODO: 로그인 api 연결 후 수정 필요
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)

  const login = (name: string) => {
    setIsLoggedIn(true)
    setUserName(name)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserName(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
