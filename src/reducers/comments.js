import {
  COMMENT, _LOAD_FAIL, _LOAD_START, _LOAD_SUCCESS
} from '../actions/constants'

const commentsDefaultState = {}

export default (state = commentsDefaultState, action) => {
  const newState = {...state}
  const {type, payload} = action

  switch (type) {
    case COMMENT + _LOAD_START:
      newState[payload.id] = {isLoading: true, comment: {}}
      break

    case COMMENT + _LOAD_SUCCESS:
      newState[payload.id] = {isLoading: false, comment: payload.data}
      break

    case COMMENT + _LOAD_FAIL:
      newState[payload.id] = {
        isLoading: false,
        isError: true,
        error: payload.error
      }
      break

    default:
  }

  return newState
}
