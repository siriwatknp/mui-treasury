import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import AmiMiniHeader from './AmiMiniHeader';
import AmiLargeHeader from './AmiLargeHeader';

const AmiHeader = () => (
  <>
    <Hidden smUp>
      <AmiMiniHeader
        menus={[
          {
            label: 'NEW RELEASES',
            children: [
              {
                label: 'Shoes',
                children: [
                  {
                    label: 'Lifestyle',
                  },
                  {
                    label: 'Running',
                  },
                  {
                    label: 'Training',
                  },
                  {
                    label: 'Basketball',
                  },
                  {
                    label: 'Footer',
                  },
                  {
                    label: 'Soccer',
                  },
                  {
                    label: 'Tennis',
                  },
                ],
              },
              {
                label: 'Clothing',
                children: [
                  {
                    label: 'Shorts',
                  },
                  {
                    label: 'Polos',
                  },
                  {
                    label: 'Jacket & Sweatshirts',
                  },
                ],
              },
              {
                label: 'Sale',
                children: [
                  {
                    label: 'Shoes',
                  },
                  {
                    label: 'Clothing',
                  },
                ],
              },
            ],
          },
          { label: 'MEN', icon: 'far fa-male' },
          { label: 'WOMEN', icon: 'far fa-female' },
          { label: 'KIDS', icon: 'far fa-child' },
        ]}
      />
    </Hidden>
    <Hidden only={'xs'}>
      <AmiLargeHeader />
    </Hidden>
  </>
);

AmiHeader.propTypes = {};
AmiHeader.defaultProps = {};

export default AmiHeader;
