let users = [
  { id: 1, name: 'DenAdmin', email: 'den@gmail.com' },
  { id: 2, name: 'DevidUser', email: 'Devid@gmail.com' }
]
let reports = [
  { id: 1, title: 'Report admin' },
  { id: 2, title: 'Report user this' }
]

export function fetchUsers() {
  return Promise.resolve([...users])
}

export function fetchUserById(id) {
  const u = users.find(x => x.id === Number(id))
  return Promise.resolve(u ? { ...u } : null)
}

export function fetchReports() {
  return Promise.resolve([...reports])
}
