import mapToArray from '../mapToArray'

describe('mapToArray.js', () => {
  it('should correct convert map to array', () => {
    const map = {0: 1, 1: 2}
    expect(mapToArray(map)).toEqual([1, 2])
  })
})
