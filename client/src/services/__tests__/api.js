// @flow
import fetch from "isomorphic-fetch"
import createApi from "../api"

// mocks
import apiProperInputMock from "../__mocks__/apiProperInput"
import apiWrongInputMock from "../__mocks__/apiWrongInput"
import apiNoInputMock from "../__mocks__/apiNoInput"

// config
import appConfig from "../../config/appConfig"

const testApi = (input, expectedOutput) =>
  createApi(fetch, appConfig)
    .getWords(input)
    .then(response => response.json())
    .then(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(expectedOutput)
    })

describe("Words API", () => {
  it("get proper data from API", () =>
    testApi(apiProperInputMock.input, apiProperInputMock.expectedOutput))
  it("get proper error message for wrong input", () =>
    testApi(apiWrongInputMock.input, apiWrongInputMock.expectedOutput))
  it("get proper error message for no input", () =>
    testApi(apiNoInputMock.input, apiNoInputMock.expectedOutput))
})
