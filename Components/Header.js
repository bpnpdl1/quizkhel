'use client'
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
   

    <nav className='bg-blue-400 text-white font-medium p-2 flex justify-between px-10 py-4'>
        <div>
            QuizKhel
        </div>
        <ul className='flex gap-6'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Play Quiz</Link></li>
            <li><Link href="/">Login</Link></li>
            <li><Link href="/">Profile</Link></li>
        </ul>

        </nav>
    </>
  );
}

export default Header;