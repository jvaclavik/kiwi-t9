// @flow
import React from "react"
import Expo from "expo"

// services
import createApi from "./src/services/api"

// config
import appConfig from "./src/config/appConfig"

// containers
import RootContainer from "./src/containers/RootContainer"

export default class App extends React.PureComponent<null> {
  render() {
    return <RootContainer api={createApi(fetch, appConfig)} />
  }
}
