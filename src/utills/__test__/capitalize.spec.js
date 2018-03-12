import capitalize from '../capitalize'

describe('capitalize.js', () => {
  it('should correct capitalize one word', () => {
    expect(capitalize('test')).toEqual('Test')
  })

  it('should correct capitalize some words', () => {
    expect(capitalize('test test foo bar')).toEqual('Test Test Foo Bar')
  })
})
