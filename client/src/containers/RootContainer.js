// @flow
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

// components
import { Message, Keyboard } from "../components"
import { Colors } from "../themes"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

export default class RootContainer extends React.PureComponent<null> {
  onNumberPress = number => {
    // @TODO
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Message message="ahoj" />
        <Keyboard onNumberPress={number => this.onNumberPress(number)} />
      </SafeAreaView>
    )
  }
}
