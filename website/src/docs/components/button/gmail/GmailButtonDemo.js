import React from 'react';
import GmailButton from '@mui-treasury/components/button/gmail';
import { useRowGutterStyles } from '@mui-treasury/styles/gutter/row';

const GmailButtonDemo = () => {
  const styles = useRowGutterStyles({ size: '1rem' });
  return (
    <div className={styles.parent}>
      <GmailButton collapsed />
      <GmailButton />
    </div>
  );
};
// hide-start
GmailButtonDemo.metadata = {
  title: 'Gmail',
  description: 'compose button with collapsed state',
  path: 'components/button/gmail',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Thu May 14 2020',
  stylesUrl: '',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-components', path: 'button/gmail/GmailButton.js' }],
};
// hide-end

export default GmailButtonDemo;
