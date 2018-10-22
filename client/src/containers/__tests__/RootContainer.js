// @flow
import React from "react"
import renderer from "react-test-renderer"

// services
import api from "../../services/api"

// components
import RootContainer from "../RootContainer"

test("renders correctly with required props", () => {
  const tree = renderer.create(<RootContainer api={api} />).toJSON()
  expect(tree).toMatchSnapshot()
})
