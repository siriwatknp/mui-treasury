import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createShallow } from '@material-ui/core/test-utils';
import Child from './Child';

Enzyme.configure({ adapter: new Adapter() });

describe('<Child />', () => {
  let deepShallow = createShallow({
    dive: true,
    disableLifecycleMethods: true,
  });
  let component;
  let deepComponent;

  beforeEach(() => {
    component = shallow(<Child />);
    deepComponent = deepShallow(<Child />);
  });

  it('must receive default classes without props', () => {
    const { classes } = component.props();
    // console.log('component.props()', component.props());
    // console.log('classes', classes);
    expect(Object.keys(classes)).toEqual(Child.styleAttrs);
  });

  it('default overrides without props should be undefined', () => {
    const { overrides } = component.props();
    expect(overrides).toBeUndefined();
  });

  it('[pickClasses]: should pick the correct classes', () => {
    expect(Child.pickClasses({ childRoot: '', wontPicked: '' })).toEqual({
      childRoot: '',
    });
  });

  it('should add new className when receive props: classes', () => {
    const deepComponent = deepShallow(<Child classes={{ childRoot: 'new' }} />);
    expect(deepComponent.dive().props().className.split(' ').length).toEqual(2);
    expect(deepComponent.dive().props().className.includes('new')).toEqual(true);
  });

  it('should use only new className when receive props: overrides', () => {
    const deepComponent = deepShallow(
      <Child overrides={{ childRoot: 'new' }} />,
    );
    expect(deepComponent.dive().props().className).toEqual('new');
  });

  // CHILD become nested component in other component
  it('[getOverrides] should add new className', () => {
    const deepComponent = deepShallow(
      <Child
        {...Child.getOverrides({
          childRoot: 'new',
        })}
      />,
    );
    expect(deepComponent.dive().props().className).toEqual('new');
  });

  it('[getOverrides] should add new overriding className', () => {
    const result = Child.getOverrides({
      childRoot: 'newOverrides',
    });
    const deepComponent = deepShallow(<Child {...result} />);
    expect(deepComponent.dive().props().className).toEqual('newOverrides');
  });

  it('should override in correct order', () => {
    const deepComponent = deepShallow(
      <Child
        {...Child.getOverrides(
          {
            childRoot: 'childStyles1', // less important
          },
          {
            childOverrides: {
              childRoot: 'childStyles2',
            }, // more important
          },
        )}
      />,
    );
    expect(deepComponent.dive().props().className).toEqual('childStyles2');
  });
});
