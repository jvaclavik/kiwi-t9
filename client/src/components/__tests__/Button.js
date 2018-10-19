import React from 'react'
import renderer from 'react-test-renderer'

// components
import RoundedButton from '../RoundedButton'

test('renders correctly', () => {
  const tree = renderer
    .create(<RoundedButton onPress={() => null}>Ahoj</RoundedButton>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
