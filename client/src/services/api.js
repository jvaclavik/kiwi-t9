// @flow
/* global fetch:false */

import appConfig from "../config/appConfig"

const getWords = input => fetch(`${appConfig.apiUrl}/words/?input=${input}`)

export default { getWords }
