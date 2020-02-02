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

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.lowNowPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
    this.services = services
    this.columns = columns
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.infos = info.set
    this.tables = rule.tables
    this.image = info.images ? info.images[0] : ''
  }
}
