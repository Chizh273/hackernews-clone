import { createSelector } from 'reselect'

const newsGetter = state => state.news

export const getChunkNews = createSelector(newsGetter, (news) =>
  news.idsArray.slice(0, news.countToDisplay)
)
