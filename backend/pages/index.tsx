import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Lifoodie backend server services" />
        <meta name="author" content="Moinak Majumdar" />
        <title>Lifoodie - Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='min-w-full min-h-screen flex justify-center items-center bg-gradient-to-br to-[#BBD2C5] via-[#536976] from-[#292E49] p-4'>
        <div className="bg-transparent shadow-2xl shadow-black rounded-2xl p-11 flex justify-center items-center flex-col group">
          <h1 className='text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 tracking-wide lg:tracking-wider drop-shadow-2xl shadow-[#92b8c9] group group-hover:shadow-[#b2bec3]'>Welcome to Lifoodie Services</h1>
          <Link className='cursor-pointer mt-8 px-8 py-4 bg-white rounded-full shadow-2xl shadow-blue-500 hover:text-blue-500' href="https://lifoodie-dev.web.app/">GO TO HOMEPAGE</Link>
        </div>
      </section>
    </>
  )
}
