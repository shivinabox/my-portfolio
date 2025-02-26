import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
      <Head>
        <title>Shivam Gupta | Portfolio</title>
        <meta name="description" content="Investment Analyst & Financial Researcher" />
      </Head>
      
      <header className="w-full flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Shivam Gupta</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
        </button>
      </header>
      
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
          <h1 className="text-4xl font-bold">Shivam Gupta</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Investment Analyst & Financial Researcher</p>
          
          <nav className="mt-4 flex gap-4">
            <Link href="/about" className="text-blue-600 hover:underline dark:text-blue-400">About</Link>
            <Link href="/experience" className="text-blue-600 hover:underline dark:text-blue-400">Experience</Link>
            <Link href="/projects" className="text-blue-600 hover:underline dark:text-blue-400">Projects</Link>
            <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">Contact</Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
