import {
  NEWS,
  NEWS_ITEM,
  _LOAD_START,
  _LOAD_SUCCESS,
  _LOAD_FAIL, NEWS_LOAD_MORE
} from '../actions/constants'

const newsDefaultState = {
  isLoading: false,
  isError: false,
  errors: {},
  items: {},
  idsArray: [],
  countToDisplay: 5
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
      newState.idsArray = payload.data
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
      newState.countToDisplay += payload.count
      break
  }

  return newState
}
