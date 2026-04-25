import { FC, ReactNode, CSSProperties } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  container?: string | Element | null;
  distance?: number;
  direction?: string;
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

declare const AnimatedContent: FC<AnimatedContentProps>;
export default AnimatedContent;
