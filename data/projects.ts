export interface ProjectSection {
  label: string
  title?: string
  items: string[]
}

export interface ProjectEntry {
  id: string
  folderName: string
  title: string
  summary: string
  sections: ProjectSection[]
}

export interface ProjectGroup {
  id: string
  folderName: string
  projectIds: string[]
  tabs: string[]
}

export const projects: ProjectEntry[] = [
  {
    id: 'danbichat',
    folderName: 'DanbiChat',
    title: 'DanbiChat — 실시간 업무 메신저',
    summary: 'Slack·Discord형 사내 메신저 클라이언트입니다. 채널과 DM 기반 협업을 중심으로 파일함, 게시판, 알림, 사용자 상태를 한 화면에서 다루며 Electron 데스크톱 앱과 웹 브라우저에서 같은 Vue 앱으로 동작합니다.',
    sections: [
      { label: '담당 업무', items: ['채널·DM·파일함·게시판을 오가는 메신저 화면과 메시지 작성·첨부·멘션 기능을 구현했습니다.', '로그인 세션과 토큰 만료·로그아웃 흐름을 구성하고, 웹·데스크톱 알림과 사용자 상태 UI를 연결했습니다.', '방별 할 일·파일함·게시판, 미읽음 표시와 메시지 입력 중 상태를 구현했습니다.'] },
      { label: '핵심 구현', items: ['Vue 앱 하나에서 웹과 Electron을 지원하고, 창 제어·다운로드·자동 로그인·백그라운드 알림만 실행 환경별로 분기했습니다.', '전체·사용자·방 단위 STOMP 구독과 ping·재연결 처리를 분리해 메시지, 방 생성, 상태 변경 이벤트를 동기화했습니다.', '현재 창의 포커스와 열람 중인 방을 기준으로 알림을 제어해 활성 채팅의 중복 알림을 줄였습니다.'] },
    ],
  },
  {
    id: 'aisct',
    folderName: 'AISCT',
    title: 'AISCT — 대테러 AI 관제 클라이언트',
    summary: '행사 선택 후 일정, 지도 기반 탐지 알림, 카메라 관제를 멀티윈도우로 제공하는 대테러 AI 관제 웹 클라이언트입니다. REST API와 STOMP로 전달받은 탐지·카메라 상태를 화면에 시각화합니다.',
    sections: [
      { label: '담당 업무', items: ['행사 일정 화면, Cesium 지도 기반 탐지 화면, 카메라 관제 화면을 구현했습니다.', '카메라 그리드와 탐지 오버레이, 배터리·온도 상태, 탐지 이력, 모델 제어 및 영역 설정 UI를 구성했습니다.', 'REST·STOMP 데이터를 화면에 맞는 탐지·카메라 상태로 연결했습니다.'] },
      { label: '핵심 구현', items: ['행사 선택 상태를 Screen 1~3에서 공유해 일정·지도·관제 정보가 같은 행사 기준으로 이어지도록 구성했습니다.', '탐지 이벤트를 Cesium 카메라 위치와 패널 정보에 연결해 발생 위치와 내용을 함께 확인할 수 있도록 했습니다.', '2×2~5×5 그리드 전환에 따라 카메라별 탐지·상태·이력을 표시하도록 관제 화면을 구성했습니다.'] },
    ],
  },
  {
    id: 'aisct-admin',
    folderName: 'AISCT · Admin',
    title: 'AISCT Admin — 대테러 관제 운영 백오피스',
    summary: 'AISCT 운영자가 행사, 카메라, 경호 자산, 인물, 관리자 계정을 관리하고 행사별 COP 외부 지도에서 보안 자산과 동선을 편집하는 백오피스입니다.',
    sections: [
      { label: '담당 업무', items: ['행사 일정과 경로를 등록·수정·종료하고 상태 및 시간 순서를 검증하는 운영 화면을 구현했습니다.', '계정·권한, 인물, 카메라·그룹, 경호 인력·장비 관리와 이미지 업로드를 API에 연결했습니다.', 'Cesium 지도에서 행사 구역·이동 경로·보안 자산을 배치하고 위치·방향·표시 옵션을 편집하는 UI를 구현했습니다.'] },
      { label: '핵심 구현', items: ['행사별 일정·장소·카메라·경호 자산을 COP 지도 컨텍스트로 묶어 한 화면에서 편집할 수 있도록 구성했습니다.', 'Cesium 엔티티와 Pinia 편집 상태를 연결하고 좌표·속성·지도 캡처 데이터를 서버와 동기화했습니다.', '구역 단계와 자산 유형별 가시성을 제어해 지도에서 필요한 보안 정보를 구분해 확인하도록 구성했습니다.'] },
    ],
  },
  {
    id: 'heidi',
    folderName: 'HEIDI-AI',
    title: 'HEIDI-AI — 개인정보 비식별 작업 클라이언트',
    summary: '얼굴·번호판 등 개인정보를 AI로 블러 또는 리플레이스 처리하는 작업 클라이언트입니다. 작업자는 태스크 단위로 파일을 업로드하고 AI 탐지 결과를 검토한 뒤, 미검출 영역을 수동으로 보완할 수 있습니다.',
    sections: [
      { label: '담당 업무', items: ['이미지·동영상 태스크 생성부터 AI 처리 요청, 진행 조회, 취소·다운로드까지의 화면을 구현했습니다.', '이미지의 검출·사용자 지정·제외 영역을 SVG 오버레이로 표시하고 미리보기·수정·저장을 연결했습니다.', '동영상 재생·프레임별 오버레이·좌표 보정·타임라인과 트래킹 결과 검토 UI를 구현했습니다.'] },
      { label: '핵심 구현', items: ['태스크 생성 → 업로드 → AI 처리 → 수동 보정 → 결과 다운로드 흐름을 하나의 클라이언트 라이프사이클로 구성했습니다.', '자동 탐지·사용자 지정·AI 제외 영역을 동일한 오버레이 모델로 관리해 검토와 수정 결과가 재조회·저장에도 유지되도록 했습니다.', '소켓 진행 상태를 이벤트 버스와 Pinia로 연결해 목록·진행 배너·재접속 후 화면이 같은 태스크 상태를 표시하도록 했습니다.'] },
    ],
  },
  {
    id: 'heidi-admin',
    folderName: 'HEIDI · Admin',
    title: 'HEIDI Admin — SaaS 슈퍼관리자 백오피스',
    summary: '개인정보 비식별 SaaS HEIDI의 슈퍼관리자용 백오피스입니다. 기업 온보딩과 계약·기능 설정, 포인트 운영, 다국어 공지, 전 테넌트 태스크 모니터링을 한 곳에서 수행합니다.',
    sections: [
      { label: '담당 업무', items: ['기업·관리자 계정·계약·첨부파일 관리 화면과 기업별 기능 설정 UI를 구현했습니다.', '전 기업 작업을 조건별로 조회하고 상태에 따른 취소 기능을 API와 연결했습니다.', '충전·적립·차감·유효기간·잔액 검증을 포함한 포인트 운영 화면과 한·영·일 공지 CMS를 구현했습니다.'] },
      { label: '핵심 구현', items: ['테넌트 생성부터 계약·기능 설정·사용 중지·탈퇴까지 운영 흐름을 REST API와 연결했습니다.', '모델·큐·픽셀·수동 비식별·좌표 다운로드 설정을 기업 단위로 관리해 클라이언트의 기능 노출을 제어했습니다.', '권한별 메뉴와 401·403 처리, 비밀번호 변경 등 슈퍼관리자 공통 UX를 구성했습니다.'] },
    ],
  },
  {
    id: 'aetem-v2',
    folderName: 'AETEM',
    title: 'AETEM — 작전 지휘통제 클라이언트',
    summary: '육군 여단·대대급 작전 지휘통제 웹 클라이언트입니다. 여단 OPORD 수신부터 대대 COP 계획·실행까지의 작전 흐름을 지원하며, 내부 구축 타일서버 기반 OpenLayers 지도를 사용합니다.',
    sections: [
      { label: '담당 업무', items: ['여단 OPORD와 대대 COP 계획·실행 화면, 국면별 상태·데이터 흐름을 구현했습니다.', '내부 타일서버 기반 OpenLayers 지도와 DEM 지형 표현, Potree·Cesium 포인트클라우드 뷰어를 연결했습니다.', '부대 정보 관리와 지도에서 위치 좌표를 지정하는 기능을 구현했습니다.'] },
      { label: '핵심 구현', items: ['OPORD → COP 계획 → COP 실행 흐름을 선택 국면 기준으로 연결하고, 국면 전환 시 COP 상태를 초기화하도록 구성했습니다.', 'situationStore의 국면 ID를 관련 API의 공통 컨텍스트로 사용해 화면과 데이터 간 국면 혼선을 방지했습니다.', 'DEM bounds로 지도 이동 영역을 제한하고 내부 타일서버를 지도 소스로 연결해 작전 환경의 지도 제약을 반영했습니다.'] },
    ],
  },
  {
    id: 'ai-studio-light',
    folderName: 'AI-STUDIO Light',
    title: 'AI-STUDIO Light — 어노테이션·태스크 프론트엔드',
    summary: 'AETEM용 학습 데이터 어노테이션 도구입니다. 태스크 생성부터 탐지·식별 라벨링, 완료·재학습, 운영 현황 대시보드까지 이어지는 흐름을 제공합니다.',
    sections: [
      { label: '담당 업무', items: ['로그인·세션 만료 처리와 태스크·모델·시스템 현황 대시보드를 구현했습니다.', '태스크 생성·조회·수정·보관·자동 삭제·재학습 화면을 API와 연결했습니다.', '어노테이션 도구의 UX/UI를 직접 설계하고, Canvas 기반 이미지 이동·확대, bbox 편집, 파일별 완료·재완료 흐름을 구현했습니다.'] },
      { label: '핵심 구현', items: ['태스크 생성·조회 → 어노테이션 → 전체 파일 완료 → 재학습으로 이어지는 작업 흐름을 구성했습니다.', '탐지 모델에는 회전 가능한 bbox를, 식별 모델에는 Class 선택을 제공해 모델 유형별 입력 방식을 분리했습니다.', 'Chart.js와 주기적 리소스 조회를 사용해 수집·학습·시스템 상태를 대시보드에 시각화했습니다.'] },
    ],
  },
];

export const getProjectById = (projectId: string) => (
  projects.find((project) => project.id === projectId)
);

export const projectGroups: ProjectGroup[] = [
  {
    id: 'aisct',
    folderName: 'AISCT',
    projectIds: ['aisct', 'aisct-admin'],
    tabs: ['Client Page', 'Admin Page'],
  },
  {
    id: 'heidi',
    folderName: 'HEIDI-AI',
    projectIds: ['heidi', 'heidi-admin'],
    tabs: ['Client Page', 'Admin Page'],
  },
  {
    id: 'aetem-v2',
    folderName: 'AETEM',
    projectIds: ['aetem-v2', 'ai-studio-light'],
    tabs: ['Client Page', 'Annotation Page'],
  },
];
