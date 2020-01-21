import {
  request
} from './request'

export function getHomeDatas() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGodds(type, page) {
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}
