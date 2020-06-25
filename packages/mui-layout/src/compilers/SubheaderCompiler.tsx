import { EdgeSidebarData, ResultStyle, State, SubheaderData } from '../types';
import HeaderCompiler from './HeaderCompiler';

export default (state: State, subheader: SubheaderData, edgeSidebar: EdgeSidebarData) => {
  return {
    getResultStyle: (subheaderId: string): ResultStyle => {
      const configMap = subheader.configMapById[subheaderId]
      return HeaderCompiler(state, configMap, edgeSidebar).getResultStyle()
    },
  }
}
