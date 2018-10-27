// @flow
import React from "react"
import renderer from "react-test-renderer"
import fetch from "isomorphic-fetch"

// services
import createApi from "../../services/api"

// config
import appConfig from "../../config/appConfig"

// components
import RootContainer from "../RootContainer"

test("renders correctly with required props", () => {
  const tree = renderer
    .create(<RootContainer api={createApi(fetch, appConfig)} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
