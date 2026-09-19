import type { Component } from 'vue';
import ExternalProjectPanel from '~/components/panels/ExternalProjectPanel.vue';
import ProjectCasePanel from '~/components/panels/ProjectCasePanel.vue';
import ProjectGroupPanel from '~/components/panels/ProjectGroupPanel.vue';
import { projectGroups, projects } from '~/data/projects';

export interface FolderWindowOptions {
  width?: string
  height?: string
}

export interface FolderItem {
  id: string
  name: string
  icon?: string
  image?: string
  windowStyle?: 'note'
  component: Component
  componentProps?: Record<string, unknown>
  window?: FolderWindowOptions
}

const projectWindow: FolderWindowOptions = {
  width: 'min(52rem, calc(100vw - 2rem))',
  height: 'min(40rem, calc(100vh - 7rem))',
};

const noteWindow: FolderWindowOptions = {
  width: 'min(24rem, calc(100vw - 2rem))',
  height: 'min(26rem, calc(100vh - 7rem))',
};

const externalProjects = [
  {
    id: 'ima-kotoba',
    name: 'Ima Kotoba',
    image: '/images/folder-icons/ima-kotoba.svg',
    summary: '짧은 일본어 한두 문장으로 지금의 감정과 생각을 기록하고, 한 주의 흐름을 돌아보는 개인 기록 서비스입니다.',
    highlights: ['로그인 없이 Local Storage로 쓰는 체험 모드', 'Google OAuth와 Supabase 기반 개인 기록 저장', '주간 기록 수와 감정 통계 차트'],
    url: 'https://ima-kotoba.serene1004.dev/',
  },
  {
    id: 'kotoba-daily',
    name: 'Kotoba Daily',
    image: '/images/folder-icons/kotoba-daily.svg',
    summary: 'JLPT N5 718개 단어를 기반으로 신규 단어와 복습 단어를 함께 출제하고, 뜻을 직접 입력하며 학습하는 일본어 단어 학습 앱입니다. 데이터 생성부터 정답 판정, 복습 일정 계산, 단어장 관리까지 학습 흐름을 하나로 구성했습니다.',
    highlights: ['JLPT CSV → OpenAI Responses API 보강 → JSON Schema 검증 → n5.json 정규화 파이프라인', '신규 단어와 복습 단어를 함께 출제하고 입력 답안을 사전 뜻과 비교', '정답·오답 결과에 따른 다음 복습일 계산과 헷갈리는 단어 단어장 저장', '사전 뜻·품사·자연스러운 예문·Jisho 링크를 제공하는 학습 피드백', 'LocalStorage 기반 진행률·학습 위치·북마크 저장과 로딩·오류·빈 데이터 상태 대응'],
    url: 'https://serene1004.github.io/kotoba-daily/',
  },
  {
    id: 'webcanvas',
    name: 'WebCanvas',
    image: '/images/folder-icons/webcanvas.svg',
    summary: '캔버스 드로잉과 사진 보정을 하나의 작업 흐름으로 묶은 브라우저 기반 이미지 에디터입니다.',
    highlights: ['펜, 지우개, 참조 이미지 배치', '톤, 블러, 채도, 색조 보정', '편집 상태 JSON 및 PNG 내보내기'],
    url: 'https://serene1004.github.io/WebCanvas/',
  },
  {
    id: 'tactical-map',
    name: 'Tactical Map',
    image: '/images/folder-icons/tactical-map.svg',
    summary: '지도 위에서 아군, 적군 전력과 전술 표식을 편성하고 GeoJSON으로 내보낼 수 있는 전술 상황판입니다.',
    highlights: ['MapLibre 기반 3D 지형 지도', '군사 표식 기반 전력 배치와 편성 현황', 'GeoJSON 복사, 다운로드 및 지형 토글'],
    url: 'https://serene1004.github.io/tactical-map/',
  },
  {
    id: 'simulated-investment',
    name: '모의투자 서바이벌',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%23e45745'/%3E%3Cpath d='M14 40 26 28l8 8 16-18' fill='none' stroke='white' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
    summary: '가상의 시장 이슈와 종목 데이터를 바탕으로 투자 판단을 연습하는 웹 기반 주식 투자 시뮬레이션 게임입니다. 초기 자금으로 종목을 매수·매도하고, 페이즈마다 달라지는 시장 이벤트에 대응해 최종 자산과 수익률을 높이는 것이 목표입니다.',
    highlights: ['연습 모드와 랭킹 모드 제공', '5개 페이즈의 시장 브리핑·이벤트 기반 주가 변동·종목별 미니 차트', '매수·매도·전량 거래와 보유 자산 추적', '게임 진행 상태와 로컬 랭킹 저장 및 Supabase 연동 온라인 랭킹', 'Vue Router 화면 전환과 GitHub Pages 배포'],
    url: 'https://serene1004.github.io/simulated-investment/',
  },
];

const groupedProjectIds = new Set(projectGroups.flatMap((group) => group.projectIds));

export const folders: FolderItem[] = [
  ...projects.filter((project) => !groupedProjectIds.has(project.id)).map((project) => ({
    id: project.id,
    name: project.folderName,
    image: `/images/folder-icons/${project.id.replace('-admin', '')}.svg`,
    component: ProjectCasePanel,
    componentProps: {
      projectId: project.id,
    },
    window: projectWindow,
  })),
  ...projectGroups.map((group) => ({
    id: group.id,
    name: group.folderName,
    image: `/images/folder-icons/${group.id}.svg`,
    component: ProjectGroupPanel,
    componentProps: {
      projectIds: group.projectIds,
      tabs: group.tabs,
    },
    window: projectWindow,
  })),
  ...externalProjects.map((project) => ({
    id: project.id,
    name: project.name,
    image: project.image,
    component: ExternalProjectPanel,
    componentProps: {
      summary: project.summary,
      highlights: project.highlights,
      url: project.url,
    },
    window: noteWindow,
    windowStyle: 'note' as const,
  })),
];
