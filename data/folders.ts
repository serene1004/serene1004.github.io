import { projectGroups, projects } from './projects';
import type { PortfolioLocale } from './locale-messages';

export interface PortfolioFolder {
  id: string
  name: string
  nameJa?: string
  icon?: string
}

export const profileFolder: PortfolioFolder = {
  id: 'serene1004',
  name: 'AboutMe',
  icon: '/images/folder-icons/aboutme.png',
};

const groupedProjectIds = new Set(projectGroups.flatMap((group) => group.projectIds));
const workFolderIcons: Record<string, string> = {
  danbichat: '/images/folder-icons/danbichat.png',
  aisct: '/images/folder-icons/aisct.png',
  heidi: '/images/folder-icons/heidi.png',
  'aetem-v2': '/images/folder-icons/aetem.png',
};

export const workFolders: PortfolioFolder[] = [
  ...projects
    .filter((project) => !groupedProjectIds.has(project.id))
    .map((project) => ({
      id: project.id,
      name: project.folderName,
      icon: workFolderIcons[project.id],
    })),
  ...projectGroups.map((group) => ({
    id: group.id,
    name: group.folderName,
    icon: workFolderIcons[group.id],
  })),
];

export const sideProjectFolders: PortfolioFolder[] = [
  {
    id: 'ima-kotoba',
    name: 'Ima Kotoba',
    icon: '/images/folder-icons/ima-kotoba.svg',
  },
  {
    id: 'kotoba-daily',
    name: 'Kotoba Daily',
    icon: '/images/folder-icons/kotoba-daily.svg',
  },
  {
    id: 'seoul-travel',
    name: 'Seoul Travel',
    icon: '/images/folder-icons/seoul-travel.png',
  },
  {
    id: 'web-puzzle',
    name: 'webPuzzle',
    icon: '/images/folder-icons/web-puzzle.png',
  },
  {
    id: 'webcanvas',
    name: 'webCanvas',
    icon: '/images/folder-icons/webcanvas.svg',
  },
  // 프로젝트 보완 후 오픈
  // {
  //   id: 'simulated-investment',
  //   name: '모의투자 서바이벌',
  //   nameJa: '模擬投資サバイバル',
  //   icon: '/images/folder-icons/simulatedinvestment.svg',
  // },
];

export const folders: PortfolioFolder[] = [profileFolder, ...workFolders, ...sideProjectFolders];

export const getFolderDisplayName = (folderId: string, locale: PortfolioLocale) => {
  if (folderId === 'terminal') return locale === 'ja' ? 'ターミナル' : 'Terminal';
  const folder = folders.find((item) => item.id === folderId);
  return locale === 'ja' ? folder?.nameJa ?? folder?.name ?? folderId : folder?.name ?? folderId;
};
