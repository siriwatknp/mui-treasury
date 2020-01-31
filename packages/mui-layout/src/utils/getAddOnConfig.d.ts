import { AddOnsConfig } from './ConfigGenerator/AddOnsGenerator';

declare const getAddOnConfig: (config?: Partial<AddOnsConfig>) => AddOnsConfig;

export default getAddOnConfig;
