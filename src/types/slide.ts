import { ReactNode } from 'react';

export interface Slide {
  id: number;
  title: string;
  component: ReactNode;
}