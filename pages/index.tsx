import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
     <div className='bg-green-500'>
      <p>pagina de Index</p>
      <link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
      </link>
    </div>
  );
};

export default Home;
