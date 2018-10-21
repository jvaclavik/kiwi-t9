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
import { Colors, Metrics } from "../themes"

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
  spacer: {
    width: Metrics.buttons.height + 2 * Metrics.borderWidth,
    height: Metrics.buttons.height + 2 * Metrics.borderWidth,
  },
  backspaceButton: {
    borderColor: Colors.background,
  },
  backSpaceValue: {
    color: Colors.gray,
  },
}

type Props = {|
  +onNumberPress: string => void,
  +onBackspacePress: string => void,
  style?: StyleValue,
  showBackspace?: boolean,
|}

export default class Keyboard extends React.PureComponent<Props> {
  static defaultProps = {
    style: {},
    showBackspace: false,
  }

  renderButton = item => {
    const { onNumberPress, onBackspacePress, showBackspace } = this.props
    return (
      <View style={renderStyle(styles.button)} key={shortid.generate()}>
        {item.type === "number" && (
          <RoundedButton
            onPress={() => onNumberPress(item.value)}
            value={item.value}
            characters={item.text}
          />
        )}
        {item.type === "spacer" && <View style={renderStyle(styles.spacer)} />}
        {item.type === "backspace" &&
          showBackspace && (
            <RoundedButton
              onPress={onBackspacePress}
              value={item.value}
              style={styles.backspaceButton}
              valueStyle={styles.backSpaceValue}
            />
          )}
      </View>
    )
  }

  render() {
    const { style } = this.props
    return (
      <View style={renderStyle([style])}>
        <View style={renderStyle([styles.grid])}>
          {keyboardMap.map(item => this.renderButton(item))}
        </View>
      </View>
    )
  }
}
