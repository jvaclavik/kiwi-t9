// @flow
import React from "react"

// components
import { ScrollView, StyleSheet, Text } from "react-native"

// theme
import { Metrics, Fonts } from "../themes"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.spacings.section,
  },
  text: {
    fontSize: Fonts.sizes.subtitle,
  },
})

type Props = {|
  +message: string,
|}

export default class Message extends React.PureComponent<Props> {
  render() {
    const { message } = this.props
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{message}</Text>
      </ScrollView>
    )
  }
}
