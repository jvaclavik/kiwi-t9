// @flow
import React from "react"
import renderer from "react-test-renderer"

// components
import Title from "../Title"

test("renders correctly with required props only", () => {
  const tree = renderer.create(<Title>Title</Title>).toJSON()
  expect(tree).toMatchSnapshot()
})

test("renders correctly with optional props", () => {
  const tree = renderer
    .create(<Title style={{ backgroundColor: "white" }}>Title</Title>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
