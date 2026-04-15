import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem('users')
      return savedUsers ? JSON.parse(savedUsers) : []
    } catch {
      return []
    }
  })

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('currentUser')
      return savedUser ? JSON.parse(savedUser) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      return
    }

    localStorage.removeItem('currentUser')
  }, [currentUser])

  const registerUser = ({ username, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const userExists = users.some((user) => user.email === normalizedEmail)

    if (userExists) {
      return { success: false, message: 'User already exists with this email.' }
    }

    const newUser = {
      id: Date.now(),
      username: username.trim(),
      email: normalizedEmail,
      password,
    }

    setUsers((prev) => [...prev, newUser])
    setCurrentUser(newUser)

    return { success: true, user: newUser }
  }

  const loginUser = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const matchedUser = users.find(
      (user) => user.email === normalizedEmail && user.password === password
    )

    if (!matchedUser) {
      return { success: false, message: 'Invalid email or password.' }
    }

    setCurrentUser(matchedUser)
    return { success: true, user: matchedUser }
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
