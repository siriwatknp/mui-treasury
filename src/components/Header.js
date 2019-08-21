import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import GitHubButton from 'react-github-btn';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { HorzMenuList } from '@mui-treasury/components';
import { useContrastInputBase } from '@mui-treasury/styles';

const menus = [
  { key: '/how-to', label: 'How to' },
  { key: '/components', label: 'Components' },
  { key: '/form', label: 'Form' },
  { key: '/layout', label: 'Layout' },
  { key: '/styling', label: 'Styling' },
  { key: '/theme', label: 'Theme' },
];

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { logo } = data;
  const inputBaseStyles = useContrastInputBase();
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      alignSelf={'stretch'}
      width={'100%'}
    >
      <Box mr={4}>
        <Image fixed={logo.childImageSharp.fixed} />
      </Box>
      <HorzMenuList
        selectedKey={key => location.pathname.includes(key)}
        menus={menus}
      />
      <Box ml={'auto'} mr={2}>
        <InputBase classes={inputBaseStyles} placeholder={'search...'} />
      </Box>
      <Box lineHeight={0}>
        <GitHubButton
          href="https://github.com/siriwatknp/mui-treasury"
          data-size="large"
          data-show-count="true"
          aria-label="Star siriwatknp/mui-treasury on GitHub"
        >
          Star
        </GitHubButton>
      </Box>
    </Box>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
