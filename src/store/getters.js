
const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  refreshToken: state => state.user.refreshToken,
  name: state => state.user.user.fullName
}
export default getters
