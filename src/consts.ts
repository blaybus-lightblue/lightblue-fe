export const CITIES = [
  { value: 'SEOUL', label: '서울' },
  { value: 'BUSAN', label: '부산' },
  { value: 'DAEGU', label: '대구' },
  { value: 'INCHEON', label: '인천' },
  { value: 'GWANGJU', label: '광주' },
  { value: 'DAEJEON', label: '대전' },
  { value: 'ULSAN', label: '울산' },
  { value: 'SEJONG', label: '세종' },
  { value: 'GYEONGGI', label: '경기도' },
  { value: 'GANGWON', label: '강원도' },
  { value: 'CHUNGBUK', label: '충청북도' },
  { value: 'CHUNGNAM', label: '충청남도' },
  { value: 'JEONBUK', label: '전라북도' },
  { value: 'JEONNAM', label: '전라남도' },
  { value: 'GYEONGBUK', label: '경상북도' },
  { value: 'GYEONGNAM', label: '경상남도' },
  { value: 'JEJU', label: '제주도' },
  { value: 'ONLINE', label: '온라인' },
  { value: 'OTHER', label: '기타' },
]

export const YEARS_OF_CARRIER = new Array(11)
  .fill(null)
  .map((_, index, arr) => {
    if (index == 0) {
      return { value: 0, label: '1년 미만' }
    }
    if (index === arr.length - 1) {
      return { value: index, label: `${index + 1}년 이상` }
    }

    return { value: index, label: `${index}년` }
  })

export const PROJECT_TYPES = [
  { label: '전시 기획/참여', value: 'EXHIBITION' },
  { label: '공동 작품 제작', value: 'COLLABORATION' },
  { label: '워크숍/클래스', value: 'WORKSHOP' },
  { label: '브랜드 협업', value: 'BRAND_COLLABORATION' },
  { label: '공간/환경 디자인', value: 'SPACE_DESIGN' },
  { label: '디지털 콘텐츠', value: 'DIGITAL' },
  { label: '제품 개발', value: 'PRODUCT_DEVELOPMENT' },
]

export const MIN_BUDGET = 0
export const MAX_BUDGET = 999999999999

export const BUDGET_RANGES = [
  { value: { minBudget: MIN_BUDGET, maxBudget: 500000 }, label: '50만원 미만' },
  { value: { minBudget: 500000, maxBudget: 1000000 }, label: '50-100만원' },
  { value: { minBudget: 1000000, maxBudget: 3000000 }, label: '100-300만원' },
  { value: { minBudget: 3000000, maxBudget: 5000000 }, label: '300-500만원' },
  {
    value: { minBudget: 5000000, maxBudget: MAX_BUDGET },
    label: '500만원 이상',
  },
]

export const MIN_DURATION = 0
export const MAX_DURATION = 999999999999

export const PROJECT_DURATION = [
  {
    value: { maxDuratoin: 7 },
    label: '1주 이내',
  },
  { value: { maxDuratoin: 30 }, label: '1개월 이내' },
  { value: { maxDuratoin: 90 }, label: '3개월 이내' },
  { value: { maxDuratoin: MAX_DURATION }, label: '3개월 이상' },
]

export const PORTFOLIO_EXISTENCE = [
  {
    value: true,
    label: 'O',
  },
  { value: false, label: 'X' },
]

export const MATCHING_FINISH_DELAY = 1500

// ------ 예술가 카테고리 -------

export const CATEGORY_OPTIONS = [
  { value: 'all', label: '필터' },
  { value: 'visual', label: '시각예술' },
  { value: 'craft', label: '공예' },
  { value: 'literature', label: '문학/창작' },
  { value: 'performance', label: '퍼포먼스' },
] as const

export type CategoryValue = (typeof CATEGORY_OPTIONS)[number]['value']

export const CATEGORY_KEYWORDS: Record<CategoryValue, string[]> = {
  all: [],
  visual: [
    '시각예술',
    '회화',
    '유화',
    '수채화',
    '아크릴',
    '한국화',
    '조소',
    '조각',
    '석조',
    '목조',
    '금속',
    '설치미술',
    '판화',
    '실크스크린',
    '에칭',
    '리토그래피',
    '사진',
    '인물',
    '풍경',
    '상업사진',
    '예술사진',
    '디지털아트',
    '3d모델링',
    'nft',
    '인터랙티브미디어',
    '일러스트',
    '디자인',
  ],
  craft: [
    '공예',
    '도예',
    '생활도자',
    '예술도자',
    '전통도자',
    '목공예',
    '가구',
    '소품',
    '전통목공',
    '금속공예',
    '주얼리',
    '생활용품',
    '예술품',
    '섬유공예',
    '염색',
    '직조',
    '자수',
    '퀼트',
    '유리공예',
    '블로잉',
    '퓨징',
    '스테인드글라스',
  ],
  literature: [
    '문학',
    '창작',
    '소설',
    '장편',
    '단편',
    '웹소설',
    '판타지',
    '시',
    '수필',
    '현대시',
    '자유시',
    '산문',
    '에세이',
    '시나리오',
    '영화',
    '드라마',
    '웹드라마',
    '뮤지컬',
    '출판기획',
    '편집',
    '기획',
    '번역',
    '교정',
  ],
  performance: [
    '퍼포먼스',
    '음악',
    '작곡',
    '연주',
    '보컬',
    '프로듀싱',
    '무용',
    '현대무용',
    '발레',
    '전통무용',
    '안무',
    '연극',
    '연출',
    '연기',
    '무대미술',
    '의상',
    '영상',
    '촬영',
    '편집',
    '애니메이션',
  ],
}
