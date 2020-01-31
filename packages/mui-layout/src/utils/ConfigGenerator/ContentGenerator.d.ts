import BehaviorGenerator from './BehaviorGenerator';

declare const ContentGenerator: () => ReturnType<ReturnType<typeof BehaviorGenerator>['initContent']>;

export default ContentGenerator;
