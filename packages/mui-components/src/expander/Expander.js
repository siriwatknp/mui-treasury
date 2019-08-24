import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import { useToggleItems } from '@mui-treasury/utils';

const Expander = ({ menus, openKeys: dynamicOpenKeys }) => {
  const { openKeys, onToggle } = useToggleItems(dynamicOpenKeys, {
    multiple: false,
  });
  return (
    <div>
      {menus.map(({ key, label, content }) => (
        <React.Fragment key={key}>
          <p>
            {label}{' '}
            <IconButton onClick={() => onToggle(key)}>
              <Add />
            </IconButton>
          </p>
          <Collapse in={openKeys.includes(key)}>{content}</Collapse>
        </React.Fragment>
      ))}
    </div>
  );
};

Expander.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  openKeys: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
Expander.defaultProps = {
  menus: [],
  openKeys: undefined,
};

export default Expander;
