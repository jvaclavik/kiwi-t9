// @flow
import React from "react"

// components
import { Text, View } from "react-native"

// utils
import renderStyle from "../utils/renderStyle"

// theme
import { Metrics, Fonts, Colors } from "../themes"

const styles = {
  title: {
    fontSize: Fonts.sizes.huge,
    fontWeight: "900",
    color: Colors.text,
  },
  titleContainer: {
    marginHorizontal: Metrics.spacings.section,
    marginTop: Metrics.spacings.large,
    marginBottom: Metrics.spacings.base,
  },
}

type Props = {|
  +children: string,
  style?: StyleValue,
|}

export default class Title extends React.PureComponent<Props> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { children, style } = this.props
    return (
      <View style={renderStyle([styles.titleContainer, style])}>
        <Text style={renderStyle(styles.title)}>{children}</Text>
      </View>
    )
  }
}
