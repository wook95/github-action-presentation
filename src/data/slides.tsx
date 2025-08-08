import { Slide01 } from '@/components/slides/Slide01';
import { Slide02 } from '@/components/slides/Slide02';
import { Slide03 } from '@/components/slides/Slide03';
import { Slide04 } from '@/components/slides/Slide04';
import { Slide05 } from '@/components/slides/Slide05';
import { Slide06 } from '@/components/slides/Slide06';
import { Slide07 } from '@/components/slides/Slide07';
import { Slide08 } from '@/components/slides/Slide08';
import { Slide09 } from '@/components/slides/Slide09';
import { Slide10 } from '@/components/slides/Slide10';
import { Slide11 } from '@/components/slides/Slide11';
import { Slide12 } from '@/components/slides/Slide12';
import { Slide13 } from '@/components/slides/Slide13';
import { Slide14 } from '@/components/slides/Slide14';
import { Slide15 } from '@/components/slides/Slide15';
import { Slide16 } from '@/components/slides/Slide16';
import { Slide17 } from '@/components/slides/Slide17';
import { Slide18 } from '@/components/slides/Slide18';
import { Slide19 } from '@/components/slides/Slide19';
import { Slide20 } from '@/components/slides/Slide20';
import { Slide21 } from '@/components/slides/Slide21';
import { Slide22 } from '@/components/slides/Slide22';
import { Slide23 } from '@/components/slides/Slide23';
import { Slide24 } from '@/components/slides/Slide24';
import { Slide } from '@/types/slide';

export const slides: Slide[] = [
  {
    id: 1,
    title: '제목 슬라이드',
    component: <Slide01 />,
  },
  {
    id: 2,
    title: '목차',
    component: <Slide02 />,
  },
  {
    id: 3,
    title: 'Q',
    component: <Slide03 />,
  },
  {
    id: 4,
    title: 'Github Action 정의',
    component: <Slide04 />,
  },
  {
    id: 5,
    title: 'Impact 있는 자동화 사례',
    component: <Slide05 />,
  },
  {
    id: 6,
    title: '네이버 사례 - 문제',
    component: <Slide06 />,
  },
  {
    id: 7,
    title: '네이버 사례- 해결 방법',
    component: <Slide07 />,
  },
  {
    id: 8,
    title: '네이버 사례 - 도구',
    component: <Slide08 />,
  },
  {
    id: 9,
    title: '네이버 사례- 성과',
    component: <Slide09 />,
  },
  {
    id: 10,
    title: '토스 사례 - 문제',
    component: <Slide10 />,
  },
  {
    id: 11,
    title: '토스 사례 - 해결 방법',
    component: <Slide11 />,
  },
  {
    id: 12,
    title: '토스 사례 - 개선 결과, 차이점',
    component: <Slide12 />,
  },
  {
    id: 13,
    title: '보안 자동화',
    component: <Slide13 />,
  },
  {
    id: 14,
    title: '크롤링 자동화',
    component: <Slide14 />,
  },
  {
    id: 15,
    title: '시스템 변화의 철학',
    component: <Slide15 />,
  },
  {
    id: 16,
    title: 'SaladLAB FE의 CI/CD',
    component: <Slide16 />,
  },
  {
    id: 17,
    title: 'CI/CD 플로우',
    component: <Slide17 />,
  },
  {
    id: 18,
    title: 'PR 리뷰 자동화',
    component: <Slide18 />,
  },
  {
    id: 19,
    title: 'PR 생성 자동화',
    component: <Slide19 />,
  },
  {
    id: 20,
    title: 'CI/CD 파이프라인',
    component: <Slide20 />,
  },
  {
    id: 21,
    title: 'Action 그 너머에..',
    component: <Slide21 />,
  },
  {
    id: 22,
    title: '더 나아가기',
    component: <Slide22 />,
  },
  {
    id: 23,
    title: '무한한 가능성',
    component: <Slide23 />,
  },
  {
    id: 24,
    title: '감사합니다',
    component: <Slide24 />,
  },
];
