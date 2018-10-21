// @flow
export type StyleValue = { [key: string]: Object } | number | false | null

export type Api = {
  getWords: string => Promise<any>,
}
