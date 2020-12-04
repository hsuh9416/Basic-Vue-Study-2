import api from '@/api'

import {
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO,
    FETCH_CODECLASS_LIST,
    FETCH_CODECLASS,
    FETCH_CODEDETAIL_LIST,
    FETCH_CODEDETAIL,
    FETCH_JOBCODE_LIST,
    FETCH_MEMBER_LIST,
    FETCH_MEMBER,
    FETCH_BOARD_LIST,
    FETCH_BOARD,
    FETCH_NOTICE_LIST,
    FETCH_NOTICE,
    FETCH_ITEM_LIST,
    FETCH_ITEM,
    FETCH_CHARGECOIN_LIST,
    FETCH_PAYCOIN_LIST,
    FETCH_USERITEM_LIST,
    FETCH_USERITEM,
    FETCH_PDS_LIST,
    FETCH_PDS,
    FETCH_ATTACH_LIST,
    ADD_ATTACH,
    RESET_ATTACH,
    REMOVE_ATTACH
} from './mutation-types'

export default {
    signin ({ commit },payload){
        return api.post(`/api/authenticate?username=${payload.userid}&password=${payload.password}`,{
            username: payload.userid,
            password: payload.password
        }).then( res => {
            const { authorization } = res.headers
            const accessToken = authorization.substring(7)

            commit(SET_ACCESS_TOKEN, accessToken)

            return api.get('/users/myinfo')
        }).then( res => {
            commit(SET_MY_INFO, res.data)
        })
    },
    signinByToken({ commit }, token){
        commit(SET_ACCESS_TOKEN, token)
        return api.get('/users/myinfo')
        .then( res => {
            commit(SET_MY_INFO, res.data)
        })
    },
    signout({ commit }){
        commit(DESTROY_MY_INFO)
        commit(DESTROY_ACCESS_TOKEN)
    },
    fetchCodeClassList({ commit }){
        return api.get('/codegroups')
        .then(res => {
            commit(FETCH_CODECLASS_LIST, res.data)
        })
    },
    fetchCodeClass({ commit }, groupCode){
        return api.get(`/codegroups/${groupCode}`)
        .then(res => {
            commit(FETCH_CODECLASS, res.data)
        })
    }, 
    fetchCodeDetailList({ commit }){
        return api.get('/codedetails')
        .then(res => {
            commit(FETCH_CODEDETAIL_LIST, res.data)
        })
    },
    fetchCodeDetail({ commit }, payload ){
        const {groupCode, codeValue } = payload
        return api.get(`/codedetails/${groupCode}/${codeValue}`)
        .then(res => {
            commit(FETCH_CODEDETAIL, res.data)
        })
    },
    fetchJobCodeList({ commit }){
        return api.get('/codes/job')
        .then( res => {
            commit(FETCH_JOBCODE_LIST, res.data)
        })
    },
    fetchMemberList({ commit }){
        return api.get('/users')
        .then( res => {
            commit(FETCH_MEMBER_LIST, res.data)
        })
    },
    fetchMember({ commit }, userNo){
        return api.get(`/users/${userNo}`)
        .then( res => {
            commit(FETCH_MEMBER, res.data)
        })
    },
    fetchBoardList({ commit }){
        return api.get('/boards')
        .then( res => {
            commit(FETCH_BOARD_LIST, res.data)
        })
    },
    fetchBoard({ commit }, boardNo){
        return api.get(`/boards/${boardNo}`)
        .then( res => {
            commit(FETCH_BOARD, res.data)
        })
    },
    fetchNoticeList({ commit }){
        return api.get('/notices')
        .then( res => {
            commit(FETCH_NOTICE_LIST, res.data)
        })
    },
    fetchNotice({ commit }, noticeNo){
        return api.get(`/notices/${noticeNo}`)
        .then( res => {
            commit(FETCH_NOTICE, res.data)
        })
    },
    fetchItemList({ commit }){
        return api.get('/items')
        .then( res => {
            commit(FETCH_ITEM_LIST, res.data)
        })
    },
    fetchItem({ commit }, itemId){
        return api.get(`/items/${itemId}`)
        .then( res => {
            commit(FETCH_ITEM, res.data)
        })
    },
    fetchChargeCoinList({ commit }){
        return api.get('/coins')
        .then(res => {
            commit(FETCH_CHARGECOIN_LIST, res.data )
        })
    },
    fetchPayCoinList({ commit }){
        return api.get('/coins/pay')
        .then(res => {
            commit(FETCH_PAYCOIN_LIST, res.data )
        })
    },
    fetchUserItemList({ commit }){
        return api.get('/useritems')
        .then(res => {
            commit(FETCH_USERITEM_LIST, res.data )
        })
    },
    fetchUserItem({ commit },useritemNo){
        return api.get(`/useritems/${useritemNo}`)
        .then(res => {
            commit(FETCH_USERITEM, res.data )
        })
    },
    fetchPdsList({ commit }){
        return api.get('/pds')
        .then(res => {
            commit(FETCH_PDS_LIST, res.data )
        })
    },
    fetchPds({ commit }, itemId){
        return api.get(`/pds/${itemId}`)
        .then(res => {
            commit(FETCH_PDS, res.data)

            return api.get(`/pds/attach/${itemId}`)
        }).then(res => {
            commit(FETCH_ATTACH_LIST,res.data)
        })
    },
    addAttach ({ commit }, file) {
        let formData = new FormData()
            
        formData.append("file", file)
          
        return api.post('/pds/upload', formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
          .then(res => {
            commit(ADD_ATTACH, res.data)
          })
          .catch(err => {
            alert(err.response.data.message)
          })
      },
    resetAttach({ commit }){
        commit(RESET_ATTACH)
    },
    removeAttach({ commit },index){
        commit(REMOVE_ATTACH, index )
    }
}
