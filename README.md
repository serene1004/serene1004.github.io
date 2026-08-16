# Serene1004 Portfolio

데스크톱 UI를 콘셉트로 한 Nuxt 4 포트폴리오입니다.
Three.js 우주 배경 위에서 폴더를 열고, 창을 드래그·최소화·최대화할 수 있습니다.

## Stack

- Nuxt 4, Vue 3, TypeScript, Pinia, Nuxt UI
- Three.js 배경 캔버스

## Run

Node.js와 pnpm이 필요합니다. Corepack을 사용하면 별도 전역 설치 없이 pnpm 버전을 맞출 수 있습니다.

```bash
corepack enable
pnpm install
pnpm dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## Commands

```bash
pnpm lint       # ESLint 검사
pnpm lint:fix   # 자동 수정 가능한 항목 수정
pnpm build      # 프로덕션 빌드
pnpm generate   # 정적 사이트 생성
pnpm deploy     # GitHub Pages 배포
```

`pnpm deploy`는 `.output/public`만 GitHub Pages에 배포합니다.

## Content map

- `data/folders.ts`: 데스크톱 아이콘, 창, 패널의 단일 등록 지점
- `data/projects.ts`: 내부 프로젝트 포트폴리오 콘텐츠
- `components/panels/`: 소개, 포트폴리오, 프로젝트 패널
- `stores/WindowStore.ts`: 창 열기·포커스·최소화·닫기 상태

`_legacy-vue`는 이전 구현을 보관하는 디렉터리입니다.
