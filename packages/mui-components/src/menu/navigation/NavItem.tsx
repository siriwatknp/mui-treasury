import React from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  item: {

  }
}), { name: 'NavItem' })

function NavItem() {
  const classes = useStyles()
  return (
    <a className={classes.item}>nav item</a>
  )
}

export default NavItem
