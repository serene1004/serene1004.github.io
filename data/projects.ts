export interface ProjectSection {
  label: string
  title: string
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

export const projects: ProjectEntry[] = [
  {
    id: 'aisct',
    folderName: 'AISCT',
    icon: 'i-lucide-crosshair',
    title: '인공지능 기반 대테러 상황인지 및 의사결정지원',
    summary:
      '다중 CCTV와 AI 분석 결과를 한눈에 보며 상황을 판단할 수 있게 돕는 관제 웹 클라이언트입니다. 실시간 영상 위에 이상행동(침입·배회·군중) 탐지 결과와 설정 영역을 함께 보여, 운영자가 빠르게 대응할 수 있도록 구성했습니다.',
    role: '프론트엔드 개발자',
    sections: [
      {
        label: '담당 업무',
        title: '다중 영상 관제와 설정 흐름 구현',
        items: [
          '다중 CCTV 모니터링 화면(Screen3) UI 구현 및 개선',
          '백엔드 STOMP로 내려준 탐지·상태 데이터를 화면 상태·리스트·오버레이로 반영',
          '영상 위 이상행동 영역 설정(그리기·복원·적용) UX 구현',
          '카메라 프리셋·AI 모델 설정 흐름과 프론트 상태 구조 정리',
        ],
      },
      {
        label: '구현 포인트',
        title: '관제 화면과 설정을 연결하는 상태 관리',
        items: [
          '다중 영상 관제 UI — 그룹 탭, NxN 그리드, 드래그 정렬로 현장 운영에 맞는 CCTV 배치 화면 구성',
          '소켓 수신 데이터의 FE 처리 — STOMP로 받은 AI 분석·카메라 상태 값을 리스트·오버레이·화면 상태에 맞게 변환해 반영',
          '설정과 모니터링의 연결 — 침입·배회·군중 영역을 Canvas로 그리고 서버 좌표와 동기화해, 설정한 기준이 관제 화면에 이어지도록 처리',
          '상태 중심 구조 — 프리셋·모델 설정을 Pinia로 모아 props 연쇄를 줄이고, 수신 데이터 반영 흐름을 FE에서 일관되게 관리',
        ],
      },
    ],
  },
  {
    id: 'danbichat',
    folderName: '단비챗',
    icon: 'i-lucide-messages-square',
    title: '연구소 사내 메신저 및 데스크탑 앱',
    summary:
      '연구소 직원들과 사용하는 사내 메신저를 웹과 Electron 데스크탑 애플리케이션으로 확장해 개발하고 운영한 프로젝트입니다.',
    role: '프론트엔드 개발자',
    sections: [
      {
        label: '프로젝트 소개',
        title: '조직 내부 커뮤니케이션을 위한 웹 + 데스크탑 메신저',
        items: [
          '팀원들과 협업하여 사내 메신저를 개발하고, 사내 직원 대상 서비스 운영까지 함께 담당했습니다.',
          '화면 마크업과 서버 데이터 연동 등 프론트엔드 전반 개발을 맡았습니다.',
        ],
      },
      {
        label: '담당 업무',
        title: '멀티 플랫폼 프론트엔드 확장',
        items: [
          '웹 메신저 전반의 화면을 구현하고 Electron을 활용해 Windows 데스크탑 애플리케이션으로 확장했습니다.',
          '사내 업무 환경에 맞춘 멀티 플랫폼 지원을 고려해 동일한 사용자 흐름을 유지하도록 조정했습니다.',
        ],
      },
      {
        label: '핵심 구현',
        title: '백그라운드 입력 감지와 상태 관리 기능',
        items: [
          'node-global-key-listener를 활용해 백그라운드 상태에서도 사용자 입력을 감지하도록 구현했습니다.',
          '온라인, 자리 비움, 오프라인 상태 관리 기능을 사용자 활동 흐름에 맞춰 설계했습니다.',
        ],
      },
    ],
  },
  {
    id: 'heidi',
    folderName: 'HEIDI-AI',
    icon: 'i-lucide-shield-check',
    title: 'AI 기반 이미지·영상 비식별화 클라이언트',
    summary:
      '얼굴·번호판 등 개인정보를 AI로 블러/리플레이스 처리하는 Electron 데스크톱 작업 클라이언트입니다. 태스크 단위로 자동 탐지 결과와 수동 보정 영역을 함께 다루며, 운영자가 대량 이미지·영상을 안정적으로 비식별화할 수 있도록 구성했습니다.',
    role: '프론트엔드 개발자',
    sections: [
      {
        label: '담당 업무',
        title: '태스크 흐름과 비식별화 작업 UI 구현',
        items: [
          '태스크 생성·목록·상세 및 이미지·동영상 비식별 옵션 흐름 UI 구현',
          '백엔드 소켓으로 내려준 진행·상태 데이터를 배너·알림·리스트로 반영',
          '이미지·영상 위 수동 비식별 영역 설정(그리기·복원·적용) UX 구현',
          '로그인·다국어·Delivery 환경 등 프론트 상태·화면 흐름 정리',
        ],
      },
      {
        label: '구현 포인트',
        title: '자동 탐지와 수동 보정을 잇는 상태 관리',
        items: [
          '수동 비식별 UI — SVG 오버레이로 얼굴·번호판 영역을 그리고, AI·수동 좌표를 복원·수정·삭제할 수 있게 구성',
          '소켓 수신 데이터의 FE 처리 — 백엔드에서 내려준 처리 진행·완료/실패 값을 화면 상태·배너·알림에 맞게 변환해 반영',
          '자동 탐지와 수동 보정의 연결 — 서버 좌표와 수동 그린 영역을 같은 오버레이 모델로 맞춰 보정 결과가 저장·재조회까지 이어지도록 처리',
          '상태 중심 구조 — 소켓·태스크 진행·로그인·Delivery 설정을 Pinia로 모아 props 연쇄를 줄이고, 수신 데이터 반영 흐름을 FE에서 일관되게 관리',
        ],
      },
    ],
  },
];

export const getProjectById = (projectId: string) => (
  projects.find((project) => project.id === projectId)
);
