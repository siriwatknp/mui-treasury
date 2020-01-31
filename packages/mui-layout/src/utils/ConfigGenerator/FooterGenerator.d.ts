import BehaviorGenerator from './BehaviorGenerator';

declare const FooterGenerator: () => ReturnType<ReturnType<typeof BehaviorGenerator>['initFooter']>;

export default FooterGenerator;
