import { createSelector } from 'reselect'

const newsGetter = state => state.news

const newsCurrentTypeGetter = state => state.news.currentType

export const getChunkNews = createSelector(
  newsGetter,
  newsCurrentTypeGetter,
  (news, type) => news[type] ? news[type].idsArray.slice(0, news.countToDisplay) : []
)
