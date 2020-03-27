import { Behavior } from './BehaviorGenerator';

export type Footer = ReturnType<Behavior['initFooter']>;

declare const FooterGenerator: () => Footer;

export default FooterGenerator;
