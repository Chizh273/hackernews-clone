import {
  COMMENT,
  _LOAD_FAIL,
  _LOAD_START,
  _LOAD_SUCCESS
} from '../actions/constants'

const commentsDefaultState = {

}

export default (state = commentsDefaultState, action) => {
  console.log(state)
  const newState = {...state}
  const {type, payload} = action

  switch (type) {
    case COMMENT + _LOAD_START:
      newState[payload.id] = {isLoading: true, comment: {}}
      break

    case COMMENT + _LOAD_SUCCESS:
      newState[payload.id] = {isLoading: false, comment: payload.data}
      console.log(newState[payload.id])
      break

    case COMMENT + _LOAD_FAIL:
      newState[payload.id] = {isLoading: false, isError: true, error: payload.error}
      break
  }

  return newState
}
