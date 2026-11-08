# Serene1004 Portfolio

Windows OS를 모티브로 한 Vue 3·Nuxt 프론트엔드 포트폴리오입니다. 프로젝트 폴더를 열면 요약과 주요 작업을, AboutMe 폴더를 열면 소개와 연락처를 확인할 수 있습니다.

## Stack

- Nuxt 4, Vue 3, TypeScript
- GitHub Pages 정적 배포

## Requirements

- Node.js 22 이상
- pnpm 11 이상

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
pages/
└─ index.vue              # 프로필과 프로젝트 폴더가 있는 데스크톱 화면

components/
├─ ProjectWindow.vue      # 폴더에서 여는 프로젝트 정보 창
└─ ProjectContent.vue     # 업무 프로젝트 내용

data/
├─ folders.ts             # 데스크톱 폴더 목록
├─ projects.ts            # Work 상세 및 그룹 정보
└─ side-projects.ts       # Side Projects 설명과 링크
```

## Content editing

- 폴더 이름과 아이콘은 `data/folders.ts`에서 관리합니다.
- Work 상세와 그룹 탭은 `data/projects.ts`에서 관리합니다.
- Side Projects 상세, 기능, 링크는 `data/side-projects.ts`에서 관리합니다.
- 정적 자산은 `public/` 아래에 둡니다.

## Deployment

`master` 브랜치에 push하면 GitHub Actions가 정적 사이트를 생성하고 GitHub Pages에 자동 배포합니다. 배포 전 `pnpm lint`와 `pnpm generate`로 확인하세요.
