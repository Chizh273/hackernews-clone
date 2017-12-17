import moment from 'moment/moment'

export default time =>
  moment.unix(time, 'x').fromNow()
