export default {
    isAuthorized (state){
        /* 
           !! 의미 
           => !와 달리 일반적인 boolean 값을 반환함
           => 반드시 'boolean' 값으로 반환하게되는 표현
           ex> 
            case 1> if state.myinfo is null
                => ! : true !! : false
            case 2> if state.myinfo is object and not null
                => ! : false !!: true (do not return object)
        */
        return state.accessToken.length > 0 && !!state.myinfo
    },
    isAdmin(state, getters){
        return getters.isAuthorized && state.myinfo.authList[0].auth === 'ROLE_ADMIN'
    },
    isMember(state, getters) {
        return getters.isAuthorized && state.myinfo.authList[0].auth === 'ROLE_MEMBER'
    }  
}