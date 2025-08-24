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
  {
    label: '전시 기획/참여 (갤러리, 그룹전, 팝업전시)',
    value: 'EXHIBITION',
  },
  {
    label: '공동 작품 제작 (콜라보 작품, 융합 예술)',
    value: 'COLLABORATION',
  },
  {
    label: '워크숍/클래스 (예술 교육, 세정 프로그램)',
    value: 'WORKSHOP',
  },
  {
    label: '브랜드 협업 (로고, 패키지, 광고 브랜딩)',
    value: 'COMMERCIAL',
  },
  {
    label: '공연/환경 디자인 (카페, 호텔, 상업공간)',
    value: 'PERFORMANCE',
  },
  {
    label: '디지털 콘텐츠 (SNS, 웹사이트, 영상)',
    value: 'DIGITAL',
  },
  {
    label: '제품 개발 (구조 생활용품, 예술상품)',
    value: 'INSTALLATION',
  },
  {
    label: '기타',
    value: 'OTHER',
  },
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
