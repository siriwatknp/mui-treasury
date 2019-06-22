import React from 'react';
import createSimpleShowcase from 'containers/createSimpleShowcase';
import {
  EngagementCard01,
  PostCard01,
  NewsCard01,
  NewsCard02,
  ReviewCard01,
  ProjectCard01,
  PostCard02,
  RewardCard01,
  ElevatedCardHeader01,
} from 'docs/components/cards';

const components = [
  {
    component: EngagementCard01,
    render: () => <EngagementCard01 />,
  },
  {
    component: PostCard01,
    render: () => <PostCard01 />,
  },
  {
    component: NewsCard01,
    render: () => <NewsCard01 />,
  },
  {
    component: NewsCard02,
    render: () => <NewsCard02 />,
  },
  {
    component: ReviewCard01,
    render: () => <ReviewCard01 />,
  },
  {
    component: ProjectCard01,
    render: () => <ProjectCard01 />,
  },
  {
    component: PostCard02,
    render: () => <PostCard02 />,
    gridItemProps: {
      sm: 10,
      lg: 6,
    },
  },
  {
    component: RewardCard01,
    render: () => <RewardCard01 />,
    gridItemProps: {
      sm: 10,
      lg: 6,
    },
  },
  {
    component: ElevatedCardHeader01,
    render: () => <ElevatedCardHeader01 />,
    gridItemProps: {
      sm: 12,
      md: 10,
      lg: 8,
    },
  },
];

const CardPage = createSimpleShowcase(components);

export default CardPage;
