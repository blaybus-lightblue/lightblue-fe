'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { AuthActions } from '@/apis/auth.actions'

interface AuthContextType {
  isLogin: boolean
  token: string | null
  loading: boolean
  checkAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = () => {
    const currentToken = AuthActions.getToken()
    const authStatus = AuthActions.isLogin()

    setToken(currentToken)
    setIsLogin(authStatus)
    setLoading(false)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isLogin, token, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
