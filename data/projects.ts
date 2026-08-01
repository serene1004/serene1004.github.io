export interface ProjectSection {
  label: string
  title?: string
  items: string[]
}

export interface ProjectEntry {
  id: string
  folderName: string
  icon: string
  title: string
  summary: string
  role: string
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
    icon: 'i-lucide-messages-square',
    title: 'DanbiChat — 실시간 업무 메신저',
    summary: 'Slack·Discord형 사내 메신저 클라이언트입니다. 채널과 DM 기반 협업을 중심으로 파일함, 게시판, 알림, 사용자 상태를 한 화면에서 다루며 Electron 데스크톱 앱과 웹 브라우저에서 같은 Vue 앱으로 동작합니다.',
    role: '프론트엔드 개발 · UI 설계부터 인증, 실시간 채팅, Electron 환경 연동까지 담당',
    sections: [
      { label: '담당 업무', items: ['좌측 네비게이션·중앙 채팅·우측 컨텍스트 패널로 구성한 Discord형 UI 셸을 설계하고, 채널·DM·파일함·게시판 전환 흐름을 구현했습니다.', '로그인, 토큰 저장·첨부, 만료 시 재로그인 유도와 로그아웃 시 소켓 해제 등 세션 흐름을 구성했습니다.', '채널·DM 생성과 메시지·멘션·이모티콘·첨부·입력 중 표시를 구현하고, STOMP 이벤트 유형별로 화면과 목록을 갱신했습니다.', '미읽음, 웹·데스크톱 알림, 창 아이콘 깜빡임, 온라인·자리비움·AFK 상태 및 방별 파일함·게시판·할 일을 구현했습니다.'] },
      { label: '핵심 구현', items: ['Vue 코드베이스 하나로 웹과 Electron을 제공하고, 자동 로그인·창 제어·다운로드·AFK·백그라운드 알림만 환경별로 분기했습니다.', '전체 공지·사용자별·방별 STOMP 구독을 분리하고 ping·재연결 흐름을 두어 메시지, 방 생성, 상태 변경, 강제 로그아웃 이벤트를 처리했습니다.', '현재 창의 포커스와 열람 중인 방을 기준으로 알림을 제어해, 같은 방을 보고 있을 때는 목록만 갱신하도록 구성했습니다.'] },
    ],
  },
  {
    id: 'aisct',
    folderName: 'AISCT',
    icon: 'i-lucide-crosshair',
    title: 'AISCT — 대테러 AI 관제 클라이언트',
    summary: '행사 선택 후 일정, 지도 기반 탐지 알림, 카메라 관제를 멀티윈도우로 제공하는 대테러 AI 관제 웹 클라이언트입니다. REST API와 STOMP로 전달받은 탐지·카메라 상태를 화면에 시각화합니다.',
    role: '프론트엔드 개발 · Screen 1~3 중 일정·지도·그리드 관제와 Cesium 로직 담당',
    sections: [
      { label: '담당 업무', items: ['Screen1에서 행사 일정과 시간을 시각화하고, Screen2에서 지도와 탐지 패널을 구성했습니다.', '위험인물·이상행동 탐지 시 카메라명, 탐지 내용, 크롭 이미지를 패널에 노출하고 지도 카메라 위치에 경고 이펙트를 연결했습니다.', 'Screen3에서 2×2~5×5 카메라 관제 그리드와 탐지 오버레이를 구현했습니다.', '배터리·온도 상태, 탐지 이력, 모델 on/off 및 영역 drawing UI를 구현했습니다.', 'REST·STOMP 수신 데이터를 각 화면의 탐지·카메라 상태 UI로 변환해 반영했습니다.'] },
      { label: '핵심 구현', items: ['로그인 → 행사 선택 → Screen1·2·3이 같은 행사 컨텍스트로 동작하도록 상태와 API 연동을 구성했습니다.', 'Cesium 지도상의 카메라 위치와 탐지 패널을 연결해, 탐지 발생 위치와 내용을 즉시 파악할 수 있게 했습니다.', '관제 화면 밀도에 맞춰 그리드 전환과 카메라별 탐지 문구·상태·이력 노출을 한 흐름으로 구성했습니다.'] },
    ],
  },
  {
    id: 'aisct-admin',
    folderName: 'AISCT · Admin',
    icon: 'i-lucide-map',
    title: 'AISCT Admin — 대테러 관제 운영 백오피스',
    summary: 'AISCT 운영자가 행사, 카메라, 경호 자산, 인물, 관리자 계정을 관리하고 행사별 COP 외부 지도에서 보안 자산과 동선을 편집하는 백오피스입니다.',
    role: '프론트엔드 개발 · 행사 운영 데이터 관리와 Cesium 기반 COP 외부 지도 편집 담당',
    sections: [
      { label: '담당 업무', items: ['행사 정보·일정·출발지·경유지·도착지를 등록·수정·종료하고, 상태와 일정의 시간 순서를 검증했습니다.', 'Cesium 외부 지도에서 행사 구역(Polygon), 이동 동선(Polyline), 카메라·경호 인력·장비를 배치·수정·삭제했습니다.', '카메라 설치 위치·방향·표시 별칭과 구역 단계·자산 유형별 가시성을 설정하고, 행사별 좌표·속성을 저장했습니다.', '계정·권한, 주요 인사·위험 인물, 카메라·그룹, 경호 인력·장비 관리 및 이미지 업로드·삭제를 API와 연동했습니다.'] },
      { label: '핵심 구현', items: ['행사 일정·장소·카메라·경호 자산을 행사 단위로 연결해 COP 지도에서 한 번에 운영할 수 있도록 구성했습니다.', 'Cesium 엔티티를 기반으로 자산을 관리하고, Pinia의 편집 상태·엔티티 목록과 서버의 좌표·속성·지도 캡처 데이터를 동기화했습니다.', '로그인 토큰과 관리자 권한에 따라 메뉴·접근 범위를 제어하고 비밀번호 변경·탐지 이력 초기화 흐름을 제공했습니다.'] },
    ],
  },
  {
    id: 'heidi',
    folderName: 'HEIDI-AI',
    icon: 'i-lucide-shield-check',
    title: 'HEIDI-AI — 개인정보 비식별 작업 클라이언트',
    summary: '얼굴·번호판 등 개인정보를 AI로 블러 또는 리플레이스 처리하는 작업 클라이언트입니다. 작업자는 태스크 단위로 파일을 업로드하고 AI 탐지 결과를 검토한 뒤, 미검출 영역을 수동으로 보완할 수 있습니다.',
    role: '프론트엔드 개발 · 태스크 흐름, 수동 비식별 도구와 실시간 진행 상태 담당',
    sections: [
      { label: '담당 업무', items: ['이미지·동영상 태스크 생성, 기업별 기능 옵션과 AI 처리 요청 UI를 구현했습니다.', '태스크 검색·필터·페이지네이션·취소·다운로드·수동 비식별 진입과 진행률 배너·토스트를 구현했습니다.', '이미지에서 AI 검출 좌표·사용자 지정 좌표·AI 제외 목록을 SVG 오버레이로 표시했습니다.', '영역 추가·적용·제외·저장과 블러 미리보기·저장을 연결했습니다.', '동영상 재생·프레임 단위 오버레이·좌표 보정·타임라인을 구현하고, 트래킹 결과와 블러 요청 API를 연동했습니다.'] },
      { label: '핵심 구현', items: ['생성 → 업로드 → 서버 AI 처리 → 소켓 진행 반영 → 수동 보정 → 다운로드로 이어지는 태스크 라이프사이클을 하나의 클라이언트 흐름으로 구성했습니다.', '자동 탐지, 사용자 지정, AI 제외를 하나의 오버레이 모델로 관리해 미검출 보완과 재조회·저장이 끊기지 않도록 했습니다.', '레이아웃에서 소켓 메시지를 수신해 이벤트 버스와 Pinia로 분기하고, 목록·배너·앱 재실행 후 재개 로직이 같은 진행 상태를 보게 했습니다.'] },
    ],
  },
  {
    id: 'heidi-admin',
    folderName: 'HEIDI · Admin',
    icon: 'i-lucide-building-2',
    title: 'HEIDI Admin — SaaS 슈퍼관리자 백오피스',
    summary: '개인정보 비식별 SaaS HEIDI의 슈퍼관리자용 백오피스입니다. 기업 온보딩과 계약·기능 설정, 포인트 운영, 다국어 공지, 전 테넌트 태스크 모니터링을 한 곳에서 수행합니다.',
    role: '프론트엔드 개발 · 테넌트 운영, 포인트 정산, 전 테넌트 태스크 모니터링 및 공지 CMS 담당',
    sections: [
      { label: '담당 업무', items: ['기업 생성·상세·사용여부·탈퇴 흐름과 관리자 계정, 계약 정보, 첨부파일, 테넌트 기능 설정 UI를 구현했습니다.', '전 기업 JOB을 상태·타입·대상·옵션·검색어로 조회하고, 상태별 취소 조건을 분기해 취소 API를 연동했습니다.', '유상 충전·무상 적립·차감, 유효기간, 다국어 사유, 잔액 검증을 포함한 포인트 운영 흐름을 구현했습니다.', '한·영·일 Quill 에디터, 이미지 업로드, 첨부 매핑, 노출 설정을 갖춘 패치노트·서비스 공지 CMS를 구현했습니다.'] },
      { label: '핵심 구현', items: ['테넌트 생성부터 계약·기능 프로비저닝·사용 여부·탈퇴·삭제까지의 운영 라이프사이클을 REST와 연결했습니다.', '모델·큐·픽셀·수동 비식별·좌표 다운로드 플래그를 기업 단위로 관리해 작업 클라이언트의 기능 노출을 통제했습니다.', '슈퍼관리자 로그인 환경의 401·403 처리, 권한별 메뉴, 브레드크럼, 비밀번호 변경 등 공통 운영 UX를 구성했습니다.'] },
    ],
  },
  {
    id: 'aetem-v2',
    folderName: 'AETEM v2',
    icon: 'i-lucide-map-pinned',
    title: 'AETEM v2 — 작전 지휘통제 클라이언트',
    summary: '육군 여단·대대급 작전 지휘통제 웹 클라이언트입니다. 여단 OPORD 수신부터 대대 COP 계획·실행까지의 작전 흐름을 지원하며, 내부 구축 타일서버 기반 OpenLayers 지도를 사용합니다.',
    role: '프론트엔드 개발 · Screen 1~3, 국면 상태, 지도·DEM·포인트클라우드와 부대 관리 담당',
    sections: [
      { label: '담당 업무', items: ['여단 OPORD, 대대 COP 계획, 대대 COP 실행 화면 전반과 선택 국면 ID 기반의 상태·데이터 흐름을 구현했습니다.', 'DEM을 hillshade로 변환해 내부 타일서버에 등록하고, DEM bounds에 맞춰 OpenLayers 이동 영역을 제한했습니다.', 'Potree와 Cesium을 별도 다이얼로그에서 사용하는 포인트클라우드 시각화를 구현했습니다.', '부대 목록·상급부대·제대 등 속성 관리와 지도 클릭으로 부대 위치 좌표를 지정하는 기능을 구현했습니다.'] },
      { label: '핵심 구현', items: ['OPORD → COP 계획 → COP 실행이 선택한 국면 단위로 이어지도록 UI, 상태, API 연동을 구성했습니다.', 'situationStore의 국면 정보를 OPORD·COP API 공통 키로 사용하고, 국면 전환 시 COP 상태를 초기화해 컨텍스트 혼선을 막았습니다.', '외부 지도 서비스가 아닌 내부 타일서버와 DEM 산출물을 지도 소스로 연결해 작전 환경의 지도 제약에 맞췄습니다.'] },
    ],
  },
  {
    id: 'ai-studio-light',
    folderName: 'AI-STUDIO Light',
    icon: 'i-lucide-scan-line',
    title: 'AI-STUDIO Light — 어노테이션·태스크 프론트엔드',
    summary: 'AETEM v2용 학습 데이터 어노테이션 도구입니다. 태스크 생성부터 탐지·식별 라벨링, 완료·재학습, 운영 현황 대시보드까지 이어지는 흐름을 제공합니다.',
    role: '프론트엔드 전반 · UI/UX, 화면 구현, API 연동, Docker 배포 구성 담당',
    sections: [
      { label: '담당 업무', items: ['로그인·로그아웃, Bearer 토큰, 비공개 라우트 가드와 세션 만료 처리를 구현했습니다.', '태스크·모델·시스템 현황을 3분할 대시보드로 구성하고, KPI·수집 데이터·mAP·CPU·메모리·디스크·GPU 데이터를 차트와 폴링으로 시각화했습니다.', '태스크 생성·필터·상세 수정·보관일·자동삭제·재학습 UI를 구현하고, 백엔드 API를 연동했습니다.', 'Canvas pan/zoom, bbox 생성·리사이즈·회전, 빈 이미지 저장, 전체 파일 작업 후 완료·재완료 게이트를 구현했습니다.'] },
      { label: '핵심 구현', items: ['로그인 → 태스크 생성·조회 → WAIT 수정 → 어노테이션 → 전체 파일 완료 → 재학습으로 이어지는 태스크 파이프라인을 구성했습니다.', '탐지는 회전 가능한 bbox, 식별은 bbox 없는 Class 선택으로 모델 유형별 UX를 분리했습니다.', 'Chart.js와 리소스 폴링으로 수집·학습·시스템 상태를 한 화면에서 확인할 수 있게 했습니다.'] },
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
    folderName: 'AETEM v2',
    projectIds: ['aetem-v2', 'ai-studio-light'],
    tabs: ['Client Page', 'Annotation Page'],
  },
];
