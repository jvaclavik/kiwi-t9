// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Expo from 'expo'

// containers
import RootContainer from './src/containers/RootContainer'

export default class App extends React.PureComponent<null> {
  render() {
    return <RootContainer />
  }
}
  