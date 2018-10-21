// @flow
import React from "react"
import renderer from "react-test-renderer"

// components
import WordList from "../WordList"

test("renders correctly with required props only", () => {
  const tree = renderer
    .create(
      <WordList
        words={["hello", "hola", "ahojky"]}
        loading={false}
        onWordPress={() => null}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders correctly with optional props", () => {
  const tree = renderer
    .create(
      <WordList
        words={["hello", "hola", "ahojky"]}
        loading
        style={{ padding: 10 }}
        onWordPress={() => null}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
