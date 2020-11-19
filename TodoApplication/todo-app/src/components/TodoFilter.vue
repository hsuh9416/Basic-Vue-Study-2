<template>
    <div>
        <input type="radio" v-bind:checked="filter === null" v-on:change="SET_FILTER(null)">전체
        <input type="radio" v-bind:checked="filter === 'A'" v-on:change="SET_FILTER('A')">미완료
        <input type="radio" v-bind:checked="filter === 'B'" v-on:change="SET_FILTER('B')">완료     
    </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import {SET_FILTER } from '../store/mutation-types'
    export default {
        computed : {
            ...mapState([
                'filter'
            ])
        },
        methods : {
            ...mapMutations([
                SET_FILTER
            ])
        }
    }
</script>

<style scoped>
    div {
        background-color: #19ce60;
    }
</style>