import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Couple from './Couple';
import styles from '../familyTreeChart.styles';

const defaultUseStyles = makeStyles(styles, { name: 'Children' });

const Children = ({
  people,
  multiSpouses,
  renderBranches,
  renderSpouses,
  stretch,
  parented,
  useStyles,
}) => {
  const classes = useStyles();
  return (
    <ul
      className={cx(
        classes.branches,
        stretch && classes.stretch,
        parented && classes.parented
      )}
    >
      {people.map((item, index) => {
        const { children, spouse } = item || {};
        const render = () => {
          if (spouse && Array.isArray(spouse))
            return (
              <>
                <Couple {...item} useStyles={useStyles} />
                {renderSpouses(spouse)}
              </>
            );
          if (children)
            return (
              <>
                <Couple {...item} useStyles={useStyles} />
                {renderBranches(children, {
                  stretch:
                    multiSpouses.length > 0 && !multiSpouses.includes(index),
                })}
              </>
            );
          return <Couple {...item} useStyles={useStyles} />;
        };
        return (
          <li
            key={index}
            className={cx(
              classes.aBranch,
              spouse && !Array.isArray(spouse) && classes.hasOneSpouse
            )}
          >
            {render()}
          </li>
        );
      })}
    </ul>
  );
};

Children.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({})),
  multiSpouses: PropTypes.arrayOf(PropTypes.number),
  renderBranches: PropTypes.func,
  renderSpouses: PropTypes.func,
  stretch: PropTypes.bool,
  parented: PropTypes.bool,
  useStyles: PropTypes.func,
};
Children.defaultProps = {
  people: [],
  multiSpouses: [],
  renderBranches: () => null,
  renderSpouses: () => null,
  stretch: false,
  parented: false,
  useStyles: defaultUseStyles,
};

export default Children;
