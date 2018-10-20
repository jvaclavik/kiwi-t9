// @flow
import React from "react"
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native"

// external libs
import shortid from "shortid"

// utils
import renderStyle from "../utils/renderStyle"

// theme
import { Colors, Metrics, Fonts } from "../themes"

const styles = {
  scrollView: {
    backgroundColor: Colors.light,
  },
  container: loading => ({
    justifyContent: loading ? "center" : "flex-start",
    flexGrow: 1,
  }),
  wordContainer: {
    borderRightColor: Colors.gray,
    borderRightWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Metrics.spacings.large,
  },
  word: {
    alignItems: "center",
    color: Colors.text,
    fontSize: Fonts.sizes.subtitle,
  },
}

type Props = {|
  +words: Array<string>,
  +onWordPress: string => void,
  +loading: boolean,
|}

export default class WordList extends React.PureComponent<Props> {
  render() {
    const { loading, onWordPress, words } = this.props
    return (
      <ScrollView
        contentContainerStyle={renderStyle(styles.container, loading)}
        horizontal
        style={renderStyle(styles.scrollView)}
      >
        {loading ? (
          <ActivityIndicator size="small" color={Colors.text} />
        ) : (
          words.map(word => (
            <TouchableHighlight
              underlayColor={Colors.gray}
              onPress={() => onWordPress(word)}
              key={shortid.generate()}
            >
              <View style={renderStyle(styles.wordContainer)}>
                <Text style={renderStyle(styles.word)}>{word}</Text>
              </View>
            </TouchableHighlight>
          ))
        )}
      </ScrollView>
    )
  }
}
