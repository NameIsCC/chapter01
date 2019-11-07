import * as types from './types'

import axios from 'axios'


export default {
    [types.UPDATE_NEWS]: ({ commit, state }, payload) => {
        axios({
          url: '/api/news',
        }).then(
          res => commit(types.UPDATE_NEWS, res.data.data)
        )
    },
    [types.UPDATE_DETAIL]: ({ commit, state }, payload) => {
        let { dataName, id } = payload;
        axios({
        url: `/api/${dataName}/${id}`
        }).then(
        res => commit(types.UPDATE_DETAIL, res.data.data)
        )
    },
    [types.UPDATE_PRICE]: ({ commit, state }, payload) => {
        axios({
            url: '/api/price',
          }).then(
            res => commit(types.UPDATE_PRICE, res.data.data)
          )
    },
    [types.UPDATA_PRICEDETAIL]: ({ commit, state }, payload) => {
        let { dataName, id } = payload;
        axios({
        url: `/api/${dataName}/${id}`
        }).then(
        res => commit(types.UPDATA_PRICEDETAIL, res.data.data)
        )
    },
    [types.UPDATA_BANNER]: ({ commit, state }, payload) => {
        axios({
          url: '/api/banner',
        }).then(
          res => commit(types.UPDATA_BANNER, res.data.data)
        )
    },
    [types.UPDATE_PRO]: ({ commit, state }, payload) => {
      axios({
        url: '/api/protection',
      }).then(
        res => commit(types.UPDATE_PRO, res.data.data)
      )
  },
}