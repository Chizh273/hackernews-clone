import {
  NEWS,
  NEWS_ITEM,
  _LOAD_START,
  _LOAD_FAIL,
  _LOAD_SUCCESS, COMMENT
} from './constants'

const API_URL = 'https://hacker-news.firebaseio.com/v0'

export const loadNews = (type = 'topstories') => ({
  type: NEWS + _LOAD_START,
  payload: {
    api: true,
    url: `${API_URL}/${type}.json?print=pretty`,
    nextType: NEWS
  }
})

export const loadNewsItem = id => ({
  type: NEWS_ITEM + _LOAD_START,
  payload: {
    api: true,
    id,
    url: `${API_URL}/item/${id}.json?print=pretty`,
    nextType: NEWS_ITEM
  }
})

export const loadComment = id => ({
  type: COMMENT + _LOAD_START,
  payload: {
    api: true,
    id,
    url: `${API_URL}/item/${id}.json?print=pretty`,
    nextType: COMMENT
  }
})

export const loadAPISuccess = (type, data) => ({
  type: type + _LOAD_SUCCESS,
  payload: {
    data
  }
})

export const loadAPIFail = (type, error) => ({
  type: type + _LOAD_FAIL,
  payload: {
    error
  }
})
