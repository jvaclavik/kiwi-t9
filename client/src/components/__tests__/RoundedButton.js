// @flow
import React from "react"
import renderer from "react-test-renderer"

// components
import RoundedButton from "../RoundedButton"

test("renders correctly with required props only", () => {
  const tree = renderer.create(<RoundedButton onPress={() => null} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders correctly with optional props", () => {
  const tree = renderer
    .create(
      <RoundedButton
        value={2}
        characters="abc"
        style={{ borderColor: "white" }}
        valueStyle={{ color: "pink" }}
        onPress={() => null}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
