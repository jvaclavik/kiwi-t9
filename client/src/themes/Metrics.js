// @flow
import { Dimensions } from "react-native"

export default {
  buttons: {
    size: 65 + (Dimensions.get("window").width - 320) / 3,
    minSize: 44,
  },
  spacings: {
    small: 5,
    base: 10,
    section: 40,
    double: 20,
    large: 30,
  },
  borderRadius: {
    base: 15,
  },
  borderWidth: 1,
}
