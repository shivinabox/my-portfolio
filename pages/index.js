import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shivam Gupta | Portfolio</title>
        <meta name="description" content="Investment Analyst & Financial Researcher" />
      </Head>
      
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-900">Shivam Gupta</h1>
          <p className="text-gray-600 mt-2">Investment Analyst & Financial Researcher</p>
          
          <nav className="mt-4 flex gap-4">
            <Link href="/about" className="text-blue-600 hover:underline">About</Link>
            <Link href="/experience" className="text-blue-600 hover:underline">Experience</Link>
            <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
            <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
