import {
  request
} from './request'

export function getDetailDatas(id) {
  return request({
    url: `/detail`,
    params: {
      iid: id
    }
  })
}
