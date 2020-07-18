import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import RowToggle from '@mui-treasury/components/toggle/row';
import Menu from '@mui-treasury/components/menu/collapsible';

export const CollapsibleMenuDemo = () => {
  return (
    <div>
      <Menu
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
        collapsed={true}
        renderToggle={({ onClick, collapsed }) => (
          <RowToggle>
            <RowToggle.ListItem>Custom Toggle component</RowToggle.ListItem>
            <RowToggle.Action button toggled={collapsed} onClick={onClick} />
          </RowToggle>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem button selected>
              All collapsible menu components
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick}>
              {collapsed ? <Remove /> : <Add />}
            </Menu.Action>
          </Menu.Row>
        )}
      >
        <Menu.ListItem>List item 1</Menu.ListItem>
        <Menu.ListItem selected>List item 2</Menu.ListItem>
        <Menu.ListItem>List item 3</Menu.ListItem>
        <Menu.ListItem>List item 4</Menu.ListItem>
      </Menu>
    </div>
  );
};
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Collapsible'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <CollapsibleMenuDemo />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'component/menu/collapsible',
  colSpan: 4,
  createdAt: 'Sat Feb 29 2020',
  files: [],
};
// @ts-ignore
CollapsibleMenuDemo.Showcase = AttachedShowcase
// @ts-ignore
CollapsibleMenuDemo.metadata = metadata
// hide-end
