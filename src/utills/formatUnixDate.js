import moment from 'moment/moment'

export default (time, format) =>
  moment.unix(time, 'x').format(format)
