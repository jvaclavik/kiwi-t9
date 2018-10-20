// @flow
import React from "react"
import { SafeAreaView, View, StyleSheet } from "react-native"

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

export default class RootContainer extends React.PureComponent<null> {
  onNumberPress = number => {
    // @TODO
  }
  onWordPress = word => {
    // @TODO
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Message message="a" />
        <View style={styles.wordList}>
          <WordList
            loading={false}
            onWordPress={this.onWordPress}
            words={["a", "b", "c"]}
          />
        </View>

        <Keyboard onNumberPress={this.onNumberPress} />
      </SafeAreaView>
    )
  }
}
