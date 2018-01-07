import reducer from '../comments'
import { loadAPISuccess, loadAPIFail, loadComment } from '../../actions'
import { COMMENT } from '../../actions/constants'

describe('Comment reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}).toJS()).toEqual({})
  })

  it('should handle COMMENT_LOAD_START', () => {
    const id = 2354
    const state = reducer(undefined, loadComment(id))

    expect(state.get(id).get('isLoading')).toBe(true)
  })

  it('should handle COMMENT_LOAD_SUCCESS', () => {
    const type = COMMENT
    const data = {
      by: 'fiiv',
      id: 16045158,
      kids: [
        16045529
      ],
      parent: 16044521,
      text: 'I am not sure if they are solvent or not, but I genuinely believe that they bit off more than they could chew with Bitcoin Cash. The volume of transactions surprised them, I think, and they&#x27;ve been struggling to keep up ever since.<p>Additionally, of course, by adding BCH all of a sudden they may have triggered a bank run on themselves since so many people potentially wanted to move their BCH out or cash out. Not to mention that by nature of the fork, value was created out of the existing BTC holdings so there would not necessarily be fiat funds to back up those amounts, only the BTC amounts.<p>I think the combination of these factors have led to delays and payout limbo.<p>Note: Not blaming BCH for their problems here - perhaps more Coinbase themselves in the way they handled the new asset.',
      time: 1514792622,
      type: 'comment'
    }
    const id = 16045158
    const newsType = null

    const state = reducer(undefined,
      loadAPISuccess(type, data, id, newsType))

    expect(state.get(id).toJS()).toEqual({
      isLoading: false,
      isError: false,
      error: null,
      ...data
    })
  })

  it('should handle COMMENT_LOAD_FAIL', () => {
    const type = COMMENT
    const error = {error: 'Some error'}
    const id = 2345
    const state = reducer(undefined, loadAPIFail(type, error, id))

    expect(state.get(id).get('isError')).toBe(true)
    expect(state.get(id).get('error')).toEqual(error)
  })
})
