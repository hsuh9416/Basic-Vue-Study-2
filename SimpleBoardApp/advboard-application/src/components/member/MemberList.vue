<template>
     <div>
        <table border="1">
            <tr>
                <th align="center" width="60">번호</th>
                <th align="center" width="80">아이디</th>
                <th align="center" width="300">비밀번호</th>
                <th align="center" width="100">사용자명</th>
                <th align="center" width="100">직업</th>
                <th align="center" width="180">등록일시</th>     
            </tr>
            <tr v-if="!members || (Array.isArray(members) && members.length === 0)">
                <td colspan="6">
                List is empty.
                </td>
            </tr>

            <tr v-else v-for="member in members" :key="member.userNo">
                <td align="center">
                    {{ member.userNo }}
                </td>
                <td align="center">
                    <router-link :to="{ name: 'MemberReadPage', params: { userNo: member.userNo }}">
                        {{ member.userId }}
                    </router-link>
                </td>
                <td align="left">
                    {{ member.userPw }}
                </td>
                <td align="center">
                    {{ member.userName }}
                </td>
                <td align="center">
                    {{ member.job }}
                </td>
                <td align="center">
                    {{ member.regDate }}
                </td>
            </tr>
        </table>
    </div>   
</template>

<script>
export default {
  name: 'MemberList',
  props: {
    members: {
      type: Array
    }
  }
}
</script>