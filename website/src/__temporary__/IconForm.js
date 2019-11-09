import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import Icon from 'components/extensions/Icon';
import Typography from 'components/extensions/Typography';
import CodeHighlight from 'components/molecules/Prism';
import Box from 'components/atoms/Box';
import Row from './Row';

const svgCode = `
  // yarn add @material-ui/icons 
  import MenuIcon from '@material-ui/icons';
  
  // render
  <MenuIcon /> 
`;
const webFontCode = `
  // add this to index.html
  // <link
  //   rel="stylesheet"
  //   href="https://fonts.googleapis.com/icon?family=Material+Icons"
  // />
  
  // then in .js
  import Icon from '@material-ui/core/Icon';
  
  // render
  <Icon>menu</Icon> 
`;

const icons = {
  // chevron: 'chevron_right',
  // arrow: 'arrow_forward',
  // triangle: 'arrow_right',
  // ios: 'arrow_forward_ios',
  chevron: <ChevronRight />,
  arrow: <ArrowForward />,
  triangle: <ArrowRight />,
  ios: <ArrowForwardIos />,
};

const IconForm = ({ icon, setIcon }) => (
  <>
    <Row>
      <h1>Finally</h1>
      <Typography variant={'h5'} weight={'bold'}>
        Menu & Collapsed Icon
      </Typography>
      <Typography gutterBottom>
        Icon will be displayed in Header and Nav (collapsible enabled), mostly
        you will see the menu appears at the left-side of Header and at the
        bottom of Nav.
      </Typography>
    </Row>
    <Row
      labelLeft={'Library'}
      leftItemProps={{
        md: 6,
      }}
      left={
        <CodeHighlight code={icon.type === 'svg' ? svgCode : webFontCode} />
      }
      rightItemProps={{
        md: 4,
      }}
      right={
        <FormControl fullWidth margin={'normal'} component="fieldset">
          <FormLabel component="legend">
            <Typography gutterBottom>Type</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="icon type"
            name="icon type"
            value={icon.type}
            onChange={e =>
              setIcon({
                ...icon,
                type: e.target.value,
              })
            }
          >
            <FormControlLabel value="svg" control={<Radio />} label="SVG" />
            <FormControlLabel
              value="webfont"
              control={<Radio />}
              label="Web font"
            />
          </RadioGroup>
        </FormControl>
      }
    />
    <Box pb={{ xs: 0, sm: 3 }} />
    <Row
      labelLeft={'Style'}
      leftItemProps={{
        md: 6,
        container: true,
        direction: 'column',
      }}
      left={
        <>
          <Box
            {...Box.allCenter}
            p={2}
            flexGrow={1}
            bgcolor={'grey.100'}
            borderRadius={4}
          >
            <Icon size={'large'}>{icons[icon.style]}</Icon>
          </Box>
        </>
      }
      rightItemProps={{
        md: 4,
      }}
      right={
        <FormControl fullWidth margin={'normal'} component="fieldset">
          <FormLabel component="legend">
            <Typography gutterBottom>Style</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="icon style"
            name="icon style"
            value={icon.style}
            onChange={e =>
              setIcon({
                ...icon,
                style: e.target.value,
              })
            }
          >
            <FormControlLabel
              value="chevron"
              control={<Radio />}
              label="Chevron"
            />
            <FormControlLabel value="arrow" control={<Radio />} label="Arrow" />
            <FormControlLabel
              value="triangle"
              control={<Radio />}
              label="Triangle"
            />
            <FormControlLabel value="ios" control={<Radio />} label="iOS" />
          </RadioGroup>
        </FormControl>
      }
    />
  </>
);

IconForm.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  setIcon: PropTypes.func.isRequired,
};
IconForm.defaultProps = {};

export default IconForm;
