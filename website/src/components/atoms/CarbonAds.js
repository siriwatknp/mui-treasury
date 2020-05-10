import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import useCarbonAds from 'logics/useCarbonAds';
import './CarbonAds.css';

const CarbonAds = ({ vertical, ...props }) => {
  const { id, error } = useCarbonAds();
  if (error) return null;
  return (
    <Box
      position={'relative'}
      minWidth={vertical ? '' : 300}
      align={'center'}
      className={cx(vertical && 'CarbonVertical')}
      {...props}
    >
      <div id={id}>
        <div id={'carbonads-placeholder'}>
          <div className={'placeholder-wrap'}>
            <div className={'placeholder-img'}>
              <Skeleton
                animation={'pulse'}
                variant="rect"
                width={130}
                height={100}
              />
            </div>
            <div className={'placeholder-text'}>
              <Skeleton animation={'pulse'} />
              <Skeleton animation={'pulse'} width={'72%'} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CarbonAds;
