// @flow
import React from "react"
import { SafeAreaView, View, StyleSheet } from "react-native"
import debounce from "lodash/debounce"

// config
import appConfig from "../config/appConfig"

// components
import { Message, Keyboard, WordList } from "../components"

// styles
import { Colors } from "../themes"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wordList: {
    height: 60,
  },
})

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
      <SafeAreaView style={styles.container}>
        <Message message={message} />
        <View style={styles.wordList}>
          <WordList
            loading={loading}
            onWordPress={this.onWordPress}
            words={wordList}
          />
        </View>
        <Keyboard onNumberPress={this.onNumberPress} />
      </SafeAreaView>
    )
  }
}
