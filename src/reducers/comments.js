import {
  COMMENT, _LOAD_FAIL, _LOAD_START, _LOAD_SUCCESS
} from '../actions/constants'
import { Record, Map } from 'immutable'

const CommentRecord = Record({
  by: '',
  id: null,
  kids: [],
  parent: null,
  text: '',
  time: null,
  type: '',
  isLoading: false,
  isError: false,
  error: null,
  deleted: false
})
const CommentState = new Map({})

export default (state = CommentState, action) => {
  const {type, payload} = action

  switch (type) {
    case COMMENT + _LOAD_START:
      state = state.set(payload.id, new CommentRecord({isLoading: true}))
      break

    case COMMENT + _LOAD_SUCCESS:
      state = state.set(payload.id, new CommentRecord({...payload.data, isLoading: false}))
      break

    case COMMENT + _LOAD_FAIL:
      state = state.set(payload.id, new CommentRecord({isError: true, error: payload.error, isLoading: false}))
      break

    default:
  }

  return state
}
