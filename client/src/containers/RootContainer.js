// @flow
import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

// components
import { RoundedButton } from '../components'
import { Colors } from '../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

export default class RootContainer extends React.PureComponent<null> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Text!</Text>
        <RoundedButton onPress={() => null}>Button text</RoundedButton>
      </SafeAreaView>
    )
  }
}
