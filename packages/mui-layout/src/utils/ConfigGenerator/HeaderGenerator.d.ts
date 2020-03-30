import { AppBarProps } from '@material-ui/core/AppBar';
import { ConfigSetter } from '../createSet';
import { Behavior } from './BehaviorGenerator';

export interface HeaderConfig {
  position: AppBarProps['position'];
  offsetHeight: number;
  clipped: boolean;
  secondaryClipped: boolean;
}

export interface Header extends Behavior<HeaderConfig> {
  setPosition: ConfigSetter<HeaderConfig, 'position', this>;
  setOffsetHeight: ConfigSetter<HeaderConfig, 'offsetHeight', this>;
  setClipped: ConfigSetter<HeaderConfig, 'clipped', this>;
  setSecondaryClipped: ConfigSetter<HeaderConfig, 'secondaryClipped', this>;
  unclipPrimary(): this;
  unclipSecondary(): this;
}

declare const HeaderGenerator: () => Header;

export default HeaderGenerator;
