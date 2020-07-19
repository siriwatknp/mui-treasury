import React from 'react';
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';

export const CategoryMenuDemo = React.memo(function CategoryMenu() {
  return (
    <div>
      <CategoryProvider>
        <CategoryTitle>Skiing Category</CategoryTitle>
        <CategoryItem>Ski Products</CategoryItem>
        <CategoryItem>Performance Monitors</CategoryItem>
        <CategoryItem>Training</CategoryItem>
        <CategoryItem>Motivation</CategoryItem>
        <CategoryItem>Cross skiing</CategoryItem>
        <CategoryItem>More</CategoryItem>
      </CategoryProvider>
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
    title={'Category'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <CategoryMenuDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/menu/category',
  colSpan: 4,
  createdAt: 'Sun Jul 19 2020',
  files: [],
  stylesUrl: '/styles/category-menu/'
};
// @ts-ignore
CategoryMenuDemo.Showcase = AttachedShowcase;
// @ts-ignore
CategoryMenuDemo.metadata = metadata;
// hide-end
