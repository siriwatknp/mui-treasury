import { Config } from './ConfigGenerator/ConfigGenerator';

declare const getDefaultScreenConfig: (
  configs?: Partial<ReturnType<Config['get']>>
) => ReturnType<Config['get']>;

export default getDefaultScreenConfig;
