import { ConfigSetter } from '../createSet';

export type PersistentBehavior = 'fit' | 'flexible' | 'none';
export type InsetBehavior = 'fit' | 'none';

export interface BehaviorConfig {
  persistentBehavior: PersistentBehavior;
  secondaryPersistentBehavior: PersistentBehavior;
  insetBehavior?: InsetBehavior;
  secondaryInsetBehavior?: InsetBehavior;
}

export interface Behavior<S extends object | undefined = undefined> {
  get: () => BehaviorConfig & (S extends object ? S : {}),
  initHeader(): this;
  initContainer(): this;
  initContent(): this;
  initFooter(): this;
  setPersistentBehavior: ConfigSetter<BehaviorConfig, 'persistentBehavior', this>;
  setSecondaryPersistentBehavior: ConfigSetter<BehaviorConfig, 'secondaryPersistentBehavior', this>;
  setInsetBehavior: ConfigSetter<BehaviorConfig, 'insetBehavior', this>;
  setSecondaryInsetBehavior: ConfigSetter<BehaviorConfig, 'secondaryInsetBehavior', this>;
  setPrimaryInsetToFit(): this;
  setSecondaryInsetToFit(): this;
  setAllInsetToFit(): this;
  setPrimaryInsetToNonFit(): this;
  setSecondaryInsetToNonFit(): this;
  setAllInsetToNonFit(): this;
  set(value: (S extends object ? S : BehaviorConfig)): this;
}

declare const BehaviorGenerator: () => Behavior;

export default BehaviorGenerator
