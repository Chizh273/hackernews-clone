import {
  NEWS,
  NEWS_ITEM,
  NEWS_LOAD_MORE,
  _LOAD_START,
  _LOAD_SUCCESS,
  _LOAD_FAIL,
  _SET_CURRENT_TYPE
} from '../actions/constants'
import {
  ASKSTORIES,
  JOBSTORIES,
  SHOWSTORIES,
  TOPSTORIES,
  BESTSTORIES,
  NEWSTORIES
} from '../entities/constants'
import { INITIAL_COUNT_TO_DISPLAY } from '../utills/constants'

const newsDefaultState = {
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
}

export default (state = newsDefaultState, action) => {
  const newState = {...state}
  const {type, payload} = action
  newState.isLoading = false

  switch (type) {
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

    default:
  }

  return newState
}
