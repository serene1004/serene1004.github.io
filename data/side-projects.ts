export interface SideProject {
  id: string
  name: string
  summary: string
  highlights: string[]
  url: string
}

export const sideProjects: SideProject[] = [
  {
    id: 'ima-kotoba',
    name: 'Ima Kotoba',
    summary: '짧은 일본어 한두 문장으로 지금의 감정과 생각을 기록하고, 한 주의 흐름을 돌아보는 개인 기록 서비스입니다.',
    highlights: ['로그인 없이 바로 써보는 체험 모드', 'Google OAuth 로그인과 Supabase를 통한 개인 기록 저장', '일본어 기록과 감정 작성, 주간 감정 흐름 돌아보기'],
    url: 'https://ima-kotoba.serene1004.dev/',
  },
  {
    id: 'kotoba-daily',
    name: 'Kotoba Daily',
    summary: 'JLPT N5·N4·N3 중 학습 레벨을 고르고, 새 단어와 복습 단어를 세트로 학습하는 일본어 단어 앱입니다.',
    highlights: ['N5·N4·N3 레벨 선택과 신규·복습 단어 5개 또는 10개 세트', '히라가나·가타카나를 캔버스에 직접 써보는 가나 연습', '진행 중인 학습 이어하기와 난이도에 따른 복습 일정 조정', '학습 달력·최근 학습 추이와 헷갈리는 단어 단어장'],
    url: 'https://serene1004.github.io/kotoba-daily/',
  },
  {
    id: 'seoul-travel',
    name: 'Seoul Travel',
    summary: '서울의 관광명소·카페·식당·자연 장소를 지도에서 찾고, 날씨와 대중교통 이동 경로를 함께 확인하는 여행 도우미입니다.',
    highlights: ['관광명소·카페·식당·자연 장소 지도 탐색과 다국어 검색', '저장 목록에서 여행 후보 비교와 장소 상세 정보 확인', '현재 날씨·추천 복장 확인', '출발지·도착지 기반 대중교통 경로 안내'],
    url: 'https://serene1004.github.io/SeoulTravel/',
  },
  {
    id: 'web-puzzle',
    name: 'webPuzzle',
    summary: '이미지와 난이도를 고른 뒤, 전체 화면 캔버스에서 조각을 연결해 완성하는 브라우저 기반 직소 퍼즐입니다.',
    highlights: ['이미지 선택과 Easy·Normal·Hard 난이도 설정', '조각 연결·그룹 이동·분리와 캔버스 확대·이동', '원본 이미지 참조, 진행 이어하기와 완성 시간 확인'],
    url: 'https://serene1004.github.io/webPuzzle/',
  },
  {
    id: 'webcanvas',
    name: 'webCanvas',
    summary: '드로잉과 이미지 보정을 한 작업 흐름으로 다루고, PNG 또는 편집 가능한 프로젝트로 내보내는 브라우저 기반 캔버스 에디터입니다.',
    highlights: ['빈 캔버스 드로잉과 이미지 배치', '밝기·대비·채도·블러·색조 보정', '펜·지우개·부분 블러와 실행 취소·다시 실행', 'PNG 내보내기와 편집 가능한 프로젝트 저장·가져오기'],
    url: 'https://serene1004.github.io/webCanvas/',
  },
  {
    id: 'simulated-investment',
    name: '모의투자 서바이벌',
    summary: '시장 이벤트에 대응해 종목을 거래하고, 최종 자산과 수익률을 겨루는 웹 기반 투자 시뮬레이션 게임입니다.',
    highlights: ['5개 페이즈 시장 브리핑과 이벤트 기반 주가 변동', '매수·매도·전량 거래와 보유 자산 추적', '연습 모드와 Supabase 온라인 랭킹 등록·조회'],
    url: 'https://serene1004.github.io/simulated-investment/',
  },
];

export const getSideProjectById = (id: string) => sideProjects.find((project) => project.id === id);
