// @flow

export default (fetch, appConfig) => ({
  getWords: input => fetch(`${appConfig.apiUrl}/words/?input=${input}`),
})
