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
    FETCH_JOBCODE_LIST
} from './mutation-types'

export default {
    signin({ commit },payload){
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
    fetchCodDetailList({ commit }){
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
    }
}