// @flow
import React from "react"
import { View, ScrollView } from "react-native"
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
    marginVertical: Metrics.spacings.small,
  },
  spacer: {
    width: Metrics.buttons.size + 2 * Metrics.borderWidth,
    height: Metrics.buttons.size + 2 * Metrics.borderWidth,
  },
  buttonWithoutBorder: {
    borderColor: Colors.background,
  },
  grayText: {
    color: Colors.gray,
  },
}

type Props = {|
  +onNumberPress: string => void,
  +onBackspacePress: () => void,
  +onResetPress: () => void,
  style?: StyleValue,
  showBackspace?: boolean,
  showReset?: boolean,
|}

export default class Keyboard extends React.PureComponent<Props> {
  static defaultProps = {
    style: {},
    showBackspace: false,
    showReset: false,
  }

  renderButton = item => {
    const {
      onNumberPress,
      onBackspacePress,
      showBackspace,
      showReset,
      onResetPress,
    } = this.props
    return (
      <View style={renderStyle(styles.button)} key={shortid.generate()}>
        {item.type === "number" && (
          <RoundedButton
            onPress={() => onNumberPress(item.value)}
            value={item.value}
            characters={item.text}
          />
        )}
        {item.type === "reset" &&
          showReset && (
            <RoundedButton
              onPress={() => onResetPress(item.value)}
              characters={item.text}
              style={styles.buttonWithoutBorder}
              valueStyle={styles.grayText}
            />
          )}
        {item.type === "spacer" && <View style={renderStyle(styles.spacer)} />}
        {item.type === "backspace" &&
          showBackspace && (
            <RoundedButton
              onPress={onBackspacePress}
              value={item.value}
              style={styles.buttonWithoutBorder}
              valueStyle={styles.grayText}
            />
          )}
      </View>
    )
  }

  render() {
    const { style } = this.props
    return (
      <View style={renderStyle([style])}>
        <ScrollView>
          <View style={renderStyle([styles.grid])}>
            {keyboardMap.map(item => this.renderButton(item))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
