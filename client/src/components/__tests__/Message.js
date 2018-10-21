// @flow
import React from "react"
import renderer from "react-test-renderer"

// components
import Message from "../Message"

test("renders correctly with required props only", () => {
  const tree = renderer.create(<Message message="ahojky" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders correctly with optional props", () => {
  const tree = renderer
    .create(<Message message="ahojky" style={{ backgroundColor: "white" }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
