import Image from 'next/image';
import React from 'react';
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline';
import { HomeIcon } from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';

const Header = () => {
    const {data: session} = useSession();

    console.log(session);

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            {/* Left */}
            <div className='relative hidden md:inline-grid w-24 cursor-pointer'>
                <Image 
                    src="https://links.papareact.com/ocw" 
                    layout='fill' 
                    objectFit='contain'
                />
            </div>

            <div className='relative md:hidden w-10 flex-shrink-0 cursor-pointer'>
                <Image 
                    src="https://links.papareact.com/jjm" 
                    layout='fill' 
                    objectFit='contain'
                />
            </div>

            {/* Middle - Search */}
            <div className='max-w-xs'>
                <div className='relative mt-1 p-3 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500' />
                    </div>
                    <input 
                        className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' 
                        type='text' 
                        placeholder='Search' 
                    />
                </div>
            </div>

            {/* Right */}
            <div className='flex items-center justify-end space-x-4'>
                <MenuIcon className='h-6 md:hidden cursor-pointer' />
                <HomeIcon className='navBtn' />
                <div className='relative navBtn'>
                    <PaperAirplaneIcon className='navBtn' />
                    <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                </div>
                <PlusCircleIcon className='navBtn' />
                <UserGroupIcon className='navBtn' />
                <HeartIcon className='navBtn' />

                <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' 
                    alt='profile pic' 
                    className='h-10 rounded-full cursor-pointer' 
                />
            </div>
        </div>
    </div>
  )
}

export default Header