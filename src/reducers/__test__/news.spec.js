import reducer from '../news'
import {
  loadNews,
  loadNewsItem,
  loadAPISuccess,
  loadAPIFail,
  loadMoreNews,
  setNewsCurrentType
} from '../../actions'
import {
  ASKSTORIES, BESTSTORIES,
  JOBSTORIES, NEWSTORIES,
  SHOWSTORIES, TOPSTORIES
} from '../../entities/constants'
import { NEWS, NEWS_ITEM } from '../../actions/constants'
import {
  INITIAL_COUNT_TO_DISPLAY,
  LOAD_MORE_COUNT
} from '../../utills/constants'

describe('News reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      errors: {},
      items: {},
      countToDisplay: {
        [TOPSTORIES]: INITIAL_COUNT_TO_DISPLAY,
        [NEWSTORIES]: INITIAL_COUNT_TO_DISPLAY,
        [BESTSTORIES]: INITIAL_COUNT_TO_DISPLAY,
        [JOBSTORIES]: INITIAL_COUNT_TO_DISPLAY,
        [ASKSTORIES]: INITIAL_COUNT_TO_DISPLAY,
        [SHOWSTORIES]: INITIAL_COUNT_TO_DISPLAY
      },
      currentType: TOPSTORIES
    })
  })

  it('should handle NEWS_LOAD_START', () => {
    const state = reducer(undefined, loadNews(TOPSTORIES))
    expect(state.isLoading)
      .toBe(true)
  })

  it('should handle NEWS_ITEM_LOAD_START', () => {
    const id = 34
    const state = reducer(undefined, loadNewsItem(id))
    debugger
    expect(state.items[id].isLoading)
      .toBe(true)
  })

  it('should handle NEWS_LOAD_SUCCESS', () => {
    const type = NEWS
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const id = null
    const newsType = TOPSTORIES

    const state = reducer(undefined,
      loadAPISuccess(type, data, id, newsType))

    expect(state.isLoading).toBe(false)
    expect(state[newsType].idsArray).toEqual(data)
  })

  it('should handle NEWS_ITEM_LOAD_SUCCESS', () => {
    const type = NEWS_ITEM
    const data = {
      by: 'cobookman',
      descendants: 18,
      id: 16044521,
      kids: [
        16045158,
        16050538,
        16059182,
        16052651,
        16048580,
        16044979,
        16046992
      ],
      score: 26,
      text: 'Everyone who wired money out of Coinbase from December 12-15th has yet to get their funds.<p>Is this due to Coinbase having a lack of usd on hand?',
      time: 1514777509,
      title: 'Coinbase Insolvent?',
      type: 'story'
    }
    const id = 16044521
    const state = reducer(undefined,
      loadAPISuccess(type, data, id, null))

    expect(state.items[id]).toEqual(data)
  })

  it('should handle NEWS_ITEM_LOAD_FAIL', () => {
    const type = NEWS_ITEM
    const error = {error: 'Some error'}
    const id = 2345
    const state = reducer(undefined, loadAPIFail(type, error, id))

    expect(state.isError).toBe(true)
    expect(state.errors).toEqual(error)
  })

  it('should handle NEWS_LOAD_FAIL', () => {
    const type = NEWS
    const error = {error: 'Some error'}
    const id = 2345
    const state = reducer(undefined, loadAPIFail(type, error, id))

    expect(state.isError).toBe(true)
    expect(state.errors).toEqual(error)
  })

  it('should handle NEWS_LOAD_MORE', () => {
    const state = reducer(undefined, loadMoreNews())

    expect(state.countToDisplay[state.currentType])
      .toBe(INITIAL_COUNT_TO_DISPLAY + LOAD_MORE_COUNT)
  })

  it('should handle NEWS_SET_CURRENT_TYPE', () => {
    const type = NEWSTORIES
    const state = reducer(undefined, setNewsCurrentType(type))

    expect(state.currentType).toBe(type)
  })
})
