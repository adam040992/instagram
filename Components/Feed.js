import React from 'react';
import Stories from '../Components/Stories';
import Posts from '../Components/Posts';
import MiniProfile from '../Components/MiniProfile';
import Suggestions from '../Components/Suggestions';

const Feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <section className='col-span-2'>
            {/* Stories */}
            <Stories />

            {/* Posts */}
            <Posts />
        </section>

        <section className='col-span-1'>
            {/* Mini Profile */}
            <MiniProfile />

            {/* Suggestions */}
            <Suggestions />
        </section>
    </main>
  )
}

export default Feed