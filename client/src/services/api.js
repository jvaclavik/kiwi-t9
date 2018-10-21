import appConfig from "../config/appConfig"

const getWords = input => {
  return fetch(`${appConfig.apiUrl}/words/?input=${input}`)
}

export default { getWords }
