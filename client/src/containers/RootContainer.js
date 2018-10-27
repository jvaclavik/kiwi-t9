// @flow
import React from "react"
import { SafeAreaView } from "react-native"
import debounce from "lodash/debounce"

// config
import appConfig from "../config/appConfig"

// components
import { Message, Keyboard, WordList, Title } from "../components"

// utils
import renderStyle from "../utils/renderStyle"

// styles
import { Colors } from "../themes"

// types
import { Api } from "../types"

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    height: 40,
  },
  wordList: {
    height: 44,
  },
  message: {
    flex: 1,
  },
  keyboard: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
}

type Props = {|
  +api: Api,
|}

const defaultState = {
  input: "",
  message: "",
  wordList: [],
  loading: false,
}

export default class RootContainer extends React.PureComponent<Props> {
  state = defaultState

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
        console.log(error) // @TODO handle error
      })
  }

  onBackspacePress = () => {
    const { input } = this.state
    if (input.length > 1) {
      this.setState(prevState => ({
        input: prevState.input.slice(0, -1),
      }))
      this.debouncedInput()
    } else {
      this.setState({
        input: "",
        wordList: [],
      })
    }
  }

  onResetPress = () => {
    this.setState(defaultState)
  }

  onNumberPress = value => {
    switch (value) {
      case "0":
        this.setState(prevState => ({
          input: "",
          wordList: [],
          message: `${prevState.message}${
            prevState.wordList.length > 0 ? prevState.wordList[0] : ""
          } `,
        }))
        break
      case "1":
        break
      default:
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
    const { message, wordList, loading, input } = this.state
    return (
      <SafeAreaView style={renderStyle(styles.container)}>
        <Title style={renderStyle(styles.title)}>Kiwi T9</Title>
        <Message style={renderStyle(styles.message)} message={message} />
        <WordList
          loading={loading}
          onWordPress={this.onWordPress}
          words={wordList}
          style={renderStyle(styles.wordList)}
        />
        <Keyboard
          showReset={message || input}
          showBackspace={input}
          onNumberPress={this.onNumberPress}
          onBackspacePress={this.onBackspacePress}
          onResetPress={this.onResetPress}
          style={renderStyle(styles.keyboard)}
        />
      </SafeAreaView>
    )
  }
}
