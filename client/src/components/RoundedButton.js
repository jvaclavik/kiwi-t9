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
    borderWidth: Metrics.borderWidth,
    width: Metrics.buttons.height,
    height: Metrics.buttons.height,
    borderRadius: Metrics.buttons.height / 2,
    justifyContent: "center",
  },
  value: {
    fontSize: Fonts.sizes.huge,
    fontWeight: "200",
  },
  text: {
    fontSize: Fonts.sizes.small,
  },
}

type Props = {|
  +onPress: () => void,
  value?: string,
  characters?: string,
  style?: StyleValue,
  valueStyle?: StyleValue,
|}

export default class RoundedButton extends React.PureComponent<Props> {
  static defaultProps = {
    value: null,
    characters: null,
    style: {},
    valueStyle: {},
  }

  render() {
    const { value, characters, onPress, style, valueStyle } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={renderStyle([styles.button, style])}
      >
        {value && (
          <Text style={renderStyle([styles.value, valueStyle])}>{value}</Text>
        )}
        {characters && (
          <Text style={renderStyle(styles.text)}>
            {characters.toUpperCase()}
          </Text>
        )}
      </TouchableOpacity>
    )
  }
}
