import type { Component } from 'vue';
import AboutMePanel from '~/components/panels/AboutMePanel.vue';
import ExternalProjectPanel from '~/components/panels/ExternalProjectPanel.vue';
import GuestbookPanel from '~/components/panels/GuestbookPanel.vue';
import PortfolioPanel from '~/components/panels/PortfolioPanel.vue';
import ProjectCasePanel from '~/components/panels/ProjectCasePanel.vue';
import { projects } from '~/data/projects';

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
    id: 'webcanvas',
    name: 'WebCanvas',
    image: 'https://serene1004.github.io/WebCanvas/favicon.svg',
    summary: '캔버스 드로잉과 사진 보정을 하나의 작업 흐름으로 묶은 브라우저 기반 이미지 에디터입니다.',
    highlights: ['펜, 지우개, 참조 이미지 배치', '톤, 블러, 채도, 색조 보정', '편집 상태 JSON 및 PNG 내보내기'],
    url: 'https://serene1004.github.io/WebCanvas/',
  },
  {
    id: 'tactical-map',
    name: 'Tactical Map',
    image: 'https://serene1004.github.io/tactical-map/favicon.svg',
    summary: '지도 위에서 아군, 적군 전력과 전술 표식을 편성하고 GeoJSON으로 내보낼 수 있는 전술 상황판입니다.',
    highlights: ['MapLibre 기반 3D 지형 지도', '군사 표식 기반 전력 배치와 편성 현황', 'GeoJSON 복사, 다운로드 및 지형 토글'],
    url: 'https://serene1004.github.io/tactical-map/',
  },
  {
    id: 'simulated-investment',
    name: '모의투자 서바이벌',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%23e45745'/%3E%3Cpath d='M14 40 26 28l8 8 16-18' fill='none' stroke='white' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
    summary: '5개 페이즈의 시장 흐름을 읽고 종목을 한 번씩 거래하며 최종 자산 순위를 겨루는 모의투자 게임입니다.',
    highlights: ['개장 전 흐름을 통한 종목 선택', '페이즈별 종목 1회 거래 제한', '최종 자산 점수 기반 랭킹'],
    url: 'https://serene1004.github.io/simulated-investment/',
  },
];

export const folders: FolderItem[] = [
  {
    id: 'about',
    name: 'About Me',
    image: '/images/folder-icons/about.svg',
    component: AboutMePanel,
    window: {
      width: 'min(40rem, calc(100vw - 2rem))',
      height: 'min(34rem, calc(100vh - 7rem))',
    },
  },
  {
    id: 'project',
    name: 'Portfolio',
    image: '/images/folder-icons/portfolio.svg',
    component: PortfolioPanel,
    window: {
      width: 'min(50rem, calc(100vw - 2rem))',
      height: 'min(38rem, calc(100vh - 7rem))',
    },
  },
  {
    id: 'guestbook',
    name: 'Guestbook',
    image: '/images/folder-icons/guestbook.svg',
    component: GuestbookPanel,
    window: {
      width: 'min(40rem, calc(100vw - 2rem))',
      height: 'min(34rem, calc(100vh - 7rem))',
    },
  },
  ...projects.map((project) => ({
    id: project.id,
    name: project.folderName,
    image: `/images/folder-icons/${project.id}.svg`,
    component: ProjectCasePanel,
    componentProps: {
      projectId: project.id,
    },
    window: projectWindow,
  })),
  ...externalProjects.map((project) => ({
    id: project.id,
    name: project.name,
    image: project.image,
    component: ExternalProjectPanel,
    componentProps: {
      title: project.name,
      summary: project.summary,
      highlights: project.highlights,
      url: project.url,
    },
    window: noteWindow,
    windowStyle: 'note' as const,
  })),
];
