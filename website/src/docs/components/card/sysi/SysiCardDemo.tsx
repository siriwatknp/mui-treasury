import React from 'react';
import cx from 'clsx';
import { blueGrey } from '@material-ui/core/colors';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Column, Row, Item } from '@mui-treasury/components/flex';

const useButtonStyles = makeStyles(() => ({
  root: {
    fontFamily: "'Kanit', san-serif",
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    '&:hover': {
      backgroundColor: blueGrey[50],
    },
  },
  contained: {
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: blueGrey[50],
    color: blueGrey[700],
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
  containedPrimary: {
    transition:
      '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#ffbd80',
    color: blueGrey[900],
    '&:hover': {
      backgroundColor: '#FF9A3E',
    },
  },
}));

const useStyles = makeStyles(() => ({
  card: {
    border: '1px solid',
    borderColor: '#cfd8dc',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  titleFont: {
    fontFamily: "'Kanit', san-serif",
    color: '#37474f',
  },
  header: {
    margin: 0,
    textAlign: 'center',
    fontSize: '1.25rem',
    letterSpacing: '1px',
  },
  ribbon: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.87)',
    letterSpacing: 1,
  },
}));

export const SysiCardDemo = React.memo(function SysiCard() {
  const styles = useStyles();
  const btnStyles = useButtonStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Kanit', weights: [400, 700] }]}
        />
      </NoSsr>
      <Box maxWidth={343}>
        <Column p={0} gap={3} className={styles.card}>
          <Item>
            <h2 className={cx(styles.titleFont, styles.header)}>
              ระดับใกล้โปร • Turn-Pro
            </h2>
          </Item>
          <Item
            py={1}
            bgcolor={'rgb(255, 189, 128)'}
            className={cx(styles.titleFont, styles.ribbon)}
          >
            เปิดรับสมัครแล้ว ถึง 30 พ.ค. 63
          </Item>
          <Item>
            <Box px={1} mt={1} className={cx(styles.titleFont)}>
              สําหรับกลุ่มที่ต้องการจริงจังกับการแก้ปัญหาในประเด็นที่ทําและต้องการการสนับสนุน
              เพื่อสร้างองค์กรของตนเองสําหรับทํางานต่อในระยะยาว
            </Box>
          </Item>
          <Row wrap gap={1} px={2} pb={2}>
            <Item grow>
              <Button
                classes={btnStyles}
                variant={'contained'}
                color={'primary'}
                fullWidth
              >
                โหลดใบสมัคร
              </Button>
            </Item>
            <Item grow>
              <Button classes={btnStyles} variant={'contained'} fullWidth>
                อ่านรายละเอียด
              </Button>
            </Item>
          </Row>
        </Column>
      </Box>
    </>
  );
});
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Sysi'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <SysiCardDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/card/sysi',
  colSpan: 5,
  rowSpan: 2,
  createdAt: 'Thu Jun 11 2020',
  frameProps: { pt: 6, pb: 3 },
  files: [],
};
// @ts-ignore
SysiCardDemo.Showcase = AttachedShowcase;
// @ts-ignore
SysiCardDemo.metadata = metadata;
// hide-end
