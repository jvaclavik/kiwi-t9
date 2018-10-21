// @flow
import React from "react"
import { SafeAreaView, View } from "react-native"
import debounce from "lodash/debounce"

// config
import appConfig from "../config/appConfig"

// components
import { Message, Keyboard, WordList } from "../components"

// utils
import renderStyle from "../utils/renderStyle"

// styles
import { Colors, Metrics } from "../themes"

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wordList: {
    height: 60,
  },
  keyboard: { paddingBottom: Metrics.spacings.large },
}

type Props = {|
  +api: any,
|}

export default class RootContainer extends React.PureComponent<Props> {
  state = {
    input: "",
    message: "",
    wordList: [],
    loading: false,
  }

  debouncedInput = debounce(() => {
    const { input } = this.state
    this.getWordsFromApi(input)
  }, appConfig.onNumberPressDelay)

  getWordsFromApi = input => {
    const { api } = this.props
    this.setState({ loading: true })
    api
      .getWords(input)
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false, wordList: data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  onNumberPress = value => {
    if (value === "0") {
      this.setState(prevState => ({
        input: "",
        wordList: [],
        message: `${prevState.message}${
          prevState.wordList.length > 0 ? prevState.wordList[0] : ""
        } `,
      }))
    } else {
      this.setState(prevState => ({ input: `${prevState.input}${value}` }))
      this.debouncedInput()
    }
  }

  onWordPress = word => {
    this.setState(prevState => ({
      input: "",
      wordList: [],
      message: `${prevState.message}${word} `,
    }))
  }

  render() {
    const { message, wordList, loading } = this.state
    return (
      <SafeAreaView style={renderStyle(styles.container)}>
        <Message message={message} />
        <View style={renderStyle(styles.wordList)}>
          <WordList
            loading={loading}
            onWordPress={this.onWordPress}
            words={wordList}
          />
        </View>
        <Keyboard
          onNumberPress={this.onNumberPress}
          style={renderStyle(styles.keyboard)}
        />
      </SafeAreaView>
    )
  }
}
