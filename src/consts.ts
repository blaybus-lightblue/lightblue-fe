export const CITIES = [
  'SEOUL',
  'BUSAN',
  'DAEGU',
  'INCHEON',
  'GWANGJU',
  'DAEJEON',
  'ULSAN',
  'SEJONG',
  'GYEONGGI',
  'GANGWON',
  'CHUNGBUK',
  'CHUNGNAM',
  'JEONBUK',
  'JEONNAM',
  'GYEONGBUK',
  'GYEONGNAM',
  'JEJU',
  'ONLINE',
  'OTHER',
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
] as const

export const MIN_BUDGET = 0
export const MAX_BUDGET = 999999999999

export const BUDGET_RANGES = [
  { minBudget: MIN_BUDGET, maxBudget: 500000 },
  { minBudget: 500000, maxBudget: 1000000 },
  { minBudget: 1000000, maxBudget: 3000000 },
  { minBudget: 3000000, maxBudget: 5000000 },
  { minBudget: 5000000, maxBudget: MAX_BUDGET },
]
