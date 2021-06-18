import { createPermanentSidebarEffect } from '../PermanentSidebar';
import { createPersistentSidebarEffect } from '../PersistentSidebar';
import {
  Dictionary,
  EdgeSidebarConfig,
  EdgeSidebarData,
  ISidebarEffect,
  State,
} from '../../types';
import {
  isPermanentSidebarConfig,
  isPersistentSidebarConfig,
} from '../../utils/sidebarChecker';
import { Breakpoint } from '@material-ui/system';
import { pickNearestBreakpoint } from '../../utils';

export const getEdgeSidebarEffect = (
  state: State,
  config: EdgeSidebarConfig
) => {
  if (isPermanentSidebarConfig(config)) {
    return createPermanentSidebarEffect(config, state);
  } else if (isPersistentSidebarConfig(config)) {
    return createPersistentSidebarEffect(config, state);
  }
  return undefined;
};

export default (state: State, edgeSidebar: EdgeSidebarData) => {
  const { configMap, configMapById, sidebarIds } = edgeSidebar;
  const breakpoints = Object.keys(configMap);
  const effectsMap: Dictionary<ISidebarEffect[]> = {};
  breakpoints.forEach((bp: Breakpoint) => {
    effectsMap[bp] = [];
    // iterate all sidebars
    sidebarIds.forEach(aSidebarId => {
      const config = pickNearestBreakpoint(configMapById[aSidebarId], bp);
      const effect = getEdgeSidebarEffect(state, config);
      if (effect) effectsMap[bp].push(effect);
    });
  });
  return {
    iterateBreakpointEffects: (
      inputs: Breakpoint[],
      getEffects: (breakpoint: Breakpoint, effects?: ISidebarEffect[]) => void
    ) => {
      let foundAllSidebars = false;
      const sidebarCount = sidebarIds.length;
      inputs.forEach(bp => {
        const effects: ISidebarEffect[] = pickNearestBreakpoint(effectsMap, bp);
        if (effects) {
          if (!foundAllSidebars && effects.length === sidebarCount) {
            foundAllSidebars = true;
          }

          if (foundAllSidebars && effects.length < sidebarCount) {
            // attach all
            const existingIds = effects.map(({ id }) => id);
            const missingIds: string[] = sidebarIds.filter(
              (id: string) => !existingIds.includes(id)
            );
            missingIds.forEach(id => {
              effects.push(
                getEdgeSidebarEffect(
                  state,
                  pickNearestBreakpoint(configMapById[id], bp)
                )
              );
            });
          }
          getEffects(bp, effects);
        } else {
          getEffects(bp, []);
        }
      });
    },
  };
};
