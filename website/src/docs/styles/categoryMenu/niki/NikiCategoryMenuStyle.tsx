import React from 'react';
import { Link } from 'gatsby';
import ChevronRight from '@material-ui/icons/ChevronRight';
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';
import { useNikiCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/niki';
import { FontProvider, Font } from 'website/src/components/Font';

export const NikiCategoryMenuStyle = React.memo(function NikiCategoryMenu() {
  return (
    <div>
      <FontProvider fonts={[{ font: 'Oswald' }]}>
        <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
          <CategoryTitle>
            <Font>Shop by sport</Font>
          </CategoryTitle>
          <CategoryItem as={Link} to={'/components/menu'}>
            All Sports Gear
          </CategoryItem>
          <CategoryItem>Running</CategoryItem>
          <CategoryItem>Football</CategoryItem>
          <CategoryItem>Basketball</CategoryItem>
          <CategoryItem>Tennis</CategoryItem>
          <CategoryItem>Golf</CategoryItem>
          <CategoryItem>Gym & Training</CategoryItem>
          <CategoryItem>Dance</CategoryItem>
          <CategoryItem>Jordan</CategoryItem>
          <CategoryItem>Skateboarding</CategoryItem>
        </CategoryProvider>
      </FontProvider>
    </div>
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
    title={'Niki'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <NikiCategoryMenuStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/categoryMenu/niki',
  colSpan: 4,
  createdAt: 'Sun Jul 19 2020',
  files: [
    { pkg: 'mui-styles', path: 'categoryMenu/niki/nikiCategoryMenu.styles.ts' },
  ],
};
// @ts-ignore
NikiCategoryMenuStyle.Showcase = AttachedShowcase;
// @ts-ignore
NikiCategoryMenuStyle.metadata = metadata;
// hide-end
