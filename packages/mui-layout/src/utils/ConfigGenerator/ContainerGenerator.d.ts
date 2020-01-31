import BehaviorGenerator from './BehaviorGenerator';

declare const ContainerGenerator: () => ReturnType<ReturnType<typeof BehaviorGenerator>['initContainer']>;

export default ContainerGenerator;
