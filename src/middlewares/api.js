import axios from 'axios'
import { loadAPIFail, loadAPISuccess } from '../actions'

export default store => next => async action => {
  const {payload} = action

  if (payload.api) {
    try {
      const data = (await axios.get(payload.url)).data
      next(loadAPISuccess(payload.nextType, data))
    } catch (e) {
      next(loadAPIFail(payload.nextType, e))
    }
  }
}
