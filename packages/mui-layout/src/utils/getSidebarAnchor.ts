import { DrawerAnchor, MapBreakpoint, EdgeSidebarConfig } from '../types';
import { Breakpoint } from '@material-ui/system';

export default (
  configMap: MapBreakpoint<Pick<EdgeSidebarConfig, 'anchor'>>
) => {
  if (!configMap) return undefined;
  if (process.env.NODE_ENV !== 'production') {
    const configs: EdgeSidebarConfig[] = Object.entries(configMap).reduce(
      (result, curr) => [...result, curr],
      []
    );
    const anchorList: DrawerAnchor[] = [];
    configs.forEach(c => {
      if (!anchorList.includes(c.anchor)) {
        anchorList.push(c.anchor);
      }
    });
    if (anchorList.length > 1) {
      console.warn(
        'It seems like you define multiple anchors in one Sidebar, the 1st anchor found will be used.'
      );
    }
  }
  const keys = Object.keys(configMap) as Breakpoint[];
  return configMap[keys[0]].anchor;
};
