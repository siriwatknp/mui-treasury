import { Behavior } from './BehaviorGenerator';

export type Container = ReturnType<Behavior['initContainer']>;

declare const ContainerGenerator: () => Container;

export default ContainerGenerator;
