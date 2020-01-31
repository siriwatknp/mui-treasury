import ConfigGenerator from './ConfigGenerator';

type Config = ReturnType<ReturnType<typeof ConfigGenerator>['get']>;

declare const getDefaultScreenConfig: (configs?: Partial<Config>) => Config;

export default getDefaultScreenConfig;
