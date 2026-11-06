# AI 프로젝트 프로필

## 프로젝트

- 목적: Nuxt 기반 개인 프론트엔드 포트폴리오. 데스크톱 OS 형태의 UI에서 Work와 Side Projects를 탐색합니다.
- 언어 / 프레임워크 / 런타임: TypeScript, Vue 3, Nuxt 4 SPA, Node.js 22 이상.
- 패키지 관리자 / 버전: pnpm 11.22.0 (Corepack 사용 가능).
- 주요 디렉터리: `components/` UI, `pages/` 화면, `layouts/` 레이아웃, `composables/` 공통 로직, `stores/` Pinia 상태, `data/` 콘텐츠 데이터, `assets/` 스타일, `public/` 정적 파일.
- 아키텍처와 데이터 흐름: Nuxt SPA(`ssr: false`), Pinia로 창 상태 관리. `data/folders.ts`가 데스크톱 항목의 기준이며 프로젝트 상세는 `data/projects.ts`에서 관리합니다.

## 소유권과 경계

- 자동 생성 파일 및 원본 정의: `.nuxt/`, `.output/`, `dist/` 등은 생성 산출물입니다. 원본 설정과 코드를 수정합니다.
- API / DB 스키마 / 마이그레이션 규칙: 확인된 서버 API·DB·마이그레이션은 없습니다.
- 인증·권한·민감 데이터 경계: 공개 포트폴리오 사이트이며 서버 측 인증 흐름은 확인되지 않았습니다. 비밀값을 클라이언트 코드나 정적 자산에 넣지 않습니다.
- 이 저장소에서 금지하거나 주의할 작업: Nuxt 4 SPA와 OS형 상호작용을 유지합니다. 배포는 `master` 브랜치 푸시로 GitHub Actions가 수행하므로 배포·푸시는 별도 요청 없이 진행하지 않습니다.

## 검증 명령

| 범위 | 명령 | 비고 |
|---|---|---|
| 포맷 / 린트 | `pnpm lint` | ESLint 전체 검사 |
| 타입 검사 | 미확인 | 별도 스크립트 없음 |
| 단위 테스트 | 미확인 | 별도 스크립트 없음 |
| 통합 / E2E | 미확인 | 별도 스크립트 없음 |
| 빌드 | `pnpm build` | Nuxt 프로덕션 빌드 |
| 정적 생성 | `pnpm generate` | GitHub Pages 배포 산출 확인 |
| 생성 코드 검사 | 미확인 | |

## 참고할 기존 예시

- 대표 기능 구현: `components/`, `pages/`, `stores/WindowStore.ts`.
- 폼·오류 처리 예시: 해당 기능 패턴을 작업 시 확인합니다.
- API / DB 접근 예시: 확인된 API·DB 접근 패턴은 없습니다.
- UI 컴포넌트 또는 서버 모듈 패턴: `.codex/rules/site-rules.md`의 데스크톱 UI와 Pinia 규칙을 따릅니다.

## 완료 기준

- 사용자 요청별 완료 조건: 요청된 변경이 기존 UI·데이터 흐름에 맞게 동작하고, 수정 diff를 확인합니다.
- 변경별 필수 검사: 변경 범위에 맞는 가장 좁은 검사를 실행합니다. 테스트 추가·실행은 사용자 요청 또는 기존 프로젝트 규칙이 요구할 때 수행합니다.
- 알려진 기존 실패 또는 기술 부채: 미확인.
- 사용 중인 생성·검증 도구가 이미 보고하는 항목: ESLint와 Nuxt 빌드 도구.
- CI: `.github/workflows/ci.yml`에서 PR 및 `master` 푸시에 `pnpm lint`와 `pnpm generate`를 실행합니다.
