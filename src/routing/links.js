import {
  ASKSTORIES,
  JOBSTORIES,
  SHOWSTORIES,
  BESTSTORIES,
  NEWSTORIES,
  TOPSTORIES
} from '../entities/constants'

export default [
  {
    to: `/${TOPSTORIES}`,
    icon: 'fa-arrow-up',
    text: 'Top'
  },
  {
    to: `/${NEWSTORIES}`,
    icon: 'fa-newspaper-o',
    text: 'New'
  },
  {
    to: `/${BESTSTORIES}`,
    icon: 'fa-thumbs-o-up',
    text: 'Best'
  },
  {
    to: `/${ASKSTORIES}`,
    icon: 'fa-question-circle-o',
    text: 'Ask'
  },
  {
    to: `/${JOBSTORIES}`,
    icon: 'fa-building-o',
    text: 'Job'
  },
  {
    to: `/${SHOWSTORIES}`,
    icon: 'fa-eye',
    text: 'Show'
  }
]
