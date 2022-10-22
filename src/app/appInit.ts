export const appInit = () => {
  const existingOrg = window.localStorage.getItem('org')

  if (!existingOrg) {
    return false
  } else if (existingOrg) {
    return existingOrg
  }
}
