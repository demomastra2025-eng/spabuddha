
import React from 'react';
import { Link } from 'react-router-dom';

const BrandHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
      </div>
      <nav className="flex items-center text-sm gap-4">
        <Link to="/" className="hover:underline">Главная</Link>
        <Link to="/create" className="hover:underline">Создать сертификат</Link>
      </nav>
    </header>
  );
};

export default BrandHeader;
