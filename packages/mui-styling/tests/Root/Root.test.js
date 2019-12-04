import React from 'react';
import uniq from 'lodash/uniq';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';
import Root from './Root';
import Parent from '../Parent/Parent';
import Child from '../Child/Child';

Enzyme.configure({ adapter: new Adapter() });

describe('<Root />', function() {
  let deepShallow = createShallow({
    dive: true,
    disableLifecycleMethods: true,
  });
  let component;
  let deepComponent;
  let getParentProps;
  let getChildProps;

  beforeEach(() => {
    component = shallow(<Root items={['option']} />);
    deepComponent = deepShallow(<Root items={['option']} />);
    getParentProps = wrapper =>
      wrapper
        .dive()
        .find(Parent)
        .dive()
        .first()
        .props();
    getChildProps = wrapper =>
      wrapper
        .dive()
        .find(Parent)
        .dive() // withStyles
        .dive()
        .dive()
        .find(Child)
        .dive()
        .first()
        .props();
    // .first()
    // .props();
  });

  it('must receive default classes without props', () => {
    const { classes } = component.props();
    expect(Object.keys(classes)).toEqual(Root.styleAttrs);
  });

  it('default overrides without props should be undefined', () => {
    const { overrides } = component.props();
    expect(overrides).toBeUndefined();
  });

  it('should not have className collision with Child', () => {
    expect(
      uniq(Root.styleAttrs).length === Root.styleAttrs.length,
    ).toBeTruthy();
  });

  it('[pickClasses]: should pick the correct classes', () => {
    expect(
      Root.pickClasses({
        root: '',
        parentRoot: '',
        childRoot: '',
        wontPicked: '',
      }),
    ).toEqual({
      root: '',
      parentRoot: '',
      childRoot: '',
    });
  });

  // CUSTOMIZE Root STYLES
  // use classes
  it('should add new className when receive props: classes at parent', () => {
    const deepComponent = deepShallow(
      <Root items={['option']} classes={{ root: 'new' }} />,
    );
    const props = deepComponent.dive().props();
    expect(props.className.split(' ')).toHaveLength(2);
    expect(props.className).toMatch('new');
  });

  // use overrides
  it('should use only new className when receive props: overrides', () => {
    const deepComponent = deepShallow(
      <Root items={['option']} overrides={{ root: 'new' }} />,
    );
    expect(deepComponent.dive().props().className).toEqual('new');
  });

  // ADD STYLES TO PARENT
  // use classes
  it('should add new className to parent', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        classes={{ root: 'new', parentRoot: 'newParentRoot' }}
      />,
    );
    const props = getParentProps(deepComponent);
    const { overrides } = props;
    expect(overrides.parentRoot.split(' ')).toHaveLength(2);
    expect(overrides.parentRoot).toMatch('newParentRoot');
  });

  // use overrides
  it('should override className in parent with the new one', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        overrides={{ root: 'new', parentRoot: 'newParentRoot' }}
      />,
    );
    const props = getParentProps(deepComponent);
    const { overrides } = props;
    expect(overrides.parentRoot).toEqual('newParentRoot');
  });

  // ADD NEW STYLES TO CHILD
  // use classes
  it('should add new className to child', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        classes={{
          root: 'new',
          parentRoot: 'newParentRoot',
          childRoot: 'newChildRoot',
        }}
      />,
    );
    const props = getChildProps(deepComponent);
    const { overrides } = props;
    expect(overrides.childRoot.split(' ')).toHaveLength(2);
    expect(overrides.childRoot).toMatch('newChildRoot');
  });

  // use overrides
  it('should override className in child with the new one', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        overrides={{
          root: 'new',
          parentRoot: 'newParentRoot',
          childRoot: 'newChildRoot',
        }}
      />,
    );
    const props = getChildProps(deepComponent);
    const { overrides } = props;
    expect(overrides.childRoot).toEqual('newChildRoot');
  });

  // OVERRIDES only specific component
  it('should override only Parent & Child', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        parentOverrides={{ parentRoot: 'newParentRoot' }}
        childOverrides={{ childRoot: 'newChildRoot' }}
      />,
    );
    expect(deepComponent.dive().props().className).toMatch('root');
    const { overrides: parentOverrides } = getParentProps(deepComponent);
    expect(parentOverrides.parentRoot).toEqual('newParentRoot');

    const { overrides: childOverrides } = getChildProps(deepComponent);
    expect(childOverrides.childRoot).toEqual('newChildRoot');
  });

  // Parent become nested component in other component
  it('[getOverrides] should override class in Root & Parent & Child', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        {...Root.getOverrides({
          root: 'newRoot',
          parentRoot: 'newParentRoot',
          childRoot: 'newChildRoot',
        })}
      />,
    );
    expect(deepComponent.dive().props().className).toEqual('newRoot');
    const { overrides: parentOverrides } = getParentProps(deepComponent);
    expect(parentOverrides.parentRoot).toEqual('newParentRoot');
    const { overrides: childOverrides } = getChildProps(deepComponent);
    expect(childOverrides.childRoot).toEqual('newChildRoot');
  });

  it('[getOverrides] should with rootOverrides in Root & Parent & Child', () => {
    const deepComponent = deepShallow(
      <Root
        items={['option']}
        {...Root.getOverrides(
          {
            root: 'newRoot',
            parentRoot: 'newParentRoot',
            childRoot: 'newChildRoot',
          },
          {
            rootOverrides: {
              root: 'newRoot2',
              parentRoot: 'newParentRoot2',
              childRoot: 'newChildRoot2',
            },
          },
        )}
      />,
    );
    expect(deepComponent.dive().props().className).toEqual('newRoot2');
    const { overrides: parentOverrides } = getParentProps(deepComponent);
    expect(parentOverrides.parentRoot).toEqual('newParentRoot2');
    const { overrides: childOverrides } = getChildProps(deepComponent);
    expect(childOverrides.childRoot).toEqual('newChildRoot2');
  });
});
