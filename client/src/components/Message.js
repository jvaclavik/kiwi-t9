// @flow
import React from "react"

// components
import { ScrollView, StyleSheet, Text } from "react-native"

// theme
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.spacings.section,
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
        <Text>{message}</Text>
      </ScrollView>
    )
  }
}
