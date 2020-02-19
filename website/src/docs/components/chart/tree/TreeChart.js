import React from 'react';
import { blueGrey } from '@material-ui/core/colors';
import Tree from '@mui-treasury/components/chart/tree';
import Box from '@material-ui/core/Box';

const Dot = () => (
  <Box
    zIndex={1}
    height={32}
    width={32}
    bgcolor={'common.white'}
    border={`1px solid ${blueGrey[200]}`}
    boxShadow={'0 1px 4px 0 rgba(0,0,0,0.12)'}
    css={{ transform: 'rotateZ(45deg)' }}
  />
);

const TreeChart = () => {
  return (
    <Tree length={24} gutter={16} outline={`1px solid ${blueGrey[100]}`}>
      <Tree.Trunk>
        <Dot />
        <Tree.Branches>
          <Tree.Twig>
            <Tree.Stem>
              <Dot />
            </Tree.Stem>
            <Tree.Branches>
              <Tree.Twig>
                <Tree.Stem>
                  <Dot />
                </Tree.Stem>
              </Tree.Twig>
              <Tree.Twig>
                <Tree.Stem>
                  <Dot />
                </Tree.Stem>
                <Tree.Branches>
                  <Tree.Twig>
                    <Tree.Stem>
                      <Dot />
                    </Tree.Stem>
                  </Tree.Twig>
                  <Tree.Twig>
                    <Tree.Stem>
                      <Dot />
                    </Tree.Stem>
                  </Tree.Twig>
                  <Tree.Twig>
                    <Tree.Stem>
                      <Dot />
                    </Tree.Stem>
                  </Tree.Twig>
                  <Tree.Twig>
                    <Tree.Stem>
                      <Dot />
                    </Tree.Stem>
                  </Tree.Twig>
                </Tree.Branches>
              </Tree.Twig>
            </Tree.Branches>
          </Tree.Twig>
          <Tree.Twig>
            <Tree.Stem>
              <Dot />
            </Tree.Stem>
            <Tree.Branches>
              <Tree.Twig>
                <Tree.Stem>
                  <Dot />
                </Tree.Stem>
              </Tree.Twig>
              <Tree.Twig>
                <Tree.Stem>
                  <Dot />
                </Tree.Stem>
              </Tree.Twig>
              <Tree.Twig>
                <Tree.Stem>
                  <Dot />
                </Tree.Stem>
              </Tree.Twig>
            </Tree.Branches>
          </Tree.Twig>
        </Tree.Branches>
      </Tree.Trunk>
    </Tree>
  );
};
// hide-start
TreeChart.metadata = {
  title: 'Tree',
  path: 'chart/tree',
  description: 'Base component for building tree',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Feb 19 2020',
  size: 'large',
  files: [
    { pkg: 'mui-components', path: 'chart/tree/TreeChart.js' },
    { pkg: 'mui-components', path: 'chart/tree/submodules/Branches.js' },
    { pkg: 'mui-components', path: 'chart/tree/submodules/Stem.js' },
    { pkg: 'mui-components', path: 'chart/tree/submodules/Trunk.js' },
    { pkg: 'mui-components', path: 'chart/tree/submodules/Twig.js' },
    { pkg: 'mui-components', path: 'chart/tree/treeChart.styles.js' },
    { pkg: 'mui-components', path: 'chart/tree/TreeContext.js' },
    { pkg: 'mui-components', path: 'chart/tree/TreeChart.stories.js' },
  ],
};
// hide-end

export default TreeChart;
