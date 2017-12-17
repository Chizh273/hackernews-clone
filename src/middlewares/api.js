import axios from 'axios'
import { loadAPIFail, loadAPISuccess } from '../actions'

export default store => next => async action => {
  const {payload} = action

  next(action)

  if (!payload.id) {
    payload.id = null
  }

  if (payload.api) {
    try {
      const data = (await axios.get(payload.url)).data
      next(loadAPISuccess(payload.nextType, data, payload.id))
    } catch (e) {
      next(loadAPIFail(payload.nextType, e, payload.id))
    }
  }
}
