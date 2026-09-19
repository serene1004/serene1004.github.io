# Serene1004 Portfolio

Window OSf를 모티브로 만든 프론트엔드 포트폴리오입니다.
Three.js 우주 배경 위에서 데스크톱 아이콘을 선택하면 Work와 Side Projects를 각각 플로팅 윈도우로 확인할 수 있습니다.

## Features

- Nuxt 4 SPA 기반의 데스크톱 UI
- Three.js로 구현한 우주 배경 캔버스
- 폴더를 기반으로 한 프로젝트 탐색 및 플로팅 윈도우
- 창 열기, 포커스, 드래그, 최소화, 복원, 최대화, 닫기 지원
- 키보드 `Escape`를 통한 열린 창 닫기
- 커스텀 스크롤바의 트랙 클릭 및 thumb 드래그 지원
- About Me 다이얼로그와 프로필 이미지
- 다크 테마, 반응형 레이아웃, 파비콘 및 앱 아이콘

## Stack

- Nuxt 4, Vue 3, TypeScript
- Pinia, Nuxt UI, Tailwind CSS
- Three.js
- GitHub Pages 배포

## Requirements

- Node.js 22 이상
- pnpm 11 이상

프로젝트의 `packageManager` 설정을 사용하려면 Corepack을 활성화하세요.

## Getting started

```bash
corepack enable
pnpm install
pnpm dev
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

## Commands

```bash
pnpm dev        # 개발 서버 실행
pnpm lint       # ESLint 검사
pnpm lint:fix   # 자동 수정 가능한 ESLint 문제 수정
pnpm build      # 프로덕션 빌드
pnpm preview    # 빌드 결과 로컬 미리보기
pnpm generate   # 정적 사이트 생성
```

## Project structure

```text
components/
├─ AboutMeMenu.vue       # About Me 실행 버튼과 다이얼로그
├─ DesktopWindow.vue     # 공통 플로팅 윈도우와 스크롤 UI
├─ Footer.vue            # 하단 런처와 열린 창 목록
└─ panels/
   ├─ AboutMePanel.vue   # About Me 본문
   ├─ ExternalProjectPanel.vue # Side Projects 소개
   ├─ ProjectCasePanel.vue     # Work 상세
   └─ ProjectGroupPanel.vue    # Work 그룹

data/
├─ folders.ts            # 데스크톱 폴더와 창 메타데이터
└─ projects.ts           # Work 및 프로젝트 그룹 데이터

stores/
└─ WindowStore.ts        # 창 열기·포커스·최소화·닫기 상태
```

## Content editing

- 데스크톱에 표시할 항목과 연결할 패널은 `data/folders.ts`에서 관리합니다.
- Work의 상세 내용과 그룹 구성은 `data/projects.ts`에서 수정합니다.
- Side Projects의 설명, 주요 기능, 링크는 `data/folders.ts`의 외부 프로젝트 목록에서 수정합니다.
- About Me 내용은 `components/panels/AboutMePanel.vue`에서 수정합니다.
- 정적 이미지와 파비콘은 `public/` 아래에 둡니다.

## Deployment

`master` 브랜치에 push하면 GitHub Actions가 정적 사이트를 생성하고 GitHub Pages에 자동 배포합니다.
저장소의 `Settings > Pages > Build and deployment > Source`에서 `GitHub Actions`를 선택해야 합니다.
배포 전 `pnpm lint`와 `pnpm generate`를 실행해 코드와 정적 빌드를 확인하세요.
