import {
  NEWS,
  NEWS_ITEM,
  NEWS_LOAD_MORE,
  SELECT_NEWS_TYPE,
  _LOAD_START,
  _LOAD_SUCCESS,
  _LOAD_FAIL,
  _SET_CURRENT_TYPE
} from '@/actions/constants'
import { TOPSTORIES, BESTSTORIES, NEWSTORIES } from '@/entities/constants'

const newsDefaultState = {
  isLoading: false,
  isError: false,
  errors: {},
  items: {},
  countToDisplay: {
    [TOPSTORIES]: 5,
    [NEWSTORIES]: 5,
    [BESTSTORIES]: 5
  },
  currentType: TOPSTORIES
}

export default (state = newsDefaultState, action) => {
  const newState = {...state}
  const {type, payload} = action
  newState.isLoading = false

  switch (type) {
    case SELECT_NEWS_TYPE:
      newState.currentType = payload.type
      break

    case NEWS + _LOAD_START:
      newState.isLoading = true
      break

    case NEWS_ITEM + _LOAD_START:
      newState.items[payload.id] = { isLoading: true }
      break

    case NEWS + _LOAD_SUCCESS:
      newState.isLoading = false
      newState[payload.newsType] = {idsArray: payload.data}
      break

    case NEWS_ITEM + _LOAD_SUCCESS:
      newState.items[payload.data.id] = payload.data
      break

    case NEWS_ITEM + _LOAD_FAIL:
    case NEWS + _LOAD_FAIL:
      newState.isError = true
      newState.errors = payload.error
      break

    case NEWS_LOAD_MORE:
      newState.countToDisplay[newState.currentType] += payload.count
      break

    case NEWS + _SET_CURRENT_TYPE:
      newState.currentType = payload.type
      break
  }

  return newState
}
