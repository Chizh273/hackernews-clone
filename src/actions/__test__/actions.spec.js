import {
  setNewsCurrentType, loadNews,
  loadMoreNews, loadNewsItem,
  loadComment, loadAPISuccess,
  loadAPIFail
} from '../'
import { API_URL } from '../../utills/constants'
import {
  _LOAD_START, COMMENT, NEWS, NEWS_ITEM, NEWS_LOAD_MORE,
  _SET_CURRENT_TYPE, _LOAD_SUCCESS, _LOAD_FAIL
} from '../constants'
import { BESTSTORIES, NEWSTORIES, TOPSTORIES } from '../../entities/constants'

describe('Redux actions', () => {
  it('action loadNews', () => {
    const action1 = loadNews(TOPSTORIES)
    const action2 = loadNews(BESTSTORIES)

    expect(action1).toEqual({
      type: NEWS + _LOAD_START,
      payload: {
        api: true,
        loadAll: true,
        type: TOPSTORIES,
        url: `${API_URL}/${TOPSTORIES}.json?print=pretty`,
        nextType: NEWS
      }
    })

    expect(action2).toEqual({
      type: NEWS + _LOAD_START,
      payload: {
        api: true,
        loadAll: true,
        type: BESTSTORIES,
        url: `${API_URL}/${BESTSTORIES}.json?print=pretty`,
        nextType: NEWS
      }
    })
  })

  it('action loadMoreNews', () => {
    const action = loadMoreNews()

    expect(action).toEqual({
      type: NEWS_LOAD_MORE,
      payload: {
        count: 5
      }
    })
  })

  it('action loadNewsItem', () => {
    const id = 235
    const action = loadNewsItem(id)

    expect(action)
      .toEqual({
        type: NEWS_ITEM + _LOAD_START,
        payload: {
          api: true,
          id,
          url: `${API_URL}/item/${id}.json?print=pretty`,
          nextType: NEWS_ITEM
        }
      })
  })

  it('action loadComment', () => {
    const id = 334
    const action = loadComment(id)

    expect(action)
      .toEqual({
        type: COMMENT + _LOAD_START,
        payload: {
          api: true,
          id,
          url: `${API_URL}/item/${id}.json?print=pretty`,
          nextType: COMMENT
        }
      })
  })

  it('action loadAPISuccess', () => {
    const id = 462
    const data = {}
    const type = NEWS
    const action = loadAPISuccess(type, data, id, TOPSTORIES)

    expect(action)
      .toEqual({
        type: type + _LOAD_SUCCESS,
        payload: {
          data,
          id,
          newsType: TOPSTORIES
        }
      })
  })

  it('action loadAPIFail', () => {
    const id = 3245
    const error = {}
    const type = NEWS
    const action = loadAPIFail(type, error, id)

    expect(action)
      .toEqual({
        type: type + _LOAD_FAIL,
        payload: {
          error,
          id
        }
      })
  })

  it('action setNewsCurrentType', () => {
    const action1 = setNewsCurrentType(TOPSTORIES)
    const action2 = setNewsCurrentType(NEWSTORIES)

    expect(action1).toEqual({
      type: NEWS + _SET_CURRENT_TYPE,
      payload: {
        type: TOPSTORIES
      }
    })

    expect(action2).toEqual({
      type: NEWS + _SET_CURRENT_TYPE,
      payload: {
        type: NEWSTORIES
      }
    })
  })
})
