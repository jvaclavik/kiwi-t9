// @flow
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

// theme
import { Colors, Metrics } from "../themes"
import { StyleValue } from "../types"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 2,
    width: Metrics.buttons.height,
    height: Metrics.buttons.height,
    borderRadius: Metrics.buttons.height / 2,
    justifyContent: "center",
  },
  number: {
    fontSize: 25,
  },
})

type Props = {|
  +onPress: () => void,
  +number: string,
  +characters: string,
  +style: StyleValue,
|}

export default class RoundedButton extends React.PureComponent<Props> {
  render() {
    const { number, characters, onPress, style } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={styles.number}>{number}</Text>
        <Text>{characters}</Text>
      </TouchableOpacity>
    )
  }
}
