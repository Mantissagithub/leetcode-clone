import React from 'react';
interface Props {
  children?: React.ReactNode;
}

export interface LayoutProps extends Props {}

type Props {
  readonly children?: React.ReactNode;
}

const Layout = ({ children }) => (
  <>
    {children}
  </>
);

export default Layout;