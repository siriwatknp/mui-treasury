import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircle from '@material-ui/icons/AddCircle';
import Gif from '@material-ui/icons/Gif';
import Image from '@material-ui/icons/Image';
import Note from '@material-ui/icons/Note';
import ThumbUp from '@material-ui/icons/ThumbUp';
import TagFaces from '@material-ui/icons/TagFaces';

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgb(0, 153, 255)',
    width: 44,
    height: 44,
    padding: 6,
    '&:not(:first-child)': {
      marginLeft: 4,
    },
  },
  input: {
    flex: 'auto',
    borderRadius: 40,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    height: 36,
    fontSize: 13,
  },
}));

const ChatBar = ({ concise }) => {
  const styles = useStyles();
  return (
    <>
      <AddCircle className={styles.icon} />
      {!concise && (
        <>
          <Gif className={styles.icon} />
          <Note className={styles.icon} />
          <Image className={styles.icon} />
        </>
      )}
      <InputBase
        className={styles.input}
        placeholder={'Type a message...'}
        endAdornment={
          <InputAdornment position={'end'}>
            <TagFaces className={styles.icon} />
          </InputAdornment>
        }
      />
      <ThumbUp className={styles.icon} />
    </>
  );
};

export default ChatBar;
