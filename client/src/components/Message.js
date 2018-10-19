// @flow
import React from "react"
import { View, StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

type Props = {|
  +message: string,
|}

export default class Message extends React.PureComponent<Props> {
  render() {
    const { message } = this.props
    return (
      <View style={styles.container}>
        <Text>{message}</Text>
      </View>
    )
  }
}
