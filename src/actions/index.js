import {
  NEWS,
  NEWS_ITEM,
  NEWS_LOAD_MORE,
  SELECT_NEWS_TYPE,
  _LOAD_START,
  _LOAD_FAIL,
  _LOAD_SUCCESS, COMMENT, _SET_CURRENT_TYPE
} from './constants'
import { TOPSTORIES } from '@/entities/constants'

const API_URL = 'https://hacker-news.firebaseio.com/v0'

export const selectNewsType = type => ({
  type: SELECT_NEWS_TYPE,
  payload: {
    type
  }
})

export const loadNews = (type = TOPSTORIES) => ({
  type: NEWS + _LOAD_START,
  payload: {
    api: true,
    loadAll: true,
    type,
    url: `${API_URL}/${type}.json?print=pretty`,
    nextType: NEWS
  }
})

export const loadMoreNews = () => ({
  type: NEWS_LOAD_MORE,
  payload: {
    count: 5
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

export const loadAPISuccess = (type, data, id, newsType) => ({
  type: type + _LOAD_SUCCESS,
  payload: {
    data,
    id,
    newsType
  }
})

export const loadAPIFail = (type, error, id) => ({
  type: type + _LOAD_FAIL,
  payload: {
    error,
    id
  }
})

export const setNewsCurrentType = type => {
  console.log(type)

  return {
    type: NEWS + _SET_CURRENT_TYPE,
    payload: {
      type
    }
  }
}
