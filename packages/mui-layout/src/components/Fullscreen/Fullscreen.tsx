import React, { HTMLProps } from 'react';
import cx from 'clsx';
import FullscreenContext from '../../core/Context/FullscreenContext';

export default (styled: any) => {
  const Div = styled('div')`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  const Fullscreen = (props: HTMLProps<HTMLDivElement>) => {
    return (
      <FullscreenContext.Provider value={true}>
        <Div {...props} className={cx("Fullscreen", props.className)} />
      </FullscreenContext.Provider>
    );
  };

  return Fullscreen;
};
