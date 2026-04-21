//Figure
export const visualData = {
  child: { title: ["어린이날에도 놀이에 한계는 없어!", "레고 플레이 페스티벌"], desc: ["광화문 대형 체험 행사부터 전국 오프라인 팝업까지,", "이번 어린이날은 레고 플레이 페스티벌을 가족, 친구와 함께 만들고 즐기세요!"], imgSrc: "/image/visual1.webp", mobileImgSrc: "/image/visualMobile1.webp", btnText: "레고 플레이 페스티벌 신청하기 >" },
  onepiece: { title: ["용감한 자여,", "모험에 도전하라!"], desc: ["신제품 레고 원피스 세트를 선주문하고 몽키D.루피의 해적단과 함께 신나는 모험을 떠나세요!"], imgSrc: "/image/visual2.webp", mobileImgSrc: "/image/visualMobile2.webp", btnText: "주문하러 가기 >" },
  fomula: { title: ["스릴 넘치는 레이스의 시작"], desc: ["레고 Fomula 1 세트로 레이스 카를 모두 수집하고 거실에서 짜릿한 서킷 레이스를 펼쳐보세요!"], imgSrc: "/image/visual3.webp", mobileImgSrc: "/image/visualMobile3.webp", btnText: "레이싱 하러 가기 >" }
};

export const visualConfig = {
  child: { sectionClass: 'slide-1', innerClass: 'slide-content' },
  onepiece: { sectionClass: 'slide-2', innerClass: 'slide-content' },
  fomula: { sectionClass: 'slide-3', innerClass: 'slide-content' }
};

// ArticleSection
export const articleData = {
  brand: { title: ["Small Brick,", "Infinite Worlds."], desc: ["단 하나의 브릭에서 시작된 상상이 거대한 도시가 되고, 당신의 우주가 됩니다.", "1932년부터 이어진 무한한 가능성의 연쇄 반응을 확인해보세요."], imgSrc: "/image/castle1.webp" },
  cross: { title: ["Beyond the Frame"], desc: ["영화의 감동부터 게임의 전율까지", "모든 장르의 벽이 무너지고 오직 당신의 손끝에서", "새로운 서사가 조립됩니다."], imgSrc: "/image/starwars6.webp" }
};

export const articleConfig = {
  brand: { sectionClass: 'cont-1', innerClass: 'cont-1-inner', btnText: '더 알아보기' },
  cross: { sectionClass: 'cont-2', innerClass: 'cont-2-inner', btnText: '상상했던 모든 세계 만나러 가기' }
};

// ProductSection
export const bestData = [
  { id: 1, name: "팩맨 아케이드", price: "359,900 원", img: "/image/best1.webp", tag: "레고® 아이콘" },
  { id: 2, name: "아캄 어사일럼™", price: "409,900 원", img: "/image/best2.webp", tag: "DC" },
  { id: 3, name: "월-E와 이브", price: "99,900 원", img: "/image/best3.webp", tag: "디즈니™" },
  { id: 4, name: "반지의 제왕: 바랏두르™", price: "599,900 원", img: "/image/best4.webp", tag: "반지의 제왕™" },
  { id: 5, name: "중세 마기사의 성", price: "169,900 원", img: "/image/best5.webp", tag: "크리에이터 3-in-1" },
  { id: 6, name: "백 투 더 퓨처 타임머신", price: "43,900 원", img: "/image/best6.webp", tag: "스피드 챔피언" },
  { id: 7, name: "캡틴 잭 스패로우의 해적선", price: "499,900 원", img: "/image/best7.webp", tag: "레고® 아이콘" },
  { id: 8, name: "Nike Dunk x LEGO® Set", price: "149,900 원", img: "/image/best8.webp", tag: "Nike" }
];

export const newData = [
  { id: 1, name: "이상해꽃, 리자몽, 거북왕", price: "949,900 원", img: "/image/new1.webp", tag: "포켓몬" },
  { id: 2, name: "Tintin® 달 로켓", price: "239,900 원", img: "/image/new2.webp", tag: "아이디어" },
  { id: 3, name: "마리오 카트™: 루이지 & G포스", price: "269,900 원", img: "/image/new3.webp", tag: "레고® 슈퍼 마리오™" },
  { id: 4, name: "Nike Air Max 95 x 레고® 세트", price: "139,900 원", img: "/image/new4.webp", tag: "Nike" },
  { id: 5, name: "신공화국 X-윙 스타파이터™", price: "109,900 원", img: "/image/new5.webp", tag: "스타워즈™" },
  { id: 6, name: "McLaren MCL39 F1® 자동차", price: "319,900 원", img: "/image/new6.webp", tag: "테크닉" },
  { id: 7, name: "FIFA 월드컵™ 공식 트로피", price: "249,900 원", img: "/image/new7.webp", tag: "레고® 에디션" },
  { id: 8, name: "Ford Model T", price: "179,900 원", img: "/image/new8.webp", tag: "레고® 아이콘" }
];

export const productConfig = {
  best: { sectionClass: 'cont-3', innerClass: 'cont-3-inner', products: bestData },
  new: { sectionClass: 'cont-4', innerClass: 'cont-4-inner', products: newData }
};
