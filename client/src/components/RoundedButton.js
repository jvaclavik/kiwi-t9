// @flow
import React from "react"
import { Text, TouchableOpacity } from "react-native"

// theme
import { Colors, Metrics, Fonts } from "../themes"

// utils
import renderStyle from "../utils/renderStyle"

// types
import { StyleValue } from "../types"

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 1,
    width: Metrics.buttons.height,
    height: Metrics.buttons.height,
    borderRadius: Metrics.buttons.height / 2,
    justifyContent: "center",
  },
  number: {
    fontSize: Fonts.sizes.huge,
    fontWeight: "200",
  },
  text: {
    fontSize: Fonts.sizes.small,
  },
}

type Props = {|
  +onPress: () => void,
  +number: string,
  +characters: string,
  style?: StyleValue,
|}

export default class RoundedButton extends React.PureComponent<Props> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { number, characters, onPress, style } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={renderStyle([styles.button, style])}
      >
        <Text style={renderStyle(styles.number)}>{number}</Text>
        <Text style={renderStyle(styles.text)}>{characters.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
