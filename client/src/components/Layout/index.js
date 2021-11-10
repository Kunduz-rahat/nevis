import React from 'react';
import Header from "../Header";

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <div className='container mx-auto p-5 flex-col md:flex-row items-center'>
        {children}
      </div>
    </div>
  );
};

export default Layout;