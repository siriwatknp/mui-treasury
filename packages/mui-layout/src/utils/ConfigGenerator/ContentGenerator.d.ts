import { Behavior } from './BehaviorGenerator';

export type Content = ReturnType<Behavior['initContent']>;

declare const ContentGenerator: () => Content;

export default ContentGenerator;
