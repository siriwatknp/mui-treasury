import React from 'react';
import uniq from 'lodash/uniq';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';
import Child from '../Child/Child';
import Parent from './Parent';

Enzyme.configure({ adapter: new Adapter() });

describe('<Parent />', function() {
  let deepShallow = createShallow({
    dive: true,
    disableLifecycleMethods: true,
  });
  let component;
  let deepComponent;
  let getChildProps;

  beforeEach(() => {
    component = shallow(<Parent />);
    deepComponent = deepShallow(<Parent />);
    getChildProps = wrapper =>
      wrapper
        .dive()
        .find(Child)
        .first()
        .props();
  });

  it('must receive default classes without props', () => {
    const { classes } = component.props();
    // console.log('component.props()', component.props());
    // console.log('classes', classes);
    expect(Object.keys(classes)).toEqual(Parent.styleAttrs);
  });

  it('default overrides without props should be undefined', () => {
    const { overrides } = component.props();
    expect(overrides).toBeUndefined();
  });

  it('should not have className collision with Child', () => {
    expect(
      uniq(Parent.styleAttrs).length === Parent.styleAttrs.length,
    ).toBeTruthy();
  });

  it('[pickClasses]: should pick the correct classes', () => {
    expect(Parent.pickClasses({ parentRoot: '', wontPicked: '' })).toEqual({
      parentRoot: '',
    });
  });

  // test Child styles
  it('should override the old class of Child', () => {
    const { overrides } = getChildProps(deepComponent);
    expect(overrides.childRoot.split(' ')).toHaveLength(1);
  });

  // CUSTOMIZE PARENT STYLES
  // use classes
  it('should add new className when receive props: classes at parent', () => {
    const deepComponent = deepShallow(
      <Parent classes={{ parentRoot: 'new' }} />,
    );
    const props = deepComponent.dive().props();
    expect(props.className.split(' ')).toHaveLength(2);
    expect(props.className.includes('new')).toEqual(true);
  });

  // use overrides
  it('should use only new className when receive props: overrides', () => {
    const deepComponent = deepShallow(
      <Parent overrides={{ parentRoot: 'new' }} />,
    );
    expect(deepComponent.dive().props().className).toEqual('new');
  });

  // ADD NEW STYLES TO CHILD
  it('should add new className to Child', () => {
    const deepComponent = deepShallow(
      <Parent classes={{ childRoot: 'newChildRoot' }} />,
    );

    const { overrides } = getChildProps(deepComponent);
    expect(overrides.childRoot.split(' ')).toHaveLength(2);
  });

  it('should override className in child with the new one', () => {
    const deepComponent = deepShallow(
      <Parent overrides={{ childRoot: 'newChildRoot' }} />,
    );
    expect(deepComponent.dive().className).toBeUndefined();
    const { overrides } = getChildProps(deepComponent);
    expect(overrides.childRoot.split(' ')).toHaveLength(1);
  });

  it('should override only child', () => {
    const deepComponent = deepShallow(
      <Parent childOverrides={{ childRoot: 'newChildRoot' }} />,
    );
    expect(deepComponent.dive().props().className).toMatch('parentRoot');
    const { overrides } = getChildProps(deepComponent);
    expect(overrides.childRoot).toEqual('newChildRoot');
  });

  // Parent become nested component in other component
  it('[getOverrides] should override class in both Parent & Child', () => {
    const deepComponent = deepShallow(
      <Parent
        {...Parent.getOverrides({
          parentRoot: 'new',
          childRoot: 'newChildRoot',
        })}
      />,
    );
    expect(deepComponent.dive().props().className).toEqual('new');
    const { overrides } = getChildProps(deepComponent);
    expect(overrides.childRoot).toEqual('newChildRoot');
  });
});
