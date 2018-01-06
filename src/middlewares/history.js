import history from '../routing/history'
import {
  ASKSTORIES,
  JOBSTORIES,
  SHOWSTORIES,
  BESTSTORIES,
  NEWSTORIES,
  TOPSTORIES
} from '../entities/constants'
import { setNewsCurrentType } from '../actions'

let isSubscribed = false

export default store => next => action => {
  if (!isSubscribed) {
    isSubscribed = true

    dispatchSetNewsType(history.location, next)

    history.listen(location => dispatchSetNewsType(location, next))
  }

  next(action)
}

export const dispatchSetNewsType = (location, next) => {
  const type = getTypeFromLocation(location)

  if (type) {
    next(setNewsCurrentType(type))
  }
}

const getTypeFromLocation = location => {
  switch (location.pathname) {
    case `/${NEWSTORIES}`:
      return NEWSTORIES
    case `/${TOPSTORIES}`:
      return TOPSTORIES
    case `/${BESTSTORIES}`:
      return BESTSTORIES
    case `/${ASKSTORIES}`:
      return ASKSTORIES
    case `/${JOBSTORIES}`:
      return JOBSTORIES
    case `/${SHOWSTORIES}`:
      return SHOWSTORIES
    default:
      return false
  }
}
