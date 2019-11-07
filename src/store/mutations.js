import {
    UPDATE_NEWS,
    UPDATE_DETAIL,
    UPDATE_PRICE,
    UPDATA_PRICEDETAIL,
    UPDATA_BANNER,
    HEAD_PRICE,
    HEAD_DETAIL,
    GS_DETAIL,
    JG_DETAIL,
    UPDATE_PRO
} from './types'


export default {
    [UPDATE_NEWS]:(state,payload)=>state.news = payload,
    [UPDATE_DETAIL]:(state,payload)=>state.detail = payload,
    [UPDATE_PRICE]:(state,payload)=>state.price = payload,
    [UPDATA_PRICEDETAIL]:(state,payload)=>state.pricedetail = payload,
    [UPDATA_BANNER]:(state,payload)=>state.banner = payload,

    [HEAD_PRICE]:(state,payload)=>state.headdetail = payload,
    [HEAD_DETAIL]:(state,payload)=>state.headdetail = payload,
    [GS_DETAIL]:(state,payload)=>state.headdetail = payload,
    [JG_DETAIL]:(state,payload)=>state.headdetail = payload,

    [UPDATE_PRO]:(state,payload)=>state.protection = payload,
}