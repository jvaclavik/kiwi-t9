// @flow
import React from "react"
import Expo from "expo"

// services
import api from "./src/services/api"

// containers
import RootContainer from "./src/containers/RootContainer"

export default class App extends React.PureComponent<null> {
  render() {
    return <RootContainer api={api} />
  }
}
