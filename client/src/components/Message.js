// @flow
import React from "react"

// components
import { ScrollView, Text } from "react-native"

// utils
import renderStyle from "../utils/renderStyle"

// theme
import { Metrics, Fonts } from "../themes"

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: Metrics.spacings.section,
  },
  text: {
    fontSize: Fonts.sizes.subtitle,
  },
}

type Props = {|
  +message: string,
|}

export default class Message extends React.PureComponent<Props> {
  render() {
    const { message } = this.props
    return (
      <ScrollView style={renderStyle(styles.container)}>
        <Text style={renderStyle(styles.text)}>{message}</Text>
      </ScrollView>
    )
  }
}
