/**
 * Chat GPT를 이용해 생성된 랜덤 리뷰입니다.
 */

interface Comment {
  author: string;
  content: string;
  bookId: string;
}

export const seedComments: Comment[] = [
  {
    bookId: '1',
    author: '김진수',
    content:
      '한 입 크기로 잘라 먹는 리액트는 초보자부터 전문가까지 모두에게 도움이 되는 훌륭한 교재입니다. 리액트의 핵심 개념과 실무에서 바로 적용할 수 있는 팁을 제공합니다.',
  },
  {
    bookId: '1',
    author: '박영호',
    content:
      '이 책은 리액트를 처음 접하는 개발자들에게도 적합하며, 단계별로 따라 할 수 있는 예제들이 풍부하게 수록되어 있습니다.',
  },
  {
    bookId: '1',
    author: '최미나',
    content:
      '리액트의 고급 기능까지 다루고 있어 초보자뿐만 아니라 중급 이상의 개발자들도 깊이 있는 학습을 할 수 있습니다.',
  },
  {
    bookId: '1',
    author: '코딩천재',
    content:
      '리액트의 핵심 개념을 파악하는 데 이 책만큼 좋은 교재는 없을 것입니다.',
  },
  {
    bookId: '1',
    author: '개발하는민수',
    content: '실전 예제를 통해 개발 능력을 향상시키는 데에도 유용합니다.',
  },
  {
    bookId: '1',
    author: '윤석진',
    content: '다양한 프로젝트에 활용할 수 있는 유용한 팁을 제공합니다.',
  },
  {
    bookId: '1',
    author: '프론트마스터',
    content: '프로젝트에 바로 적용할 수 있는 팁이 많아 좋습니다.',
  },
  {
    bookId: '1',
    author: '이수민',
    content: '리액트의 구조를 이해하고 싶다면 이 책을 추천합니다.',
  },
  {
    bookId: '1',
    author: '박현주',
    content: '리액트 개발의 기본 개념을 쉽게 익히고 싶다면 추천합니다.',
  },
  {
    bookId: '2',
    author: '이진아',
    content:
      '자바스크립트 첫걸음은 자바스크립트를 처음 시작하는 사람에게 꼭 필요한 책입니다. 문법부터 고급 개념까지 체계적으로 배울 수 있습니다.',
  },
  {
    bookId: '2',
    author: '윤세진',
    content: '이 책은 초보자에게도 쉽게 이해할 수 있는 좋은 교재입니다.',
  },
  {
    bookId: '2',
    author: '김수현',
    content:
      '기초부터 고급까지 다양하게 다루고 있어 여러 개발자에게 유용합니다.',
  },
  {
    bookId: '2',
    author: '코딩스타',
    content: '코딩의 기본 원리를 쉽게 배울 수 있도록 잘 구성되어 있습니다.',
  },
  {
    bookId: '2',
    author: '프로그래밍왕',
    content: '자바스크립트의 기본 개념을 쉽게 익힐 수 있어 추천합니다.',
  },
  {
    bookId: '2',
    author: '손승희',
    content: '고급 기능까지도 친절하게 다루고 있어 실무에 도움이 됩니다.',
  },
  {
    bookId: '2',
    author: '홍준호',
    content: '예제 코드가 풍부해 학습 과정에서 바로 응용해 볼 수 있습니다.',
  },
  {
    bookId: '3',
    author: '박영준',
    content:
      '세상에서 가장 쉬운 코딩책은 코딩의 기본 개념을 파악하기에 좋습니다.',
  },
  {
    bookId: '3',
    author: '김태현',
    content: '다양한 예제를 통해 코딩을 배우기 좋습니다.',
  },
  {
    bookId: '3',
    author: '프로그래머김',
    content: '코딩의 핵심을 익히기에 훌륭한 교재입니다.',
  },
  {
    bookId: '3',
    author: '코딩매니아',
    content: '단계별로 학습하여 코딩의 기본을 다지기에 좋습니다.',
  },
  {
    bookId: '3',
    author: '김주연',
    content: '코딩을 처음 배우는 사람에게 적합한 입문서입니다.',
  },
  {
    bookId: '4',
    author: '이상훈',
    content:
      'Node.js 교과서는 Node.js의 핵심 개념을 파악하는 데 도움이 됩니다.',
  },
  {
    bookId: '4',
    author: '프론트신동',
    content: '다양한 예제가 있어 실무 프로젝트에 적용하기 좋습니다.',
  },
  {
    bookId: '4',
    author: '개발하는이',
    content: 'Node.js를 처음 시작하는 사람에게 적합한 교재입니다.',
  },
  {
    bookId: '5',
    author: '박나영',
    content:
      '얄코의 Too Much 친절한 HTML+CSS+자바스크립트는 실습 위주의 좋은 책입니다.',
  },
  {
    bookId: '5',
    author: '프로그래밍마스터',
    content: '초보자도 쉽게 따라할 수 있는 좋은 예제가 많습니다.',
  },
  {
    bookId: '5',
    author: '송유진',
    content: '기본 개념부터 차근차근 학습할 수 있습니다.',
  },
  {
    bookId: '5',
    author: '개발의신',
    content: '웹 개발을 시작하는 사람에게 훌륭한 입문서입니다.',
  },
  {
    bookId: '5',
    author: '김서현',
    content: '실제 프로젝트에 적용할 수 있는 다양한 정보가 많습니다.',
  },
  {
    bookId: '6',
    author: '박채은',
    content:
      '프론트엔드 성능 최적화 가이드는 실제 프로젝트에서 적용할 수 있는 팁이 많아 유용합니다.',
  },
  {
    bookId: '6',
    author: '프론트엔드마스터',
    content: '성능 최적화에 대해 잘 정리된 훌륭한 책입니다.',
  },
  {
    bookId: '6',
    author: '프론트마법사',
    content: '다양한 상황에서의 성능 최적화 전략이 자세히 설명되어 있습니다.',
  },
  {
    bookId: '7',
    author: '이정민',
    content:
      '이펙티브 타입스크립트는 타입스크립트의 고급 기능을 쉽게 익히기에 좋은 책입니다.',
  },
  {
    bookId: '7',
    author: '프로그래밍매니아',
    content: '타입스크립트의 핵심 개념을 실무 프로젝트에서 활용할 수 있습니다.',
  },
  {
    bookId: '7',
    author: '개발천재',
    content: '다양한 팁을 활용해 프로젝트의 생산성을 높일 수 있습니다.',
  },
  {
    bookId: '7',
    author: '김민수',
    content: '실무 예제와 함께 다양한 정보가 있어 추천합니다.',
  },
  {
    bookId: '8',
    author: '박재현',
    content:
      'NestJS로 배우는 백엔드 프로그래밍은 백엔드 개발자에게 필요한 핵심 개념을 잘 설명해줍니다.',
  },
  {
    bookId: '8',
    author: '박나현',
    content: '백엔드 프로그래밍의 개념을 이해하기에 좋은 책입니다.',
  },
  {
    bookId: '8',
    author: '프론트고수',
    content: '백엔드 개발을 처음 시작하는 사람에게도 좋은 교재입니다.',
  },
  {
    bookId: '8',
    author: '백엔드초보',
    content: '프로젝트에서 백엔드 개발의 노하우를 쌓는 데 유용합니다.',
  },
  {
    bookId: '9',
    author: '이서윤',
    content:
      '스프링 부트와 AWS로 혼자 구현하는 웹 서비스는 실무 적용을 위한 정보가 많습니다.',
  },
  {
    bookId: '9',
    author: '코딩왕',
    content: '스프링 부트의 핵심 개념을 쉽게 배울 수 있는 좋은 책입니다.',
  },
  {
    bookId: '9',
    author: '개발의고수',
    content: '다양한 상황에서 스프링 부트를 활용할 수 있는 팁이 많습니다.',
  },
  {
    bookId: '9',
    author: '스프링마스터',
    content: '프로젝트에서 바로 활용할 수 있는 예제가 많아 좋습니다.',
  },
  {
    bookId: '9',
    author: '김하나',
    content: '웹 서비스 구현에 유용한 내용이 많아 추천합니다.',
  },
  {
    bookId: '10',
    author: '최수빈',
    content:
      '토비의 스프링 3는 스프링 프레임워크의 핵심 개념을 파악하는 데 도움이 됩니다.',
  },
  {
    bookId: '10',
    author: '이동욱',
    content: '스프링 프레임워크의 기초부터 고급 개념까지 모두 다룹니다.',
  },
  {
    bookId: '10',
    author: '스프링마스터',
    content: '실무에서 활용할 수 있는 인사이트를 제공합니다.',
  },
  {
    bookId: '11',
    author: '김서윤',
    content:
      '자바 ORM 표준 JPA 프로그래밍은 JPA의 기초부터 고급 기능까지 다룹니다.',
  },
  {
    bookId: '11',
    author: '박영준',
    content:
      'JPA를 활용해 다양한 상황에서 데이터베이스를 효율적으로 관리할 수 있습니다.',
  },
  {
    bookId: '11',
    author: 'JPA왕',
    content: 'JPA의 고급 기능까지도 쉽게 배울 수 있도록 구성되어 있습니다.',
  },
  {
    bookId: '11',
    author: '개발신동',
    content: '실무 프로젝트에서 JPA를 적용하는 방법을 배울 수 있습니다.',
  },
  {
    bookId: '12',
    author: '박지은',
    content:
      '오브젝트는 객체 지향 프로그래밍의 기본 원리를 이해하는 데 도움이 됩니다.',
  },
  {
    bookId: '12',
    author: '프로그래밍신동',
    content:
      '객체 지향 프로그래밍의 설계 원리를 배우는 데 훌륭한 가이드입니다.',
  },
  {
    bookId: '12',
    author: '이현정',
    content:
      '다양한 예제와 함께 객체 지향 프로그래밍의 핵심을 배울 수 있습니다.',
  },
  {
    bookId: '12',
    author: '객체마스터',
    content: '다양한 프로젝트에 바로 적용할 수 있는 좋은 정보가 많습니다.',
  },
];
