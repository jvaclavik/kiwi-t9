// @flow
import React from "react"
import { View, StyleSheet } from "react-native"
import shortid from "shortid"

// components
import { RoundedButton } from "."

// utils
import keyboardMap from "../utils/keyboardMap"

// theme
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: Metrics.spacings.large,
  },
  button: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Metrics.spacings.base,
  },
})

type Props = {|
  onNumberPress: string => void,
|}

export default class Keyboard extends React.PureComponent<Props> {
  render() {
    const { onNumberPress } = this.props
    return (
      <View style={styles.grid}>
        {keyboardMap.map(item => (
          <View style={styles.button} key={shortid.generate()}>
            <RoundedButton
              onPress={() => onNumberPress(item.number)}
              number={item.number}
              characters={item.text}
            />
          </View>
        ))}
      </View>
    )
  }
}
