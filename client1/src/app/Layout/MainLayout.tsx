// src/layout/MainLayout.tsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import process from 'process'; // Import process module

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Add Sidebar conditionally based on process.env.WITH_SIDEBAR */}
      {process.env.WITH_SIDEBAR === 'true' || !process.env.WITH_SIDEBAR && <Sidebar />}
      <main className="grow bg-gray-100 px-8 py-6 sm:px-12 sm:py-10 md:px-16 lg:px-24 xl:px-32 mt-12 mb-12 rounded-lg shadow-xl mx-auto max-w-7xl w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;