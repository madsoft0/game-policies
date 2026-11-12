# 매드소프트 게임 정책

게임 소스와 분리한 공개 정책 저장소. GitHub Pages main/root로 게시한다.

## 공통 양식과 게임별 설정

- `templates/privacy.html`: 공통 HTML 양식
- `projects/<slug>.json`: 게임명·패키지·연락처·시행일·수집 항목·제공자·보유기간
- `scripts/build.mjs`: 설정을 읽어 정적 페이지 생성
- `<slug>/privacy.html`: 공개 결과물. JavaScript·로그인 없이 본문 표시

게임 추가·수정 시 설정을 작성하고 `node scripts/build.mjs`를 실행한다. 설정·템플릿·생성된 HTML을 함께 커밋한다. 설정만 바꾸고 생성 결과를 누락하지 않는다. 다른 게임의 보유기간·SDK·수집 항목을 이름만 바꿔 복제하지 않는다. 실제 운영과 다른 부분은 게시 전에 확인한다.

## 공개 주소

- 기존 데몬헌터스: https://madsoft0.github.io/game-policies/privacy.html
- 작은 기사: https://madsoft0.github.io/game-policies/little-knight/privacy.html
- 작은 기사 계정 삭제 안내: https://madsoft0.github.io/game-policies/little-knight/privacy.html#account-deletion

기존 데몬헌터스 페이지는 레거시 문서로 유지한다. 빌드 스크립트는 프로젝트 설정이 있는 게임만 생성하며 기존 루트 페이지를 덮어쓰지 않는다. 작은 기사의 결제·보안 기록 보유기간은 기존 매드소프트 공개 정책 기준을 반영했다. 게시 자체가 실제 파기 작업이나 스토어 심사 통과를 보장하지 않는다.

## AI 출시 절차

1. 기존 저장소·공개 URL부터 확인한다. 정책 사이트나 서버를 매번 새로 만들지 않는다.
2. 대상 프로젝트의 실제 로그인·저장·랭킹·거래·채팅·로그·광고·구매 기능을 확인한다.
3. 게임별 설정과 필요한 공통 양식을 수정하고 정적 페이지를 생성한다.
4. 미정 표시·잘못된 게임명·민감 정보·끊어진 링크를 확인한다.
5. 커밋 후 공개 URL의 HTTP 200과 본문을 확인한다.
6. 같은 고정 주소를 Play 콘솔과 인게임 설정에 연결한다. 앱 빌드 반영과 스토어 입력 완료를 별도로 기록한다.
7. 비밀키·유저 데이터·게임 소스를 이 공개 저장소에 업로드하지 않는다.
