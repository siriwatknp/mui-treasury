import React from 'react';
import { StylesProvider } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';
import { SocialLink, SocialLinkProps } from './SocialLink';

type DataProps = { data: SocialLinkProps[] };
type ChildrenProps = { children: React.ReactElement };
export type SocialProviderProps<T> = {
  useStyles?: typeof useDefaultStyles;
} & (DataProps | ChildrenProps);

export function SocialProvider<T>({
  useStyles = useDefaultStyles,
  ...props
}: SocialProviderProps<T>) {
  const styles = useStyles();
  if ('data' in props) {
    return (
      <StylesProvider styles={styles}>
        {props.data.map(item => (
          <SocialLink key={item.brand} {...item} />
        ))}
      </StylesProvider>
    );
  }
  return <StylesProvider styles={styles}>{props.children}</StylesProvider>;
}
