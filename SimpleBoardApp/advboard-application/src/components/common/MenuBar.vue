<template>
    <div align="center">
        <table>
            <tr>
                <!-- 공통 -->
                <td width="120">
                    <router-link :to="{ name : 'Home' }">홈</router-link>
                </td>
                <td width="120">
                    <router-link :to="{ name : 'BoardListPage' }">회원게시판</router-link>
                </td>
                <!-- 관리자 전용 -->
                <template v-if="isAdmin">
                        <td width="120">
                            <router-link :to="{ name : 'CodeClassListPage' }">코드그룹관리</router-link>
                        </td>  
                        <td width="120">
                            <router-link :to="{ name : 'CodeDetailListPage' }">코드관리</router-link>
                        </td>   
                        <td width="120">
                            <router-link :to="{ name : 'MemberListPage' }">회원관리</router-link>
                        </td>  
                        <td width="120">
                            <router-link :to="{ name : 'NoticeListPage' }">공지사항관리</router-link>
                        </td>
                        <td width="120">
                            <router-link :to="{ name : 'ItemListPage' }">상품관리</router-link>
                        </td>
                        <td width="120">
                            <router-link :to="{ name : 'PdsListPage' }">공개자료실관리</router-link>
                        </td>
                </template>

                <!-- 일반 -->
                <template v-else>
                    <!-- 일반 공통 -->
                    <td width="120">
                        <router-link :to="{ name : 'NoticeListPage' }">공지사항</router-link>
                    </td>
                    <td width="120">
                        <router-link :to="{ name : 'ItemListPage' }">상품</router-link>
                    </td>
                    <td width="120">
                            <router-link :to="{ name : 'PdsListPage' }">공개자료실</router-link>
                        </td>
                    <!-- 회원 전용 -->
                    <template v-if="isAuthorized">
                        <td width="120">
                            <router-link :to="{ name : 'CoinChargeRegisterPage' }">코인충전</router-link>
                        </td>
                        <td width="120">
                            <router-link :to="{ name : 'CoinChargeListPage' }">충전내역</router-link>
                        </td>
                        <td width="120">
                            <router-link :to="{ name : 'UserItemListPage' }">구매상품</router-link>
                        </td>
                        <td width="120">
                            <router-link :to="{ name : 'CoinPayListPage' }">구매내역</router-link>
                        </td>
                    </template>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MenuBar',
    computed: {
        ...mapGetters(['isAuthorized','isAdmin'])
    }
}
</script>