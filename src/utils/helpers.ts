import React from 'react';

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<Inner>,
  P
> &
  P;

export interface PrefixProps<As extends React.ElementType = React.ElementType> {
  className?: string;
  as?: As;
}

export type PrefixPropsWithChildren<
  As extends React.ElementType = React.ElementType
> = React.PropsWithChildren<PrefixProps<As>>;

export interface PrefixRefForwardingComponent<
  TInitial extends React.ElementType,
  P = unknown
> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, PrefixProps<As> & P>>,
  ): React.ReactElement | null;
  propTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export type SelectCallback = (
    eventKey: string | null,
    e: React.SyntheticEvent<unknown>,
  ) => void;
