import {
  NEWS,
  NEWS_ITEM,
  _LOAD_START,
  _LOAD_FAIL,
  _LOAD_SUCCESS
} from './constants'

const API_URL = 'https://hacker-news.firebaseio.com/v0'

export const loadNews = (type = 'topstories') => ({
  type: NEWS + _LOAD_START,
  payload: {
    api: true,
    url: `${API_URL}/${type}.json?print=pretty`
  }
})

export const loadNewsSuccess = (items) => ({
  type: NEWS + _LOAD_SUCCESS,
  payload: {
    items
  }
})

export const loadNewsItem = (id) => ({
  type: NEWS_ITEM + _LOAD_START,
  payload: {
    api: true,
    id,
    url: `${API_URL}/item/${id}.json?print=pretty`
  }
})

export const loadNewsItemSuccess = (id, item) => ({
  type: NEWS + _LOAD_SUCCESS,
  payload: {
    id,
    item
  }
})

export const loadNewsFail = (error) => ({
  type: NEWS + _LOAD_FAIL,
  payload: {
    error
  }
})
