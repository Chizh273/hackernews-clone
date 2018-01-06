import {
  NEWS,
  NEWS_ITEM,
  NEWS_LOAD_MORE,
  _LOAD_START,
  _LOAD_FAIL,
  _LOAD_SUCCESS,
  _SET_CURRENT_TYPE,
  COMMENT
} from './constants'
import { TOPSTORIES } from '../entities/constants'
import { API_URL, LOAD_MORE_COUNT } from '../utills/constants'

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
    count: LOAD_MORE_COUNT
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

export const setNewsCurrentType = type => ({
  type: NEWS + _SET_CURRENT_TYPE,
  payload: {
    type
  }
})
