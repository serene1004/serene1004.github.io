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
      'Cesium 기반 3D 지도 위에 3D 오브젝트와 AI 분석 결과를 함께 시각화해 사용자에게 직관적인 모니터링 환경을 제공하는 프로젝트입니다.',
    role: '프론트엔드 개발자',
    sections: [
      {
        label: '프로젝트 소개',
        title: '3D 지도 기반 상황인지와 판단 보조 화면',
        items: [
          'Admin 페이지에서 등록한 3D 오브젝트들을 특정 지역의 3D 지도에 배치하고 사용자 화면에 렌더링했습니다.',
          'AI 모델의 분석 결과를 지도 위 정보와 함께 시각화해 대테러 상황을 빠르게 파악할 수 있도록 구성했습니다.'
        ]
      },
      {
        label: '담당 업무',
        title: '객체 배치부터 분석 결과 시각화까지',
        items: [
          '실시간 스트리밍 영상 데이터를 서버와 AI 모델이 처리한 뒤 반환하는 결과값을 사용자 화면에서 직관적으로 시각화했습니다.',
          '관리자 등록 데이터와 사용자 모니터링 화면이 자연스럽게 이어지도록 프론트엔드 렌더링 흐름을 정리했습니다.'
        ]
      },
      {
        label: '구현 포인트',
        title: '상황 데이터를 빠르게 읽히는 인터페이스',
        items: [
          '3D 오브젝트와 AI 분석 결과가 동시에 보여도 정보 우선순위가 흐려지지 않도록 화면 레이어를 조정했습니다.',
          '사용자가 즉시 판단할 수 있도록 지도 위 시각 요소와 AI 결과 표현의 연결성을 강화했습니다.'
        ]
      }
    ]
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
          '화면 마크업과 서버 데이터 연동 등 프론트엔드 전반 개발을 맡았습니다.'
        ]
      },
      {
        label: '담당 업무',
        title: '멀티 플랫폼 프론트엔드 확장',
        items: [
          '웹 메신저 전반의 화면을 구현하고 Electron을 활용해 Windows 데스크탑 애플리케이션으로 확장했습니다.',
          '사내 업무 환경에 맞춘 멀티 플랫폼 지원을 고려해 동일한 사용자 흐름을 유지하도록 조정했습니다.'
        ]
      },
      {
        label: '핵심 구현',
        title: '백그라운드 입력 감지와 상태 관리 기능',
        items: [
          'node-global-key-listener를 활용해 백그라운드 상태에서도 사용자 입력을 감지하도록 구현했습니다.',
          '온라인, 자리 비움, 오프라인 상태 관리 기능을 사용자 활동 흐름에 맞춰 설계했습니다.'
        ]
      }
    ]
  },
  {
    id: 'heidi',
    folderName: 'HEIDI-AI',
    icon: 'i-lucide-shield-check',
    title: '비식별화 솔루션 데스크탑 앱 + 소개/데모 웹',
    summary:
      'SaaS 형태의 개인정보 비식별화 Electron 데스크탑 애플리케이션과 소개 및 데모 웹사이트를 하나의 솔루션 경험으로 연결해 개발하고 유지보수한 프로젝트입니다.',
    role: '웹 퍼블리셔 -> 프론트엔드 개발자',
    sections: [
      {
        label: '데스크탑 제품',
        title: '설치형 Electron 앱 퍼블리싱과 기능 구현',
        items: [
          'Electron 기반 SaaS 프로그램의 퍼블리싱과 일부 프론트엔드 개발에 참여했고, 현재 유지보수를 담당하고 있습니다.',
          'Chart.js를 활용한 대시보드 시각화와 함께 Workspace 영역의 이미지 배치, SVG Rect 드래그 기반 블러 지정, 확대/축소 및 등 사용자 편의기능을 구현했습니다.'
        ]
      },
      {
        label: '소개 / 데모 웹',
        title: '솔루션 소개 페이지와 관리자 화면 개발',
        items: [
          '프로젝트 초기에는 퍼블리셔로 참여해 전체 소개 페이지와 관리자 페이지 퍼블리싱, UI 구현을 주도했습니다.',
          'Blur, Replace 기능을 체험할 수 있는 데모 웹과 소개 페이지를 다양한 디바이스에서 일관되게 보이도록 반응형으로 구현했습니다.'
        ]
      },
      {
        label: '전환과 유지보수',
        title: '퍼블리셔에서 프론트엔드 개발자로 역할 확장',
        items: [
          '퍼블리싱 이후 프론트엔드 개발과 유지보수를 맡으며 콘텐츠 수정, 기능 개선, 화면 최적화를 지속적으로 수행했습니다.',
          '설치형 제품과 소개 웹이 서로 다른 목적을 갖더라도 하나의 솔루션 경험으로 보이도록 톤과 인터랙션을 정리했습니다.'
        ]
      }
    ]
  },
]

export const getProjectById = (projectId: string) =>
  projects.find(project => project.id === projectId)
