// @flow
import { StyleValue } from "../types"

const renderStyle = (style: StyleValue, props?: Object) => {
  if (style instanceof Array) {
    return style.reduce((styleSheet, currentStyle) => {
      if (typeof currentStyle === "function") {
        return { ...styleSheet, ...currentStyle(props) }
      }
      return { ...styleSheet, ...currentStyle }
    }, {})
  }
  if (typeof style === "function") {
    return style(props)
  }

  return style
}

export default renderStyle
