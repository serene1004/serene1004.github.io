# Serene1004 Portfolio

Three.js 우주 배경 위에서 데스크톱 폴더와 창을 열어 보는 Nuxt 4 포트폴리오입니다. 창 드래그·최소화·최대화, 다크 모드, 서울 날씨와 달력, 그리고 선택적으로 연결되는 방명록을 제공합니다.

## Stack

- Nuxt 4, Vue 3, TypeScript, Pinia, Nuxt UI
- Three.js 배경 캔버스
- NestJS, Prisma, PostgreSQL (방명록 API)

## Run

Node.js와 Yarn 1이 필요합니다.

```bash
yarn install
yarn dev
```

브라우저에서 `http://localhost:3000`을 엽니다. 방명록 API가 실행되지 않아도 포트폴리오는 사용할 수 있으며, 방명록 아이콘만 표시되지 않습니다.

## Guestbook API

PostgreSQL과 API를 함께 실행하려면 루트의 `.env.local`과 `api/.env.local`에 다음 값을 설정한 뒤 Docker Compose를 실행합니다.

```env
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
DATABASE_URL=
NUXT_PUBLIC_API_BASE=http://localhost:4000/api
```

```bash
docker compose up --build
```

API는 `http://localhost:4000/api/entries`에서 제공되며, 컨테이너 시작 시 Prisma 마이그레이션을 적용합니다.

## Build and deploy

```bash
yarn build
yarn generate
yarn deploy
```

`yarn deploy`는 정적 결과물(`.output/public`)을 GitHub Pages에 배포합니다. 배포 환경에서 방명록을 쓰려면 `NUXT_PUBLIC_API_BASE`를 공개 API 주소로 설정해야 합니다.

## Content map

- `data/folders.ts`: 데스크톱 아이콘, 창, 패널의 단일 등록 지점
- `data/projects.ts`: 내부 프로젝트 포트폴리오 내용
- `components/panels/`: About, Portfolio, Project, Guestbook 패널
- `stores/WindowStore.ts`: 창 열기, 포커스, 최소화, 닫기 상태
- `api/`: 방명록 NestJS·Prisma API

`_legacy-vue`는 이전 구현 보관용 디렉터리입니다.
