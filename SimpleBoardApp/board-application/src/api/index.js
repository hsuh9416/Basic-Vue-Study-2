// axios 라이브러리 추가
import axios from 'axios'

// Axios 객체 생성과 익스포트
export default axios.create({
    baseURL : '//localhost:8080'
})