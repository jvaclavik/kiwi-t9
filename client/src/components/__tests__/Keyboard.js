// @flow
import React from "react"
import renderer from "react-test-renderer"

// components
import Keyboard from "../Keyboard"

test("renders correctly with required props only", () => {
  const tree = renderer
    .create(
      <Keyboard
        onNumberPress={() => null}
        onBackspacePress={() => null}
        onResetPress={() => null}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders correctly with optional props", () => {
  const tree = renderer
    .create(
      <Keyboard
        onNumberPress={() => null}
        onBackspacePress={() => null}
        onResetPress={() => null}
        style={{ backgroundColor: "white" }}
        showBackspace
        showReset
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
