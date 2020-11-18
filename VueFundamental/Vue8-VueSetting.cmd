@echo off
REM 3장 Vue.js 기본 15. Vue CLI 설치
REM vue-cli 전역으로 설치하기
npm install vue-cli -global
REM 설치 확인
vue
REM 3장 Vue.js 기본 16. 프로젝트 생성
SET VUE_PROJECT_PATH = "C:/Users/Dell/Documents/VueTest/"
SET VUE_PROJECT_NAME = "$testVue"
cd %VUE_PROJECT_PATH%
REM 다음 명령어로 프로젝트 구성 초기화 
REM template 종류 : webpack(풀 패키지) / webpack-simple(빠른 화면 프로토타입) / simple(최소화)
vue init webpack %VUE_PROJECT_NAME%
REM 프로젝트 실행 명령어
npm run dev
REM local:8080에서 페이지 확인!
REM 3장 Vue.js 기본 17. 싱글 파일 컴포넌트
REM 향후 실행하는 프로젝트에 포함되므로 생략!