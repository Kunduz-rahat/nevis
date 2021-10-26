import React from 'react';
import Header from "../Header";

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
   <div className='container sm mx-auto my-6 p-5'>
     {children}
   </div>
    </div>
  );
};

export default Layout;