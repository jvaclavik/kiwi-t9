// @flow
import React from "react"

// components
import { ScrollView, Text, View } from "react-native"

// utils
import renderStyle from "../utils/renderStyle"

// theme
import { Metrics, Fonts, Colors } from "../themes"

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: Metrics.spacings.section,
  },
  text: {
    fontSize: Fonts.sizes.subtitle,
  },
  placeholder: {
    fontSize: Fonts.sizes.huge,
    fontWeight: "100",
    color: Colors.gray,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}

type Props = {|
  +message: string,
  style?: StyleValue,
|}

export default class Message extends React.PureComponent<Props> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { message, style } = this.props
    return (
      <View style={renderStyle(style)}>
        <ScrollView contentContainerStyle={renderStyle(styles.container)}>
          {message ? (
            <Text style={renderStyle(styles.text)}>{message}</Text>
          ) : (
            <View style={renderStyle(styles.placeholderContainer)}>
              <Text style={renderStyle(styles.placeholder)}>
                Type something
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }
}
