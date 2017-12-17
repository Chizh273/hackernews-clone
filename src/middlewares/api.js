import axios from 'axios'
import { loadAPIFail, loadAPISuccess } from '@/actions'

export default store => next => async action => {
  const {payload} = action

  next(action)

  if (!payload.id) {
    payload.id = null
  }

  if (payload.api) {
    let url = payload.url
    const type = store.getState().news.currentType

    if (payload.loadAll) {
      url += type + payload.urlSuffix
    }

    try {
      const data = (await axios.get(url)).data
      next(loadAPISuccess(payload.nextType, data, payload.id, type))
    } catch (e) {
      next(loadAPIFail(payload.nextType, e, payload.id))
    }
  }
}
