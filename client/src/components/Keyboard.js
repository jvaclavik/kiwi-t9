// @flow
import React from "react"
import { View } from "react-native"
import shortid from "shortid"

// components
import { RoundedButton } from "."

// utils
import keyboardMap from "../utils/keyboardMap"
import renderStyle from "../utils/renderStyle"

// theme
import { Metrics } from "../themes"

const styles = {
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: Metrics.spacings.large,
    marginVertical: Metrics.spacings.double,
  },
  button: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Metrics.spacings.base,
  },
}

type Props = {|
  +onNumberPress: string => void,
  style?: StyleValue,
|}

export default class Keyboard extends React.PureComponent<Props> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { onNumberPress, style } = this.props
    return (
      <View style={renderStyle([styles.grid, style])}>
        {keyboardMap.map(item => (
          <View style={renderStyle(styles.button)} key={shortid.generate()}>
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
