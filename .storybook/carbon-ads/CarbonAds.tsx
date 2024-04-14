import React from 'react';
import { createPortal } from 'react-dom';
import cx from 'clsx';
import Box, { BoxProps } from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import useCarbonAds from './useCarbonAds';
import './CarbonAds.css';

const CarbonAds = ({ vertical, ...props }: BoxProps & { vertical?: boolean}) => {
  const { id, error } = useCarbonAds();
  if (error) return null;
  return createPortal(
    <Box
      className={cx(vertical && 'CarbonVertical')}
      sx={{ position: 'fixed', minWidth: vertical ? 'initial' : 300, zIndex: 1300, top: '3.5rem', right: '1rem' }}
      {...props}
    >
      <div id={id}>
        <div id={'carbonads-placeholder'}>
          <div className={'placeholder-wrap'}>
            <div className={'placeholder-img'}>
              <Skeleton
                animation={'pulse'}
                variant="rectangular"
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
    </Box>,
    document.body
  );
};

export default CarbonAds;
