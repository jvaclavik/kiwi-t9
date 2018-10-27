// @flow
import React from "react"
import { SafeAreaView } from "react-native"
import debounce from "lodash/debounce"
import DropdownAlert from "react-native-dropdownalert"

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
        if (data.errors && data.errors.length > 0) {
          this.setState({ loading: false })
          this.dropdown.alertWithType("error", "Error", data.errors.join("\n"))
        } else {
          this.setState({ loading: false, wordList: data })
        }
      })
      .catch(() => {
        this.setState({ loading: false })
        this.dropdown.alertWithType("error", "Error", "Can't connect to server")
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
        <DropdownAlert
          ref={ref => {
            this.dropdown = ref
          }}
        />
      </SafeAreaView>
    )
  }
}
