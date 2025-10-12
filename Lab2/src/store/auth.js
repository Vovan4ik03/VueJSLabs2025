const KEY = 'demo_auth_user'

export function login(email, password, name = 'Demo User') {
  if (!email || !password) return false
  const user = { id: 1, name, email }
  localStorage.setItem(KEY, JSON.stringify(user))
  return true
}

export function logout() {
  localStorage.removeItem(KEY)
}

export function getUser() {
  const raw = localStorage.getItem(KEY)
  return raw ? JSON.parse(raw) : null
}

export function isAuthenticated() {
  return !!getUser()
}
