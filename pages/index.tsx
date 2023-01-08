// import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../Components/Header';
import Feed from '../Components/Feed';

// const Home: NextPage = () => {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-2">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <h1>Instagram 2.0</h1>
//     </div>
//   )
// }

// export default Home

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
}