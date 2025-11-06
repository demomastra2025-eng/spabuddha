import React from 'react';
import BrandHeader from './BrandHeader';
import { Footer } from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <BrandHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
